import { stats } from '@/content/stats'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Counter from '../components/Counter'
import Reveal from '../components/Reveal'
import Figure from '../components/Figure'
import CTASection from '../components/CTASection'

export const metadata = {
  title: 'About Us',
  description:
    'Creation Publicity Pvt. Ltd. has been planning and executing advertising campaigns across India since 1999 — outdoor, transit, retail, print and digital.',
  alternates: { canonical: '/about-us' },
}


const team = [
  {
    name: 'Managing Director',
    role: 'Founder & Managing Director',
    bio: 'Twenty-five years in outdoor media buying and site acquisition.',
    photo: '',
  },
  {
    name: 'Operations Head',
    role: 'Head of Operations',
    bio: 'Runs permissions, fabrication and pan-India installation crews.',
    photo: '',
  },
  {
    name: 'Client Servicing',
    role: 'Head of Client Servicing',
    bio: 'Single point of contact for planning, costing and reporting.',
    photo: '',
  },
  {
    name: 'Creative Lead',
    role: 'Creative Director',
    bio: 'Concept, design and production across print and digital.',
    photo: '',
  },
]

const values = [
  {
    title: 'Say what it will actually cost',
    body: 'Our quotes include mounting, permissions and maintenance. No line items appearing after the campaign is approved.',
  },
  {
    title: 'Recommend what we would buy',
    body: 'If a site will not deliver for your category, we say so — even when it is inventory we hold.',
  },
  {
    title: 'Show the evidence',
    body: 'Dated monitoring photographs and tear sheets, sent without being chased.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="An advertising agency built on follow-through"
        intro="We started in 1999 as a two-person outdoor media desk in Mumbai. Twenty-five years later we plan and execute campaigns in more than 120 cities — and the reason clients stay is unchanged: what we promise is what goes up."
        breadcrumbs={[{ name: 'About Us' }]}
        art="mall"
      />
      <Section tone="light" className="py-20 sm:py-24">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-pretty text-fg">
              <p>
                Creation Publicity Pvt. Ltd. began with a single conviction: that outdoor advertising
                fails far more often on execution than on creative. A brilliant campaign on a badly
                chosen site, mounted late and lit unevenly, is money burnt.
              </p>
              <p>
                So we built the agency backwards — starting with the operational spine. Site surveys,
                municipal permissions, fabrication partners, mounting crews, monitoring photography.
                Only once that machinery was reliable did we expand into malls and multiplexes, transit
                networks, retail rollouts and, most recently, digital performance marketing.
              </p>
              <p>
                Today that spine supports over 3,200 media sites and roughly 4,800 campaigns delivered.
                It is not the glamorous part of advertising. It is the part that decides whether your
                launch happens on the morning you booked it.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcP0QIXVZnui4CpWztq7NjchyTwzBSNcyulDffxiXjQUYa1eQ5v42kx4eC&s=10'
                alt="Print collateral produced by Creation Publicity"
                className="aspect-4/3 w-full rounded-2xl"
                overlay={false}
              />
              <img
                src='https://www.adworthmedia.org/wp-content/uploads/2023/03/1-1.jpg'
                alt="Bus branding delivered by Creation Publicity"
                className="aspect-4/3 w-full rounded-2xl"
                overlay={false}
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.15}>
            <div className="card rounded-2xl p-8 lg:sticky lg:top-28">
              <h2 className="font-display text-lg font-semibold text-strong">At a glance</h2>
              <dl className="mt-6 grid grid-cols-2 gap-6">
                {stats.slice(0, 4).map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-3xl font-bold text-accent">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </dt>
                    <dd className="mt-1.5 text-xs leading-snug text-muted">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark" className="relative overflow-hidden py-24">
        <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="How We Work"
            title="Three things we will not compromise on"
            intro="They sound obvious. In this industry they are not."
          />

          <Reveal stagger={0.1} className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="card rounded-2xl p-8">
                <span className="font-display text-xs font-bold tracking-widest text-accent opacity-70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-3.5 text-lg font-semibold text-strong">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section tone="light" className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Team"
            title="The people behind the campaigns"
            intro="A compact senior team, so the person who takes your brief is the person who owns the delivery."
          />

          <Reveal stagger={0.08} className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.role} className="card rounded-2xl p-7 text-center">
                <span className="font-display bg-accent-soft border-hairline mx-auto flex size-18 items-center justify-center rounded-full border text-lg font-bold text-accent">
                  {member.name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')
                    .slice(0, 2)}
                </span>
                <h3 className="font-display mt-5 text-base font-semibold text-strong">{member.name}</h3>
                <p className="mt-1 text-xs font-medium tracking-wide text-accent uppercase">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-8 text-center" delay={0.2}>
            <p className="text-xs text-muted">
              Replace these placeholders with real names, photographs and bios in{' '}
              <code className="card-sunken rounded px-1.5 py-0.5 text-accent">
                src/app/about-us/page.jsx
              </code>
              .
            </p>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Let's talk about your next campaign"
        body="Whether it is a single hoarding or a national rollout, the conversation starts the same way — what are you launching, where, and by when?"
      />
    </>
  )
}
