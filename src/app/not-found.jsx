import Link from 'next/link'
import { ArrowIcon } from './components/Icons'

export const metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <section
      data-tone="light"
      className="surface relative flex min-h-[80svh] items-center overflow-hidden py-32"
    >
      <div className="grid-bg absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="container-x text-center">
        <p className="font-display text-[7rem] leading-none font-medium text-strong sm:text-[11rem]">404</p>
        <h1 className="font-display mt-4 text-h2 font-medium text-strong">
          This page has been taken down
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted">
          The page you are looking for does not exist or has moved. Our hoardings stay up longer than
          this, we promise.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-semibold text-paper-50 transition hover:bg-ink-800"
          >
            Back to home
            <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2.5 text-sm font-semibold text-strong"
          >
            <span className="border-b border-ink-900/25 pb-0.5 transition-colors group-hover:border-firozi-700">
              Browse services
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
