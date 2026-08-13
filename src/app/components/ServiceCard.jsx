import Link from 'next/link'
import ServiceIcon from './ServiceIcon'
import Figure from './Figure'
import { ArrowIcon } from './Icons'

export default function ServiceCard({ service, index }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card group relative flex flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1.5 hover:border-firozi-500/50 hover:shadow-xl"
    >
      <Figure
        image={service.image}
        alt={`${service.title} advertising by Creation Publicity`}
        art={service.icon}
        className="aspect-[16/10] w-full"
        imgClassName="object-cover transition duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <span
        className="font-display absolute top-4 right-5 z-10 text-4xl font-bold text-white/25"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative flex grow flex-col p-7">
        {/* Straddles the artwork edge: half over the image, half over the body. */}
        <span className="-mt-14 mb-5 flex size-14 items-center justify-center rounded-xl border border-firozi-400/30 bg-ink-900/90 text-firozi-300 shadow-lg backdrop-blur-sm">
          <ServiceIcon name={service.icon} />
        </span>

        <h3 className="font-display text-lg font-semibold text-strong transition group-hover:text-accent">
          {service.title}
        </h3>
        <p className="mt-2.5 grow text-sm leading-relaxed text-muted">{service.short}</p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
          View details &amp; enquire
          <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
