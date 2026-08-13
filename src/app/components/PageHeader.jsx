import Link from 'next/link'
import Reveal from './Reveal'
import Section from './Section'
import MediaArt from './MediaArt'

export default function PageHeader({ eyebrow, title, intro, breadcrumbs = [], art }) {
  return (
    <Section tone="dark" className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      {art && (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block" aria-hidden="true">
          <MediaArt name={art} className="size-full object-cover opacity-45" />
          <span className="absolute inset-0 bg-linear-to-r from-ink-900 via-ink-900/70 to-transparent" />
        </div>
      )}

      <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="absolute -top-52 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-firozi-500/12 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-firozi-400/30 to-transparent"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="border-hairline bg-accent-soft inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
              {eyebrow}
            </span>
          )}
          <h1 className="font-display mt-5 text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-strong sm:text-5xl lg:text-6xl">
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
