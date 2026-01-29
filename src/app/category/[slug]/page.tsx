import Link from 'next/link'
import { getPostsByCategory, getAllCategories } from '@/lib/blog'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((cat) => ({ slug: cat.toLowerCase() }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1)
  
  return {
    title: `${categoryName} | Resources | Mintual`,
    description: `Browse articles about ${categoryName.toLowerCase()} for small business owners in Canada.`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const posts = getPostsByCategory(slug)
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')

  return (
    <div className="bg-mintual-light min-h-screen">
      {/* Hero */}
      <section className="bg-mintual-dark text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/resources" className="text-mintual-accent hover:underline text-sm mb-4 inline-block">
            ← Back to Resources
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryName}</h1>
          <p className="text-xl text-gray-300">
            {posts.length} article{posts.length !== 1 ? 's' : ''} in this category
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-mintual-dark mb-4">No articles yet</h2>
              <p className="text-mintual-gray mb-6">
                We're working on content for this category. Check back soon!
              </p>
              <Link href="/resources" className="text-mintual-accent hover:underline">
                Browse all resources
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
                >
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-mintual-dark mb-3">
                      <Link href={`/resources/${post.slug}`} className="hover:text-mintual-accent transition">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-mintual-gray text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      {post.author && <span>{post.author}</span>}
                      {post.date && (
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-CA', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </time>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
