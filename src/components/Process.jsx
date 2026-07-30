import { content } from '../data/content.js'

export default function Process() {
  return (
    <section id="process" className="px-6 py-32 max-w-6xl mx-auto">
      <p className="label mb-12">
        <span className="divider">·</span> Process <span className="divider">·</span>
      </p>

      <div className="mb-16">
        <h2 className="heading-spaced text-3xl sm:text-4xl leading-tight">
          Как
          <br />
          я работаю
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {content.process.map((p) => (
          <div key={p.step} className="border border-current/15 p-8">
            <div className="font-mono text-sm opacity-40 mb-6">{p.step}</div>
            <h3 className="font-display text-2xl mb-3">{p.title}</h3>
            <p className="font-sans text-sm opacity-70 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
