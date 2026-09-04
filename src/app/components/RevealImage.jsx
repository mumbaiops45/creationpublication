'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


export default function RevealImage({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  priority = false,
  parallax = 5,
  start = 'top 88%',
}) {
  const wrap = useRef(null)
  const img = useRef(null)

  useEffect(() => {
    const w = wrap.current
    const i = img.current
    if (!w || !i) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: w, start, once: true },
      })
      tl.from(w, {
        clipPath: 'inset(100% 0% 0% 0%)',
        duration: 1.15,
        ease: 'power4.inOut',
      }).from(i, { scale: 1.3, duration: 1.4, ease: 'power3.out' }, 0)

      if (parallax) {
        gsap.fromTo(
          i,
          { yPercent: -parallax },
          {
            yPercent: parallax,
            ease: 'none',
            scrollTrigger: { trigger: w, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      }
    }, w)

    return () => ctx.revert()
  }, [parallax, start])

  return (
    <div
      ref={wrap}
      className={`figure-clip ${className}`}
      style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
    >
      <img
        ref={img}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full scale-[1.12] object-cover ${imgClassName}`}
      />
    </div>
  )
}
