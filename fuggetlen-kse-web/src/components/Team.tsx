// components/Team.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const members = [
  {
    name: 'Bendegúz "Sörmester"',
    role: 'Alapító & Söranalitikus',
    img: '/team1.jpg',
  },
  {
    name: 'Geri "Taktikai Sörfelelős"',
    role: 'Meccselemző',
    img: '/team2.jpg',
  },
  {
    name: 'Ákos "Kapus, de kocsmában"',
    role: 'Közösségi média',
    img: '/team3.jpg',
  },
]

export default function Team() {
  return (
    <section className="mt-16">
      <motion.h3
        className="text-2xl md:text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        A Kíméletlen Csapat
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 rounded-xl p-4 border border-neutral-700 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={member.img}
              alt={member.name}
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4 border border-neutral-600"
            />
            <h4 className="text-lg font-semibold">{member.name}</h4>
            <p className="text-sm text-neutral-400">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
