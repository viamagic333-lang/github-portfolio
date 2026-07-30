import { content } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 py-12 max-w-6xl mx-auto border-t border-current/10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 opacity-60">
            <span className="divider">·</span> {content.name} <span className="divider">·</span>
          </p>
          <p className="font-mono text-xs opacity-40 mt-2">© {year}. Все права защищены.</p>
        </div>
        <p className="font-mono text-xs opacity-40">
          Built with React · Vite · Tailwind
        </p>
      </div>
    </footer>
  )
}
