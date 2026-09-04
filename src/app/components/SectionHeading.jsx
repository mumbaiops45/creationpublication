import Reveal from './Reveal'
import SplitLines from './SplitLines'

export default function SectionHeading({ eyebrow, title, intro, align = 'center', className = '' }) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <SplitLines
        as="h2"
        className="mt-5 font-display text-h2 font-medium text-balance text-strong"
      >
        {title}
      </SplitLines>

      {intro && (
        <Reveal delay={0.12}>
          <p className="mt-5 text-base leading-relaxed text-pretty text-muted">{intro}</p>
        </Reveal>
      )}
    </div>
  )
}
