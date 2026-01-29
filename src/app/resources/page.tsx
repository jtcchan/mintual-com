import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources | Small Business Financing Blog | Mintual',
  description: 'Expert advice and guides on small business loans, financing options, and growing your business in Canada.',
}

export default function ResourcesPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  return (
    <div className="bg-mintual-light min-h-screen">
      {/* Hero */}
      <section className="bg-mintual-dark text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Expert advice and guides to help you navigate small business financing in Canada.
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/resources"
                className="px-4 py-2 bg-mintual-accent text-white rounded-full text-sm font-medium"
              >
                All
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="px-4 py-2 bg-gray-100 text-mintual-dark rounded-full text-sm font-medium hover:bg-gray-200 transition"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-mintual-dark mb-4">Coming Soon</h2>
              <p className="text-mintual-gray">
                We're working on helpful content for small business owners. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
                >
                  {post.featuredImage && (
                    <div className="aspect-video bg-gray-100">
                      {/* Image placeholder - would use next/image in production */}
                      <div className="w-full h-full bg-gradient-to-br from-mintual-accent to-mintual-purple" />
                    </div>
                  )}
                  <div className="p-6">
                    {post.category && (
                      <Link
                        href={`/category/${post.category.toLowerCase()}`}
                        className="text-mintual-accent text-sm font-medium hover:underline"
                      >
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </Link>
                    )}
                    <h2 className="text-xl font-semibold text-mintual-dark mt-2 mb-3">
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

      {/* CTA */}
      <section className="py-16 bg-mintual-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Apply in minutes and get matched with the best financing options for your business.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-mintual-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Apply Online
          </Link>
        </div>
      </section>
    </div>
  )
}
