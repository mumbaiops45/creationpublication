'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  y = 30,
  x = 0,
  scale = 1,
  blur = 4,
  duration = 1,
  delay = 0,
  stagger = 0,
  start = 'top 82%',
  end = 'top 32%',
  scrub = false,
  once = true,
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
        {
          opacity: 0,
          y,
          x,
          scale,
          filter: blur ? `blur(${blur}px)` : 'blur(0px)',
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: scrub ? undefined : duration,
          delay: scrub ? 0 : delay,
          stagger,
          ease: scrub ? 'none' : 'power3.out',
          clearProps: scrub ? undefined : 'filter',
          scrollTrigger: scrub
            ? { trigger: el, start, end, scrub: true }
            : { trigger: el, start, once },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [isGroup, y, x, scale, blur, duration, delay, stagger, start, end, scrub, once])

  const marker = isGroup ? { 'data-reveal-group': '' } : { 'data-reveal': '' }

  return (
    <Tag ref={ref} className={className} {...marker} {...rest}>
      {children}
    </Tag>
  )
}
