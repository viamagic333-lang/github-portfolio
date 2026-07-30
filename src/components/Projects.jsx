import { useEffect, useState } from 'react'
import { content } from '../data/content.js'

const LANGUAGE_COLORS = {
  Shell: '#89e051',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'C++': '#f34b7d',
  Rust: '#dea584',
  Go: '#00ADD8',
  Ruby: '#701516',
  Java: '#b07219',
  Vue: '#41b883',
  default: '#888888',
}

function langColor(l) {
  return LANGUAGE_COLORS[l] || LANGUAGE_COLORS.default
}

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('ru-RU', { year: 'numeric', month: 'short', day: 'numeric' })
}

function slug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${content.githubUsername}/repos?sort=updated&per_page=100`)
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub API ${r.status}`)
        return r.json()
      })
      .then((data) => {
        const sorted = data
          .filter((r) => !r.fork)
          .sort((a, b) => (b.stargazers_count - a.stargazers_count) || new Date(b.updated_at) - new Date(a.updated_at))
        setRepos(sorted)
        setLoading(false)
      })
      .catch((e) => {
        setError(e.message)
        setLoading(false)
      })
  }, [])

  return (
    <section id="projects" className="px-6 py-32 max-w-6xl mx-auto">
      <p className="label mb-12">
        <span className="divider">·</span> Work · GitHub <span className="divider">·</span>
      </p>

      <div className="mb-16">
        <h2 className="heading-spaced text-3xl sm:text-4xl leading-tight">
          Работы
          <br />
          на GitHub
        </h2>
        <p className="font-display font-light text-lg mt-6 max-w-2xl opacity-70">
          Репозитории подтягиваются автоматически с GitHub. Каждый новый проект
          появляется здесь сам — без правок кода.
        </p>
      </div>

      {loading && (
        <div className="font-mono text-sm opacity-60">Загружаю репозитории…</div>
      )}

      {error && (
        <div className="font-mono text-sm border border-current/30 p-4">
          Не удалось загрузить с GitHub: {error}
          <br />
          <a
            href={`https://github.com/${content.githubUsername}`}
            className="link-underline opacity-100 mt-2 inline-block"
          >
            Открыть профиль на GitHub →
          </a>
        </div>
      )}

      {!loading && !error && repos.length === 0 && (
        <div className="font-mono text-sm opacity-60">
          Публичных репозиториев пока нет. Загляните позже.
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((r) => (
          <a
            key={r.name}
            href={r.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-6 flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="label">{r.language || '—'}</span>
              <span className="label">★ {r.stargazers_count}</span>
            </div>
            <h3 className="font-display text-2xl mb-3 break-words">{r.name}</h3>
            <p className="font-sans text-sm opacity-70 mb-6 flex-1 line-clamp-3">
              {r.description || 'Без описания.'}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-current/10">
              <span className="label">↳ {formatDate(r.updated_at)}</span>
              <span className="label">Открыть →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
