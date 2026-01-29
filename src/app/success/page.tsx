import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Application Submitted | Mintual',
  description: 'Thank you for your application. We will be in touch shortly.',
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-mintual-light flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-sm p-12">
          <div className="w-20 h-20 bg-mintual-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-mintual-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-mintual-dark mb-4">
            Application Submitted!
          </h1>
          <p className="text-lg text-mintual-gray mb-8">
            Thank you for applying with Mintual. Our team is reviewing your application and will 
            match you with the best funding options for your business. Expect to hear from us 
            within 1-2 business days.
          </p>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-mintual-dark">What happens next?</h2>
            <ol className="text-left text-mintual-gray space-y-3 max-w-md mx-auto">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-mintual-accent text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                <span>We review your application and match you with suitable lenders</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-mintual-accent text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                <span>A lending advisor will contact you to discuss your options</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-mintual-accent text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                <span>Review and accept the offer that best fits your needs</span>
              </li>
            </ol>
          </div>
          <div className="mt-8 pt-8 border-t">
            <p className="text-mintual-gray mb-4">Have questions?</p>
            <p className="text-mintual-dark font-semibold">(855) 704-7458</p>
            <p className="text-mintual-gray text-sm">M-F 9am-6pm ET</p>
          </div>
          <Link
            href="/"
            className="inline-block mt-8 text-mintual-accent hover:underline"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
