import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services, getService } from '@/content/services'
import { site } from '@/content/site'
import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'
import EnquiryForm from '../../components/EnquiryForm'
import ServiceIcon from '../../components/ServiceIcon'
import Figure from '../../components/Figure'
import Reveal from '../../components/Reveal'
import { ArrowIcon } from '../../components/Icons'


export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) return { title: 'Service not found' }

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} — ${site.shortName}`,
      description: service.description,
      url: `/services/${service.slug}`,
    },
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) notFound()

  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: { '@type': 'AdvertisingAgency', name: site.name, url: site.url },
    areaServed: { '@type': 'Country', name: 'India' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHeader
        eyebrow="Service"
        title={service.title}
        intro={service.description}
        breadcrumbs={[{ name: 'Services', href: '/services' }, { name: service.title }]}
        art={service.icon}
      />

      <Section tone="light" className="py-20 sm:py-24">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="card overflow-hidden rounded-2xl">
              <Figure
                image={service.image}
                alt={`${service.title} — advertising by ${site.name}`}
                art={service.icon}
                className="aspect-[16/9] w-full"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />

              <div className="p-8">
                <span className="border-hairline -mt-15 mb-6 flex size-14 items-center justify-center rounded-xl border bg-(--surface-raised) text-accent shadow-lg">
                  <ServiceIcon name={service.icon} className="size-7" />
                </span>

                <h2 className="font-display text-xl font-semibold text-strong">What this covers</h2>
                <ul className="mt-5 space-y-3.5">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-fg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 size-4 shrink-0 text-accent"
                        aria-hidden="true"
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="border-hairline mt-8 border-t pt-6">
                  <p className="text-xs text-muted">Need this urgently?</p>
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="font-display mt-1.5 block text-lg font-bold text-accent hover:underline"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <EnquiryForm
              service={service}
              heading={`Enquire about ${service.title}`}
              blurb="These questions are specific to this service — the more you fill in, the more accurate our costing will be."
            />
          </div>
        </div>
      </Section>

      <Section tone="tint" className="border-hairline border-t py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-strong sm:text-3xl">
              Other services you may need
            </h2>
          </Reveal>

          <Reveal stagger={0.08} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="card group flex items-start gap-4 rounded-2xl p-6 transition hover:-translate-y-1 hover:border-firozi-500/50"
              >
                <span className="bg-accent-soft border-hairline flex size-11 shrink-0 items-center justify-center rounded-lg border text-accent">
                  <ServiceIcon name={other.icon} className="size-5.5" />
                </span>
                <span>
                  <span className="font-display block text-sm font-semibold text-strong transition group-hover:text-accent">
                    {other.title}
                  </span>
                  <span className="mt-1.5 flex items-center gap-1.5 text-xs text-accent">
                    View
                    <ArrowIcon className="size-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </Section>
    </>
  )
}
