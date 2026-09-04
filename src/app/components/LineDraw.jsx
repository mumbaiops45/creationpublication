'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


export default function LineDraw({
  axis = 'x',
  className = '',
  color = 'var(--hairline-strong)',
  scrub = false,
  start = 'top 88%',
  end = 'top 42%',
  duration = 0.9,
  delay = 0,
  once = true,
}) {
  const ref = useRef(null)
  const horizontal = axis === 'x'
  const prop = horizontal ? 'scaleX' : 'scaleY'

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.transform = 'none'
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.to(el, {
        [prop]: 1,
        duration: scrub ? undefined : duration,
        delay: scrub ? 0 : delay,
        ease: scrub ? 'none' : 'power3.inOut',
        scrollTrigger: scrub
          ? { trigger: el, start, end, scrub: true }
          : { trigger: el, start, once },
      })
    }, el)

    return () => ctx.revert()
  }, [prop, scrub, start, end, duration, delay, once])

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`block ${horizontal ? 'h-px w-full origin-left' : 'h-full w-px origin-top'} ${className}`}
      style={{ background: color, transform: horizontal ? 'scaleX(0)' : 'scaleY(0)' }}
    />
  )
}
