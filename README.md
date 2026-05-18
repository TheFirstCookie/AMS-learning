# AMS Trainer

Website interactiv pentru invatarea cursului **Analiza si Modelarea Sistemelor Informationale**.

Aplicatia include lectii structurate, carduri de memorare, quiz-uri pe module, recapitulare pentru examen, progres salvat local si dark mode.

## Functionalitati

- 8 module de studiu pentru conceptele UML din curs
- 96 flashcard-uri
- 80 intrebari de quiz
- mini-diagrame vizuale pentru notatiile UML
- progres salvat in browser prin `localStorage`
- dark mode / light mode cu preferinta salvata
- interfata responsive pentru desktop si mobil

## Tehnologii

- React
- Vite
- Lucide React
- CSS custom

## Rulare locala

```bash
npm install
npm run dev
```

Deschide adresa afisata in terminal, de obicei:

```text
http://127.0.0.1:5173
```

## Build

```bash
npm run build
```

Pentru previzualizarea build-ului:

```bash
npm run preview
```

## Publicare pe GitHub Pages

Proiectul contine workflow-ul `.github/workflows/deploy.yml`.

Pasii recomandati:

1. Publica repository-ul pe GitHub.
2. In GitHub, mergi la **Settings > Pages**.
3. La **Build and deployment**, selecteaza **GitHub Actions**.
4. Fa push pe branch-ul `main`.

GitHub Actions va instala dependentele, va rula build-ul si va publica folderul `dist`.

## Publicare pe Vercel

Proiectul este pregatit si pentru Vercel prin `vercel.json`.

Setari folosite de Vercel:

```text
Install Command: npm ci
Build Command: npm run build
Output Directory: dist
```

Pasii recomandati:

1. Urca repository-ul pe GitHub.
2. Intra pe Vercel si alege **Add New > Project**.
3. Importa repository-ul.
4. Lasa framework-ul detectat ca **Vite**.
5. Apasa **Deploy**.

Fisierul `vercel.json` include si o regula de rewrite catre `index.html`, utila pentru aplicatii React single-page.

## Structura

```text
src/
  App.jsx          # aplicatia si componentele principale
  courseData.js   # lectii, carduri, quiz-uri si recapitulare
  main.jsx         # entry point React
  styles.css      # stiluri, responsive si dark mode
```

## Note

Continutul educational a fost structurat dupa PDF-ul cursului local `Curs.pdf`. PDF-ul original nu este inclus in repository.
