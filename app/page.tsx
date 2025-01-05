'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Logo } from '@/components/Logo'
import Image from 'next/image'

const products = [
  { id: 1, name: "Standard Cabinet", description: "Our bestselling all-purpose cabinet", price: "$299", image: "/placeholder.svg?height=300&width=300" },
  { id: 2, name: "Heavy-Duty Cabinet", description: "Extra sturdy for industrial use", price: "$499", image: "/placeholder.svg?height=300&width=300" },
  { id: 3, name: "Slim Storage Cabinet", description: "Perfect for tight spaces", price: "$249", image: "/placeholder.svg?height=300&width=300" },
  { id: 4, name: "Modular Cabinet System", description: "Customizable for your unique needs", price: "$399", image: "/placeholder.svg?height=300&width=300" },
]

const testimonials = [
  { id: 1, name: "John Doe", company: "ABC Corp", text: "These cabinets have transformed our office storage. Highly recommended!" },
  { id: 2, name: "Jane Smith", company: "XYZ Industries", text: "Durable, stylish, and perfect for our workshop. Couldn't be happier!" },
  { id: 3, name: "Mike Johnson", company: "123 Enterprises", text: "The customer service is as solid as the cabinets. Great experience overall." },
]

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [testimonialRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

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
              <li><a href="#products" className="text-gray-800 hover:text-gray-600">Products</a></li>
              <li><a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-32 md:py-48">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Metal Cabinet Solutions Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Metal Cabinet Solutions</h1>
          <p className="text-xl md:text-2xl mb-8">Stylish and Durable Storage for the Modern Age</p>
          <Button asChild size="lg" className="animate-pulse">
            <a href="#products">Explore Our Products</a>
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
              At Metal Cabinet Solutions, we've been crafting high-quality metal cabinets for over two decades. Our commitment to durability, functionality, and sleek design has made us a trusted name in storage solutions.
            </p>
            <p className="text-lg">
              Whether you're organizing a garage, upgrading your office, or outfitting an industrial space, we have the perfect cabinet for you. Our team of experts is dedicated to helping you find the ideal storage solution for your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            Our Products
          </motion.h2>
          <div className="relative">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {products.map((product) => (
                  <div key={product.id} className="embla__slide px-4">
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                        <p className="text-2xl font-bold">{product.price}</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Learn More</Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <Button variant="outline" className="absolute left-0 top-1/2 transform -translate-y-1/2" onClick={scrollPrev}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="outline" className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={scrollNext}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            What Our Customers Say
          </motion.h2>
          <div className="embla" ref={testimonialRef}>
            <div className="embla__container">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="embla__slide px-4">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="italic">&ldquo;{testimonial.text}&rdquo;</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
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
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
          <Logo />
          <p>&copy; 2023 Metal Cabinet Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

