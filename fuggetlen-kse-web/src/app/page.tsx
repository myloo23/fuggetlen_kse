'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="relative overflow-hidden h-screen flex items-center justify-end px-6">
      {/* Háttérvideó */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 -z-10"
      >
        <source src="/mindennapsor.mp4" type="video/mp4" />
      </video>

      {/* Jobb oldali tartalom */}
      <div className="relative z-10 max-w-md text-right space-y-6">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Üdv a KSE-nél!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-neutral-300"
        >
          Foci, sör, barátság – ez vagyunk mi.
        </motion.p>

        <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.6, duration: 0.6 }}
  className="bg-gradient-to-br from-yellow-500/10 to-black/60 backdrop-blur-md border border-yellow-400/20 p-6 rounded-xl shadow-xl"
>
  <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2 tracking-wide">
    🍺 Kíméletlen Sörfalók Egylete
  </h3>
  <p className="text-neutral-200 text-base md:text-lg leading-relaxed">
    Humoros közösségi oldal a <span className="text-yellow-400 font-medium">sör</span>, sport és <span className="italic">barátság</span> jegyében!
  </p>
</motion.div>

      </div>
    </section>
  )
}
