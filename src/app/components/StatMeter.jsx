'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


export default function StatMeter({ label, value = 0, className = '' }) {
  const root = useRef(null)
  const bar = useRef(null)
  const num = useRef(null)

  useEffect(() => {
    const el = root.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (bar.current) bar.current.style.transform = `scaleX(${value / 100})`
      if (num.current) num.current.textContent = `${value}%`
      return
    }

    gsap.registerPlugin(ScrollTrigger)
    const state = { n: 0 }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: 'top 86%', once: true },
      })
      tl.fromTo(
        bar.current,
        { scaleX: 0 },
        { scaleX: value / 100, duration: 1.4, ease: 'power3.out' },
        0,
      ).to(
        state,
        {
          n: value,
          duration: 1.4,
          ease: 'power3.out',
          onUpdate: () => {
            if (num.current) num.current.textContent = `${Math.round(state.n)}%`
          },
        },
        0,
      )
    }, el)

    return () => ctx.revert()
  }, [value])

  return (
    <div ref={root} className={className}>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-strong">{label}</span>
        <span ref={num} className="font-display text-sm font-medium text-accent">
          {value}%
        </span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-900/10">
        <div
          ref={bar}
          className="h-full w-full origin-left rounded-full bg-linear-to-r from-firozi-700 to-firozi-500"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </div>
  )
}
