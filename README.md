# NEXUS V1

Personal Life Dashboard built with Next.js, TypeScript, Tailwind CSS, Lucide, Recharts and Framer Motion.

## Run

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm start
```

## Vercel

Import the repository/project into Vercel. No environment variables are required for this V1. Build command is `npm run build` and the framework is detected as Next.js.

## What's implemented

- Mock/local login (any non-empty credentials; no password persistence).
- Responsive dashboard, sidebar and mobile navigation.
- Financial Planner with editable monthly data and live Recharts.
- Savings goals with create/edit.
- Locked Vault with demo PIN, inactivity lock, search, reveal/copy and CRUD modal.
- Shopping stores with add/edit/delete/favorites/external links.
- Fictional store updates with read state.
- Notes with create/edit/delete/search/pin/tags.
- Global CMD/CTRL+K search across notes, stores, vault and goals.
- Settings UI, notification center and JSON export demo.
- Framer Motion transitions and polished dark-first UI.

## Production architecture notes

The V1 uses `data/mock.ts` and browser React state. There is no real authentication, database, server-side encryption, or secure password storage. Before using real credentials, implement authentication/session handling, password hashing, a master-password/key derivation strategy, Web Crypto based client-side encryption, encrypted server persistence, authorization and secure environment variables. Store/update ingestion is intentionally local and should later be backed by RSS/API/newsletter/feed workers or controlled scraping.
