'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitEnquiry } from '@/lib/actions'

const initialState = { ok: false, errors: {}, message: '' }


const inputClass =
  'w-full rounded-lg border bg-[var(--surface-sunken)] border-[var(--hairline)] px-4 py-3 text-sm ' +
  'text-[var(--fg)] placeholder:text-[var(--fg-muted)] outline-none transition ' +
  'focus:border-firozi-500 focus:ring-2 focus:ring-firozi-500/25'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-firozi-500 px-6 py-3.5 text-sm font-semibold text-ink-900 shadow-lg shadow-firozi-500/20 transition hover:bg-firozi-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? (
        <>
          <span className="size-4 animate-spin rounded-full border-2 border-ink-900/30 border-t-ink-900" />
          Sending…
        </>
      ) : (
        <>
          Send Enquiry
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </>
      )}
    </button>
  )
}

function Field({ field, error }) {
  const id = `field-${field.name}`
  const common = {
    id,
    name: field.name,
    required: field.required,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': error ? `${id}-error` : undefined,
    className: inputClass,
  }

  return (
    <div className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
      <label htmlFor={id} className="mb-2 block text-xs font-medium tracking-wide text-muted uppercase">
        {field.label}
        {field.required && <span className="ml-1 text-accent">*</span>}
      </label>

      {field.type === 'select' ? (
        <select {...common} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === 'textarea' ? (
        <textarea {...common} rows={4} placeholder={field.placeholder} />
      ) : (
        <input {...common} type={field.type} placeholder={field.placeholder} />
      )}

      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-rose-500">
          {error}
        </p>
      )}
    </div>
  )
}

export default function EnquiryForm({ service = null, heading, blurb }) {
  const [state, formAction] = useActionState(submitEnquiry, initialState)

  const baseFields = [
    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Full name', required: true },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@company.com', required: true },
    { name: 'phone', label: 'Mobile Number', type: 'tel', placeholder: '10-digit mobile', required: true },
    { name: 'companyName', label: 'Company', type: 'text', placeholder: 'Company name' },
  ]

  const messageField = {
    name: 'message',
    label: 'Tell Us More',
    type: 'textarea',
    placeholder: 'Share any details that will help us prepare an accurate proposal…',
  }

  if (state.ok) {
    return (
      <div className="card rounded-2xl p-8 text-center sm:p-12">
        <div className="bg-accent-soft mx-auto mb-5 flex size-14 items-center justify-center rounded-full text-accent">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-7">
            <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-semibold text-strong">Enquiry received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">{state.message}</p>
      </div>
    )
  }

  return (
    <div className="card rounded-2xl p-6 sm:p-9">
      {heading && <h3 className="font-display text-2xl font-semibold text-strong sm:text-3xl">{heading}</h3>}
      {blurb && <p className="mt-2.5 text-sm leading-relaxed text-muted">{blurb}</p>}

      <form action={formAction} className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {service && <input type="hidden" name="serviceSlug" value={service.slug} />}
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="pointer-events-none absolute -left-[9999px] size-0 opacity-0"
        />

        {baseFields.map((field) => (
          <Field key={field.name} field={field} error={state.errors?.[field.name]} />
        ))}

        {service?.fields?.map((field) => (
          <Field key={field.name} field={field} error={state.errors?.[field.name]} />
        ))}

        <Field field={messageField} error={state.errors?.message} />

        <div className="sm:col-span-2">
          {state.message && !state.ok && (
            <p
              role="alert"
              className="mb-4 rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-600"
            >
              {state.message}
            </p>
          )}
          <SubmitButton />
          <p className="mt-3 text-xs text-muted">
            We reply within one business day. Your details are never shared with third parties.
          </p>
        </div>
      </form>
    </div>
  )
}
