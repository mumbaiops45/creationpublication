import Link from 'next/link'

export default function Logo({ compact = false }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Creation Publicity — home">
      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-firozi-400 to-firozi-700 font-display text-base font-bold text-ink-900 shadow-lg shadow-firozi-500/25 transition group-hover:shadow-firozi-400/40">
        CP
      </span>
      <span className={compact ? 'sr-only' : 'flex flex-col leading-none'}>
        <span className="font-display text-[15px] font-bold tracking-tight text-white sm:text-base">
          Creation Publicity
        </span>
        <span className="mt-1 text-[10px] font-medium tracking-[0.18em] text-firozi-300/90 uppercase">
          Pvt. Ltd.
        </span>
      </span>
    </Link>
  )
}
