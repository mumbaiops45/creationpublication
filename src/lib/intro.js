'use client'

const EVENT = 'cp:intro-done'

export function isIntroDone() {
  if (typeof document === 'undefined') return false
  return document.documentElement.dataset.intro === 'ready'
}

export function markIntroDone() {
  if (typeof document === 'undefined') return
  if (isIntroDone()) return
  document.documentElement.dataset.intro = 'ready'
  document.documentElement.classList.remove('intro-active')
  window.dispatchEvent(new Event(EVENT))
}

export function onIntroReady(cb) {
  if (typeof window === 'undefined') return () => {}

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced || isIntroDone()) {
    cb()
    return () => {}
  }

  const handler = () => cb()
  window.addEventListener(EVENT, handler, { once: true })

  const timer = window.setTimeout(() => {
    window.removeEventListener(EVENT, handler)
    cb()
  }, 4000)

  return () => {
    window.clearTimeout(timer)
    window.removeEventListener(EVENT, handler)
  }
}
