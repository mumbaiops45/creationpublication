import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services, getService } from '@/content/services'
import { site } from '@/content/site'
import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'
import EnquiryForm from '../../components/EnquiryForm'
import ServiceIcon from '../../components/ServiceIcon'
import RevealImage from '../../components/RevealImage'
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

      <PageHeader eyebrow="Service" title={service.title} intro={service.description} />

      <Section tone="light" className="py-20 sm:py-28">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <RevealImage
                src={service.image}
                alt={`${service.title} — advertising by ${site.name}`}
                className="aspect-4/3 w-full rounded-xl"
                priority
              />

              <div className="mt-8">
                <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <ServiceIcon name={service.icon} className="size-6" />
                </span>

                <h2 className="font-display text-h3 font-medium text-strong">What this covers</h2>
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

                <div className="mt-8 border-t border-hairline pt-6">
                  <p className="text-xs text-muted">Need this urgently?</p>
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="font-display mt-1.5 block text-xl font-medium text-strong hover:text-accent"
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

      <Section tone="tint" className="border-hairline border-t py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-h2 font-medium text-strong">
              Other services you may need
            </h2>
          </Reveal>

          <Reveal stagger={0.08} className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group flex items-start gap-4 border-t border-hairline pt-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <ServiceIcon name={other.icon} className="size-5" />
                </span>
                <span>
                  <span className="font-display block text-h3 font-medium text-strong transition group-hover:text-accent">
                    {other.title}
                  </span>
                  <span className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-accent">
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
