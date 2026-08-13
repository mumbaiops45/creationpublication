'use server'

import { getService } from '@/content/services'
import { site } from '@/content/site'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const PHONE_RE = /^(\+?91[\s-]?)?[0]?[6-9]\d{9}$/

function clean(value, max = 2000) {
  return String(value ?? '').trim().slice(0, max)
}


export async function submitEnquiry(prevState, formData) {
  if (clean(formData.get('company_website'))) {
    return { ok: true, message: 'Thank you. We will be in touch shortly.' }
  }

  const serviceSlug = clean(formData.get('serviceSlug'), 100)
  const service = serviceSlug ? getService(serviceSlug) : null

  const name = clean(formData.get('name'), 120)
  const email = clean(formData.get('email'), 160)
  const phone = clean(formData.get('phone'), 24)
  const message = clean(formData.get('message'), 4000)

  const errors = {}
  if (name.length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
  if (!PHONE_RE.test(phone.replace(/[\s-]/g, ''))) {
    errors.phone = 'Please enter a valid 10-digit mobile number.'
  }

  
  const extras = {}
  for (const field of service?.fields ?? []) {
    const value = clean(formData.get(field.name), 500)
    if (field.required && !value) {
      errors[field.name] = `${field.label} is required.`
    }
    if (value) extras[field.label] = value
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, message: 'Please correct the highlighted fields.' }
  }

  const enquiry = {
    subject: service
      ? `New enquiry — ${service.title}`
      : 'New general enquiry — Creation Publicity',
    name,
    email,
    phone,
    service: service?.title ?? 'General enquiry',
    extras,
    message,
    receivedAt: new Date().toISOString(),
  }

  try {
    await deliver(enquiry)
  } catch (error) {
    console.error('[enquiry] delivery failed', error)
    return {
      ok: false,
      errors: {},
      message: `Something went wrong sending your enquiry. Please call us on ${site.phone}.`,
    }
  }

  return {
    ok: true,
    message: 'Thank you — your enquiry has been received. Our team will contact you within one business day.',
  }
}


async function deliver(enquiry) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.ENQUIRY_TO_EMAIL || site.email
  const from = process.env.ENQUIRY_FROM_EMAIL || 'Creation Publicity <onboarding@resend.dev>'

  if (!apiKey) {
    console.warn(
      '[enquiry] RESEND_API_KEY is not set — logging instead of emailing:\n',
      JSON.stringify(enquiry, null, 2),
    )
    return
  }

  const rows = [
    ['Name', enquiry.name],
    ['Email', enquiry.email],
    ['Phone', enquiry.phone],
    ['Service', enquiry.service],
    ...Object.entries(enquiry.extras),
    ['Message', enquiry.message || '—'],
    ['Received', enquiry.receivedAt],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;background:#f1f5f9">${escapeHtml(label)}</td>` +
        `<td style="padding:6px 12px">${escapeHtml(value)}</td></tr>`,
    )
    .join('')

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: enquiry.email,
      subject: enquiry.subject,
      html: `<h2 style="font-family:sans-serif">${escapeHtml(enquiry.subject)}</h2>
             <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows}</table>`,
    }),
  })

  if (!response.ok) {
    throw new Error(`Resend responded ${response.status}: ${await response.text()}`)
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
