import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Metal Cabinet Solutions - Flashy Storage Solutions',
  description: 'High-quality, stylish metal cabinets for all your storage needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AnimatePresence>
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}

