'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCrown, FaStar, FaTrophy, FaUsers, FaEye, FaHandshake, FaGlobe, FaMicrophone, FaNetworkWired } from 'react-icons/fa'

export default function SponsorPage() {
  const sponsorshipReasons = [
    {
      icon: <FaUsers />,
      title: 'Networking',
      description: 'Connect with VIPs, business leaders, and government figures from Ghana and China',
    },
    {
      icon: <FaEye />,
      title: 'High-Profile Visibility',
      description: 'Association with influential personalities and decision-makers',
    },
    {
      icon: <FaGlobe />,
      title: 'Brand Exposure',
      description: 'Increase brand visibility, awareness, recognition across two dynamic markets',
    },
    {
      icon: <FaTrophy />,
      title: 'Competitive Advantage',
      description: 'Create differentiation from business competitors with a strong market presence',
    },
    {
      icon: <FaHandshake />,
      title: 'Targeted Audience Engagement',
      description: 'Align with the specific targeted audience for your company, products, and services',
    },
    {
      icon: <FaStar />,
      title: 'Building Credibility and Reputation',
      description: 'Alignment to this event gives your brand trustworthiness and prestige',
    },
    {
      icon: <FaNetworkWired />,
      title: 'CSR Recognition',
      description: 'Showcase commitment to multiculturalism and diaspora development',
    },
  ]

  const sponsorshipTiers = [
    {
      name: 'Title / Presenting Sponsor',
      icon: <FaCrown />,
      color: 'from-golden to-mustard',
      textColor: 'text-white',
      price: 'GHC 800,000 / $75,000',
      benefits: [
        'Meet all highly influential personalities',
        'One-on-one meetings with Chinese government officials',
        'Full 2-page spread for well-wishing and corporate message with product display',
        '8 VIP Tickets',
        'Full pages for adverts in the brochure',
        'Logo embossed on all event prints and on the back page of brochure',
        'Multiple pull-ups for display',
        'T-shirt branded with sponsor logo',
      ],
    },
    {
      name: 'Platinum Sponsor',
      icon: <FaStar />,
      color: 'from-gray-300 to-gray-400',
      textColor: 'text-gray-800',
      price: 'GHC 600,000 / $55,000',
      benefits: [
        'Meet all highly influential personalities',
        'One-on-one meetings with Chinese government officials',
        'Full 1-page for well-wishing message with product display',
        '6 VIP Tickets',
        'Full pages for adverts in the brochure',
        'Logo embossed on all event prints and on the back page of brochure',
        'Pull-up for display',
        'T-shirt branded with sponsor logo',
      ],
    },
  ]

  const investmentBenefits = [
    'Increased exposure of sponsor\'s business, products, and services',
    'Creation of network opportunities for the sponsor',
    'Enhancement of corporate image and brand reputation',
    'Direct access to decision-makers and influencers',
    'Opportunity for strategic partnerships and collaborations',
    'Media coverage and publicity',
    'Platform to showcase expertise and thought leadership',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden pt-32 md:pt-40">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/GhanaAndChinaForeignMinistersShakeHands.jpg)' }}
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/90 via-navy/88 to-golden/50"></div>
        
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 right-10 w-96 h-96 bg-golden rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="container-width px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Become a <span className="text-golden">Sponsor</span>
            </h1>
            <div className="w-32 h-1 bg-golden mx-auto mb-8"></div>
            <p className="text-xl md:text-3xl max-w-4xl mx-auto text-gray-100 leading-relaxed">
              Elevate Your Brand on the Global Stage at BiFor 2026
            </p>
            <p className="text-lg md:text-xl mt-4 text-golden font-semibold">
              比福尔 BiFor 2026 - Be A Sponsor
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-4">
              Why Sponsor BiFor 2026?
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Investment in BiFor 2026 'BIG PUSH' will generate significant benefits for sponsors and partners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorshipReasons.map((reason, index) => (
              <motion.div
                key={index}
                className="card hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl text-golden mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-4">
              Sponsorship Packages
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the sponsorship level that best fits your organization's goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${tier.color} rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-8">
                  <div className={`text-6xl mb-4 ${tier.textColor} flex justify-center`}>
                    {tier.icon}
                  </div>
                  <h3 className={`text-3xl font-bold ${tier.textColor} mb-2 text-center`}>
                    {tier.name}
                  </h3>
                  <p className={`text-xl ${tier.textColor} text-center mb-6 opacity-90`}>
                    {tier.price}
                  </p>
                  <div className="border-t-2 border-white/30 pt-6">
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className={`flex items-start ${tier.textColor}`}>
                          <span className="mr-2 text-lg">✓</span>
                          <span className="text-sm leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-white/10 p-6 backdrop-blur-sm">
                  <Link
                    href="/contact"
                    className={`block text-center ${tier.textColor} font-bold py-3 px-6 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-300`}
                  >
                    Inquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="section-padding gradient-bg-blue">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                Investment Benefits
              </h2>
              <p className="text-xl text-gray-100 mb-6">
                Investment in 比福尔 BiFor 2026 'BIG PUSH' will generate general benefits for sponsors and partners.
              </p>
              <p className="text-lg text-gray-200 mb-6">
                Proud sponsors and partners in <strong className="text-golden">Presenting or Platinum</strong> tiers 
                will have the opportunity to meet all high-profile and influential personalities after the special event in China.
              </p>
              <div className="bg-golden/20 backdrop-blur-md border-2 border-golden rounded-lg p-6">
                <p className="text-white font-semibold">
                  <FaMicrophone className="inline mr-2 text-golden" />
                  Sponsors will be introduced properly from start to finish and given time to speak about their 
                  companies, products, and services.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-golden/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-golden mb-6">
                What You Gain:
              </h3>
              <ul className="space-y-4">
                {investmentBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-white">
                    <span className="text-golden text-2xl mr-3">►</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-golden">
        <div className="container-width">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-royal-blue-dark mb-8 max-w-2xl mx-auto">
              Thank you for taking time to consider our sponsorship proposal. 
              To discuss this proposal further, please contact our Sponsorship Coordinators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-royal-blue text-white hover:bg-royal-blue-dark font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Sponsorship Coordinators
              </Link>
              <Link
                href="/bifor2026"
                className="bg-white text-royal-blue hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More About BiFor 2026
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
