import Link from 'next/link'
import { site, whatsappHref } from '@/content/site'
import { ArrowIcon, WhatsAppIcon } from './Icons'
import Reveal from './Reveal'
import Section from './Section'


export default function CTASection({
  title = 'Ready to put your brand in front of the right audience?',
  body = 'Tell us your city, your budget and your timeline. We will come back with a media plan and costing within one business day.',
}) {
  return (
    <Section tone="light" className="py-24">
      <div className="container-x " >
        <Reveal  className="card glow relative overflow-hidden rounded-3xl px-7 py-14 text-center sm:px-14 sm:py-18  bg-slate-800">
          <div
            className="pointer-events-none absolute -top-28 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-firozi-500/15 blur-[100px]"
            aria-hidden="true"
          />
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

          <div className="relative">
            <h2 className="font-display mx-auto max-w-2xl text-3xl leading-tight font-bold text-balance text-white  sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-pretty text-white sm:text-base">
              {body}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-firozi-500 px-8 py-4 text-sm font-bold text-ink-900 shadow-xl shadow-firozi-500/25 transition hover:bg-firozi-400 sm:w-auto"
              >
                Enquire Now
                <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border-hairline inline-flex w-full items-center bg-firozi-500 justify-center gap-2.5 rounded-xl border px-8 py-4 text-sm font-semibold text-strong transition hover:border-firozi-400 hover:bg-firozi-400 sm:w-auto"
              >
                <WhatsAppIcon className="size-5 text-black" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
