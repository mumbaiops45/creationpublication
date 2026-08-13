

'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { site } from '@/content/site'
import { stats } from '@/content/stats'
import { ArrowIcon } from './Icons'

export default function Hero() {
  const root = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const el = root.current

    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      const enter = (selector, vars, position) =>
        tl.fromTo(
          selector,
          {
            opacity: 0,
            y: vars.y,
          },
          {
            opacity: 1,
            y: 0,
            duration: vars.duration,
            stagger: vars.stagger ?? 0,
          },
          position,
        )

      enter('[data-hero-badge]', {
        y: 20,
        duration: 0.7,
      })

      enter(
        '[data-hero-line]',
        {
          y: 46,
          duration: 1,
          stagger: 0.11,
        },
        '-=0.35',
      )

      enter(
        '[data-hero-sub]',
        {
          y: 22,
          duration: 0.8,
        },
        '-=0.55',
      )

      enter(
        '[data-hero-cta]',
        {
          y: 18,
          duration: 0.7,
          stagger: 0.1,
        },
        '-=0.5',
      )

      enter(
        '[data-hero-stat]',
        {
          y: 22,
          duration: 0.7,
          stagger: 0.08,
        },
        '-=0.45',
      )
      gsap.to('[data-hero-media]', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('[data-hero-copy]', {
        opacity: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'center top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const attemptPlay = () => {
      video.play().catch(() => {
      })
    }

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
      className="surface relative flex min-h-[92svh] items-center overflow-hidden pt-28 pb-20"
    >

      <div
        data-hero-media
        className="absolute inset-0 z-0 h-full w-full"
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
        />
      </div>


      <div className="absolute inset-0 z-10 bg-black/20" aria-hidden="true"/>
      <div className="absolute inset-0 z-10 bg-linear-to-r from-ink-900/60 via-ink-900/20 to-transparent" aria-hidden="true"/>

      <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-transparent to-ink-900/80" aria-hidden="true"/>

      <div className="grid-bg absolute inset-0 z-10 opacity-20" aria-hidden="true"/>

     
      <div className="absolute -top-40 left-1/2 z-10 size-[42rem] -translate-x-1/2 rounded-full bg-firozi-500/12 blur-[120px]" aria-hidden="true"/>

  
      <div data-hero-copy className="container-x relative z-20">
        <div className="max-w-4xl">
          <span data-hero-badge className="inline-flex items-center gap-2.5 rounded-full border border-firozi-400/25 bg-ink-800/60 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-firozi-300 uppercase backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-firozi-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-firozi-400" />
            </span>
            {site.tagline} · Since 1999
          </span>
          <h1 className="font-display mt-7 text-[2.6rem] leading-[1.04] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span data-hero-line className="block">
              Creation
            </span>

            <span data-hero-line className="text-gradient block">
              Publicity
            </span>

            <span
              data-hero-line
              className="block text-2xl font-semibold tracking-[0.2em] text-firozi-300/80 uppercase sm:text-3xl lg:text-4xl"
            >
              Pvt. Ltd.
            </span>
          </h1>

          <p data-hero-sub className="mt-7 max-w-2xl text-base leading-relaxed text-pretty text-slate-300 sm:text-lg">
            We put your brand where India actually looks — on landmark
            hoardings, inside malls and multiplexes, across transit networks,
            on every shopfront and everywhere online.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              data-hero-cta
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-firozi-500 px-8 py-4 text-sm font-bold text-ink-900 shadow-xl shadow-firozi-500/25 transition-colors hover:bg-firozi-400 hover:shadow-firozi-400/40"
            >
              Enquire Now

              <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              data-hero-cta
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-firozi-400/25 bg-ink-800/50 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-firozi-400/50 hover:bg-ink-800"
            >
              Explore Our Services
            </Link>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {stats.slice(0, 4).map((stat) => (
              <div data-hero-stat key={stat.label}>
                <dt className="font-display text-2xl font-bold text-firozi-300 sm:text-3xl">
                  {stat.value.toLocaleString('en-IN')}
                  {stat.suffix}
                </dt>

                <dd className="mt-1 text-xs leading-snug text-slate-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-7 z-20 flex justify-center"
        aria-hidden="true"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-firozi-400/30 p-1.5">
          <span className="size-1.5 animate-bounce rounded-full bg-firozi-400" />
        </span>
      </div>
    </section>
  )
}