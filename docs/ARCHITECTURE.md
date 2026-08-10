# Architecture — Blog Website

Status: **draft** (approved stack, pending implementation).
Source of truth for system design. Update this file whenever the architecture changes.

## 1. Overview

A client-server blog platform. The React SPA calls a JSON REST API; the API
persists to PostgreSQL through Prisma. Auth uses JWT bearer tokens.

```
┌─────────────┐   HTTP/JSON    ┌──────────────────┐        ┌────────────┐
│  client/    │ ─────────────► │  server/         │ ─────► │ PostgreSQL │
│  Vite+React │ ◄───────────── │  Express API     │ Prisma │  (Docker)  │
│  SPA :5173  │   /api/*       │  :4000           │        └────────────┘
└─────────────┘                └──────────────────┘
```

- **client** proxies `/api` → `http://localhost:4000` during dev (Vite proxy).
- **server** owns all business logic, validation, and persistence.

## 2. Repository Layout

```
blog-website/
├── docker-compose.yml          # PostgreSQL 16 container
├── server/
│   ├── prisma/
│   │   ├── schema.prisma       # data model (single source of truth)
│   │   ├── migrations/         # generated, never hand-edited
│   │   └── seed.ts             # demo user + posts
│   └── src/
│       ├── index.ts            # bootstrap: config → db → app → listen
│       ├── app.ts              # express app (middleware + routes), testable
│       ├── config/env.ts       # Zod-validated env (DATABASE_URL, JWT_SECRET, PORT)
│       ├── db/prisma.ts        # PrismaClient singleton
│       ├── middleware/
│       │   ├── auth.ts         # JWT verify → req.user
│       │   ├── error.ts        # central error handler (see §6)
│       │   └── validate.ts     # Zod body/param validation helper
│       ├── modules/
│       │   ├── auth/           # register, login, me + router
│       │   ├── posts/          # CRUD + router
│       │   └── comments/       # list/create + router
│       └── lib/                # jwt, password hashing, http errors
└── client/
    └── src/
        ├── api/                # typed API client + token injection
        ├── auth/               # AuthContext (login state, logout)
        ├── pages/              # Home, PostView, Login, Register, PostEditor
        ├── components/         # Navbar, PostCard, ProtectedRoute, …
        ├── router.tsx          # react-router routes
        └── main.tsx
```

## 3. Data Model (Prisma)

```
User  1───n Post  1───n Comment
              │
              └───────── 1 User (author)
```

| Model   | Fields                                                                 |
| ------- | ---------------------------------------------------------------------- |
| User    | `id` (uuid, pk), `email` (unique), `passwordHash`, `name`, `role` (`USER`\|`ADMIN`), `createdAt` |
| Post    | `id` (uuid, pk), `title`, `slug` (unique), `content` (text), `published` (bool), `authorId` (fk), `createdAt`, `updatedAt` |
| Comment | `id` (uuid, pk), `content`, `postId` (fk), `authorId` (fk), `createdAt` |

Rules:
- Deleting a user cascades? **No** — `restrict` by default; block deletion of users with posts (avoid data loss in v1).
- `slug` is derived from `title` and enforced unique.
- Indexes: `Post.authorId`, `Post.slug` (unique), `Comment.postId`.

## 4. API Contract

Base: `/api`. All bodies JSON. Errors: `{ "error": { "message", "code" } }`.

| Method | Path                      | Auth | Purpose                          |
| ------ | ------------------------- | ---- | -------------------------------- |
| GET    | `/api/health`             | —    | DB connectivity check            |
| POST   | `/api/auth/register`      | —    | Create account → 201             |
| POST   | `/api/auth/login`         | —    | Returns `{ token, user }`        |
| GET    | `/api/auth/me`            | ✔    | Current user profile             |
| GET    | `/api/posts`              | —    | List published posts (newest)    |
| GET    | `/api/posts/:slug`        | —    | Single published post + comments |
| POST   | `/api/posts`              | ✔    | Create post (author)             |
| PATCH  | `/api/posts/:id`          | ✔    | Edit own post                    |
| DELETE | `/api/posts/:id`          | ✔    | Delete own post / admin          |
| POST   | `/api/posts/:slug/comments` | ✔  | Comment on a post                |

Validation (Zod): `email` must be valid; `password` ≥ 8 chars; `title` 1–200;
`slug` lowercase `[a-z0-9-]+` (auto-generated from title if omitted).

## 5. Auth Flow

1. `POST /api/auth/register` → hash password with **bcryptjs (cost 10)**, create User, return 201 (no token — user logs in).
2. `POST /api/auth/login` → verify hash → sign JWT `{ sub: userId, role }` with `JWT_SECRET`, expiry **1h** → return `{ token, user }`.
3. Client stores token in `localStorage`, sends `Authorization: Bearer <token>`.
4. `middleware/auth.ts` verifies token → attaches `req.user = { id, role }`; 401 with `code: "UNAUTHORIZED"` on failure.
5. Post mutation guards: author-only via `req.user.id === post.authorId`; admin overrides.

## 6. Error Handling

Single `error.ts` middleware: maps known HTTP errors (custom `HttpError` with `code`) → JSON;
unknown errors → 500 `code: "INTERNAL"`. Zod failures → 400 `code: "VALIDATION"` with field messages.
Never leak stack traces or DB errors to the client.

## 7. Frontend Design

- **Routing** (react-router): `/` home (post list), `/posts/:slug`, `/login`, `/register`, `/editor` (+ `/editor/:id` edit). `ProtectedRoute` wraps editor routes.
- **Auth state**: `AuthContext` — loads token on boot, exposes `user`, `login`, `logout`; all API calls go through `api/client.ts` which injects the token and handles 401 → logout.
- **Pages** read/write only through `client/src/api/` (typed functions like `api.listPosts()`), never fetch directly.

## 8. Security Notes

- `helmet` + CORS restricted to the client origin (dev: `http://localhost:5173`).
- Zod validation on every body/param; `jsonwebtoken` with a strong `JWT_SECRET` (required, validated at boot).
- No plaintext passwords, no token logging. Rate limiting on `/auth/*` is a **future** item (not in v1).
- `.env` never committed; `.env.example` documents keys.

## 9. Future / Out of Scope (v1)

- Refresh tokens, email verification, password reset
- Drafts & rich text editor, image uploads
- Comments editing/deleting, pagination
- SSR/prerendering for SEO
