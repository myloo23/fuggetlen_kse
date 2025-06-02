'use client'

import { motion } from 'framer-motion'
import { FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Kapcsolat() {
  return (
    <section className="relative min-h-screen overflow-hidden py-20 px-6 flex flex-col items-center justify-center text-center">
      {/* Háttérvideó */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 -z-10"
      >
        <source src="/mindennapsor.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm -z-10" />

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Lépj velünk kapcsolatba!
      </motion.h2>

      <p className="text-neutral-300 max-w-xl mb-8">
        Van egy jó sörmárkád, amit tesztelni kéne? Esetleg meccsnézést szervezel? Vagy csak írnál valami marhaságot? Ne tartsd magadban!
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
        <a
          href="mailto:kse@agyzsibbaszt.hu"
          className="flex items-center gap-3 px-5 py-3 border border-yellow-400 rounded-xl text-yellow-300 hover:bg-yellow-400 hover:text-black transition"
        >
          <FaEnvelope />
          E-mail küldése
        </a>

        <a
          href="https://instagram.com/fuggetlen_kse"
          target="_blank"
          className="flex items-center gap-3 px-5 py-3 border border-pink-500 rounded-xl text-pink-400 hover:bg-pink-500 hover:text-white transition"
        >
          <FaInstagram />
          Kövess Instán!
        </a>
      </div>

      <p className="text-sm text-neutral-500 italic">
        Figyelem: kapcsolatfelvétel után előfordulhat sörözés, nevetés, közös mémkészítés.
      </p>
    </section>
  )
}
