'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

export default function SplitLines({
  as: Tag = 'h2',
  children,
  className = '',
  start = 'top 82%',
  delay = 0,
  stagger = 0.11,
  duration = 1,
  once = true,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(el, { opacity: 1 })
      return
    }

    gsap.registerPlugin(ScrollTrigger, SplitText)

    let split
    let revealed = false
    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 1 })
      split = SplitText.create(el, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit: (self) => {
          if (revealed) {
            gsap.set(self.lines, { yPercent: 0 })
            return
          }
          return gsap.from(self.lines, {
            yPercent: 120,
            duration,
            delay,
            stagger,
            ease: 'power4.out',
            scrollTrigger: { trigger: el, start, once },
            onComplete: () => {
              revealed = true
            },
          })
        },
      })
    }, el)

    return () => {
      ctx.revert()
      split?.revert?.()
    }
  }, [delay, stagger, duration, start, once])

  return (
    <Tag ref={ref} data-reveal="" className={className} {...rest}>
      {children}
    </Tag>
  )
}
