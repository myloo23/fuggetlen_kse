// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kíméletlen Sörfalók Egylete',
  description: 'Humoros közösségi oldal a sör, sport és barátság jegyében!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body className={`${inter.className} bg-black text-white`}>
        <header className="flex items-center justify-between p-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Image src="/kse_logo.png" alt="KSE logó" width={64} height={64} />
            <h1 className="text-xl font-bold">Kíméletlen Sörfalók Egylete</h1>
          </div>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Főoldal</a>
            <a href="/about" className="hover:underline">Rólunk</a>
            <a href="/gallery" className="hover:underline">Galéria</a>
            <a href="/contact" className="hover:underline">Kapcsolat</a>
          </nav>
        </header>
        <main className="p-4">{children}</main>
        <footer className="text-center text-sm text-neutral-500 px-6 py-8 border-t border-neutral-800 mt-12">
  <div className="flex justify-center gap-6 mb-4 text-2xl">
    <a
      href="https://instagram.com/fuggetlen_kse"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-500 transition"
    >
      <FaInstagram />
    </a>
    <a
      href="#"
      className="hover:text-blue-500 transition"
    >
      <FaFacebook />
    </a>
    <a
      href="#"
      className="hover:text-white transition"
    >
      <FaTiktok />
    </a>
  </div>
  <p>© 2025 KSE – Minden jog fenntartva.</p>
</footer>
      </body>
    </html>
  )
}
