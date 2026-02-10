'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaRocket, FaSeedling, FaUsers, FaHospital, FaIndustry, FaChartLine, FaArrowRight, FaHandshake, FaGlobe, FaStar } from 'react-icons/fa'

export default function Home() {
  const focusAreas = [
    { icon: <FaSeedling />, title: 'Agribusiness', description: 'Integrated farming and soil health management' },
    { icon: <FaRocket />, title: 'Technology', description: 'Digital solutions and innovation' },
    { icon: <FaHospital />, title: 'Healthcare', description: 'Medical services and health technology' },
    { icon: <FaIndustry />, title: 'Manufacturing', description: 'Industrial production and supply chain' },
    { icon: <FaChartLine />, title: 'Infrastructure', description: 'Development and engineering projects' },
    { icon: <FaChartLine />, title: 'Finance', description: 'Investment and financial services' },
  ]

  const stats = [
    { number: '5', label: 'Strategic Sectors' },
    { number: '8+', label: 'Partner Organizations' },
    { number: '2026', label: 'BiFor Event Year' },
    { number: '2', label: 'Nations United' },
  ]

  const benefits = [
    { icon: <FaHandshake />, title: 'Strategic Partnerships', description: 'Connect with high-level investors and business leaders' },
    { icon: <FaGlobe />, title: 'Global Reach', description: 'Bridge Ghana and China for mutual growth' },
    { icon: <FaStar />, title: 'Expert Guidance', description: 'Access to industry experts and consultants' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/80 via-royal-blue/75 via-royal-blue/70 to-golden/40"></div>
        
        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-golden rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-golden-dark rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-width px-4 md:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Let's <span className="text-golden">Accelerate</span> Growth
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-100 max-w-3xl mx-auto">
              Empowering businesses across Ghana and China through innovation, strategic partnerships, and sustainable development
            </p>
            <p className="text-lg mb-8 text-gray-200">
              In collaboration with the Embassy of the Republic of Ghana in the People's Republic of China
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <Link href="/bifor2026" className="btn-primary text-lg">
                Explore BiFor 2026 <FaArrowRight className="inline ml-2" />
              </Link>
              <Link href="/sponsor" className="btn-secondary bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-royal-blue text-lg">
                Become a Sponsor
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-golden/20">
                <h3 className="text-3xl md:text-4xl font-bold text-golden mb-2">{stat.number}</h3>
                <p className="text-gray-200 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Quick Intro */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Who We Are
            </motion.h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ROMSJ Global Tech is an investment advisory company helping individuals and businesses make informed financial decisions. 
              We facilitate the exchange of goods, services, and financial assets across local and global markets using technology, 
              while promoting business cooperation between China and Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl text-golden mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* BiFor 2026 Highlight */}
      <section className="section-padding gradient-bg-blue">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                BiFor 2026
                <span className="block text-golden mt-2">比福尔 BiFor 2026</span>
              </h2>
              <p className="text-xl text-gray-100 mb-6">
                A transformative business forum connecting high-level Chinese investors with Ghanaian stakeholders across strategic development sectors.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-golden text-2xl mr-3">✓</span>
                  <p className="text-gray-100">Network with VIPs, business leaders, and government figures</p>
                </div>
                <div className="flex items-start">
                  <span className="text-golden text-2xl mr-3">✓</span>
                  <p className="text-gray-100">Access cutting-edge industry knowledge and insights</p>
                </div>
                <div className="flex items-start">
                  <span className="text-golden text-2xl mr-3">✓</span>
                  <p className="text-gray-100">Discover strategic partnership opportunities</p>
                </div>
                <div className="flex items-start">
                  <span className="text-golden text-2xl mr-3">✓</span>
                  <p className="text-gray-100">Aligned with Ghana's BIG PUSH policy and AfCFTA initiative</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/bifor2026" className="btn-primary">
                  Event Details
                </Link>
                <Link href="/sponsor" className="btn-secondary border-white text-white hover:bg-white hover:text-royal-blue">
                  Sponsor This Event
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-golden/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-golden mb-6">Why Attend BiFor 2026?</h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-start">
                  <FaRocket className="text-golden mt-1 mr-3 flex-shrink-0" />
                  <span>Accelerate business growth through expert insights</span>
                </li>
                <li className="flex items-start">
                  <FaUsers className="text-golden mt-1 mr-3 flex-shrink-0" />
                  <span>Connect with peers and potential partners</span>
                </li>
                <li className="flex items-start">
                  <FaHandshake className="text-golden mt-1 mr-3 flex-shrink-0" />
                  <span>Find strategic collaborators for joint ventures</span>
                </li>
                <li className="flex items-start">
                  <FaGlobe className="text-golden mt-1 mr-3 flex-shrink-0" />
                  <span>Boost brand visibility and recognition</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-golden mt-1 mr-3 flex-shrink-0" />
                  <span>Gain competitive advantage in the market</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-4">
              Our Focus Areas
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Driving future growth across major sectors to empower people and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                className="card hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl text-golden mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold text-royal-blue mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-4">
              Our Partners
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In collaboration with leading organizations supporting BiFor 2026
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { name: 'KGL Group', logo: '/images/partners/KGIlogo.jpeg' },
              { name: 'CDC', logo: '/images/partners/CDClogo.png' },
              { name: 'GCB', logo: '/images/partners/GCBlogo.jpeg' },
              { name: 'Stanbic Bank', logo: '/images/partners/StanbicBankLogo.jpeg' },
              { name: 'Agricultural Development Bank', logo: '/images/partners/ADBlogo.jpeg' },
              { name: 'Ghana Investment Promotion Centre', logo: '/images/partners/GIPClogo.jpeg' },
              { name: 'Diaspora Affairs', logo: '/images/partners/diasporaAffairsLogo.jpeg' },
              { name: 'Ministry of Trade and Agri-business', logo: '/images/partners/MinistryOfTradeLogo.jpeg' }
            ].map((partner, index) => (
              <Link key={index} href="/partners">
                <motion.div
                  className="bg-white p-6 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-gray-100 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative w-full h-20">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/partners" className="btn-primary">
              Learn More About Our Partners
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-golden">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-6">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-royal-blue-dark mb-8 max-w-2xl mx-auto">
              Join us in creating opportunities for economic growth, partnership, and innovation across Ghana and China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-royal-blue text-white hover:bg-royal-blue-dark font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Get in Touch
              </Link>
              <Link href="/bifor2026" className="bg-white text-royal-blue hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Register for BiFor 2026
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
