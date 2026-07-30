import { content } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="px-6 py-32 max-w-6xl mx-auto">
      <p className="label mb-12">
        <span className="divider">·</span> About <span className="divider">·</span>
      </p>
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h2 className="heading-spaced text-3xl sm:text-4xl leading-tight">
            Чем
            <br />
            я занимаюсь
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="font-display font-light text-xl sm:text-2xl leading-relaxed whitespace-pre-line">
            {content.bio}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {['React', 'Tailwind CSS', 'Node.js', 'Python', 'Bash', 'AI Agents', 'Cursor Skills', 'Vite', 'Supabase'].map((t) => (
              <span
                key={t}
                className="font-mono text-xs uppercase tracking-widest2 border border-current/30 px-3 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
