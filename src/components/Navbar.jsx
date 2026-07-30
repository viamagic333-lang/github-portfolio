import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import { content } from '../data/content.js'

const links = [
  { href: '#about', label: 'Обо мне' },
  { href: '#projects', label: 'Работы' },
  { href: '#process', label: 'Процесс' },
  { href: '#contact', label: 'Контакты' },
]

export default function Navbar({ theme, toggle }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur bg-white/80 dark:bg-black/80 border-b border-black/10 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm uppercase tracking-widest2">
          <span className="opacity-40">·</span> VB <span className="opacity-40">·</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest2 opacity-60 hover:opacity-100 link-underline"
            >
              {l.label}
            </a>
          ))}
        </div>
        <ThemeToggle theme={theme} toggle={toggle} />
      </nav>
    </header>
  )
}
