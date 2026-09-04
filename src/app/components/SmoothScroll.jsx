'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


let lenis = null
export function getLenis() {
  return lenis
}

const NAVBAR_OFFSET = -88

export default function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const safety = window.setTimeout(
      () => document.documentElement.classList.add('reveal-safety'),
      2600,
    )

    if (reduced) {
      ScrollTrigger.refresh()
      return () => window.clearTimeout(safety)
    }

    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 1,
      anchors: { offset: NAVBAR_OFFSET, duration: 1.2 },
    })

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    const refresh = () => ScrollTrigger.refresh()

    let introHandler
    if (document.documentElement.classList.contains('intro-active')) {
      lenis.stop()
      introHandler = () => {
        lenis?.start()
        refresh()
      }
      window.addEventListener('cp:intro-done', introHandler, { once: true })
    }

    const onLoad = () => refresh()
    window.addEventListener('load', onLoad)
    const settle = window.setTimeout(refresh, 700)

    return () => {
      window.clearTimeout(safety)
      window.clearTimeout(settle)
      window.removeEventListener('load', onLoad)
      if (introHandler) window.removeEventListener('cp:intro-done', introHandler)
      gsap.ticker.remove(raf)
      lenis?.destroy()
      lenis = null
    }
  }, [])

  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)

    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => window.cancelAnimationFrame(id)
  }, [pathname])

  return null
}
