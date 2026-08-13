import Link from 'next/link'
import { site, whatsappHref } from '@/content/site'
import { services } from '@/content/services'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import EnquiryForm from '../components/EnquiryForm'
import Reveal from '../components/Reveal'
import { InstagramIcon, LinkedInIcon, PhoneIcon, WhatsAppIcon } from '../components/Icons'

export const metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${site.name} — call ${site.phone}, message us on WhatsApp, or send an enquiry and we will respond within one business day.`,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Tell us what you want to advertise"
        intro="Send the brief below, message us on WhatsApp, or just call. Every enquiry is answered within one business day."
        breadcrumbs={[{ name: 'Contact Us' }]}
        art="digital"
      />

      <Section tone="light" className="py-20 sm:py-24">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 lg:col-span-4">
            <Reveal className="card rounded-2xl p-7">
              <h2 className="font-display text-lg font-semibold text-strong">Reach us directly</h2>
              <div className="mt-6 space-y-5">
                <a href={`tel:${site.phoneRaw}`} className="group flex items-start gap-4">
                  <span className="bg-accent-soft border-hairline flex size-11 shrink-0 items-center justify-center rounded-xl border text-accent transition group-hover:border-firozi-500/50">
                    <PhoneIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-wide text-muted uppercase">Phone</span>
                    <span className="block text-sm font-semibold text-strong transition group-hover:text-accent">
                      {site.phone}
                    </span>
                  </span>
                </a>
                <a href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 text-[#1da851] transition group-hover:border-[#25D366]/60">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-wide text-muted uppercase">WhatsApp</span>
                    <span className="block text-sm font-semibold text-strong transition group-hover:text-accent">
                      Start a chat
                    </span>
                  </span>
                </a>

                <a href={`mailto:${site.email}`} className="group flex items-start gap-4">
                  <span className="bg-accent-soft border-hairline flex size-11 shrink-0 items-center justify-center rounded-xl border text-accent transition group-hover:border-firozi-500/50">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                      aria-hidden="true"
                    >
                      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs tracking-wide text-muted uppercase">Email</span>
                    <span className="block text-sm font-semibold break-all text-strong transition group-hover:text-accent">
                      {site.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="bg-accent-soft border-hairline flex size-11 shrink-0 items-center justify-center rounded-xl border text-accent">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.8" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs tracking-wide text-muted uppercase">Office</span>
                    <address className="mt-0.5 text-sm leading-relaxed text-fg not-italic">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                      <br />
                      {site.address.city} {site.address.pincode}
                    </address>
                  </span>
                </div>
              </div>

              <div className="border-hairline mt-7 flex items-center gap-3 border-t pt-6">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Creation Publicity on Instagram"
                  className="border-hairline flex size-10 items-center justify-center rounded-lg border text-muted transition hover:border-firozi-500/50 hover:text-accent"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Creation Publicity on LinkedIn"
                  className="border-hairline flex size-10 items-center justify-center rounded-lg border text-muted transition hover:border-firozi-500/50 hover:text-accent"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </Reveal>

          </div>
          <div className="lg:col-span-8">
            <EnquiryForm
              heading="Send a general enquiry"
              blurb="Not sure which medium you need? Fill this in and we will come back with options and indicative costs."
            />
          </div>
        </div>
      </Section>

      <Section tone="tint" className="border-hairline border-t py-16">
        <div className="container-x">
          <Reveal className="card overflow-hidden rounded-2xl">
            <iframe
              title={`Map showing the location of ${site.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${site.address.line2}, ${site.address.city} ${site.address.pincode}`,
              )}&output=embed`}
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </Section>
      
    </>
  )
}
