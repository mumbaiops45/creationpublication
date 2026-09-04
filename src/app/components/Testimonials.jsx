import { testimonials } from '@/content/clients'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <Reveal stagger={0.12} className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-hairline bg-(--hairline) sm:grid-cols-2">
      {testimonials.map((item) => (
        <figure key={item.author} className="flex flex-col justify-between bg-(--surface-raised) p-8 sm:p-10">
          <blockquote className="font-display text-lg leading-snug text-pretty text-strong sm:text-xl">
            <span className="text-accent">“</span>
            {item.quote}
            <span className="text-accent">”</span>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3.5 border-t border-hairline pt-5">
            <span className="font-label flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent">
              {item.author
                .split(' ')
                .map((word) => word[0])
                .join('')
                .slice(0, 2)}
            </span>
            <span>
              <span className="block text-sm font-semibold text-strong">{item.author}</span>
              <span className="block text-xs text-muted">
                {item.role} · {item.company}
              </span>
            </span>
          </figcaption>
        </figure>
      ))}
    </Reveal>
  )
}
