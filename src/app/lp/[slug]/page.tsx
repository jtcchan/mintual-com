import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

// Landing page content - can be moved to CMS or markdown files later
const landingPages: Record<string, {
  headline: string
  subheadline: string
  bullets: string[]
}> = {
  'small-business-loans': {
    headline: 'Small Business Loans Made Simple',
    subheadline: 'Get matched with certified lenders in minutes. Funding as fast as 24 hours.',
    bullets: ['No credit impact to apply', 'Compare multiple offers', '35+ trusted lenders'],
  },
  'business-lines-of-credit': {
    headline: 'Flexible Business Lines of Credit',
    subheadline: 'Only pay for what you use. Access capital when you need it.',
    bullets: ['Revolving credit line', 'Quick access to funds', 'Pay interest only on what you use'],
  },
  'equipment-financing': {
    headline: 'Equipment Financing for Your Business',
    subheadline: 'Finance new or used equipment with competitive rates.',
    bullets: ['100% equipment financing', 'Flexible terms', 'Fast approval'],
  },
  // Default fallback for other pages
  default: {
    headline: 'Get the Business Funding You Need',
    subheadline: 'Compare offers from 35+ certified lenders. Apply in 5 minutes.',
    bullets: ['No credit impact', 'Fast approval', 'Competitive rates'],
  },
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const content = landingPages[slug] || landingPages.default
  
  return {
    title: `${content.headline} | Mintual`,
    description: content.subheadline,
    robots: {
      index: false, // noindex for PPC pages
      follow: true,
    },
  }
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params
  const content = landingPages[slug] || landingPages.default

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-mintual-dark to-mintual-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {content.headline}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {content.subheadline}
              </p>
              <ul className="space-y-3 mb-8">
                {content.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-mintual-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/apply"
                className="inline-block bg-mintual-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition"
              >
                Apply Now
              </Link>
              <p className="text-gray-400 text-sm mt-4">
                Applying will not impact your credit score
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-mintual-accent mb-2">$13B+</div>
                <p className="text-gray-300">Funding provided to businesses</p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <div className="text-3xl font-bold">&lt;48 hrs</div>
                    <p className="text-sm text-gray-400">Funding time</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">35+</div>
                    <p className="text-sm text-gray-400">Lenders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Image
                src="/images/apply-icon.png"
                alt="Quick Application"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-mintual-dark mb-2">Apply in 5 Minutes</h3>
              <p className="text-mintual-gray">Simple online application with no credit check required.</p>
            </div>
            <div className="text-center p-6">
              <Image
                src="/images/match-icon.png"
                alt="Best Match"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-mintual-dark mb-2">Get Matched</h3>
              <p className="text-mintual-gray">We find the best offers based on your business profile.</p>
            </div>
            <div className="text-center p-6">
              <Image
                src="/images/lenders-icon.png"
                alt="Certified Lenders"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-mintual-dark mb-2">Certified Lenders</h3>
              <p className="text-mintual-gray">All our partners are pre-vetted and regulated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-mintual-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to grow your business?
          </h2>
          <Link
            href="/apply"
            className="inline-block bg-white text-mintual-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            Start Your Application
          </Link>
        </div>
      </section>
    </div>
  )
}
