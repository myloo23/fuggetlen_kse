// app/gallery/page.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
]

export default function Gallery() {
  return (
    <section className="py-10">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Galéria
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg border border-neutral-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={src}
              alt={`Galéria kép ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
