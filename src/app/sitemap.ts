import { MetadataRoute } from 'next'
import { getAllPostSlugs, getAllCategories, getAllTags } from '@/lib/blog'

const BASE_URL = 'https://mintual.com'
const LAST_MOD = '2026-02-18'

// Landing page slugs (hardcoded, matches lp/[slug]/page.tsx)
const LP_SLUGS = [
  'small-business-loans',
  'business-lines-of-credit',
  'equipment-financing',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const postSlugs = getAllPostSlugs()
  const categories = getAllCategories()
  const tags = getAllTags()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: LAST_MOD,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/apply`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: LAST_MOD,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const lpPages: MetadataRoute.Sitemap = LP_SLUGS.map((slug) => ({
    url: `${BASE_URL}/lp/${slug}`,
    lastModified: LAST_MOD,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${BASE_URL}/resources/${slug}`,
    lastModified: LAST_MOD,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE_URL}/category/${cat.toLowerCase()}`,
    lastModified: LAST_MOD,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  const tagPages: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${BASE_URL}/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: LAST_MOD,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [
    ...staticPages,
    ...lpPages,
    ...blogPages,
    ...categoryPages,
    ...tagPages,
  ]
}
