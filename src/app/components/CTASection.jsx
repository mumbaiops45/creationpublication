import Link from 'next/link'
import { whatsappHref } from '@/content/site'
import { ArrowIcon, WhatsAppIcon } from './Icons'
import Reveal from './Reveal'
import SplitLines from './SplitLines'
import Section from './Section'
import Magnetic from './Magnetic'

export default function CTASection({
  title = 'Ready to put your brand in front of the right audience?',
  body = 'Tell us your city, your budget and your timeline. We will come back with a media plan and costing within one business day.',
}) {
  return (
    <Section tone="dark" className="surface relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-brass-400/8 blur-[130px]"
        aria-hidden="true"
      />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="container-x relative text-center">
        <SplitLines
          as="h2"
          className="mx-auto max-w-3xl font-display text-h2 leading-tight font-medium text-balance text-strong"
        >
          {title}
        </SplitLines>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-pretty text-muted sm:text-base">
            {body}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Magnetic className="w-full sm:w-auto">
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-brass-400 px-8 py-4 text-sm font-semibold text-ink-900 transition hover:bg-brass-300 sm:w-auto"
            >
              Enquire Now
              <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-(--hairline-strong) px-8 py-4 text-sm font-semibold text-strong transition hover:bg-paper-50/5 sm:w-auto"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp Us
          </a>
        </Reveal>
      </div>
    </Section>
  )
}
