import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { value: '$13B', label: 'Funding provided to businesses globally' },
  { value: '<48 Hrs', label: 'Get funding options within 2 business days' },
  { value: '3,500+', label: 'Canadian businesses applied with Mintual' },
]

const benefits = [
  { icon: '/images/apply-icon.png', title: 'Apply in 5 minutes', desc: 'Just enter your revenue and years of operations. No credit checks required.' },
  { icon: '/images/match-icon.png', title: 'Best Match', desc: 'Get personalized offers based on your funding needs and highest likelihood of success.' },
  { icon: '/images/lenders-icon.png', title: 'Certified Lenders', desc: 'Get funding from 35+ trusted, pre-vetted partners that require regulatory approval.' },
]

const products = [
  { icon: '/images/icons/fixed-term.png', title: 'Fixed Term Loans', desc: 'Pay a set amount for a fixed amount of time' },
  { icon: '/images/icons/line-of-credit.png', title: 'Lines of Credit', desc: 'Only pay on what you use from a credit line' },
  { icon: '/images/icons/flex-funds.png', title: 'Flex Funds', desc: 'Flexible repayment based on daily sales' },
  { icon: '/images/icons/inventory.png', title: 'Inventory Financing', desc: 'Finance your inventory purchases' },
  { icon: '/images/icons/grants.png', title: 'Government Grants', desc: 'Access available government funding programs' },
  { icon: '/images/icons/venture.png', title: 'Venture Financing', desc: 'Growth capital for scaling businesses' },
]

const steps = [
  { num: 1, title: 'Apply in 5 minutes', subtitle: 'No credit checks required', desc: "Just enter your revenue, years of operations, and the type of funding you're after." },
  { num: 2, title: 'Get best matches', subtitle: 'As fast as one business day', desc: 'Get personalized funding options based on your answers and likelihood of success from over 3500+ past applications.' },
  { num: 3, title: 'Review funding offers', subtitle: 'No commitments necessary', desc: 'Your lending advisors will help you find your best offers based on your situation and needs.' },
  { num: 4, title: 'Get your funds', subtitle: 'Available as soon as same day', desc: 'Complete the process and the money is in your business bank account in as fast as 24 hours.' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="text-white pt-60 pb-36 md:pt-72 md:pb-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-[76px] font-semibold mb-6 leading-tight drop-shadow-[0_0_25px_rgba(0,0,0,0.4)]">
              A smarter way to get business financing.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 drop-shadow-[0_0_6px_rgba(0,0,0,0.25)]">
              Mintual helps you find and compare multiple business funding options for your small business, giving you more time on things that matter.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-mintual-accent text-white px-12 py-5 rounded-tl-full rounded-br-full font-semibold text-lg uppercase tracking-wide hover:bg-mintual-accent-hover transition"
            >
              Apply Online
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-mintual-dark py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="text-white">
                <div className="text-4xl md:text-[46px] font-semibold text-mintual-accent mb-2 leading-none">{stat.value}</div>
                <p className="text-mintual-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mintual Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mintual-dark mb-4">Why work with Mintual?</h2>
            <p className="text-lg text-mintual-gray max-w-2xl mx-auto">
              <em>Business funding is unnecessarily hard.</em> With Mintual, you can pre-qualify with multiple lending partners at once, thanks to our simplified application process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center p-6 bg-mintual-light rounded-xl">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-mintual-dark mb-2">{benefit.title}</h3>
                <p className="text-mintual-gray">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-mintual-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mintual-dark mb-4">Apply once. Get the best offers.</h2>
            <p className="text-lg text-mintual-gray max-w-2xl mx-auto">
              With multiple financing products and partners, it's easy to find the best financing products based on your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div key={i} className="bg-white p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-center w-14 h-14">
                    <Image
                      src={product.icon}
                      alt={product.title}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <p className="text-lg font-semibold text-mintual-dark mb-2">{product.title}</p>
                <p className="text-mintual-gray text-sm">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-mintual-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Small Business Lending made fast, friendly, and simple.
              </h2>
              <Link
                href="/apply"
                className="inline-block bg-mintual-accent text-white px-10 py-4 rounded-tl-full rounded-br-full font-semibold uppercase tracking-wide hover:bg-mintual-accent-hover transition"
              >
                Apply Online
              </Link>
              <p className="text-mintual-gray mt-4 text-sm">Applying will not impact your credit score.</p>
            </div>
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-mintual-accent rounded-full flex items-center justify-center font-bold">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-mintual-accent text-sm mb-1">{step.subtitle}</p>
                    <p className="text-mintual-gray text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Apply Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#4dbd97] to-[#3898ec] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                A modern way to apply for Small Business Financing
              </h2>
              <ul className="space-y-3 text-lg">
                <li>✓ Easy online process focused on what matters</li>
                <li>✓ Straightforward payment terms</li>
                <li>✓ No in-person meetings required</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/modern-apply.png"
                alt="Modern application process"
                width={500}
                height={400}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-mintual-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-mintual-dark mb-6">
            Take your business further with small business financing tailored to you.
          </h2>
          <Link
            href="/apply"
            className="inline-block bg-mintual-accent text-white px-10 py-4 rounded-tl-full rounded-br-full font-semibold uppercase tracking-wide hover:bg-mintual-accent-hover transition"
          >
            Apply Online
          </Link>
          <p className="text-mintual-gray mt-4 text-sm">Applying will not impact your<br/>credit score.</p>
        </div>
      </section>
    </>
  )
}
