'use client'

import { site, whatsappHref } from '@/content/site'
import { WhatsAppIcon, PhoneIcon } from './Icons'


export default function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <a
        href={`tel:${site.phoneRaw}`}
        aria-label={`Call ${site.name} on ${site.phone}`}
        className="group relative flex size-12 items-center justify-center rounded-full bg-ink-900 text-paper-50 shadow-lg shadow-ink-900/20 transition hover:scale-105 hover:bg-ink-800"
      >
        <span className="absolute inset-0 rounded-full bg-ink-900/30 animate-pulse-ring" aria-hidden="true" />
        <PhoneIcon className="relative size-5" />
        <span className="pointer-events-none absolute right-full mr-3 hidden rounded-md bg-ink-900 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-paper-50 opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
          {site.phone}
        </span>
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-105 hover:bg-[#20bd5a]"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-pulse-ring" aria-hidden="true" />
        <WhatsAppIcon className="relative size-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden rounded-md bg-ink-900 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-paper-50 opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  )
}
