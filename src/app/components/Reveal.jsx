'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  y = 28,
  x = 0,
  scale = 1,
  duration = 0.9,
  delay = 0,
  stagger = 0,
  start = 'top 85%',
  ...rest
}) {
  const ref = useRef(null)
  const isGroup = stagger > 0

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)

    const targets = isGroup ? Array.from(el.children) : [el]
    if (targets.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y, x, scale },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start, once: true },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [isGroup, y, x, scale, duration, delay, stagger, start])

  const marker = isGroup ? { 'data-reveal-group': '' } : { 'data-reveal': '' }

  return (
    <Tag ref={ref} className={className} {...marker} {...rest}>
      {children}
    </Tag>
  )
}
