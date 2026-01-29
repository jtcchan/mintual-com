import Link from 'next/link'
import Image from 'next/image'

const footerNav = {
  company: [
    { name: 'About us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
  lending: [
    { name: 'Borrow for Your Business', href: '/apply' },
    { name: 'How it Works', href: '#' },
    { name: 'Rates and Fees', href: '#' },
  ],
  resources: [
    { name: 'Success Stories', href: '#' },
    { name: 'Support Center', href: '#' },
    { name: 'Blog', href: '/resources' },
  ],
  tools: [
    { name: 'Business Loan Calculator', href: '/calculator' },
    { name: 'Business Loans Guide', href: '/resources' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-mintual-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Mintual"
              width={120}
              height={32}
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm mb-4">
              Mintual helps you find and compare funding options for your small business in Canada.
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

          {/* Nav Columns */}
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              {footerNav.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Lending</h5>
            <ul className="space-y-2">
              {footerNav.lending.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Resources</h5>
            <ul className="space-y-2">
              {footerNav.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Tools</h5>
            <ul className="space-y-2">
              {footerNav.tools.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-xs leading-relaxed">
            <strong>Disclaimer:</strong> Loans offered by our lending partners may be subject to credit approval, business health, or other criteria they deem fit. 13861716 Canada Inc., DBA Mintual is a small business loan search and comparison platform, not a lender. Submitting enquiries matches you with a qualified lending partner for assistance. Mintual doesn't arrange or underwrite mortgage loans. Loan amounts, terms, and rates will be subject to our lending partner products and credit assessment and may change at any time. For up-to-date information on small business lending offers and criteria, we advise referring to our lending partners.
          </p>
          <p className="text-gray-500 text-xs leading-relaxed mt-4">
            Defaults lead to termination of payment plans and debt collection. We work with lending providers that follow fair collection practices that adhere to Canadian laws. Consultations with Mintual and partners are confidential and risk-free. Mintual does not charge any fees, deposits, or insurance payments, nor offer subscription services. Offers on the website may be from third-party advertisers; we aren't their agent, representative, or broker and don't endorse specific offers. Advertiser-provided information is shown without warranty. Offers are subject to approval and terms. We receive compensation for displaying offers, which may affect their appearance and order. Not all products or offers are included.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            2025 © Mintual. All rights reserved. Mintual are trademarks of 13861716 Canada Inc.
          </p>
          <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
