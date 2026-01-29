import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Mintual',
  description: 'Privacy Policy for Mintual - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-mintual-dark text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 mt-2">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-mintual-dark mb-4">Introduction</h2>
            <p className="text-mintual-gray mb-6">
              13861716 Canada Inc., doing business as Mintual ("Mintual," "we," "us," or "our"), 
              is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-mintual-dark mb-4 mt-8">Information We Collect</h2>
            <p className="text-mintual-gray mb-4">
              We may collect information about you in various ways, including:
            </p>
            <ul className="text-mintual-gray mb-6 space-y-2">
              <li>Personal information you provide when applying for financing (name, email, phone number, business information)</li>
              <li>Financial information necessary for loan matching</li>
              <li>Information collected automatically through cookies and similar technologies</li>
              <li>Information from third-party sources</li>
            </ul>

            <h2 className="text-2xl font-bold text-mintual-dark mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-mintual-gray mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-mintual-gray mb-6 space-y-2">
              <li>Match you with appropriate lending partners</li>
              <li>Process your applications</li>
              <li>Communicate with you about your application status</li>
              <li>Improve our services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-mintual-dark mb-4 mt-8">Information Sharing</h2>
            <p className="text-mintual-gray mb-6">
              We may share your information with lending partners to facilitate your loan application. 
              We do not sell your personal information to third parties for marketing purposes.
            </p>

            <h2 className="text-2xl font-bold text-mintual-dark mb-4 mt-8">Data Security</h2>
            <p className="text-mintual-gray mb-6">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-mintual-dark mb-4 mt-8">Your Rights</h2>
            <p className="text-mintual-gray mb-6">
              You have the right to access, correct, or delete your personal information. 
              To exercise these rights, please contact us at privacy@mintual.com.
            </p>

            <h2 className="text-2xl font-bold text-mintual-dark mb-4 mt-8">Contact Us</h2>
            <p className="text-mintual-gray mb-6">
              If you have questions about this Privacy Policy, please contact us at:<br />
              Email: privacy@mintual.com<br />
              Phone: (855) 704-7458
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
