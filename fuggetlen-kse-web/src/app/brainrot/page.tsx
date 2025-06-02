'use client'

import { motion } from 'framer-motion'

const memes = [
  '/meme1.jpg',
  '/meme2.jpg',
  '/meme3.jpg',
  'https://media.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif',
]

export default function Brainrot() {
  return (
    <section className="min-h-screen relative overflow-hidden px-6 py-20 text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 -z-10"
      >
        <source src="/ksevideo.mp4" type="video/mp4" />
      </video>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-yellow-300 mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        🧠 Agyzsibbasztó Zóna
      </motion.h2>

      <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
        Itt nincs értelme semminek – csak mémek, sör és szürreális dolgok. Ne próbálj logikát keresni.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {memes.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ rotate: 6, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="overflow-hidden border border-yellow-400 rounded-xl bg-black/40 p-2"
          >
            {/* lehetnek helyi vagy online képek/gifek */}
            <img
              src={src}
              alt={`meme-${index}`}
              className="rounded-lg w-full object-cover"
            />
          </motion.div>
          
        ))}
      </div>
      <div className="flex justify-center gap-6 mt-16 text-5xl">
  <motion.div
    animate={{ rotate: [0, 15, -15, 0] }}
    transition={{ repeat: Infinity, duration: 1 }}
  >
    🍻
  </motion.div>
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 1.2 }}
  >
    🍺
  </motion.div>
  <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ repeat: Infinity, duration: 0.8 }}
  >
    🕺
  </motion.div>
</div>

    </section>
  )
}
