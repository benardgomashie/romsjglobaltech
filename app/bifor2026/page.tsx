'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaUsers, FaEye, FaTrophy, FaLightbulb, FaHandshake, FaStar, FaChartLine, FaGlobe, FaAward, FaRocket, FaIndustry, FaBuilding } from 'react-icons/fa'

export default function BiFor2026Page() {
  const keyBenefits = [
    {
      icon: <FaUsers />,
      title: 'Networking',
      description: 'Connect with VIPs, business leaders, and government figures',
    },
    {
      icon: <FaEye />,
      title: 'High-Profile Visibility',
      description: 'Association with influential personalities',
    },
    {
      icon: <FaTrophy />,
      title: 'Brand Exposure',
      description: 'Increase brand visibility, awareness, and recognition',
    },
    {
      icon: <FaChartLine />,
      title: 'Competitive Advantage',
      description: 'Create differentiation from business competitors with strong market presence',
    },
    {
      icon: <FaGlobe />,
      title: 'Targeted Audience Engagement',
      description: 'Align with specific targeted audience for your company or products and services',
    },
    {
      icon: <FaStar />,
      title: 'Building Credibility',
      description: 'Alignment to this event gives your brand trustworthiness and prestige',
    },
    {
      icon: <FaHandshake />,
      title: 'CSR Recognition',
      description: 'Showcase commitment to multiculturalism and diaspora development',
    },
    {
      icon: <FaLightbulb />,
      title: 'Skills Enhancement',
      description: 'Attend workshops for practical skills, from leadership to negotiation',
    },
    {
      icon: <FaRocket />,
      title: 'Partnership Opportunities',
      description: 'Find strategic collaborators for joint ventures',
    },
    {
      icon: <FaAward />,
      title: 'Leadership Development',
      description: 'Get ideas and tips to become a great leader in times of change',
    },
  ]

  const chinaAudience = [
    'Top business leaders and industrial executives',
    'Provincial commerce and investment authorities',
    'Manufacturers and supply chain operators',
    'Technology and Agric-Tech firms',
    'Infrastructure and engineering conglomerates',
    'Financial institutions and investors',
  ]

  const ghanaAudience = [
    'Private sector CEOs and entrepreneurs',
    'Sector associations',
    'Exporters and trade houses',
    'Government agencies (MoTI, GIPC, GEPA, MoFA, etc.)',
    'Infrastructure financiers',
    'Startups and technology innovators',
  ]

  const whyAttend = [
    'Gain cutting-edge industry knowledge',
    'Network with peers, influential personalities, and potential partners',
    'Discover new tools and technologies',
    'Find inspiration and boost brand visibility',
    'Accelerate personal and business growth through expert insights',
    'Strategic alignment with government policies and initiatives',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden pt-32 md:pt-48">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/GhanaAndChinaDinistriesSitForTalks.jpg)' }}
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/90 via-navy/85 to-golden/40"></div>
        
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-golden rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
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
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
              BiFor 2026
            </h1>
            <p className="text-4xl md:text-5xl text-golden mb-8 font-accent">
              比福尔 BiFor 2026
            </p>
            <div className="w-32 h-1 bg-golden mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl max-w-4xl mx-auto text-gray-100 leading-relaxed">
              Connecting High-Level Chinese Investors with Ghanaian Stakeholders 
              Across Strategic Development Sectors
            </p>
            <div className="mt-12">
              <Link href="/sponsor" className="btn-primary text-lg">
                Become a Sponsor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-8 text-center">
              About BiFor 2026
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-12"></div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                <strong className="text-royal-blue">BiFor 2026</strong> is a High-Level China–Ghana Business Conference and Investment Exchange Program 
                organized by <strong className="text-golden"> ROMSJ GLOBAL TECH</strong> in close collaboration with the 
                <strong className="text-royal-blue"> Embassy of the Republic of Ghana in the People's Republic of China</strong>.
              </p>
              
              <p>
                This <strong>multi-provincial conference</strong> is designed to directly connect influential Chinese business leaders, 
                investors, provincial authorities, and industrial players with their prospective Ghanaian partners, enterprises, and government stakeholders.
              </p>
              
              <p>
                The program focuses on <strong className="text-golden">five strategic sectors</strong> vital to Ghana's accelerated growth agenda: 
                <strong> Technology, Agriculture, General Trade, Manufacturing, and Infrastructure</strong>. Activities relating to each sector 
                will take place in the Chinese provinces where those industries are most prominent, providing participants with on-site learning, 
                sector-specific exposure, and concrete investment exploration opportunities.
              </p>
              
              <p>
                This eye-opening event is anchored on Ghana's <strong className="text-golden">BIG PUSH Integrated Infrastructure and Road Construction Initiative</strong> 
                and the <strong>24-Hour Economy Policy</strong>, positioning Ghana as a competitive, ready, and attractive investment destination.
              </p>
              
              <p>
                The forum intends to create jobs and boost economic growth of the Republic of Ghana as we host 
                <strong className="text-royal-blue"> The African Continental Free Trade Area (AfCFTA)</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-royal-blue to-navy p-8 rounded-xl text-white my-8">
                <h3 className="text-2xl font-bold text-golden mb-4">About AfCFTA</h3>
                <p className="text-justify">
                  The African Continental Free Trade Area (AfCFTA) is one of the Flagship Projects of Agenda 2063—Africa's development framework. 
                  The AfCFTA aims at accelerating intra-African trade and boosting Africa's trading position in the global market 
                  by strengthening Africa's common voice and policy space in global trade negotiations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-4">
              Why Attend BiFor 2026?
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Attending BiFor 2026 business forum offers critical opportunities for growth and development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyAttend.map((reason, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-golden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <span className="text-golden text-2xl mr-3">✓</span>
                  <p className="text-gray-700">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-4">
              Key Benefits
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="card text-center hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl text-golden mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Targeted Audience */}
      <section className="section-padding gradient-bg-blue">
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Targeted Audience
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              Bringing together key stakeholders from China and Ghana
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* China Audience */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border-2 border-golden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <FaBuilding className="text-golden text-4xl mr-4" />
                <h3 className="text-3xl font-bold text-golden">From China</h3>
              </div>
              <ul className="space-y-4">
                {chinaAudience.map((item, index) => (
                  <li key={index} className="flex items-start text-white">
                    <span className="text-golden mr-3 text-xl">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ghana Audience */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border-2 border-golden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <FaIndustry className="text-golden text-4xl mr-4" />
                <h3 className="text-3xl font-bold text-golden">From Ghana</h3>
              </div>
              <ul className="space-y-4">
                {ghanaAudience.map((item, index) => (
                  <li key={index} className="flex items-start text-white">
                    <span className="text-golden mr-3 text-xl">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-royal-blue mb-4">
              Partners for BiFor 2026
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Supported by leading governmental, financial, and private sector organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'KGL Group', type: 'Private', logo: '/images/partners/KGIlogo.jpeg' },
              { name: 'GCB', type: 'Financial', logo: '/images/partners/GCBlogo.jpeg' },
              { name: 'Stanbic Bank', type: 'Financial', logo: '/images/partners/StanbicBankLogo.jpeg' },
              { name: 'Agricultural Development Bank', type: 'Financial', logo: '/images/partners/ADBlogo.jpeg' },
              { name: 'Ghana Investment Promotion Centre', type: 'Governmental', logo: '/images/partners/GIPClogo.jpeg' },
              { name: 'Diaspora Affairs', type: 'Governmental', logo: '/images/partners/diasporaAffairsLogo.jpeg' },
              { name: 'Ministry of Trade and Agri-business', type: 'Governmental', logo: '/images/partners/MinistryOfTradeLogo.jpeg' },
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative w-full h-20 mb-3">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs text-royal-blue font-semibold block text-center">{partner.type}</span>
              </motion.div>
            ))}
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
              Don't Miss BiFor 2026!
            </h2>
            <p className="text-xl text-royal-blue-dark mb-8 max-w-2xl mx-auto">
              Join us in this transformative event that will shape the future of Ghana-China business relations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-royal-blue text-white hover:bg-royal-blue-dark font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Register Your Interest
              </Link>
              <Link href="/sponsor" className="bg-white text-royal-blue hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Become a Sponsor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
