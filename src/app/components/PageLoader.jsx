'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { markIntroDone, isIntroDone } from '@/lib/intro'
import { getLenis } from './SmoothScroll'

const PANELS = 5

export default function PageLoader() {
  const [active, setActive] = useState(true)
  const rootRef = useRef(null)
  const countRef = useRef(null)
  const tlRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || isIntroDone()) {
      markIntroDone()
      setActive(false)
      return
    }

    document.documentElement.classList.add('intro-active')
    getLenis()?.stop()

    const finish = () => {
      getLenis()?.start()
      markIntroDone()
      setActive(false)
    }

    const failsafe = window.setTimeout(finish, 4200)
    const ctx = gsap.context(() => {
      const counter = { v: 0 }
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          window.clearTimeout(failsafe)
          finish()
        },
      })
      tlRef.current = tl

      tl.set('[data-intro-panel]', { yPercent: 0 })
        .from('[data-intro-word]', {
          yPercent: 120,
          duration: 0.7,
          stagger: 0.08,
          ease: 'expo.out',
        })
        .from('[data-intro-meta]', { opacity: 0, y: 12, duration: 0.5 }, '-=0.35')
        .to(
          counter,
          {
            v: 100,
            duration: 1.05,
            ease: 'power1.inOut',
            onUpdate: () => {
              if (countRef.current) {
                countRef.current.textContent = String(Math.round(counter.v)).padStart(2, '0')
              }
            },
          },
          '<',
        )
        .to('[data-intro-bar]', { scaleX: 1, duration: 1.05, ease: 'power1.inOut' }, '<')
        .to('[data-intro-content] > *', {
          yPercent: -110,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.in',
        })
        .to(
          '[data-intro-panel]',
          {
            yPercent: -100,
            duration: 0.9,
            stagger: 0.08,
            ease: 'expo.inOut',
          },
          '-=0.2',
        )
    }, rootRef)

    return () => {
      window.clearTimeout(failsafe)
      ctx.revert()
      document.documentElement.classList.remove('intro-active')
    }
  }, [])

  if (!active) return null

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] overflow-hidden"
      aria-hidden="true"
      onClick={() => tlRef.current?.timeScale(3.5)}
    >
      <div className="absolute inset-0 flex">
        {Array.from({ length: PANELS }).map((_, i) => (
          <div
            key={i}
            data-intro-panel
            className="h-full flex-1 border-r border-paper-50/5 bg-ink-900 last:border-r-0"
          />
        ))}
      </div>

      <div
        data-intro-content
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      >
        <span
          data-intro-meta
          className="mb-6 font-label text-[11px] font-semibold tracking-[0.34em] text-brass-400 uppercase"
        >
          Creation Publicity Pvt. Ltd.
        </span>

        <h2 className="font-display flex flex-wrap justify-center gap-x-[0.3em] text-4xl leading-none font-medium text-paper-50 sm:text-6xl">
          <span className="line-mask">
            <span data-intro-word className="block">Creation</span>
          </span>
          <span className="line-mask">
            <span data-intro-word className="block text-brass-400 italic">Publicity</span>
          </span>
        </h2>

        <div data-intro-meta className="mt-9 flex items-center gap-4">
          <span
            ref={countRef}
            className="font-label text-xs font-semibold tabular-nums text-brass-400"
          >
            00
          </span>
          <span className="h-px w-40 overflow-hidden bg-paper-50/10">
            <span
              data-intro-bar
              className="block h-full w-full origin-left scale-x-0 bg-linear-to-r from-brass-500 to-brass-300"
            />
          </span>
          <span className="font-label text-xs font-semibold tabular-nums text-paper-50/40">100</span>
        </div>
      </div>
    </div>
  )
}
