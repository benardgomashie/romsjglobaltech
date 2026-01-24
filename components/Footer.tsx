'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'BiFor 2026', path: '/bifor2026' },
    { name: 'Become a Sponsor', path: '/sponsor' },
    { name: 'Contact', path: '/contact' },
  ]

  const focusAreas = [
    'Agribusiness',
    'Technology',
    'Healthcare',
    'Manufacturing',
    'Infrastructure',
    'Finance',
  ]

  return (
    <footer className="bg-royal-blue-dark text-white">
      {/* Main Footer Content */}
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-golden text-xl font-bold mb-4">
              ROMSJ Global Tech
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              In collaboration with the Embassy of the Republic of Ghana in the People's Republic of China.
            </p>
            <p className="text-golden font-accent text-lg italic">
              Let's Accelerate Growth
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4 border-b-2 border-golden inline-block pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-golden transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4 border-b-2 border-golden inline-block pb-2">
              Focus Areas
            </h4>
            <ul className="space-y-2">
              {focusAreas.map((area) => (
                <li key={area} className="text-gray-300 text-sm flex items-center">
                  <span className="text-golden mr-2">▸</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4 border-b-2 border-golden inline-block pb-2">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <FaEnvelope className="text-golden mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@romsjglobaltech.com</span>
              </li>
              <li className="flex items-start text-sm">
                <FaPhone className="text-golden mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+233 XXX XXX XXX</span>
              </li>
              <li className="flex items-start text-sm">
                <FaMapMarkerAlt className="text-golden mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Ghana & China</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3 text-sm">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-golden transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-golden transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-golden transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-golden transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-golden/20">
        <div className="container-width py-6 px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} ROMSJ Global Tech Limited. All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              In partnership with{' '}
              <span className="text-golden">Embassy of Ghana in China</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
