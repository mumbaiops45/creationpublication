import { testimonials } from '@/content/clients'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <Reveal stagger={0.1} className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {testimonials.map((item) => (
        <figure key={item.author} className="card relative rounded-2xl p-8">
          <span
            className="font-display absolute top-4 right-7 text-6xl leading-none text-accent opacity-25"
            aria-hidden="true"
          >
            &rdquo;
          </span>
          <blockquote className="relative text-sm leading-relaxed text-pretty text-fg">
            {item.quote}
          </blockquote>
          <figcaption className="border-hairline mt-6 flex items-center gap-3.5 border-t pt-5">
            <span className="font-display bg-accent-soft flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-accent">
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
