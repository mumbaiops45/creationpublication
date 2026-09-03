import Link from 'next/link'
import Reveal from './Reveal'
import Section from './Section'
import MediaArt from './MediaArt'

export default function PageHeader({ eyebrow, title, intro, breadcrumbs = [], art }) {
  return (
    <Section className="relative overflow-hidden bg-[#F8FEFF] pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,184,217,0.16),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.10),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(20,184,166,0.08),transparent_35%)]"
        aria-hidden="true"
      />

      <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]"
        aria-hidden="true" />
      <div className="absolute -bottom-40 left-1/2 h-[28rem] w-[45rem] -translate-x-1/2 rounded-full bg-teal-300/10 blur-[120px]"
        aria-hidden="true" />

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        aria-hidden="true" />
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="border-hairline bg-accent-soft inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              <span
                className="size-1.5 rounded-full bg-current"
                aria-hidden="true"
              />
              {eyebrow}
            </span>
          )}
          <h1 className="font-display mt-5 text-4xl leading-[1.1] font-bold tracking-tight text-balance text-strong sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
