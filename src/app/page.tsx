import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { value: '$13B', label: 'Funding provided to\nbusinesses globally' },
  { value: '<48 Hrs', label: 'Get funding options within 2 business days.' },
  { value: '3,500+', label: 'Canadian business applied\nwith Mintual in 2022' },
]

const benefits = [
  { icon: '/images/apply-icon.png', title: 'Apply in 5 minutes', desc: 'Just enter your revenue and years of operations. No credit checks required.' },
  { icon: '/images/match-icon.png', title: 'Best Match', desc: 'Get personalized offers based on your funding needs and highest likelihood of success.' },
  { icon: '/images/lenders-icon.png', title: 'Certified Lenders', desc: 'Get funding from 35+ trusted, pre-vetted partners that require regulatory approval.' },
]

const products = [
  { icon: '/images/icons/fixed-term.png', title: 'Fixed Term Loans', desc: 'Pay a set amount for a fixed amount of time' },
  { icon: '/images/icons/line-of-credit.png', title: 'Lines of Credit', desc: 'Only pay on what use from a credit line' },
  { icon: '/images/icons/flex-funds.png', title: 'Flex Funds', desc: 'Flexible repayment based on daily sales' },
  { icon: '/images/icons/inventory.png', title: 'Inventory Financing', desc: 'Pay a set amount for a fixed amount of time' },
  { icon: '/images/icons/grants.png', title: 'Government Grants', desc: 'Pay a set amount for a fixed amount of time' },
  { icon: '/images/icons/venture.png', title: 'Venture Financing', desc: 'Pay a set amount for a fixed amount of time' },
]

const steps = [
  { num: 1, title: 'Apply in 5 minutes', subtitle: 'No credit checks required.', desc: "Just enter your revenue, years of operations, and the type of funding you're after." },
  { num: 2, title: 'Get best matches', subtitle: 'As fast as one business day', desc: 'Get personalized funding options based on your answers and likelihood of success from over 3500+ past applications on Mintual.' },
  { num: 3, title: 'Review funding offers', subtitle: 'No commitments necessarily', desc: 'Your lending advisors will the help you find your best offers based on your situation and needs.' },
  { num: 4, title: 'Get your funds', subtitle: 'Available as soon as same day', desc: 'Complete the process and the money is in your business bank account in as fast as 24 hours.' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white relative hero-section"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundPosition: '50% 0',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          paddingTop: '240px',
          paddingBottom: '140px',
        }}
      >
        <div
          className="mx-auto"
          style={{ width: '1200px', maxWidth: '100%', paddingLeft: '10px', paddingRight: '10px' }}
        >
          <div className="w-full md:w-3/4">
            <h1
              className="font-semibold mb-6"
              style={{
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '76px',
                fontWeight: 600,
                lineHeight: '1em',
                textShadow: '0 0 25px rgba(0,0,0,0.4), 0 0 6px rgba(0,0,0,0.25)',
              }}
            >
              A smarter way to get business financing.
            </h1>
            <p
              className="mb-10"
              style={{
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '22px',
                fontWeight: 400,
                textShadow: '0 0 6px rgba(0,0,0,0.25)',
              }}
            >
              Mintual helps you find and compare multiple business funding options for your small business, giving you more time on things that matter.
            </p>
            <Link
              href="/apply"
              style={{
                color: '#fff',
                textTransform: 'uppercase',
                backgroundColor: '#4cbd97',
                borderTopLeftRadius: '100px',
                borderBottomRightRadius: '100px',
                marginTop: '40px',
                padding: '20px 50px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Apply Online
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section — overlapping card */}
      <section style={{ backgroundColor: '#f9fafb', paddingBottom: '60px' }}>
        {/* White card that overlaps hero bottom */}
        <div
          className="mx-auto stats-card-grid"
          style={{
            backgroundColor: '#fff',
            borderRadius: '30px',
            boxShadow: '11px 0 20px 18px rgba(0,0,0,0.07)',
            width: '900px',
            maxWidth: 'calc(100% - 40px)',
            marginTop: '-70px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '15px 30px',
            position: 'relative',
            zIndex: 10,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '10px' }}>
              <div
                style={{
                  color: '#4cbd97',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '46px',
                  fontWeight: 600,
                  lineHeight: '1em',
                  textAlign: 'center',
                }}
              >
                {stat.value}
              </div>
              <p
                style={{
                  color: '#828282',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  textAlign: 'center',
                  whiteSpace: 'pre-line',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Mintual Section */}
      <section style={{ backgroundColor: '#f9fafb', paddingTop: '20px', paddingBottom: '60px' }}>
        <div
          className="mx-auto"
          style={{ width: '1200px', maxWidth: '100%', paddingLeft: '20px', paddingRight: '20px' }}
        >
          {/* Heading */}
          <h2
            style={{
              color: '#000',
              textAlign: 'center',
              marginTop: '60px',
              marginBottom: '20px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '46px',
              fontWeight: 600,
              lineHeight: '1em',
            }}
          >
            Why work with Mintual?
          </h2>
          <p
            className="text-center mx-auto"
            style={{
              color: '#828282',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              lineHeight: '150%',
              maxWidth: '700px',
            }}
          >
            <em>Business funding is unnecessarily hard. </em>With Mintual, you can pre-qualify with multiple lending partners at once, thanks to our simplified application process with pre-vetted financial partners. See how much you can qualify today.
          </p>
          {/* 3-card grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '50px',
              marginTop: '60px',
            }}
            className="grid-why-mintual"
          >
            {benefits.map((benefit, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid #e8e8e8',
                  borderRadius: '0 20px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '40px',
                  display: 'flex',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.07)',
                  textAlign: 'center',
                  backgroundColor: '#fff',
                }}
              >
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={64}
                  height={64}
                  style={{ marginBottom: '0' }}
                />
                <p
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '20px',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '29px',
                    fontWeight: 600,
                    lineHeight: '26px',
                  }}
                >
                  {benefit.title}
                </p>
                <p style={{ color: '#828282', fontFamily: 'Poppins, sans-serif', fontSize: '18px', lineHeight: '150%' }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ paddingTop: '0', paddingBottom: '100px', backgroundColor: '#fff' }}>
        <div
          className="mx-auto"
          style={{ width: '1200px', maxWidth: '100%', paddingLeft: '20px', paddingRight: '20px' }}
        >
          <h2
            style={{
              color: '#000',
              textAlign: 'center',
              marginTop: '60px',
              marginBottom: '20px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '46px',
              fontWeight: 600,
              lineHeight: '1em',
            }}
          >
            Apply once. Get the best offers.
          </h2>
          <p
            className="text-center mx-auto"
            style={{
              color: '#828282',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              lineHeight: '150%',
              maxWidth: '700px',
            }}
          >
            With multiple financing products and partners, it&apos;s easy to find the best financing products based on your business needs.
          </p>
          {/* 6-card grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
              gap: '15px',
              width: '100%',
              margin: '40px auto',
            }}
            className="grid-products"
          >
            {products.map((product, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#fff',
                  textAlign: 'center',
                  borderTopRightRadius: '20px',
                  borderBottomLeftRadius: '20px',
                  padding: '20px 10px',
                  boxShadow: '0 11px 20px 10px rgba(0,0,0,0.07)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                  <Image
                    src={product.icon}
                    alt={product.title}
                    width={40}
                    height={40}
                  />
                </div>
                <p
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}
                >
                  {product.title}
                </p>
                <p
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 300,
                  }}
                >
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section — .most-people */}
      <section
        className="most-people-section"
        style={{
          backgroundImage:
            "url('/images/howitworks-person.png'), url('/images/howitworks-bg.png')",
          backgroundPosition: '100% 0, 0%',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundSize: '50% 90%, 100% 100%',
          paddingTop: '40px',
          paddingBottom: '80px',
        }}
      >
        <div
          className="mx-auto howitworks-inner"
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '1200px',
            maxWidth: '100%',
            paddingLeft: '10px',
            paddingRight: '10px',
            paddingBottom: '40px',
          }}
        >
          {/* Left column */}
          <div className="howitworks-left" style={{ flex: '0 0 50%', maxWidth: '50%', paddingRight: '20px' }}>
            <h2
              style={{
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '46px',
                fontWeight: 600,
                lineHeight: '1.2em',
                textAlign: 'left',
                marginBottom: '0',
                marginTop: '60px',
              }}
            >
              Small Business Lending made fast, friendly, and simple.
            </h2>
            <Link
              href="/apply"
              style={{
                color: '#fff',
                textTransform: 'uppercase',
                backgroundColor: '#4cbd97',
                borderTopLeftRadius: '100px',
                borderBottomRightRadius: '100px',
                marginTop: '40px',
                padding: '20px 50px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Apply Online
            </Link>
            <p style={{ color: '#014c38', fontFamily: 'Poppins, sans-serif', fontSize: '16px', marginTop: '10px' }}>
              Applying will not impact your credit score.
            </p>
          </div>
          {/* Right column — steps */}
          <div className="howitworks-right" style={{ flex: '0 0 50%', maxWidth: '50%' }}>
            {steps.map((step) => (
              <div
                key={step.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '.25fr 1fr',
                  gap: '16px',
                  marginBottom: '20px',
                }}
              >
                {/* Number circle — white bg, dark green text */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                  <div
                    style={{
                      backgroundColor: '#fff',
                      color: '#023d2e',
                      textAlign: 'center',
                      borderRadius: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '60px',
                      height: '60px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '38px',
                      fontWeight: 600,
                      lineHeight: '1',
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </div>
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 600, margin: '0 0 4px' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#4cbd97', fontFamily: 'Poppins, sans-serif', fontSize: '14px', margin: '0 0 4px' }}>
                    {step.subtitle}
                  </p>
                  <p style={{ color: '#014c38', fontFamily: 'Poppins, sans-serif', fontSize: '14px', margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Apply Section — .a-heading / .background-div */}
      <section
        className="modern-apply-section"
        style={{
          backgroundImage: "url('/images/modern-apply-bg.png')",
          backgroundPosition: '0%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          overflowX: 'hidden',
        }}
      >
        <div
          style={{
            width: '1100px',
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: '180px',
            paddingBottom: '220px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
          }}
          className="modern-apply-inner"
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '45px',
                fontWeight: 600,
                lineHeight: '55px',
                color: '#fff',
                margin: 0,
              }}
            >
              A modern way to apply for Small Business Financing
            </h2>
            <p
              style={{
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                lineHeight: '150%',
                marginTop: '20px',
              }}
            >
              ✓ Easy online, process focused on what matters<br />
              ✓ Straightforward payment terms<br />
              ✓ No in-person meetings required
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              src="/images/modern-apply.png"
              alt="Modern application process"
              width={547}
              height={438}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section — .cta-footer */}
      <section style={{ backgroundColor: '#000', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#fff',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '46px',
              fontWeight: 600,
              lineHeight: '1em',
              textAlign: 'center',
              marginBottom: '0',
            }}
          >
            Take your business further with small business financing tailored to you.
          </h2>
          <Link
            href="/apply"
            style={{
              color: '#fff',
              textTransform: 'uppercase',
              backgroundColor: '#4cbd97',
              borderTopLeftRadius: '100px',
              borderBottomRightRadius: '100px',
              marginTop: '40px',
              padding: '20px 50px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Apply Online
          </Link>
          <p style={{ color: '#828282', fontFamily: 'Poppins, sans-serif', fontSize: '16px', marginTop: '16px' }}>
            Applying will not impact your<br />credit score.
          </p>
        </div>
      </section>
    </>
  )
}
