'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ServiceIcon from './ServiceIcon'
import { ArrowIcon } from './Icons'

export default function ServiceCa({ service, index }) {
  const root = useRef(null)
  const frame = useRef(null)
  const img = useRef(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)
    const delay = (index % 3) * 0.08

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      })
      tl.from(frame.current, {
        clipPath: 'inset(100% 0% 0% 0%)',
        duration: 0.95,
        ease: 'power4.inOut',
      })
        .from(img.current, { scale: 1.3, duration: 1.2, ease: 'power3.out' }, 0)
        .from(
          el.querySelectorAll('[data-card-fade]'),
          { opacity: 0, y: 18, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
          '-=0.5',
        )
    }, el)

    return () => ctx.revert()
  }, [index])

  return (
    <Link
      ref={root}
      href={`/services/${service.slug}`}
      className="group flex flex-col"
    >
      <div
        ref={frame}
        className="figure-clip aspect-[4/3] w-full rounded-lg"
        style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      >
        <img
          ref={img}
          src={service.image}
          alt={`${service.title} advertising by Creation Publicity`}
          loading="lazy"
          decoding="async"
          className="h-full w-full scale-[1.05] object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.1]"
        />
        <span
          className="font-display absolute top-4 right-5 text-sm font-medium text-paper-50/90 mix-blend-difference"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="mt-5 flex grow flex-col">
        <div data-card-fade className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <ServiceIcon name={service.icon} className="size-5" />
          </span>
          <h3 className="font-display text-h3 font-medium text-strong transition group-hover:text-accent">
            {service.title}
          </h3>
        </div>

        <p data-card-fade className="mt-3 grow text-sm leading-relaxed text-muted">
          {service.short}
        </p>

        <span
          data-card-fade
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-strong"
        >
          <span className="border-b border-ink-900/20 pb-0.5 transition-colors group-hover:border-firozi-700">
            View details &amp; enquire
          </span>
          <ArrowIcon className="size-3.5 text-accent transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}