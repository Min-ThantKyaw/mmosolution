# Blog Website

A full-stack blog platform built with **Node.js (Express) + React (Vite)** in **TypeScript**.

## Tech Stack

| Layer      | Choice                          |
| ---------- | ------------------------------- |
| Backend    | Express 5 + TypeScript          |
| Database   | PostgreSQL + Prisma ORM |
| Auth       | JWT   |
| Frontend   | React 19 + Vite + React Router  |
| Testing    | -        |
| Validation | Zod    |

## Repository Layout

```
blog-website/
├── backend/          # Express API (port 4000)
│   ├── prisma/      # schema.prisma, migrations, seed
│   └── src/         # app code
│   └── public/      # Accest
├── web/          # Vite + React SPA (port 5173)
└── docs/            # architecture, plan, task contracts, decisions
```

## Quick Start

**Prerequisites:** Node.js 20+, Supbase

# 2. API
cd backend
npm install
cp .env.example .env          # set DATABASE_URL and JWT_SECRET
npx prisma migrate dev        # create tables
npx prisma db seed            # optional: demo data
npm run dev                   # http://localhost:3000

# 3. Frontend
cd web
npm install
cp .env.example .env          # VITE_API_URL=http://localhost:4000/api
npm run dev                   # http://localhost:5173
```

## Deployment (Frontend → Vercel)

The frontend is a static Vite SPA in `web/` — no server needed, so Vercel is a good fit.

1. Push the repo to GitHub, then import it at [vercel.com](https://vercel.com) (**Add New → Project**).
2. Set **Root Directory** to `web` — Vercel auto-detects Vite and uses `npm run build` → `dist/`.
3. Add the environment variable `VITE_API_URL` (e.g. `https://your-backend.example.com/api`).
   - `VITE_*` vars are inlined **at build time** — changing them requires a redeploy, and they ship in the client bundle, so never put secrets there.
4. Deploy. Pushes to the branch auto-redeploy.
5. `web/vercel.json` (SPA rewrites) is already in place so client-side routes like `/posts/1` work when you add React Router.

**Backend note:** point `VITE_API_URL` at your deployed backend and set the backend's
`CORS_ORIGIN` to the Vercel URL (e.g. `https://my-app.vercel.app`).

## Documentation

- [Architecture](docs/ARCHITECTURE.md) — system design, data model, API contract
- [Plan](docs/PLAN.md) — task breakdown and sequence
- [Tasks](docs/TASKS.md) — ready-to-use task contracts
- [Decisions](docs/DECISIONS.md) — architecture decision records (ADRs)
