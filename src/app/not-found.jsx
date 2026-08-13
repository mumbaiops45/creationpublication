import Link from 'next/link'
import { ArrowIcon } from './components/Icons'

export const metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <section
      data-tone="dark"
      className="surface relative flex min-h-[70svh] items-center overflow-hidden py-32"
    >
      <div className="grid-bg absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 -z-10 size-[32rem] -translate-x-1/2 rounded-full bg-firozi-500/12 blur-[110px]"
        aria-hidden="true"
      />

      <div className="container-x text-center">
        <p className="font-display text-7xl font-extrabold text-firozi-400/25 sm:text-9xl">404</p>
        <h1 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl">
          This page has been taken down
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400">
          The page you are looking for does not exist or has moved. Our hoardings stay up longer than
          this, we promise.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-firozi-500 px-7 py-3.5 text-sm font-bold text-ink-900 transition hover:bg-firozi-400"
          >
            Back to home
            <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-firozi-400/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-firozi-400/50 hover:bg-ink-800"
          >
            Browse services
          </Link>
        </div>
      </div>
    </section>
  )
}
