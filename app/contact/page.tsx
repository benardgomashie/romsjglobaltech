'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaFacebook, FaTwitter, FaUser, FaBuilding } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you! We will get back to you soon.')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: '',
      })
    }, 2000)
  }

  const inquiryTypes = [
    'General Inquiry',
    'BiFor 2026 Registration',
    'Sponsorship Opportunity',
    'Partnership',
    'Business Consultation',
    'Other',
  ]

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'info@romsjglobaltech.com',
      link: 'mailto:info@romsjglobaltech.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '+233 24 274 7033 / +233 24 475 5191',
      link: 'tel:+233242747033',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: 'Ghana & China',
      link: null,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 pt-32 md:pt-40">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/GhanaChinaFlagMerge.webp)' }}
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/95 via-navy/93 to-royal-blue/95"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-golden rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
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
              Get In <span className="text-golden">Touch</span>
            </h1>
            <div className="w-32 h-1 bg-golden mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
              Ready to accelerate your growth? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-royal-blue mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-golden focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-golden focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-golden focus:outline-none transition-colors"
                      placeholder="+233 24 274 7033"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                    Company/Organization
                  </label>
                  <div className="relative">
                    <FaBuilding className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-golden focus:outline-none transition-colors"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-gray-700 font-semibold mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-golden focus:outline-none transition-colors"
                  >
                    <option value="">Select inquiry type...</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-golden focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </button>

                {submitMessage && (
                  <p className="text-green-600 text-center font-semibold">
                    {submitMessage}
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-royal-blue mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Feel free to reach out to us through any of the following channels. 
                  Our team is ready to assist you with your inquiries.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 border-l-4 border-golden hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="text-3xl text-golden mr-4 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-royal-blue mb-2">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-700 hover:text-golden transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-700">{info.details}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-royal-blue to-navy rounded-xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <p className="mb-6 text-gray-200">
                  Stay connected with us on social media for the latest updates and news.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-golden p-4 rounded-full transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-golden p-4 rounded-full transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-golden p-4 rounded-full transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-golden/10 rounded-xl p-8 border-2 border-golden">
                <h3 className="text-2xl font-bold text-royal-blue mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/bifor2026" className="text-gray-700 hover:text-golden transition-colors font-medium flex items-center">
                      <span className="text-golden mr-2">▸</span>
                      Register for BiFor 2026
                    </a>
                  </li>
                  <li>
                    <a href="/sponsor" className="text-gray-700 hover:text-golden transition-colors font-medium flex items-center">
                      <span className="text-golden mr-2">▸</span>
                      Sponsorship Opportunities
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-gray-700 hover:text-golden transition-colors font-medium flex items-center">
                      <span className="text-golden mr-2">▸</span>
                      Learn About ROMSJ Global Tech
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            className="bg-gradient-to-r from-royal-blue to-navy rounded-2xl p-12 text-center text-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Partnership with the Embassy of Ghana in China
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              In collaboration with the Embassy of the Republic of Ghana in the People's Republic of China, 
              we are committed to fostering strong business relationships and creating opportunities for mutual growth.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
