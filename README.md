# Akriti Gautam Portfolio

Responsive React portfolio with separate pages for Home, About, Skills, Projects, Education, Certifications and Contact.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
```

## Deploy on Vercel

1. Upload this project to GitHub.
2. Open Vercel and import the GitHub repository.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

`vercel.json` is included so direct routes such as `/projects` work correctly.

## Before deployment

- Replace `public/resume.pdf` with your actual resume PDF.
- Replace the `#` LinkedIn/Instagram links in `src/App.jsx`.
- Replace placeholder demo links with your real live project URLs.
- Update your email address in `src/App.jsx`.
