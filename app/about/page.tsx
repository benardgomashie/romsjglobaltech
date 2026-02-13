'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaRocket, FaLightbulb, FaHandshake, FaLeaf, FaLaptopCode, FaBalanceScale } from 'react-icons/fa'

export default function AboutPage() {
  const missionPoints = [
    {
      icon: <FaLaptopCode />,
      title: 'Investment Advisory',
      description: 'Helping individuals and businesses make informed financial decisions through expert guidance and technology-driven solutions.',
    },
    {
      icon: <FaHandshake />,
      title: 'Global Trade Facilitation',
      description: 'Enabling the exchange of goods, services, and financial assets across local and global markets with the use of cutting-edge technology.',
    },
    {
      icon: <FaRocket />,
      title: 'Entrepreneurship & Value Creation',
      description: 'Promoting business cooperation by identifying opportunities and creating value through starting and growing businesses between China and Africa.',
    },
  ]

  const visionPoints = [
    {
      title: 'Empowerment Across Sectors',
      description: 'To empower people and drive future growth across major areas like agribusiness, technology, health care, manufacturing, infrastructure, and finance.',
    },
    {
      title: 'Agricultural Productivity',
      description: 'To increase agricultural productivity leading to improve food supply chain, industrialization, and job creation through commercialization for crops needed for export.',
    },
    {
      title: 'Business Excellence',
      description: 'To give opportunity to business to accelerate through innovation and strategic alignment to reach a \'world class\' levels in business.',
    },
  ]

  const coreValues = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation and Adaptability',
      description: 'Embracing new ideas and adapting to changing market dynamics',
    },
    {
      icon: <FaBalanceScale />,
      title: 'Strategic Alignment',
      description: 'Ensuring our actions align with long-term business goals',
    },
    {
      icon: <FaHandshake />,
      title: 'Collaboration and Partnership',
      description: 'Building strong relationships for mutual success',
    },
    {
      icon: <FaLeaf />,
      title: 'Sustainability and Ethics',
      description: 'Commitment to ethical practices and sustainable development',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Digital Ecosystem',
      description: 'Leveraging technology for comprehensive solutions',
    },
    {
      icon: <FaBalanceScale />,
      title: 'Accountability and Transparency',
      description: 'Maintaining trust through transparent operations',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 pt-32 md:pt-40 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/GhanaAndChinaPresidentShakeHands.jpg)' }}
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/90 via-royal-blue/85 to-navy/90"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-golden rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
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
              About <span className="text-golden">ROMSJ Global Tech</span>
            </h1>
            <div className="w-32 h-1 bg-golden mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 leading-relaxed">
              An investment advisory company helping individuals and businesses make informed financial decisions through technology-driven solutions for global trade and China-Africa business cooperation
            </p>
            <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-200">
              In collaboration with the Embassy of the Republic of Ghana in the People's Republic of China
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-6xl text-golden mb-6 flex justify-center">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-bold text-royal-blue mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-4">
              Our Vision
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-golden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-royal-blue mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl p-8 border-t-4 border-golden transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl text-golden mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mantra Section */}
      <section className="section-padding gradient-bg-blue">
        <div className="container-width">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Our Mantra
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-12"></div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 md:p-16 border-4 border-golden max-w-4xl mx-auto">
              <p className="text-6xl md:text-8xl font-accent font-bold text-golden mb-6 italic">
                "Let's Accelerate Growth"
              </p>
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                This is more than a slogan—it's our commitment to driving transformative change, 
                fostering innovation, and creating sustainable opportunities for businesses across Ghana and China.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership & Government Relations Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Leadership & Government Relations
            </motion.h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our chairman's strategic relationships with Ghana's top government officials underscore our commitment to national development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/RomsjChairmanWithPresidentofGhana.jpeg"
                  alt="ROMSJ Chairman with President of Ghana"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-royal-blue mb-2">
                  Presidential Engagement
                </h3>
                <p className="text-gray-600">
                  Chairman and Founder of KGL meeting with the President of Ghana, demonstrating our organization's commitment to national economic development and strategic government partnerships.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/romsjChairmanWithFormervicePresident.jpeg"
                  alt="ROMSJ Chairman with Former Vice President"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-royal-blue mb-2">
                  High-Level Collaboration
                </h3>
                <p className="text-gray-600">
                  Strategic dialogue with Ghana's former Vice President, reinforcing our role in facilitating high-level business and government collaboration for mutual growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-royal-blue mb-6">
                Ghana-China Partnership
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our strategic collaboration with the Embassy of the Republic of Ghana in the People's Republic of China 
                enables us to bridge two dynamic economies, creating pathways for investment, trade, and technological exchange.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Together, we are building a future where businesses thrive through mutual cooperation, 
                innovation, and shared prosperity.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-golden mb-6">What We Offer</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-golden text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Strategic business consulting and guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-golden text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Technology solutions and digital transformation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-golden text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Agricultural technology and innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-golden text-2xl mr-3">✓</span>
                  <span className="text-gray-700">SME training and capacity building</span>
                </li>
                <li className="flex items-start">
                  <span className="text-golden text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Investment facilitation and partnership matchmaking</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
