# SaaS Starter Kit

MVP-friendly starter based on Next.js, Prisma, and Stripe. The goal is to ship fast with a clean base, then harden later.

## Quick start
1. Install deps: `npm install`
2. Start database: `docker compose up -d db`
3. Run migrations: `npm run db:migrate`
4. Start dev server: `npm run dev`

Open http://localhost:3000

## Env
Create or update `.env` and set at least:
- `DATABASE_URL`

## Scripts
- `npm run dev` start dev server
- `npm run build` build for production
- `npm run start` start production server
- `npm run lint` lint code
- `npm run typecheck` TypeScript check
- `npm run test:smoke` basic checks (lint + typecheck)
- `npm run db:dev` start Postgres via Docker
- `npm run db:migrate` run Prisma migrations
- `npm run db:generate` generate Prisma client
- `npm run db:studio` open Prisma Studio

## Project structure
- `src/app` Next.js app router
- `prisma` Prisma schema and migrations
- `public` static assets

## Manual test scenarios
See `scenarion-test.md` for user flows to validate the MVP.

## MVP scope
- Landing + marketing pages
- Basic auth flow (placeholder for future providers)
- Stripe subscription flow (placeholder for future billing)

## Roadmap (short)
- Notion OAuth
- Billing end-to-end
- Minimal dashboard

