# GitHub Портфолио — Viacheslav Biezhanov

Персональный сайт-портфолио, который автоматически подтягивает работы с GitHub.
Построен в стиле [Sergio Ayala](https://www.sergio-ayala.com/) — минимализм,
типографика, терминальный акцент.

## Что внутри

- **React 18 + Vite 6 + Tailwind CSS 3**
- **Светлая и тёмная тема** с переключателем в шапке (сохраняется в localStorage,
  по умолчанию следует системной)
- **Авто-феч репозиториев** с GitHub API — каждый новый репо появляется на сайте
  сам, без правок кода
- **Адаптивный дизайн** — мобильный, планшет, десктоп
- **Анимации появления** — плавные fade-in при загрузке
- **0 зависимостей кроме React** — никаких UI-китов, всё на Tailwind

## Разделы

1. **Hero** — имя, роль, статистика, CTA
2. **About** — короткое био + стек технологий
3. **Projects** — карточки репозиториев с GitHub (авто-обновление)
4. **Process** — как я работаю: бриф → оценка → разработка → сдача
5. **Contact** — email + соцсети

## Запуск локально

```bash
npm install
npm run dev
```

Откроется на `http://localhost:5173`.

## Сборка

```bash
npm run build
```

Готовая статика — в `dist/`. Можно деплоить на Vercel, Netlify, GitHub Pages,
любой статический хостинг.

## Настройка

Открой `src/data/content.js` и поменяй:

- `name`, `role`, `bio` — про тебя
- `githubUsername` — твой GitHub логин
- `email`, `socials` — контакты
- `stats`, `process` — цифры и шаги процесса

Репозитории подтянутся автоматически при загрузке страницы.

## Деплой

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --build
```

### GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

## Лицензия

MIT — используй, форкай, деплой как хочешь.
