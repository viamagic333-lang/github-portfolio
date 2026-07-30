import { content } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 max-w-6xl mx-auto">
      <p className="label mb-12">
        <span className="divider">·</span> Contact <span className="divider">·</span>
      </p>

      <div className="border border-current/15 p-10 sm:p-16">
        <h2 className="heading-spaced text-3xl sm:text-5xl leading-tight mb-8">
          Есть
          <br />
          проект?
        </h2>
        <p className="font-display font-light text-lg sm:text-xl max-w-2xl opacity-70 mb-10">
          Расскажи задачу — отвечу в течение 24 часов. Оценка бесплатная.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${content.email}`}
            className="font-mono text-xs uppercase tracking-widest2 border border-current px-6 py-3 hover:bg-current hover:text-white dark:hover:text-black transition-colors"
          >
            Написать на email →
          </a>
          {content.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest2 border border-current/30 px-6 py-3 hover:border-current hover:bg-current hover:text-white dark:hover:text-black transition-colors"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
