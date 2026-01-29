import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer, Analytics, GTMNoScript } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mintual | Find The Right Small Business Loans',
  description: 'Mintual helps you find and compare multiple business funding options for your small business in Canada. Apply once, get matched with certified lenders.',
  keywords: 'small business loans, business financing, Canadian business loans, funding options',
  verification: {
    google: 't4B8ggCrFcqClWwx1remlXgvfvBkgl9vr5WfCPaEtP0',
    other: {
      'facebook-domain-verification': ['nsovp1wjczdo7qrhbsitdnzq7hszdn'],
    },
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        <GTMNoScript />
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
