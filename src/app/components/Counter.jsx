'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Counter({ value, prefix = '', suffix = '', duration = 2 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)

    const counter = { n: 0 }
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: value,
        duration,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(counter.n).toLocaleString('en-IN')}${suffix}`
        },
      })
    }, el)

    return () => ctx.revert()
  }, [value, prefix, suffix, duration])

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}
