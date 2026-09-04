'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { site } from '@/content/site'
import { stats } from '@/content/stats'
import { onIntroReady } from '@/lib/intro'
import { ArrowIcon } from './Icons'
import Magnetic from './Magnetic'

export default function Hero() {
  const root = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)
    let cleanupIntro = () => {}

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'expo.out' } })

      tl.from('[data-hero-frame]', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.3, ease: 'power4.inOut' })
        .from('[data-hero-frame] video', { scale: 1.35, duration: 1.6, ease: 'power3.out' }, '<')
        .from('[data-hero-eyebrow]', { opacity: 0, y: 16, duration: 0.7 }, 0.35)
        .from('[data-hero-line] > span', { yPercent: 118, duration: 1.15, stagger: 0.1 }, '<0.1')
        .from('[data-hero-sub]', { opacity: 0, y: 20, duration: 0.8 }, '-=0.7')
        .from('[data-hero-cta]', { opacity: 0, y: 14, duration: 0.7, stagger: 0.1 }, '-=0.55')
        .from('[data-hero-stat]', { opacity: 0, y: 18, duration: 0.7, stagger: 0.08 }, '-=0.5')
        .from('[data-hero-cue]', { opacity: 0, duration: 0.6 }, '-=0.3')

      cleanupIntro = onIntroReady(() => tl.play())

      gsap.to('[data-hero-frame] video', {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('[data-hero-copy]', {
        opacity: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'center top', end: 'bottom top', scrub: true },
      })
    }, el)

    return () => {
      cleanupIntro()
      ctx.revert()
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const attemptPlay = () => video.play().catch(() => {})
    attemptPlay()
    video.addEventListener('loadeddata', attemptPlay)
    video.addEventListener('canplay', attemptPlay)
    return () => {
      video.removeEventListener('loadeddata', attemptPlay)
      video.removeEventListener('canplay', attemptPlay)
    }
  }, [])

  return (

    <section
      ref={root}
      data-tone="dark"
      className="surface relative flex min-h-[94svh] items-end overflow-hidden pt-32 pb-16 sm:items-center sm:pb-20"
    >
      <div data-hero-frame className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-100 "
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
        />
        <div className="absolute inset-0 bg-black/15" aria-hidden="true" />
      </div>

      <div data-hero-copy className="container-x relative">
        <div className="max-w-4xl">
          <span data-hero-eyebrow className="eyebrow">
            <span className="size-1.5 rounded-full text-firozi-700 bg-firozi-700" aria-hidden="true" />
            {site.tagline} · Since 1999
          </span>

          <h1 className="mt-7 font-display text-hero font-medium text-strong">
            <span data-hero-line className="line-mask">
              <span className="block">Creation</span>
            </span>
            <span data-hero-line className="line-mask">
              <span className="block text-firozi-700 italic">Publicity</span>
            </span>
            <span data-hero-line className="line-mask">
                <span className="block font-label text-xl font-semibold tracking-[0.28em] text-firozi-700 uppercase sm:text-2xl lg:text-3xl">
                Pvt. Ltd.
              </span>
            </span>
          </h1>

          <p
            data-hero-sub
            className="mt-8 max-w-xl text-base leading-relaxed text-pretty text-fg sm:text-lg"
          >
            We put your brand where India actually looks — on landmark
            hoardings, inside malls and multiplexes, across transit networks,
            on every shopfront and everywhere online.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
            <Magnetic>
              <Link
                data-hero-cta
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ink-700 px-8 py-4 text-sm font-semibold text-paper-50 transition-colors hover:bg-ink-800"
              >
                Enquire Now
                <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>

            <Link
              data-hero-cta
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full bg-ink-700 px-8 py-4 text-sm font-semibold text-paper-50 transition-colors hover:bg-ink-800"
            >
              <span className="border-b border-ink-900/30 pb-0.5 transition-colors group-hover:border-firozi-700">
                Explore Our Services
              </span>
              <ArrowIcon className="size-4 text-white transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {stats.slice(0, 4).map((stat) => (
              <div data-hero-stat key={stat.label} className="border-t border-hairline pt-3">
                <dt className="font-display text-2xl font-medium text-strong sm:text-[1.7rem]">
                  {stat.value.toLocaleString('en-IN')}
                  {stat.suffix}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl> */}
        </div>
      </div>

      <div
        data-hero-cue
        className="absolute inset-x-0 bottom-6 z-20 hidden justify-center sm:flex"
        aria-hidden="true"
      >
        <span className="flex h-11 w-6 items-start justify-center rounded-full border border-ink-900/20 p-1.5">
          <span className="size-1.5 animate-bounce rounded-full bg-firozi-700" />
        </span>
      </div>
    </section>
    
  )
}
