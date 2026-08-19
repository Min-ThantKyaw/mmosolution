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

## Documentation

- [Architecture](docs/ARCHITECTURE.md) — system design, data model, API contract
- [Plan](docs/PLAN.md) — task breakdown and sequence
- [Tasks](docs/TASKS.md) — ready-to-use task contracts
- [Decisions](docs/DECISIONS.md) — architecture decision records (ADRs)
