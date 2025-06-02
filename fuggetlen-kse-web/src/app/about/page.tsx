'use client'

import { motion } from 'framer-motion'
import Team from '@/components/Team'

export default function About() {
  return (
    <section className="relative overflow-hidden min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      {/* Háttérvideó */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 -z-10"
      >
        <source src="/ksevideo.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-3xl space-y-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Rólunk
        </motion.h2>

        <motion.p
          className="text-lg text-neutral-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A <strong>Kíméletlen Sörfalók Egylete</strong> nem csak egy közösség – ez egy életérzés.
          2023 nyarán alakultunk, amikor pár jóbarát egy sörözés során úgy döntött, hogy ideje szintet lépni:
          meccsnézés, jó társaság, véleményformálás és rengeteg nevetés.
        </motion.p>

        <motion.p
          className="text-lg text-neutral-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Küldetésünk? Egyszerű: legyen egy hely, ahol a sör hideg, a poénok forrók, a közösség pedig kíméletlenül őszinte.
        </motion.p>

        <motion.p
          className="text-lg text-neutral-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Ha kíváncsi vagy, milyen az élet a KSE zászlaja alatt, nézd meg a galériánkat vagy csatlakozz egy eseményhez!
        </motion.p>
      </div>

      <Team />
    </section>
  )
}
