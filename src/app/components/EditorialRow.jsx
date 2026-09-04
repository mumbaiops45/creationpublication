'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ArrowIcon } from './Icons'

export default function EditorialRow({
  href,
  image,
  imageAlt = '',
  eyebrow,
  index,
  title,
  body,
  meta,
  cta = 'Read the case study',
  flipped = false,
  priority = false,
}) {
  const root = useRef(null)
  const frame = useRef(null)
  const img = useRef(null)
  const heading = useRef(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(el.querySelectorAll('[data-row-fade]'), {
        opacity: 1,
        y: 0,
      })
      if (heading.current) {
        gsap.set(heading.current, {
          opacity: 1,
        })
      }
      return
    }

    gsap.registerPlugin(ScrollTrigger, SplitText)
    let split
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
          once: true,
        },
      })

      tl.from(frame.current, {
        clipPath: 'inset(100% 0% 0% 0%)',
        duration: 1.15,
        ease: 'power4.inOut',
      })

      tl.from(
        img.current,
        {
          scale: 1.08,
          duration: 1.5,
          ease: 'power3.out',
        },
        0,
      )
      if (heading.current) {
        gsap.set(heading.current, {
          opacity: 1,
        })

        split = SplitText.create(heading.current, {
          type: 'lines',
          mask: 'lines',
        })

        tl.from(
          split.lines,
          {
            yPercent: 120,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
          },
          '-=0.55',
        )

        tl.add(() => split?.revert())
      }

      tl.from(
        el.querySelectorAll('[data-row-fade]'),
        {
          opacity: 0,
          y: 22,
          duration: 0.7,
          stagger: 0.09,
          ease: 'power3.out',
        },
        '-=0.5',
      )
      gsap.fromTo(
        img.current,
        {
          yPercent: -2,
        },
        {
          yPercent: 2,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    }, el)

    return () => {
      ctx.revert()
      split?.revert?.()
    }
  }, [])

  const Wrapper = href ? Link : 'div'
  const wrapperProps = href ? { href } : {}

  return (
    <Wrapper
      ref={root}
      {...wrapperProps}
      className="group block border-t border-hairline py-14 first:border-t-0 sm:py-20 lg:py-24"
    >
      <div
        className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${flipped ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
      >
        <div ref={frame} className="relative w-full overflow-hidden rounded-xl bg-black/5 lg:sticky lg:top-[16vh]"
          style={{
            clipPath: 'inset(0% 0% 0% 0%)',
          }}
        >
          <img
            ref={img}
            src={image}
            alt={imageAlt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="block h-auto w-full object-contain transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
          />
          {typeof index === 'number' && (
            <span className="font-display absolute left-6 top-5 text-sm font-medium text-paper-50/90 mix-blend-difference"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </div>

        <div
          className={
            flipped
              ? 'lg:pr-6'
              : 'lg:pl-6'
          }
        >
          {eyebrow && (
            <span
              data-row-fade
              className="eyebrow"
            >
              <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
              {eyebrow}
            </span>
          )}


          <h3
            ref={heading}
            style={{
              opacity: 0,
            }}
            className="mt-5 font-display text-h2 font-medium text-balance text-strong"
          >
            {title}
          </h3>

          {body && (
            <p data-row-fade className="mt-5 max-w-lg text-base leading-relaxed text-pretty text-muted">
              {body}
            </p>
          )}
          {meta && (
            <div data-row-fade className="mt-6 text-xs text-muted">
              {meta}
            </div>
          )}
          {href && (
            <span
              data-row-fade
              className="mt-8 inline-flex items-center gap-2.5 text-sm font-semibold text-strong"
            >
              <span className="border-b border-ink-900/25 pb-0.5 transition-colors group-hover:border-firozi-700">
                {cta}
              </span>

              <ArrowIcon className="size-4 text-accent transition-transform group-hover:translate-x-1.5" />
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
