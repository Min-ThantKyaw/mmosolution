# Blog Website

A full-stack blog platform built with **Node.js (Express) + React (Vite)** in **TypeScript**.

## Tech Stack

| Layer      | Choice                          |
| ---------- | ------------------------------- |
| Backend    | Express 5 + TypeScript          |
| Database   | Supbase PostgreSQL + Prisma ORM |
| Auth       | JWT (access token) + bcryptjs   |
| Frontend   | React 19 + Vite + React Router  |
| Testing    | Vitest + Supertest (API)        |
| Validation | Zod (env + request payloads)    |

## Repository Layout

```
blog-website/
├── server/          # Express API (port 4000)
│   ├── prisma/      # schema.prisma, migrations, seed
│   └── src/         # app code
├── client/          # Vite + React SPA (port 5173)
└── docs/            # architecture, plan, task contracts, decisions
```

## Quick Start

**Prerequisites:** Node.js 20+, Supbase

```bash
# 1. Start PostgreSQL
docker compose up -d

# 2. Server
cd server
npm install
cp .env.example .env          # set DATABASE_URL and JWT_SECRET
npx prisma migrate dev        # create tables
npx prisma db seed            # optional: demo data
npm run dev                   # http://localhost:4000

# 3. Client (new terminal)
cd client
npm install
cp .env.example .env          # VITE_API_URL=http://localhost:4000/api
npm run dev                   # http://localhost:5173
```

## Common Commands

| Action                 | Command                                    |
| ---------------------- | ------------------------------------------ |
| Run API (watch)        | `cd server && npm run dev`                 |
| Run client (watch)     | `cd client && npm run dev`                 |
| Typecheck both         | `cd server && npm run typecheck`           |
| API tests              | `cd server && npm test`                    |
| Migrations             | `cd server && npx prisma migrate dev`      |
| Prisma Studio          | `cd server && npx prisma studio`           |

## Documentation

- [Architecture](docs/ARCHITECTURE.md) — system design, data model, API contract
- [Plan](docs/PLAN.md) — task breakdown and sequence
- [Tasks](docs/TASKS.md) — ready-to-use task contracts
- [Decisions](docs/DECISIONS.md) — architecture decision records (ADRs)
