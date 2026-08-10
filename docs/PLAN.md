# Plan — Blog Website

Status tracking for implementation. Mark tasks `[x]` as they complete.

## Sequencing

```
Task 0 (scaffold)
   └─► Task 1 (DB connection) ──► Task 2 (auth) ──► Task 3 (posts API)
                                                        │
                                        Task 4 (comments API) ──► Task 5 (frontend) ──► Task 6 (integration)
```

> **Note on your task numbering:** you named the work "Task-1 Auth System" and
> "Task-2 DB Connection". The DB is a dependency of auth, so we implement the DB
> **first** even though you numbered it second. The plan below keeps your
> numbering: **Task 1 = Auth**, **Task 2 = DB**, ordered in dependency sequence
> (DB → Auth).

## Task 0 — Scaffold

- [ ] Root: `docker-compose.yml` (PostgreSQL 16, host port 5434, volume)
- [ ] `server/`: `npm init`, TypeScript strict, Express, tsx watch, Vitest+Supertest, Zod, Prisma
- [ ] `client/`: Vite + React + TS template, react-router, Vite proxy `/api` → `:4000`
- [ ] `.env.example` in both packages; README quick start verified
- [ ] `git init` + initial commit

**Accept:** both dev servers start; `/api/health` returns 200 once DB is up.

## Task 2 — DB Connection  *(your "Task-2")*

- [ ] `prisma/schema.prisma`: `User`, `Post`, `Comment` per [ARCHITECTURE §3](ARCHITECTURE.md)
- [ ] `npx prisma migrate dev --name init`; seed script (`npx prisma db seed`) with 1 demo user + 2 posts
- [ ] `src/db/prisma.ts` singleton; `GET /api/health` runs `SELECT 1`
- [ ] Tests: health endpoint returns `{ status: "ok" }`

**Accept:** migration applies cleanly; `npm test` green; `prisma studio` shows seed data.

## Task 1 — Auth System  *(your "Task-1")*

- [ ] `src/lib/password.ts` (bcryptjs hash/verify), `src/lib/jwt.ts` (sign/verify, 1h expiry)
- [ ] `POST /api/auth/register` (Zod: email, password ≥ 8, name) → 201
- [ ] `POST /api/auth/login` → `{ token, user }`; 401 on bad credentials
- [ ] `GET /api/auth/me` (protected) → user profile
- [ ] `src/middleware/auth.ts` → `req.user`; `src/middleware/error.ts` + `validate.ts`
- [ ] Tests: register → login → me round-trip; wrong password 401; missing token 401

**Accept:** full auth round-trip covered by tests; tokens reject tampered/expired JWTs.

## Task 3 — Posts API

- [ ] `POST /api/posts` (auth) — create, slug auto-generated from title, uniqueness enforced
- [ ] `GET /api/posts` — published posts, newest first
- [ ] `GET /api/posts/:slug` — published post (404 if unpublished/unknown)
- [ ] `PATCH /api/posts/:id`, `DELETE /api/posts/:id` — author-only (admin override)
- [ ] Tests: CRUD happy path, author isolation (user B cannot edit user A's post), 404s

**Accept:** CRUD + authorization covered by tests.

## Task 4 — Comments API

- [ ] `POST /api/posts/:slug/comments` (auth) — comment on published post
- [ ] `GET /api/posts/:slug` now includes comments (oldest first)
- [ ] Tests: comment on unpublished post → 404; unauthenticated comment → 401

**Accept:** comments testable end-to-end via API.

## Task 5 — Frontend

- [ ] `client/src/api/` typed client + token injection + 401 → logout
- [ ] `AuthContext` + `ProtectedRoute`; pages: Home (list), PostView (+ comments), Login, Register, PostEditor
- [ ] Navbar (login state, logout); basic styling (plain CSS, no UI kit in v1)
- [ ] Typecheck + build pass (`npm run build`)

**Accept:** full flow works in browser: register → login → create post → view + comment.

## Task 6 — Integration & Verification

- [ ] Vite proxy verified; CORS config matches client origin
- [ ] Full test suite green; `typecheck` green in both packages
- [ ] README quick-start re-run from clean clone; update docs as needed

**Accept:** a fresh clone + the README commands yields a working blog.

---

## Definition of Done (every task)

- `npm run typecheck` passes in the touched package(s)
- `npm test` green in `server/` (or client tests where added)
- No `any`, no generated-file edits, no secrets committed
- Docs (ARCHITECTURE.md / DECISIONS.md) updated if behavior changed
