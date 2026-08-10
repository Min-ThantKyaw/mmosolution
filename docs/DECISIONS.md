# Architecture Decision Records

Format: **Status — Context — Decision — Consequences.** Append new ADRs when a
decision changes; mark superseded ADRs as `superseded by ADR-00x`.

---

## ADR-001: Express + TypeScript backend

- **Status:** accepted
- **Context:** Need a well-known Node.js API framework with a large ecosystem; team asked for TypeScript throughout.
- **Decision:** Express 5 + strict TypeScript. Zod for env + request validation. Vitest + Supertest for tests, tsx for dev watch.
- **Consequences:** Simple, familiar, easy to extend; we handle structure ourselves (no DI container). Middleware pipeline stays small in v1.

## ADR-002: PostgreSQL + Prisma ORM

- **Status:** accepted
- **Context:** Blog needs relational data (users, posts, comments) with referential integrity; want type-safe queries and migrations.
- **Decision:** PostgreSQL 16 via `docker-compose.yml`; Prisma as schema source of truth and migration tool.
- **Consequences:** Migrations are generated (never hand-edited); schema changes are reviewable PRs. Requires Docker locally. `prisma generate` output must never be edited.

## ADR-003: Vite + React SPA (no SSR)

- **Status:** accepted
- **Context:** Blog content benefits from SEO, but v1 priority is a simple, fast-to-build client against a JSON API.
- **Decision:** Vite + React 19 + react-router SPA; public content rendered client-side.
- **Consequences:** No server rendering; SEO is weaker until a future prerender/SSR pass (tracked in ARCHITECTURE §9). Simplest possible build tooling and dev proxy.

## ADR-004: Two-folder layout (server/ + client/), no workspaces

- **Status:** accepted
- **Context:** Keep the two packages independently runnable and simple to reason about.
- **Decision:** `server/` and `client/` each own their `package.json`, deps, and scripts; shared code stays minimal.
- **Consequences:** Two `npm install`s and two dev servers (Vite proxy hides the API port). No hoisting surprises; slightly more install time.

## ADR-005: bcryptjs instead of bcrypt

- **Status:** accepted
- **Context:** Native `bcrypt` needs node-gyp/compiler toolchains (a known friction point on Windows).
- **Decision:** Use `bcryptjs` (pure JS) at cost 10.
- **Consequences:** Slightly slower hashing than native, irrelevant at blog scale; zero native-build failures.

## ADR-006: Access token only, no refresh tokens (v1)

- **Status:** accepted
- **Context:** Keep the auth surface small for a first version.
- **Decision:** Single JWT access token, 1h expiry, in `localStorage` on the client; 401 → forced logout.
- **Consequences:** Users re-login hourly; no revocation story. Refresh tokens + httpOnly cookies are a documented future item (ARCHITECTURE §9).

## ADR-007: Single error shape and central error middleware

- **Status:** accepted
- **Context:** Need consistent client-side error handling.
- **Decision:** All errors are `{ "error": { "message", "code" } }`; one `error.ts` middleware maps `HttpError`/Zod failures to status + code; unknown → 500 `INTERNAL` without leaking internals.
- **Consequences:** Client can branch on `code`; adding typed error codes stays centralized.
