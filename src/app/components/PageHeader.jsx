import Reveal from './Reveal'
import Section from './Section'
import SplitLines from './SplitLines'

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <Section
      tone="light"
      className="surface relative overflow-hidden bg-[#F8FEFF] pt-40 pb-16 sm:pt-48 sm:pb-24"
    >
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] size-[34rem] rounded-full bg-firozi-600/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="max-w-4xl">
          {eyebrow && (
            <Reveal>
              <span className="eyebrow">
                <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
                {eyebrow}
              </span>
            </Reveal>
          )}

          <SplitLines
            as="h1"
            className="mt-6 font-display text-display font-medium tracking-tight text-balance text-strong"
          >
            {title}
          </SplitLines>

          {intro && (
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-ink-900/10"
        aria-hidden="true"
      />
    </Section>
  )
}
