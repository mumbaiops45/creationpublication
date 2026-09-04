'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


export default function Parallax({
  children,
  className = '',
  as: Tag = 'div',
  speed = 0.12,
  axis = 'y',
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)
    const travel = speed * 240
    const key = axis === 'x' ? 'x' : 'y'

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { [key]: travel },
        {
          [key]: -travel,
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

    return () => ctx.revert()
  }, [speed, axis])

  return (
    <Tag ref={ref} className={className} style={{ willChange: 'transform' }} {...rest}>
      {children}
    </Tag>
  )
}
