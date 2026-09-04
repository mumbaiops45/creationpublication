import { stats, milestones, capabilities } from '@/content/stats'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Counter from '../components/Counter'
import Reveal from '../components/Reveal'
import RevealImage from '../components/RevealImage'
import StatMeter from '../components/StatMeter'
import LineDraw from '../components/LineDraw'
import Parallax from '../components/Parallax'
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
      <Section tone="light" className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal
            stagger={0.09}
            y={44}
            className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="group relative pt-6 transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <LineDraw className="absolute inset-x-0 top-0" start="top 88%" delay={(i % 3) * 0.08} />
                <p className="font-display text-5xl font-medium tracking-tight text-strong sm:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-display mt-4 text-h3 font-medium text-strong">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-sm text-muted">{stat.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>
      <Section tone="tint" className="relative overflow-hidden border-hairline border-y py-24">
        <Parallax speed={0.1} className="absolute inset-0" aria-hidden="true">
          <div className="grid-bg h-full w-full opacity-40" />
        </Parallax>
        <div className="container-x relative grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Capability"
              title="Where our depth is"
              intro="Share of our annual delivery volume, by discipline. Outdoor and print remain our backbone; digital is the fastest-growing arm."
            />
          </div>

          <Reveal stagger={0.1} className="space-y-8 lg:col-span-7 lg:pt-3">
            {capabilities.map((capability) => (
              <StatMeter
                key={capability.label}
                label={capability.label}
                value={capability.value}
              />
            ))}
          </Reveal>
        </div>
      </Section>

      <Section tone="light" className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            align="left"
            eyebrow="Our Journey"
            title="From one desk to 120 cities"
            intro="The moments that changed what we could offer."
          />

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5" delay={0.1}>
              <RevealImage
                src="https://www.adworthmedia.org/wp-content/uploads/2023/03/1-1.jpg"
                alt="Transit media managed by Creation Publicity"
                className="aspect-4/3 w-full rounded-xl lg:sticky lg:top-28"
              />
            </Reveal>

            <Reveal stagger={0.12} y={48} className="lg:col-span-7">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex gap-6 pb-10 last:pb-0 sm:gap-8">
                  <div className="flex flex-col items-center">
                    <span className="font-label bg-accent-soft flex size-14 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-accent">
                      {milestone.year}
                    </span>
                    {index < milestones.length - 1 && (
                      <LineDraw axis="y" scrub className="mt-2 grow" />
                    )}
                  </div>

                  <div className="pt-3 pb-1">
                    <LineDraw className="mb-3" start="top 86%" />
                    <h3 className="font-display text-h3 font-medium text-strong">{milestone.title}</h3>
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
