import { services } from '@/content/services'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ServiceCa from '../components/ServiceCa'
import CTASection from '../components/CTASection'

export const metadata = {
  title: 'Our Services',
  description:
    'Nine advertising specialisations: malls & multiplexes, hoardings & neon signs, corporate gifting, print collateral, transit media, retail signage, digital marketing, buses & bus shelters, and newspapers & magazines.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Every medium your brand needs, under one roof"
        intro="Pick a service to see what it covers, where we operate and what it typically costs — then send an enquiry with the details that actually matter for that medium."
        breadcrumbs={[{ name: 'Services' }]}
        art="hoarding"
      />

      <Section tone="light" className="py-20 sm:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCa key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Not sure which medium fits your budget?"
        body="Send us your brief and target cities. We will recommend the mix that gets you the most attention for the money — including the options we do not sell."
      />
    </>
  )
}
