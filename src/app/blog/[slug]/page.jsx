import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts, getPost } from '@/content/posts'
import { site } from '@/content/site'
import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'
import Reveal from '../../components/Reveal'
import RevealImage from '../../components/RevealImage'
import CTASection from '../../components/CTASection'
import { LinkedInIcon, ArrowIcon } from '../../components/Icons'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) return { title: 'Case study not found' }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  }
}

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="font-display mt-14 mb-4 text-2xl font-medium text-strong sm:text-3xl">
          {block.text}
        </h2>
      )
    case 'ul':
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-fg">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-firozi-700" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <figure className="my-12 border-l-2 border-firozi-700 pl-6">
          <blockquote className="font-display text-xl leading-relaxed font-medium text-balance text-strong sm:text-2xl">
            “{block.text}”
          </blockquote>
          {block.by && <figcaption className="mt-3 text-sm text-accent">— {block.by}</figcaption>}
        </figure>
      )
    default:
      return <p className="my-5 text-base leading-relaxed text-pretty text-fg">{block.text}</p>
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) notFound()

  const others = posts.filter((item) => item.slug !== post.slug).slice(0, 2)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: site.name, url: site.url },
    publisher: { '@type': 'Organization', name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageHeader eyebrow={post.category} title={post.title} intro={post.excerpt} />

      <Section tone="light" className="py-16 sm:py-20">
        <article className="container-x">
          <Reveal className="mx-auto max-w-4xl">
            <RevealImage
              src={post.image}
              alt={post.title}
              className="aspect-video w-full rounded-xl"
              priority
            />
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 border-y border-hairline py-4 text-xs text-muted">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
              <span aria-hidden="true">·</span>
              <span className="text-accent">{post.category}</span>
            </div>

            <div className="mt-8">
              {post.body.map((block, index) => (
                <Block key={index} block={block} />
              ))}
            </div>

            {post.linkedin && (
              <a
                href={post.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex items-center gap-2.5 rounded-full bg-[#0A66C2] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0b5aa8]"
              >
                <LinkedInIcon className="size-4" />
                Discuss this on LinkedIn
              </a>
            )}
          </Reveal>
        </article>
      </Section>

      {others.length > 0 && (
        <Section tone="tint" className="border-hairline border-t py-20 sm:py-18">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl">
              <h2 className="font-display text-h2 font-medium text-strong">More case studies</h2>
            </Reveal>

            <Reveal
              stagger={0.1}
              className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2"
            >
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="group flex flex-col"
                >
                  <div className="figure-clip aspect-video w-full rounded-lg">
                    <img
                      src={other.image}
                      alt={other.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <span className="mt-4 font-label text-[11px] font-semibold tracking-wide text-accent uppercase">
                    {other.category}
                  </span>
                  <h3 className="font-display mt-2 text-h3 leading-snug font-medium text-strong transition group-hover:text-accent">
                    {other.title}
                  </h3>
                  <span className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-strong">
                    <span className="border-b border-ink-900/20 pb-0.5 transition-colors group-hover:border-firozi-700">
                      Read
                    </span>
                    <ArrowIcon className="size-3 text-accent transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </Reveal>
          </div>
        </Section>
      )}
      <CTASection />
    </>
  )
}
