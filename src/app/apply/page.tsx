import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Apply for Business Funding | Mintual',
  description: 'Apply for small business financing in minutes. Get matched with 35+ certified lenders. No impact on your credit score.',
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-mintual-light">
      {/* Hero */}
      <section className="bg-mintual-dark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Apply for Business Funding</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Complete our simple application to get matched with the best financing options for your business.
            Applying won't impact your credit score.
          </p>
        </div>
      </section>

      {/* Typeform Embed */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden min-h-[600px]">
            {/* Typeform widget */}
            <div
              data-tf-widget="j89x0fAz"
              data-tf-opacity="100"
              data-tf-inline-on-mobile
              data-tf-iframe-props="title=Mintual Intake Form"
              data-tf-transitive-search-params
              data-tf-auto-focus
              data-tf-medium="snippet"
              data-tf-full-screen
              style={{ width: '100%', height: '600px' }}
            />
            <Script src="//embed.typeform.com/next/embed.js" strategy="afterInteractive" />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-mintual-accent mb-2">35+</div>
              <p className="text-mintual-gray">Certified Lending Partners</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-mintual-accent mb-2">$13B</div>
              <p className="text-mintual-gray">Funding Provided Globally</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-mintual-accent mb-2">5 min</div>
              <p className="text-mintual-gray">Average Application Time</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
