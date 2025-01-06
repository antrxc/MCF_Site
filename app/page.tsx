'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Logo } from '@/components/Logo'
import { BentoBox } from '@/components/BentoBox'
import { ClientLogos } from '@/components/ClientLogos'
import { Mail, Phone } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full bg-white bg-opacity-90 shadow z-10"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#hero" className="text-gray-800 hover:text-gray-600">Home</a></li>
              <li><a href="#about" className="text-gray-800 hover:text-gray-600">About</a></li>
              <li><a href="#gallery" className="text-gray-800 hover:text-gray-600">Gallery</a></li>
              <li><a href="#clients" className="text-gray-800 hover:text-gray-600">Clients</a></li>
              <li><a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-32 md:py-48">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 5, 
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="mb-8 inline-block"
          >
            <Logo size="large" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Metal Cabinet Solutions</h1>
          <p className="text-xl md:text-2xl mb-8">Crafting Durability, Delivering Excellence</p>
          <Button asChild size="lg" className="animate-pulse">
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            About Us
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg mb-4">
              At Metal Cabinet Solutions, we've been at the forefront of innovative storage solutions for over two decades. Our journey began with a simple goal: to create durable, functional, and aesthetically pleasing metal cabinets that stand the test of time.
            </p>
            <p className="text-lg mb-4">
              Our team of skilled craftsmen and designers work tirelessly to push the boundaries of what's possible in metal fabrication. We combine cutting-edge technology with traditional craftsmanship to deliver cabinets that not only meet but exceed our clients' expectations.
            </p>
            <p className="text-lg">
              From custom designs for specific industries to our standard line of high-quality cabinets, we pride ourselves on our attention to detail, commitment to quality, and dedication to customer satisfaction. Choose Metal Cabinet Solutions for storage solutions that truly make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            Our Gallery
          </motion.h2>
          <BentoBox />
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            Our Clients
          </motion.h2>
          <ClientLogos />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            Contact Us
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" placeholder="Your message here..." />
              </div>
              <div className="flex space-x-4">
                <Button type="submit" className="flex-1">Send Message</Button>
                <Button asChild variant="outline" className="flex items-center justify-center">
                  <a href="mailto:info@metalcabinetsolutions.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex items-center justify-center">
                  <a href="tel:+1234567890">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo />
            <p className="mt-2">Crafting Durability, Delivering Excellence</p>
          </div>
          <div className="text-center md:text-right">
            <p>123 Metal Street, Steel City, ST 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@metalcabinetsolutions.com</p>
            <p>GSTIN: 12ABCDE3456F7Z8</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

