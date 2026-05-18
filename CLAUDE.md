# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install deps (required after fresh clone)
npm run dev       # start dev server (Vite, hot reload)
npm run build     # production build → dist/
```

No linting or test scripts are configured.

## Git Workflow

Every change must follow this workflow — no exceptions, including small fixes:

1. Create a feature branch (`git checkout -b feature/<name>`)
2. Commit on the branch
3. Push the branch (`git push -u origin feature/<name>`)
4. Merge to main and push (`git merge` + `git push origin main`)
5. Delete the branch locally and remotely

Commit messages: short, plain English, written like a regular developer. No AI references, no "Co-Authored-By" lines.

## Architecture

This is a React 19 + Vite SPA with no router, no TypeScript, and no component library.

**All source lives in three files:**

- `src/courseData.js` — the single source of truth for all content. Every lesson has: `id`, `title`, `kicker`, `color`, `summary`, `keyIdeas[]`, `details[]` (term/body pairs), `diagram`, `check[]`, `flashcards[]`, `quiz[]`. Also exports `examChecklist`. To add or change content, only this file needs editing.
- `src/App.jsx` — every React component in one file. Top-level `App` owns all state. Child components (`LessonView`, `Flashcards`, `Quiz`, `ExamReview`, `Glossary`, `MiniDiagram`) are pure/presentational.
- `src/styles.css` — all styling. Uses CSS custom properties for theming (`:root` / `:root[data-theme="dark"]`). No preprocessor.

**Navigation model** — two state variables drive what the user sees:

- `view`: `'lessons'` | `'glossary'` — switches between the lesson workspace and the glossary page
- `mode`: `'learn'` | `'flash'` | `'quiz'` | `'exam'` — active only when `view === 'lessons'`

**Persistence** — two localStorage keys:
- `ams-trainer-progress` — object mapping lesson IDs to boolean completion
- `ams-trainer-theme` — `'light'` | `'dark'`

Dark mode is applied by setting `data-theme="dark"` on `<html>`.

**MiniDiagram** renders pure-CSS UML diagrams keyed on the `diagram` field of each lesson (`'entities'`, `'relations'`, `'useCase'`, `'sequence'`, `'collaboration'`, `'class'`, `'activity'`, `'component'`). Each variant is a separate `if` branch in the component.

## Deployment

- **Vercel**: auto-deploys from `main` (configured in `vercel.json`)
- **GitHub Pages**: CI workflow in `.github/workflows/deploy.yml` triggers on push to `main`
