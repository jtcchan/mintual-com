import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPostSlugs, getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return { title: 'Post Not Found | Mintual' }
  }

  return {
    title: `${post.title} | Mintual`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category)
  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-mintual-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {post.category && (
              <Link
                href={`/category/${post.category.toLowerCase()}`}
                className="text-mintual-accent text-sm font-medium hover:underline"
              >
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </Link>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-300">
              {post.author && <span>By {post.author}</span>}
              {post.date && (
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-CA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-mintual-dark
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-mintual-gray prose-p:leading-relaxed
                prose-a:text-mintual-accent prose-a:no-underline hover:prose-a:underline
                prose-ul:text-mintual-gray prose-li:mb-2
                prose-strong:text-mintual-dark"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-sm font-semibold text-mintual-dark mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-gray-100 text-mintual-gray rounded-full text-sm hover:bg-gray-200 transition"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 bg-mintual-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-mintual-dark mb-4">
              Ready to explore your funding options?
            </h2>
            <p className="text-mintual-gray mb-6">
              Apply in minutes and get matched with certified lenders.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-mintual-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Apply Online
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-mintual-dark mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relPost) => (
                <article key={relPost.slug} className="bg-mintual-light rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-mintual-dark mb-2">
                    <Link href={`/resources/${relPost.slug}`} className="hover:text-mintual-accent transition">
                      {relPost.title}
                    </Link>
                  </h3>
                  <p className="text-mintual-gray text-sm line-clamp-2">{relPost.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
