# Task Contracts

Ready-to-use task contracts for implementation turns. Each follows the
Context / Request / Output / Constraints / Pause-policy template. Paste the
matching block into chat when you want me to execute that task.

**Task order follows dependencies: 0 → 2 (DB) → 1 (Auth) → 3 → 4 → 5 → 6.**

---

## Task 0 — Scaffold

```text
Context:
I'm building a blog website with a Node.js/Express + TypeScript API (server/) and a
Vite + React + TypeScript SPA (client/), PostgreSQL via Prisma, JWT auth. Nothing
exists in the workspace yet. Architecture, plan, and decisions live in docs/.

Request:
Scaffold the full repo skeleton: docker-compose.yml for PostgreSQL 16, an empty-but-
runnable server/ (Express 5, TS strict, tsx watch, Vitest+Supertest, Zod, Prisma CLI,
port 4000) and client/ (Vite React-TS, react-router, Vite proxy /api -> :4000, port
5173), .env.example in both packages, .gitignore, and git init with an initial commit.

Output:
Working skeleton where `npm run dev` starts both servers. `GET /api/health` returns
200 (DB up). README quick start verified.

Constraints:
No business logic yet (no auth, no CRUD). Use bcryptjs (not bcrypt) later. Do not
commit .env files. Keep Prisma schema minimal for now (single HealthCheck or none).

Pause policy:
Ask me only if the DB container or a tool version needs a decision I can't infer.
```

## Task 2 — DB Connection

```text
Context:
server/ is scaffolded. The blog needs PostgreSQL access via Prisma with a data model
for User, Post, Comment (see docs/ARCHITECTURE.md §3).

Request:
Create prisma/schema.prisma (User, Post, Comment as specified in the architecture doc),
run the init migration, add a seed script (1 demo user + 2 published posts, bcryptjs-
hashed password), expose a PrismaClient singleton in src/db/prisma.ts, and implement
GET /api/health that checks DB connectivity.

Output:
Migration applied, `npx prisma db seed` works, `GET /api/health` returns
{"status":"ok"}, server test suite green (Vitest+Supertest).

Constraints:
Do not hand-edit generated migrations. No auth logic yet. UUID primary keys. No
plaintext passwords in the seed.

Pause policy:
Proceed without asking unless the Prisma version pins or seed credentials need a choice.
```

## Task 1 — Auth System

```text
Context:
DB layer exists (User model, Prisma client). The blog needs registration, login, and
identity checks. Spec: docs/ARCHITECTURE.md §5 (bcryptjs cost 10, JWT 1h, Bearer token,
no refresh tokens in v1).

Request:
Implement src/lib/password.ts, src/lib/jwt.ts, POST /api/auth/register, POST
/api/auth/login, GET /api/auth/me, middleware/auth.ts (req.user), middleware/error.ts,
middleware/validate.ts (Zod). Error shape {error:{message,code}}.

Output:
Vitest+Supertest tests covering: register->login->me round trip, wrong password 401,
missing/invalid/expired token 401, duplicate email 409. All green.

Constraints:
No refresh tokens. Passwords never returned or logged. JWT_SECRET required at boot
(validated via Zod env). Use bcryptjs, not bcrypt.

Pause policy:
Proceed unless the JWT expiry or role model needs your input.
```

## Task 3 — Posts API

```text
Context:
Auth middleware and DB are done. Blog posts CRUD per docs/ARCHITECTURE.md §4.

Request:
Implement POST /api/posts (auth), GET /api/posts, GET /api/posts/:slug, PATCH
/api/posts/:id, DELETE /api/posts/:id. Slug auto-generated from title, unique.
Author-only edit/delete; admin role overrides. Unpublished posts are 404 to the public.

Output:
Tests: CRUD happy path, 404 on unknown slug, author isolation (user B cannot modify
user A's post), 401 without token. Green suite.

Constraints:
Keep GET endpoints public and non-author pages leak-free (no author email in public
list). Validate with Zod. Update docs only if the contract changes.

Pause policy:
Proceed; ask only if you want drafts/pagination added to v1 scope.
```

## Task 4 — Comments API

```text
Context:
Posts API exists. Blog needs comments on published posts.

Request:
Add POST /api/posts/:slug/comments (auth) and include comments (oldest first) in the
GET /api/posts/:slug response. Comment: content + authorId + postId.

Output:
Tests: authenticated comment succeeds; unauthenticated -> 401; comment on unpublished
or unknown post -> 404. Green suite.

Constraints:
No comment editing/deletion in v1. Keep the public response shaped per the API contract.

Pause policy:
Proceed; ask only about comment moderation requirements.
```

## Task 5 — Frontend

```text
Context:
API is complete (auth + posts + comments). Build the SPA per docs/ARCHITECTURE.md §7.

Request:
client/src/api typed client with token injection and 401 -> logout; AuthContext +
ProtectedRoute; pages Home (post list), PostView (+ comments + comment form), Login,
Register, PostEditor (create/edit own posts); Navbar with auth state; plain CSS
styling.

Output:
npm run typecheck and npm run build pass in client/. Full flow works in the browser
against the running API: register -> login -> create post -> view -> comment -> logout.

Constraints:
All data through client/src/api/ only (no raw fetch in components). No UI kit, no
state-management library beyond React context. Handle the 401 logout case.

Pause policy:
Ask me only if the routing structure or styling approach needs a decision.
```

## Task 6 — Integration & Verification

```text
Context:
All tasks implemented. Verify the whole product end to end.

Request:
Re-run the README quick start from a clean state (fresh clone simulation): docker
compose up, migrate, seed, start both servers, exercise the full user journey via
the API and the browser flow described in Task 5. Fix anything broken. Update docs
if the real behavior diverged from the contract.

Output:
Working demo + full test suite green + typecheck green + any doc corrections.

Constraints:
Do not add features beyond v1 scope; only fix integration gaps.

Pause policy:
Report back after completion; ask before any scope-expanding change.
```
