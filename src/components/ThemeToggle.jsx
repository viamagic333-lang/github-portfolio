export default function ThemeToggle({ theme, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Переключить тему"
      className="font-mono text-xs uppercase tracking-widest2 border border-current px-3 py-2 hover:bg-current hover:text-white dark:hover:text-black transition-colors"
    >
      {theme === 'dark' ? '◐ light' : '◑ dark'}
    </button>
  )
}
