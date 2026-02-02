'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'BiFor 2026', path: '/bifor2026' },
    { name: 'Partners', path: '/partners' },
    { name: 'Become a Sponsor', path: '/sponsor' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-royal-blue-dark shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-width flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src="/images/logo.png"
              alt="ROMSJ Global Tech"
              fill
              className="object-contain"
              onError={(e) => {
                // Fallback if logo not found
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-display text-lg md:text-xl font-bold">
              ROMSJ Global Tech
            </span>
            <span className="text-golden text-xs md:text-sm">
              Let's Accelerate Growth
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`text-white hover:text-golden transition-colors duration-300 font-medium ${
                  link.name === 'BiFor 2026' ? 'text-golden' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <Link
          href="/sponsor"
          className="hidden lg:block btn-primary"
        >
          Become a Sponsor
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-royal-blue-dark border-t border-golden/20">
          <ul className="flex flex-col space-y-4 py-6 px-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-white hover:text-golden transition-colors duration-300 font-medium block ${
                    link.name === 'BiFor 2026' ? 'text-golden' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/sponsor"
                onClick={() => setIsOpen(false)}
                className="btn-primary inline-block w-full text-center"
              >
                Become a Sponsor
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
