import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const clients = [
  { id: 1, name: "TechCorp", logo: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "IndustrialSolutions", logo: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "MediCare Systems", logo: "/placeholder.svg?height=100&width=100" },
  { id: 4, name: "EcoStorage", logo: "/placeholder.svg?height=100&width=100" },
  { id: 5, name: "OfficeInnovate", logo: "/placeholder.svg?height=100&width=100" },
  { id: 6, name: "SecureVault", logo: "/placeholder.svg?height=100&width=100" },
]

export function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollWidth = container.scrollWidth
    const clientWidth = container.clientWidth

    let animationFrameId: number

    const scroll = () => {
      if (!container) return

      if (container.scrollLeft >= scrollWidth / 2) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += 1
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div className="overflow-hidden" ref={containerRef}>
      <div className="flex whitespace-nowrap">
        {[...clients, ...clients].map((client, index) => (
          <motion.div
            key={`${client.id}-${index}`}
            className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4 inline-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={client.logo} alt={client.name} className="max-w-full h-auto" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

