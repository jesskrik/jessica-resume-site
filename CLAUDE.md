# CLAUDE.md

This file gives Claude Code project-specific context. Read this first.

## Project

A single-page editorial-style personal resume site for Jessica Kriklewicz, Senior Product Designer & Design Lead. Built with Next.js 14 App Router, TypeScript, Tailwind CSS.

## Design Philosophy

The aesthetic is **refined editorial** — think luxury magazine spread, not generic portfolio template:

- Besley serif for display, Poppins for body
- Deep navy ink (#2C2E3A) on warm off-white paper (#faf7f2)
- Considered whitespace, **1px rules**, restrained color
- Subtle motion: scroll-triggered fade-ups, hero word reveals
- A single warm terracotta accent (#c8553d) used very sparingly
- A faint paper grain texture overlay (3.5% opacity) for tactile feel
- No em-dashes in body copy (the user finds them AI-tells); use commas, periods, parentheses, or restructure
- Density leans toward the user's print resume — condensed line-heights (~1.55), tight section padding, round bullets

When making changes: bias toward restraint, but match the print-resume density rather than the airy "luxury magazine" feel of earlier versions.

## Architecture

- `app/page.tsx` is the only page — it composes section components
- Each section is its own component in `components/`
- All resume content lives in `lib/content.ts` as typed data
- Design tokens live in `tailwind.config.ts` and `app/globals.css`
- Animations are pure CSS + IntersectionObserver — no animation library

## House Rules

1. **Edit `lib/content.ts` for content changes**, not the components
2. **Use design tokens** (`text-ink`, `bg-paper`, `font-serif`) — don't hard-code colors or fonts
3. **Add new motion via CSS** in `globals.css`, not new dependencies
4. **Respect `prefers-reduced-motion`** — already wired up in `globals.css`
5. **Keep things responsive** — mobile-first, `md:` breakpoint at 768px
6. **No em-dashes** in body copy (user preference)
7. **Use `1px` borders** for dividers (set inline `borderWidth: "1px"` to be explicit, Tailwind's default already gives 1px)

## Common Tasks & Where to Edit

| Task | Edit |
|---|---|
| Update a role / project / dates | `lib/content.ts` |
| Add a new education entry | `lib/content.ts` (`education[]`) |
| Change a color / font / spacing | `tailwind.config.ts` |
| Adjust paper grain or animations | `app/globals.css` |
| Restructure a section | `components/{Name}.tsx` |
| Add a new section | New component → import in `app/page.tsx` |
| Add metadata / SEO | `app/layout.tsx` |

## What to Avoid

- Don't add animation libraries (framer-motion etc.) — CSS is sufficient and faster
- Don't add UI libraries (shadcn etc.) — components are intentionally hand-built
- Don't introduce purple gradients, generic Inter font, or other AI-design tells
- Use the `.dash-list` class for bulleted lists — it renders round `•` markers (matches the user's print resume)

## Deploying

Vercel is the target. After committing to a GitHub repo, import at vercel.com/new — no build config needed. A custom domain like `cv.jessie-co.com` can be pointed at the deployment.

## Future Ideas

- Add a print stylesheet so the page exports cleanly to PDF
- Add /work case study pages with images for Drift Connections and Niina Nummela
- Wire content to a Sanity CMS so content can be edited without code changes
- Add a hero portrait image (the user may add one later)
