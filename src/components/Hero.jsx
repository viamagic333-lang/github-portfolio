import { content } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 max-w-6xl mx-auto">
      <div className="animate-fade-up">
        <p className="label mb-8">
          <span className="divider">·</span>
          {content.available ? 'Open to work' : 'Currently busy'}
          <span className="divider">·</span>
        </p>

        <h1 className="heading-spaced text-5xl sm:text-7xl md:text-8xl leading-none mb-8">
          {content.name.split(' ').map((word, i) => (
            <span key={i} className="block">
              {word}
            </span>
          ))}
        </h1>

        <p className="font-display font-light text-xl sm:text-2xl md:text-3xl max-w-3xl leading-snug mb-12">
          {content.role}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="font-mono text-xs uppercase tracking-widest2 border border-current px-6 py-3 hover:bg-current hover:text-white dark:hover:text-black transition-colors"
          >
            Смотреть работы →
          </a>
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-widest2 opacity-60 hover:opacity-100 link-underline"
          >
            Связаться
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {content.stats.map((s) => (
            <div key={s.label} className="border-t border-current/20 pt-4">
              <div className="font-display text-3xl mb-1">{s.value}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
