import Link from 'next/link'
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
import Figure from './Figure'
import { ArrowIcon } from './Icons'

const pillars = [
    {
        title: 'One agency, every medium',
        body: 'Hoardings, malls, transit, retail signage, print and digital planned together — so your budget is split by what performs, not by who sells it.',
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
            <Section tone="tint" className="border-hairline border-y py-10">
                <div className="container-x">
                    <p className="mb-7 text-center text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                        Trusted by brands across India
                    </p>
                    <ClientMarquee />
                </div>
            </Section>
            <Section tone="light" id="services" className="py-24 sm:py-28">
                <div className="container-x">
                    <SectionHeading
                        eyebrow="What We Do"
                        title="Advertising that works where people already are"
                        intro="Nine specialisations under one roof. Every service has its own page and its own enquiry form, so your brief reaches the right desk straight away."
                    />

                    <Reveal stagger={0.07} className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <ServiceCard key={service.slug} service={service} index={index} />
                        ))}
                    </Reveal>

                    <Reveal className="mt-12 text-center" delay={0.15}>
                        <Link
                            href="/services"
                            className="border-hairline group inline-flex items-center gap-2.5 rounded-xl border px-7 py-3.5 text-sm font-semibold text-strong transition hover:border-firozi-500/50 hover:bg-firozi-500/5"
                        >
                            See all services in detail
                            <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Reveal>
                </div>
            </Section>

            <Section tone="dark" className="relative overflow-hidden py-24">
                <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />
                <div
                    className="absolute top-1/2 left-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-firozi-500/8 blur-[130px]"
                    aria-hidden="true"
                />
                <div className="container-x relative">
                    <SectionHeading
                        eyebrow="By The Numbers"
                        title="Twenty-five years of putting brands outdoors"
                        intro="We have been planning and executing campaigns since 1999 — long enough to know which sites deliver and which ones only look good on a rate card."
                    />

                    <Reveal stagger={0.08} className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="card rounded-2xl p-6 text-center">
                                <p className="font-display text-3xl font-bold text-accent sm:text-4xl">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className="mt-2.5 text-xs leading-snug font-medium text-strong">{stat.label}</p>
                            </div>
                        ))}
                    </Reveal>

                    <Reveal className="mt-12 text-center" delay={0.15}>
                        <Link
                            href="/statistics"
                            className="group inline-flex items-center gap-2.5 text-sm font-semibold text-accent hover:underline"
                        >
                            View our full company profile
                            <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Reveal>
                </div>
            </Section>

            <Section tone="light" className="py-24 sm:py-28">
                <div className="container-x">
                    <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
                        <div className="lg:col-span-5">
                            <SectionHeading
                                align="left"
                                eyebrow="Why Creation Publicity"
                                title="The unglamorous parts, done properly"
                                intro="Creative is the easy half. What separates a campaign that goes live on time from one that does not is permissions, logistics and follow-through."
                            />

                            <Reveal className="mt-10" delay={0.15}>
                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVbPy22af7B5moi89fqX_1Pf4gbOHrKd8RyUUheHjP66GgGQVmXl5H6g&s=10'
                                    art="hoarding"
                                    alt="A landmark hoarding site managed by Creation Publicity"
                                    className="aspect-[16/10] w-full rounded-2xl"
                                    overlay={false}
                                />
                            </Reveal>
                        </div>

                        <Reveal stagger={0.09} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
                            {pillars.map((pillar, index) => (
                                <div key={pillar.title} className="card rounded-2xl p-7">
                                    <span className="font-display text-xs font-bold tracking-widest text-accent opacity-70">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="font-display mt-3 text-base font-semibold text-strong">{pillar.title}</h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{pillar.body}</p>
                                </div>
                            ))}
                        </Reveal>
                    </div>
                </div>
            </Section>
            <Section tone="tint" className="border-hairline border-y py-24">
                <div className="container-x">
                    <SectionHeading
                        eyebrow="Client Voices"
                        title="What our clients say"
                        intro="A few words from the marketing teams we work with every quarter."
                    />
                    <div className="mt-14">
                        <Testimonials />
                    </div>
                    <Reveal className="mt-12 text-center" delay={0.15}>
                        <Link
                            href="/clients"
                            className="group inline-flex items-center gap-2.5 text-sm font-semibold text-accent hover:underline"
                        >
                            See our full client list
                            <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Reveal>
                </div>
            </Section>

            {/* ── Latest case studies ───────────────────────────────────────── */}
            <Section tone="light" className="py-24 sm:py-28">
                <div className="container-x">
                    <SectionHeading
                        eyebrow="Case Studies"
                        title="Campaigns we are happy to talk about"
                        intro="Real briefs, real constraints, real numbers — written up in full so you can judge the work rather than the pitch."
                    />

                    <Reveal stagger={0.09} className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="card group flex flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1.5 hover:border-firozi-500/50 hover:shadow-xl"
                            >

                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="flex grow flex-col p-7">
                                    <span className="bg-accent-soft inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-accent uppercase">
                                        {post.category}
                                    </span>
                                    <h3 className="font-display mt-4 text-lg leading-snug font-semibold text-strong transition group-hover:text-accent">
                                        {post.title}
                                    </h3>
                                    <p className="mt-3 grow text-sm leading-relaxed text-muted">{post.excerpt}</p>
                                    <span className="mt-6 flex items-center gap-2 text-xs text-muted">
                                        {new Date(post.date).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                        <span aria-hidden="true">·</span>
                                        {post.readTime}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </Reveal>
                </div>
            </Section>

            <CTASection />
        </>
    )
}
