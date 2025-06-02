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
    <section className="relative min-h-screen overflow-hidden py-20 px-6">
      {/* Háttérvideó */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 -z-10"
      >
        <source src="/ksevideo.mp4" type="video/mp4" />
      </video>

      {/* Sötét overlay, ha kell */}
      <div className="absolute inset-0 bg-black/60 -z-10 backdrop-blur-sm" />

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-yellow-300 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Galéria
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl border border-yellow-400 bg-black/40 shadow-lg"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Image
              src={src}
              alt={`Galéria ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
