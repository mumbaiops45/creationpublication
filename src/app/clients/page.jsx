import Image from 'next/image'
import { clients } from '@/content/clients'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Testimonials from '../components/Testimonials'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'

export const metadata = {
  title: 'Clients & Testimonials',
  description:
    'The brands we work with and what their marketing teams say about working with Creation Publicity Pvt. Ltd.',
  alternates: { canonical: '/clients' },
}

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clients & Testimonials"
        title="Brands that keep coming back"
        intro="Six hundred and fifty clients, and a 98% year-on-year retention rate. The work speaks, but so do the people who commission it."
        breadcrumbs={[{ name: 'Clients' }]}
        art="retail"
      />

      <Section tone="light" className="py-20 sm:py-24">
        <div className="container-x">
          <Reveal stagger={0.04} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="card flex h-28 items-center justify-center rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-firozi-500/50"
              >
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={160}
                    height={64}
                    className="h-10 w-auto object-contain opacity-75 transition hover:opacity-100"
                  />
                ) : (
                  <span className="font-display text-center text-base font-bold tracking-tight text-fg">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-6 text-center" delay={0.2}>
            <p className="text-xs text-muted">
              Client logos are shown with permission. Add yours by dropping the file into{' '}
              <code className="card-sunken rounded px-1.5 py-0.5 text-accent">/public/clients/</code>.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint" className="border-hairline border-y py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="In Their Words"
            title="What it is actually like to work with us"
            intro="Unedited feedback from marketing leads, brand managers and communications teams."
          />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </Section>

      <CTASection
        title="Join the brands we deliver for"
        body="Tell us what you are launching. We will show you comparable campaigns we have run and what they achieved."
      />
    </>
  )
}
