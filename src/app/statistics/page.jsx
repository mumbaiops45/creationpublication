import { stats, milestones, capabilities } from '@/content/stats'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Counter from '../components/Counter'
import Reveal from '../components/Reveal'
import Figure from '../components/Figure'
import CTASection from '../components/CTASection'

export const metadata = {
  title: 'Statistics & Company Profile',
  description:
    '25+ years in business, 4,800+ campaigns delivered, 650+ clients and 120+ cities covered. The numbers behind Creation Publicity Pvt. Ltd.',
  alternates: { canonical: '/statistics' },
}

export default function StatisticsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company Profile"
        title="The numbers behind the campaigns"
        intro="Twenty-five years of media buying, site management and campaign execution — measured in the only way that matters."
        breadcrumbs={[{ name: 'Statistics' }]}
        art="digital"
      />
      <Section tone="light" className="py-20 sm:py-24">
        <div className="container-x">
          <Reveal stagger={0.08} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="card group relative overflow-hidden rounded-2xl p-8">
                <div
                  className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-firozi-400/15 blur-3xl transition group-hover:bg-firozi-400/30"
                  aria-hidden="true"
                />
                <p className="font-display relative text-4xl font-extrabold text-accent sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-display relative mt-3 text-base font-semibold text-strong">
                  {stat.label}
                </p>
                <p className="relative mt-1.5 text-sm text-muted">{stat.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>
      <Section tone="dark" className="relative overflow-hidden py-24">
        <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-x relative grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Capability"
              title="Where our depth is"
              intro="Share of our annual delivery volume, by discipline. Outdoor and print remain our backbone; digital is the fastest-growing arm."
            />
          </div>

          <Reveal stagger={0.1} className="space-y-7 lg:col-span-7">
            {capabilities.map((capability) => (
              <div key={capability.label}>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-strong">{capability.label}</span>
                  <span className="font-display text-sm font-bold text-accent">{capability.value}%</span>
                </div>
                <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-ink-900">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-firozi-600 to-firozi-300"
                    style={{ width: `${capability.value}%` }}
                  />
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section tone="light" className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Journey"
            title="From one desk to 120 cities"
            intro="The moments that changed what we could offer."
          />

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5" delay={0.1}>
              <img 
                 src='https://www.adworthmedia.org/wp-content/uploads/2023/03/1-1.jpg'
                alt="Transit media managed by Creation Publicity"
                className="aspect-4/3 w-full rounded-2xl lg:sticky lg:top-28"
                overlay={false}
              />
            </Reveal>

            <Reveal stagger={0.09} className="lg:col-span-7">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex gap-6 pb-10 last:pb-0 sm:gap-8">
                  <div className="flex flex-col items-center">
                    <span className="font-display border-hairline bg-accent-soft flex size-14 shrink-0 items-center justify-center rounded-full border text-xs font-bold text-accent">
                      {milestone.year}
                    </span>
                    {index < milestones.length - 1 && (
                      <span
                        className="mt-2 w-px grow bg-linear-to-b from-firozi-500/40 to-transparent"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="card flex-1 rounded-2xl p-6">
                    <h3 className="font-display text-base font-semibold text-strong">{milestone.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{milestone.body}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </Section>

      <CTASection
        title="Want these numbers working for your brand?"
        body="Share your campaign objective and we will map it against the inventory and reach we already have in place."
      />
    </>
  )
}
