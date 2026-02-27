'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-mintual-dark">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-white.png"
            alt="Mintual"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/resources"
            style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', textDecoration: 'none' }}
            className="hover:text-mintual-accent transition"
          >
            Resources
          </Link>
          <Link
            href="/apply"
            style={{
              backgroundColor: '#4cbd97',
              color: '#fff',
              borderTopLeftRadius: '100px',
              borderBottomRightRadius: '100px',
              padding: '15px 50px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
            }}
            className="hover:bg-mintual-accent-hover transition"
          >
            Apply Online
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-mintual-dark border-t border-gray-700">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/resources"
              className="text-white hover:text-mintual-accent transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/apply"
              className="bg-mintual-accent text-white px-6 py-3 rounded-tl-full rounded-br-full font-semibold text-center uppercase text-sm tracking-wide hover:bg-mintual-accent-hover transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Online
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
