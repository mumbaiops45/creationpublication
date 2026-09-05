import { clients } from '@/content/clients'

export default function ClientMarquee() {
  const loop = [...clients, ...clients]

  return (
    <div
      className="group relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label="Brands we have worked with"
    >
      <div className="animate-marquee flex w-max items-center gap-16 group-hover:[animation-play-state:paused]">
        {loop.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex h-12 shrink-0 items-center justify-center opacity-45 grayscale transition duration-500 ease-out hover:opacity-90 hover:grayscale-0"
            aria-hidden={index >= clients.length ? 'true' : undefined}
          >
            {client.logo ? (
              <img
                src={client.logo}
                alt={client.name}
                width={150}
                height={26}
                loading="lazy"
                decoding="async"
                className="h-15 w-auto object-contain mix-blend-multiply"
              />
            ) : (
              <span className="font-display text-xl font-medium tracking-tight whitespace-nowrap text-fg">
                {client.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
