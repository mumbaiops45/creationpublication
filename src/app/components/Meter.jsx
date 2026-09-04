'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Meter({ value = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.transform = `scaleX(${value / 100})`
      return
    }

    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: value / 100,
          duration: 1.3,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [value])

  return (
    <div className={`h-1.5 overflow-hidden rounded-full bg-ink-900/10 ${className}`}>
      <div
        ref={ref}
        className="h-full w-full origin-left rounded-full bg-linear-to-r from-firozi-700 to-firozi-500"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
