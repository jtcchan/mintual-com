import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not Eligible | Mintual',
  description: 'Based on your answers, you may not currently qualify for our lending partners.',
}

export default function NotEligiblePage() {
  return (
    <div className="min-h-screen bg-mintual-light flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-sm p-12">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-mintual-dark mb-4">
            We Couldn't Find a Match
          </h1>
          <p className="text-lg text-mintual-gray mb-8">
            Based on the information you provided, you may not currently qualify for our lending 
            partners' requirements. This doesn't mean you won't qualify in the future!
          </p>
          <div className="bg-mintual-light rounded-xl p-6 text-left mb-8">
            <h2 className="text-xl font-semibold text-mintual-dark mb-4">Common reasons for this result:</h2>
            <ul className="text-mintual-gray space-y-2">
              <li className="flex gap-2">
                <span className="text-mintual-accent">•</span>
                Business has been operating for less than 6 months
              </li>
              <li className="flex gap-2">
                <span className="text-mintual-accent">•</span>
                Annual revenue below lender minimums
              </li>
              <li className="flex gap-2">
                <span className="text-mintual-accent">•</span>
                Business type not currently served by our partners
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-mintual-dark">What can you do?</h2>
            <ul className="text-mintual-gray space-y-2">
              <li>Continue building your business history</li>
              <li>Focus on increasing revenue</li>
              <li>Check back with us in a few months</li>
            </ul>
          </div>
          <div className="mt-8 pt-8 border-t">
            <p className="text-mintual-gray mb-4">Have questions about your eligibility?</p>
            <p className="text-mintual-dark font-semibold">(855) 704-7458</p>
            <p className="text-mintual-gray text-sm">M-F 9am-6pm ET</p>
          </div>
          <div className="mt-8 space-x-4">
            <Link
              href="/"
              className="inline-block text-mintual-accent hover:underline"
            >
              ← Back to Homepage
            </Link>
            <Link
              href="/resources"
              className="inline-block text-mintual-accent hover:underline"
            >
              Browse Resources →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
