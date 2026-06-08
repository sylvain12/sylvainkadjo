# Repository Guidelines

## Project Overview

This is a Next.js 14 App Router portfolio/blog application using React 18,
TypeScript, Tailwind CSS, Supabase, Cloudflare Pages, Zustand, TipTap, Resend,
and `zsa` server actions.

The package manager is Bun. Use `bun` commands by default.

The project is deployed on Cloudflare Pages using next-on-pages/Wrangler, so
Edge runtime compatibility is important.

## Common Commands

Use these commands unless the task clearly requires something else:

- `bun install` - install dependencies
- `bun run dev` - start the local Next.js dev server
- `bun run build` - create a production build
- `bun run start` - start the built Next.js app
- `bun run lint` - run Next.js linting
- `bun run pages:build` - build for Cloudflare Pages with next-on-pages
- `bun run preview` - build and preview with Wrangler
- `bun run deploy` - build and deploy with Wrangler
- `bun run email` - run the React Email dev server for Resend templates

There is no dedicated test script currently. Use `bun run lint` and
`bun run build` as the main verification steps unless a task adds tests.

## Architecture Notes

- App routes live in `src/app`.
- Shared UI components live in `src/components`.
- Shared utilities, schemas, constants, fonts, Supabase helpers, TipTap helpers,
  and generated database types live in `src/lib`.
- The homepage renders the posts experience through `src/app/posts`.
- Dynamic post pages live under `src/app/p/[slug]`.
- Dashboard routes live under `src/app/dashboard`.
- Supabase server access is centralized in `src/lib/utils/supabase/server.ts`.
- Server actions generally use `"use server"` and `createServerAction` from
  `zsa`.
- Client state generally uses Zustand stores colocated with features.
- Many routes/components target Cloudflare Edge runtime. Be careful with APIs
  that are not Edge-compatible.

## Styling Conventions

- Tailwind CSS is configured in `tailwind.config.ts`.
- Global CSS is imported from `src/app/globals.css`.
- Feature styles are split into CSS files such as `posts.css`, `projects.css`,
  `about.css`, and dashboard/post CSS files.
- CSS class names are mostly BEM-like, for example `posts__list-item`.
- Theme colors are CSS variables exposed through Tailwind names such as `main`,
  `second`, `light`, `text`, and `white`.
- Prefer existing CSS files and naming conventions before introducing new style systems.
- Avoid large global CSS changes unless strictly necessary.

## Coding Conventions

- TypeScript strict mode is enabled.
- Use the `@/*` path alias for imports from `src`.
- Add `"use client"` to any component that directly uses React client hooks,
  Zustand hooks, browser APIs, or `zsa-react`.
- Keep server-only code in server actions or server utilities.
- Prefer existing local patterns over introducing new abstractions.
- Avoid broad refactors unless the task explicitly asks for them.
- Do not introduce new dependencies without explaining why they are necessary.
- Do not change unrelated files.
- Do not rewrite working features unless the task requires it.

## Environment And Deployment

- Cloudflare Pages configuration is in `wrangler.toml`.
- Next-on-Pages setup is used in `next.config.mjs` and `postcss.config.mjs`.
- Supabase environment values are read through Cloudflare request context.
- Image loading uses a custom Supabase image loader at
  `src/lib/utils/supabase/supabase-image-loader.js`.

## Known Risks

- Cloudflare request context is required by Supabase helpers; data access can
  fail outside the expected dev/deploy environment.
- There are no automated tests at the moment.
- Some model and Zod schema definitions may not be perfectly aligned.
- Image path handling varies across post components, so check rendered images
  after changing post UI.
- Global CSS changes can affect multiple routes.

## Required Workflow For Codex

Before editing files:

1. Inspect the relevant files.
2. Explain the current implementation.
3. Identify the safest place to make the change.
4. Propose a short implementation plan.
5. Mention possible risks.

While editing:

1. Make focused changes only.
2. Follow existing architecture and naming conventions.
3. Avoid unrelated cleanup.
4. Keep changes easy to review.
5. Preserve existing behavior unless explicitly asked otherwise.

After editing:

1. Run or recommend the relevant validation commands:
   - `bun run lint`
   - `bun run build`
   - `bun run pages:build` when Cloudflare compatibility may be affected
2. Summarize:
   - files changed
   - what changed
   - why it changed
   - any remaining risks or manual checks needed

## Definition Of Done

A task is complete only when:

- The requested feature or fix is implemented.
- Existing behavior is not broken.
- TypeScript errors are avoided.
- Lint/build issues are fixed or clearly reported.
- The final answer explains the change clearly.
