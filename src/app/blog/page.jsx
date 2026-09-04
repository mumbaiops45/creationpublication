import { posts } from '@/content/posts'
import { site } from '@/content/site'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import EditorialRow from '../components/EditorialRow'
import CTASection from '../components/CTASection'
import { LinkedInIcon } from '../components/Icons'

export const metadata = {
  title: 'Case Studies & Insights',
  description:
    'Campaign write-ups from Creation Publicity — multi-city hoarding launches, mall activations and retail signage rollouts, with the numbers behind each.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Campaign stories, written up properly"
        intro="What the brief was, what got in the way, and what the campaign actually delivered. No vanity metrics."
      />

      <Section tone="light" className="py-16 sm:py-24">
        <div className="container-x">
          {posts.map((post, index) => (
            <EditorialRow
              key={post.slug}
              href={`/blog/${post.slug}`}
              image={post.image}
              imageAlt={post.title}
              eyebrow={index === 0 ? `Featured · ${post.category}` : post.category}
              index={index}
              title={post.title}
              body={post.excerpt}
              flipped={index % 2 === 1}
              cta="Read the case study"
              priority={index === 0}
              meta={
                <>
                  {new Date(post.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                  {'  ·  '}
                  {post.readTime}
                </>
              }
            />
          ))}
        </div>
      </Section>

      {/* LinkedIn tie-in */}
      <Section tone="tint" className="border-hairline border-y py-20 sm:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2]">
              <LinkedInIcon className="size-8" />
            </span>
            <div className="grow">
              <h2 className="font-display text-h3 font-medium text-strong">
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
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-[#0A66C2] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0b5aa8]"
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
