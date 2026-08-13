import Image from 'next/image'
import { clients } from '@/content/clients'


export default function ClientMarquee() {
  const loop = [...clients, ...clients]

  return (
    <div
      className="group relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      aria-label="Brands we have worked with"
    >
      <div className="animate-marquee flex w-max items-center gap-14 group-hover:[animation-play-state:paused]">
        {loop.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex h-14 shrink-0 items-center justify-center opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            aria-hidden={index >= clients.length ? 'true' : undefined}
          >
            {client.logo ? (
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={56}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <span className="font-display text-xl font-bold tracking-tight whitespace-nowrap text-fg">
                {client.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
