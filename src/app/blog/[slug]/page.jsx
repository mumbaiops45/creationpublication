import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts, getPost } from '@/content/posts'
import { site } from '@/content/site'
import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'
import Reveal from '../../components/Reveal'
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
        <h2 className="font-display mt-12 mb-4 text-2xl font-bold text-strong sm:text-3xl">
          {block.text}
        </h2>
      )
    case 'ul':
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-fg">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-firozi-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <figure className="my-10 border-l-2 border-firozi-500 pl-6">
          <blockquote className="font-display text-xl leading-relaxed font-semibold text-balance text-strong sm:text-2xl">
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

      <PageHeader
        eyebrow={post.category}
        title={post.title}
        intro={post.excerpt}
        breadcrumbs={[{ name: 'Case Studies', href: '/blog' }, { name: post.title }]}
      />

      <Section tone="light" className="py-16 sm:py-20">
        <article className="container-x">
          <Reveal className="mx-auto max-w-4xl">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-video w-full rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
              overlay={false}
            />
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-3xl">
            <div className="border-hairline flex flex-wrap items-center gap-3 border-y py-4 text-xs text-muted">
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
                className="mt-12 inline-flex items-center gap-2.5 rounded-xl bg-[#0A66C2] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0b5aa8]"
              >
                <LinkedInIcon className="size-4" />
                Discuss this on LinkedIn
              </a>
            )}
          </Reveal>
        </article>
      </Section>

      {/* More case studies */}
      {others.length > 0 && (
        <Section tone="tint" className="border-hairline border-t py-20">
          <div className="container-x">
            <Reveal className="mx-auto max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-strong">More case studies</h2>
            </Reveal>

            <Reveal
              stagger={0.09}
              className="mx-auto mt-7 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="card group overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-firozi-500/50"
                >
                  <img
                    // image={other.cover}
                    src={other.image}
                    alt={other.title}
                    art={other.art}
                    // className="aspect-video w-full"
                    ClassName="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="p-6">
                    <span className="text-[11px] font-semibold tracking-wide text-accent uppercase">
                      {other.category}
                    </span>
                    <h3 className="font-display mt-3 text-base leading-snug font-semibold text-strong transition group-hover:text-accent">
                      {other.title}
                    </h3>
                    <span className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-accent">
                      Read
                      <ArrowIcon className="size-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
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
