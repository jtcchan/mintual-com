import Link from 'next/link'
import Image from 'next/image'

const navColumns = [
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Press', 'Environment'],
  },
  {
    title: 'Lending',
    links: ['Borrow for Your Business', 'Lend to Businesses', 'Become a Partner', 'How it Works', 'Rates and Fees', 'Statistics'],
  },
  {
    title: 'Resources',
    links: ['Success Stories', 'Support Center', 'Blog', 'COVID-19 Support'],
  },
  {
    title: 'Tools',
    links: ['Business Loan Calculator', 'Loan Rate Comparison', 'Business Loans Guide', 'Borrower Guide'],
  },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff' }}>
      <div
        className="mx-auto"
        style={{ maxWidth: '1200px', padding: '60px 20px 0' }}
      >
        {/* Top row: Logo+desc+social | Nav columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '40px',
            marginBottom: '40px',
          }}
          className="footer-top-grid"
        >
          {/* Logo + Description + Social */}
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Mintual"
              width={160}
              height={44}
              style={{ height: 'auto', marginBottom: '16px' }}
            />
            <p
              style={{
                color: '#828282',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '20px',
              }}
            >
              Mintual helps you finds and compare funding options for your small business in Canada.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" aria-label="Facebook">
                <Image src="/images/social-facebook.png" alt="Facebook" width={28} height={28} />
              </a>
              <a href="#" aria-label="Twitter">
                <Image src="/images/social-twitter.png" alt="Twitter" width={28} height={28} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Image src="/images/social-linkedin.png" alt="LinkedIn" width={28} height={28} />
              </a>
              <a href="#" aria-label="YouTube">
                <Image src="/images/social-youtube.png" alt="YouTube" width={28} height={28} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
            className="footer-nav-grid"
          >
            {navColumns.map((col) => (
              <div key={col.title}>
                <h5
                  style={{
                    color: '#fff',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                    marginTop: 0,
                  }}
                >
                  {col.title}
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      style={{
                        color: '#565857',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        textDecoration: 'none',
                        display: 'block',
                      }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ borderTop: '1px solid #333', paddingTop: '32px' }}>
          <p
            style={{
              color: '#828282',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px',
              lineHeight: '1.6',
            }}
          >
            <strong>Disclaimer: </strong>Loans offered by our lending partners may be subject to credit approval, business health, or other criteria they deem fit. 13861716 Canada Inc., DBA Mintual is a small business loan search and comparison platform, not a lender. Submitting enquiries matches you with a qualified lending partner for assistance. Mintual doesn&apos;t arrange or underwrite mortgage loans. Loan amounts, terms, and rates will be subject to our lending partner products and credit assessment and may change at any time. For up-to-date information on small business lending offers and criteria, we advise referring to our lending partners.
          </p>
          <p
            style={{
              color: '#828282',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px',
              lineHeight: '1.6',
              marginTop: '16px',
            }}
          >
            Defaults lead to termination of payment plans and debt collection. We work with lending providers that follow fair collection practices that adhere to Canadian laws. Consultations with Mintual and partners are confidential and risk-free. Mintual does not charge any fees, deposits, or insurance payments, nor offer subscription services. Offers on the website may be from third-party advertisers; we aren&apos;t their agent, representative, or broker and don&apos;t endorse specific offers. Advertiser-provided information is shown without warranty. Offers are subject to approval and terms. We receive compensation for displaying offers, which may affect their appearance and order. Not all products or offers are included.
          </p>
        </div>

        {/* Copyright + Privacy */}
        <div
          style={{
            marginTop: '32px',
            paddingTop: '16px',
            borderTop: '1px solid #333',
            paddingBottom: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <p style={{ color: '#828282', fontFamily: 'Poppins, sans-serif', fontSize: '14px', margin: 0 }}>
            2025 © Mintual. All rights reserved.<br />
            Mintual are trademarks of 13861716 Canada Inc and other trademarks are the property of their respective owners.
          </p>
          <Link
            href="/privacy"
            style={{
              color: '#828282',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
