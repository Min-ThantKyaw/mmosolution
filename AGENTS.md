# AGENTS.md — Standing Instructions

Rules that apply to every session working on this repo. Keep this file short; the
authoritative system design lives in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
— **read it before making architecture-level changes, and update it when the
architecture changes.**

## Build & Verify

- **Typecheck both packages before reporting done**: `cd server && npm run typecheck` and `cd client && npm run typecheck`.
- **Keep the API test suite green**: `cd server && npm test` (Vitest + Supertest).
- Server runs on port **4000**; client dev server on **5173** with a Vite proxy to `/api`.
- DB is PostgreSQL via Docker: `docker compose up -d`. Apply schema changes only through Prisma migrations (`npx prisma migrate dev`), never by hand-editing migration files.

## Conventions

- **TypeScript strict everywhere.** No `any`. Use Zod for validating env vars and request bodies.
- **API shape**: every endpoint lives under `/api`; success responses are plain JSON; errors are `{ "error": { "message": string, "code": string } }` with a proper HTTP status.
- **Auth**: JWT access token in `Authorization: Bearer <token>`. Passwords hashed with `bcryptjs` (cost 10). No refresh tokens in v1 — do not add them without updating docs/DECISIONS.md.
- **Path aliases**: `@/` → `server/src` (tsconfig paths) and `client/src` (Vite alias).
- **Naming**: kebab-case files, PascalCase components/classes, camelCase functions/variables. API route files under `src/modules/<feature>/`.
- **Commits**: conventional commits, e.g. `feat(auth): add login endpoint`, `fix(posts): validate slug uniqueness`.

## Boundaries — do not violate

- Never edit the generated Prisma client (`server/node_modules/.prisma/**`).
- Never commit `.env` files or real secrets; all secrets live in `.env`, `.env.example` has placeholders only.
- Don't store plaintext passwords or log tokens/passwords.
- Keep the client talking to the API only through the typed client under `client/src/api/`.
- No new major dependency without recording it in [docs/DECISIONS.md](docs/DECISIONS.md).

## Area-specific rules

General rules above apply everywhere. Scoped rules live in
[`.cursor/rules/*.mdc`](.cursor/rules/) and apply automatically when editing
matching files (tools that support glob-scoped rules, e.g. Cursor, Claude Code):

- [`.cursor/rules/backend.mdc`](.cursor/rules/backend.mdc) — applies to `backend/**`
- [`.cursor/rules/prisma.mdc`](.cursor/rules/prisma.mdc) — applies to `backend/prisma/**`
- [`.cursor/rules/generated.mdc`](.cursor/rules/generated.mdc) — applies to `backend/src/generated/**`

## Docs

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — system design (data model, API contract, auth flow)
- [docs/PLAN.md](docs/PLAN.md) — task plan; update status as tasks complete
- [docs/TASKS.md](docs/TASKS.md) — task contracts for implementation turns
- [docs/DECISIONS.md](docs/DECISIONS.md) — ADRs; append when a decision changes
