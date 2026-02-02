'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'

export default function Partners() {
  const partners = [
    {
      name: 'KGL Group',
      logo: '/images/partners/KGIlogo.jpeg',
      description: 'KGL Group is a wholly-owned Ghanaian group of companies, with interests in Technology Innovation, FinTech, Logistics, Trade, Property Development, Gaming and Commerce. The parent company commands a network of specialized business units that promote efficient solutions and effective tech-based related services to regions.',
      highlights: [
        'Technology Innovation and FinTech solutions',
        'Strategic logistics and trade operations',
        'Property development and gaming ventures',
        'Tech-based commercial services across regions'
      ]
    },
    {
      name: 'CDC, ICDC and DCPF',
      logo: '/images/partners/CDClogo.png',
      description: 'The Chamber of Digital Commerce (CDC), together with its subsidiaries—the International Chamber of Digitalization and Commerce (ICDC) and the Digitalization and Commerce Policy Forum (DCPF)—is a non-partisan, non-profit organization dedicated to advancing digitalization, fintech, e-commerce, and commerce across the globe.',
      highlights: [
        'Advancing digitalization and fintech globally',
        'Supporting e-commerce and blockchain technologies',
        'Promoting cybersecurity and artificial intelligence',
        'Voluntary industry association for digital technologies'
      ]
    },
    {
      name: 'Stanbic Bank',
      logo: '/images/partners/StanbicBankLogo.jpeg',
      description: 'The bank is one of Ghana\'s largest fund managers with world-class money management expertise, licensed by the Securities and Exchange Commission and registered with the National Pensions Regulatory Authority as a pension fund manager.',
      highlights: [
        'Ghana\'s largest fund managers',
        'World-class money management expertise',
        'Licensed pension fund manager',
        'Robust digital investment platforms'
      ]
    },
    {
      name: 'GCB Bank PLC',
      logo: '/images/partners/GCBlogo.jpeg',
      description: 'GCB Bank PLC is Ghana\'s first and largest indigenous bank with the vision to be the leading bank in all our markets. Established in 1953 and listed on the Ghana Stock Exchange since 1996, the bank celebrates seventy (70) years of providing unrivalled financial solutions.',
      highlights: [
        'Ghana\'s first and largest indigenous bank (since 1953)',
        'Over 185 branches and 340 ATMs nationwide',
        'Rated Ghana\'s safest bank by Moody\'s, Fitch, and S&P',
        'Most compliant bank in Africa by ACCPA'
      ]
    },
    {
      name: 'Agricultural Development Bank PLC',
      logo: '/images/partners/ADBlogo.jpeg',
      description: 'Agricultural Development Bank PLC (ADB) is a universal bank offering a full range of banking products and services in Consumer, Corporate, Parastatals/Public Sector, SME, Agribusiness, Trade and E-Banking services. Its business focus is universal banking with a developmental focus on agriculture and more.',
      highlights: [
        'Universal banking with agricultural development focus',
        'Listed on Ghana Stock Exchange since 2016',
        'Comprehensive SME and agribusiness services',
        'Strong public sector and corporate banking'
      ]
    },
    {
      name: 'Ghana Investment Promotion Centre',
      logo: '/images/partners/GIPClogo.jpeg',
      description: 'The Ghana Investment Promotion Centre is Ghana\'s foremost investment promotion agency under the Office of the President with a vision to make Ghana the first destination of choice for investing in Africa by providing seamless one-stop-shop high value-added services.',
      highlights: [
        'Over USD 12 billion FDI recorded in past four years',
        'One-stop-shop investment facilitation services',
        'Technology transfer and partnership promotion',
        'Investment law advocacy and best practices'
      ]
    },
    {
      name: 'Diaspora Affairs',
      logo: '/images/partners/diasporaAffairsLogo.jpeg',
      description: 'The Diaspora Affairs, Office of the President (DAOOP), was established in February 2017. The objective behind establishing the office at the Presidency emphasizes the importance the government places on the contributions Ghanaians in the Diaspora make to the economy.',
      highlights: [
        'Established under Office of the President (2017)',
        'Building bridges between Ghana and diaspora communities',
        'Market access and expertise facilitation',
        'Leveraging diaspora knowledge and resources'
      ]
    },
    {
      name: 'Ministry of Trade and Agri-business',
      logo: '/images/partners/MinistryOfTradeLogo.jpeg',
      description: 'The Minister for Trade, Agribusiness, and Industry is responsible for promoting Ghana\'s industrial growth, agribusiness, and international trade, working to strengthen sectors, drive economic transformation, and implement policies like the AfCFTA.',
      highlights: [
        'Lead policy advisor on trade and industry',
        'Promoting industrial growth and agribusiness',
        'AfCFTA policy implementation',
        'Private sector development initiatives'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 gradient-bg-blue overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-golden rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>

        <div className="container-width relative z-10">
          <Link href="/" className="inline-flex items-center text-golden hover:text-golden-dark mb-8 transition-colors">
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Our Partners
            </h1>
            <div className="w-24 h-1 bg-golden mb-6"></div>
            <p className="text-xl text-gray-100 max-w-3xl">
              In collaboration with leading organizations supporting BiFor 2026 and driving economic growth across Ghana and China
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="space-y-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
                  {/* Logo Section */}
                  <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
                    <div className="relative w-full h-40">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold text-royal-blue mb-4">
                      {partner.name}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {partner.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-royal-blue mb-3">Key Highlights</h3>
                      {partner.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-golden text-xl mr-3 mt-1">✓</span>
                          <p className="text-gray-600">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            className="bg-gradient-to-r from-royal-blue to-navy rounded-2xl p-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in Becoming a Partner?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join our network of leading organizations supporting BiFor 2026 and driving economic growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-golden text-royal-blue hover:bg-golden-dark">
                Contact Us
              </Link>
              <Link href="/sponsor" className="btn-secondary border-white text-white hover:bg-white hover:text-royal-blue">
                View Sponsorship Options
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
