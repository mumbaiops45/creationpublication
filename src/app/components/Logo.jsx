import Link from 'next/link'

export default function Logo({ compact = false }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Creation Publicity home">
      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-firozi-500 to-firozi-800 font-label text-base font-bold text-paper-50 shadow-sm transition group-hover:from-firozi-400 group-hover:to-firozi-700">
        CP
      </span>
      <span className={compact ? 'sr-only' : 'flex flex-col leading-none'}>
        <span className="font-display text-[17px] font-medium tracking-tight text-strong">
          Creation Publicity
        </span>
        <span className="mt-1 font-label text-[10px] font-medium tracking-[0.22em] text-muted uppercase">
          Pvt. Ltd.
        </span>
      </span>
    </Link>
  )
}
