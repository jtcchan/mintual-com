import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-mintual-dark text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Logo + Description + Social */}
        <div className="mb-10">
          <Image
            src="/images/logo-white.png"
            alt="Mintual"
            width={120}
            height={32}
            className="h-8 w-auto mb-4"
          />
          <p className="text-gray-400 text-sm mb-4">
            Mintual helps you finds and compare funding options for your small business in Canada.
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook">
              <Image src="/images/social-facebook.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="#" aria-label="Twitter">
              <Image src="/images/social-twitter.png" alt="Twitter" width={24} height={24} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Image src="/images/social-linkedin.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="#" aria-label="YouTube">
              <Image src="/images/social-youtube.png" alt="YouTube" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-500 text-xs leading-relaxed">
            <strong>Disclaimer: </strong>Loans offered by our lending partners may be subject to credit approval, business health, or other criteria they deem fit. 13861716 Canada Inc., DBA Mintual is a small business loan search and comparison platform, not a lender. Submitting enquiries matches you with a qualified lending partner for assistance. Mintual doesn&apos;t arrange or underwrite mortgage loans. Loan amounts, terms, and rates will be subject to our lending partner products and credit assessment and may change at any time. For up-to-date information on small business lending offers and criteria, we advise referring to our lending partners.
          </p>
          <p className="text-gray-500 text-xs leading-relaxed mt-4">
            Defaults lead to termination of payment plans and debt collection. We work with lending providers that follow fair collection practices that adhere to Canadian laws. Consultations with Mintual and partners are confidential and risk-free. Mintual does not charge any fees, deposits, or insurance payments, nor offer subscription services. Offers on the website may be from third-party advertisers; we aren&apos;t their agent, representative, or broker and don&apos;t endorse specific offers. Advertiser-provided information is shown without warranty. Offers are subject to approval and terms. We receive compensation for displaying offers, which may affect their appearance and order. Not all products or offers are included.
          </p>
        </div>

        {/* Copyright + Privacy */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-gray-700 pt-4">
          <p className="text-gray-500 text-sm">
            2025 © Mintual. All rights reserved.<br />
            Mintual are trademarks of 13861716 Canada Inc and other trademarks are the property of their respective owners.
          </p>
          <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
