import Link from 'next/link'
import { posts } from '@/content/posts'
import { site } from '@/content/site'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import Figure from '../components/Figure'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { LinkedInIcon, ArrowIcon } from '../components/Icons'

export const metadata = {
  title: 'Case Studies & Insights',
  description:
    'Campaign write-ups from Creation Publicity — multi-city hoarding launches, mall activations and retail signage rollouts, with the numbers behind each.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Campaign stories, written up properly"
        intro="What the brief was, what got in the way, and what the campaign actually delivered. No vanity metrics."
        breadcrumbs={[{ name: 'Case Studies' }]}
        art="press"
      />

      <Section tone="light" className="py-20 sm:py-24">
        <div className="container-x">
          {/* Featured */}
          {featured && (
            <Reveal className="mb-14">
              <Link
                href={`/blog/${featured.slug}`}
                className="card group grid grid-cols-1 gap-0 overflow-hidden rounded-3xl transition hover:border-firozi-500/50 hover:shadow-xl lg:grid-cols-2"
              >
                <img
                  src={featured.image}
                  alt={featured.title}
                  art={featured.art}
                  className="aspect-video w-full lg:aspect-auto lg:h-full lg:min-h-80"
                  imgClassName="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="bg-accent-soft inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-accent uppercase">
                    Featured · {featured.category}
                  </span>
                  <h2 className="font-display mt-5 text-2xl leading-tight font-bold text-balance text-strong transition group-hover:text-accent sm:text-3xl lg:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {featured.excerpt}
                  </p>
                  <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
                    Read the case study
                    <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <Reveal stagger={0.09} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group flex flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1.5 hover:border-firozi-500/50 hover:shadow-xl"
              >
                <img 
                  src={post.image}
                  alt={post.title}
                  ClassName="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="flex grow flex-col p-8">
                  <span className="bg-accent-soft inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-accent uppercase">
                    {post.category}
                  </span>
                  <h2 className="font-display mt-5 text-xl leading-snug font-semibold text-strong transition group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-3 grow text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="border-hairline mt-6 flex items-center gap-2 border-t pt-5 text-xs text-muted">
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
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

      {/* LinkedIn tie-in */}
      <Section tone="tint" className="border-hairline border-y py-20">
        <div className="container-x">
          <Reveal className="card flex flex-col items-center gap-6 rounded-3xl p-10 text-center sm:flex-row sm:text-left">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[#0A66C2]/12 text-[#0A66C2]">
              <LinkedInIcon className="size-8" />
            </span>
            <div className="grow">
              <h2 className="font-display text-xl font-semibold text-strong">
                We post campaign updates on LinkedIn first
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Site photographs, launch announcements and behind-the-scenes from live campaigns —
                follow {site.linkedinHandle} to see the work as it goes up.
              </p>
            </div>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-[#0A66C2] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0b5aa8]"
            >
              <LinkedInIcon className="size-4" />
              Follow on LinkedIn
            </a>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Want a campaign worth writing up?"
        body="Send us the brief. We will tell you honestly whether we are the right agency for it."
      />
    </>
  )
}
