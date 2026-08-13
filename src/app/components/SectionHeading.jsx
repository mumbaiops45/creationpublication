import Reveal from './Reveal'


export default function SectionHeading({ eyebrow, title, intro, align = 'center', className = '' }) {
  const centered = align === 'center'

  return (
    <Reveal className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <span className="border-hairline bg-accent-soft inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
          <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display mt-5 text-3xl leading-[1.15] font-bold text-balance text-strong sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-pretty text-muted">{intro}</p>}
    </Reveal>
  )
}
