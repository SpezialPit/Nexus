# NEXUS V1.0.1

Personal Life Dashboard built for Vercel with Next.js 15.5.25, React 19.1, TypeScript, Tailwind CSS, Lucide, Recharts 3 and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Vercel

Import the repository into Vercel. Framework preset: Next.js. Build command: `npm run build`. No environment variables are required for the mock/local V1.

## Demo

The login is intentionally mock/local. Any non-empty email and password can enter the dashboard. Vault credentials are fictional demo data held in browser memory only. Do not use real credentials. Production should add real authentication, secure sessions, a master password/key derivation flow, Web Crypto encryption, and encrypted server-side persistence.

## Architecture

- `app/`: Next.js App Router
- `components/`: UI and application features
- `data/`: seed/mock data
- `lib/`: utilities
- `types/`: domain types

The UI is deliberately separated from seed data so a future repository/API/Supabase/Prisma adapter can replace the local implementation.
