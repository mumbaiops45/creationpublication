import { services } from '@/content/services'
import { stats } from '@/content/stats'
import { posts } from '@/content/posts'
import Hero from './Hero'
import Section from './Section'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import ClientMarquee from './ClientMarquee'
import Testimonials from './Testimonials'
import CTASection from './CTASection'
import Counter from './Counter'
import Reveal from './Reveal'
import RevealImage from './RevealImage'
import EditorialRow from './EditorialRow'

const pillars = [
    {
        title: 'One agency, every medium',
        body: 'Hoardings, malls, transit, retail signage, print and digital planned together  so your budget is split by what performs, not by who sells it.',
    },
    {
        title: 'Owned & partnered inventory',
        body: 'Direct access to over 3,200 media sites means better rates and faster confirmations than going site by site.',
    },
    {
        title: 'Permissions handled',
        body: 'Municipal approvals, structural clearances and release orders are our problem, not yours. Nothing goes up without paperwork.',
    },
    {
        title: 'Proof, every month',
        body: 'Dated monitoring photographs, tear sheets and campaign reports land in your inbox without you having to chase them.',
    },
]

export default function Home() {
    return (
        <>
            <Hero />

            <Section tone="tint" className="border-hairline border-y py-12">
                <div className="container-x">
                    <p className="mb-8 text-center">
                        <span className="eyebrow">Trusted by brands across India</span>
                    </p>
                    <ClientMarquee />
                </div>
            </Section>
            <Section tone="light" id="services" className="py-24 sm:py-32">
                <div className="container-x">
                    <SectionHeading
                        align="left"
                        eyebrow="What We Do"
                        title="Advertising that works where people already are"
                        intro="Nine specialisations under one roof. Every service has its own page and its own enquiry form, so your brief reaches the right desk straight away."
                    />

                    <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <ServiceCard key={service.slug} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </Section>
            <Section tone="dark" className="surface relative overflow-hidden py-24 sm:py-32">
                <div className="grid-bg absolute inset-0 opacity-30" aria-hidden="true" />
                <div
                    className="absolute top-1/2 left-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass-400/6 blur-[130px]"
                    aria-hidden="true"
                />
                <div className="container-x relative">
                    <SectionHeading
                        align="left"
                        eyebrow="By The Numbers"
                        title="Twenty-five years of putting brands outdoors"
                        intro="We have been planning and executing campaigns since 1999 long enough to know which sites deliver and which ones only look good on a rate card."
                    />

                    <Reveal
                        stagger={0.08}
                        className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6"
                    >
                        {stats.map((stat) => (
                            <div key={stat.label} className="border-t border-hairline pt-5">
                                <p className="font-display text-4xl font-medium text-strong sm:text-5xl">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className="mt-3 text-xs leading-snug text-muted">{stat.label}</p>
                            </div>
                        ))}
                    </Reveal>
                </div>
            </Section>

            <Section tone="light" className="py-24 sm:py-32">
                <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
                    <div className="lg:col-span-5">
                        <SectionHeading
                            align="left"
                            eyebrow="Why Creation Publicity"
                            title="The unglamorous parts, done properly"
                            intro="Creative is the easy half. What separates a campaign that goes live on time from one that does not is permissions, logistics and follow-through."
                        />

                        <Reveal className="mt-12">
                            <RevealImage
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVbPy22af7B5moi89fqX_1Pf4gbOHrKd8RyUUheHjP66GgGQVmXl5H6g&s=10"
                                alt="A landmark hoarding site managed by Creation Publicity"
                                className="aspect-[16/11] w-full rounded-xl"
                            />
                        </Reveal>
                    </div>

                    <Reveal
                        stagger={0.1}
                        className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7 lg:pt-4"
                    >
                        {pillars.map((pillar, index) => (
                            <div key={pillar.title} className="border-t border-hairline pt-5">
                                <span className="font-label text-xs font-semibold tracking-widest text-accent">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="font-display mt-3 text-h3 font-medium text-strong">{pillar.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.body}</p>
                            </div>
                        ))}
                    </Reveal>
                </div>
            </Section>
            <Section tone="tint" className="border-hairline border-y py-24 sm:py-32">
                <div className="container-x">
                    <SectionHeading
                        eyebrow="Client Voices"
                        title="What our clients say"
                        intro="A few words from the marketing teams we work with every quarter."
                    />
                    <div className="mt-16">
                        <Testimonials />
                    </div>
                </div>
            </Section>
            <Section tone="light" className="py-24 sm:py-32">
                <div className="container-x">
                    <SectionHeading
                        align="left"
                        eyebrow="Case Studies"
                        title="Campaigns we are happy to talk about"
                        intro="Real briefs, real constraints, real numbers written up in full so you can judge the work rather than the pitch."
                    />

                    <div className="mt-8">
                        {posts.map((post, index) => (
                            <EditorialRow
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                image={post.image}
                                imageAlt={post.title}
                                eyebrow={post.category}
                                index={index}
                                title={post.title}
                                body={post.excerpt}
                                flipped={index % 2 === 1}
                                meta={
                                    <>
                                        {new Date(post.date).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                        {'  ·  '}
                                        {post.readTime}
                                    </>
                                }
                            />
                        ))}
                    </div>
                </div>
            </Section>

            <CTASection />
        </>
    )
}
