# Jessica Kriklewicz — Personal Resume Site

A single-page editorial resume built with Next.js 14, TypeScript, and Tailwind CSS. Designed to feel like a refined editorial spread — Besley + Poppins, deep navy on warm off-white, with subtle scroll-triggered motion.

This project was set up to be picked up in **Claude Code** so you can iterate, refine, and deploy it as a real production site.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
npm run start
```

Then open http://localhost:3000.

---

## Working with Claude Code

This project is structured so Claude Code can help you efficiently. A few starter prompts to try:

### Refine the design
- *"Make the hero name even bigger on desktop and tighten the letter-spacing"*
- *"Add a subtle hover state to each role title — underline that draws in from the left"*
- *"Change the accent color from terracotta to a deep forest green and show me the result"*

### Add real content
- *"Add a hero portrait image — I'll put a file at /public/portrait.jpg, place it on the right side of the hero on desktop and stack it on mobile"*
- *"Add a project case study page at /work/drift-connections with images, scroll-triggered reveals, and a back link"*

### Build out as a portfolio
- *"Turn this into a multi-page site with /about, /work, /contact — keep the editorial style consistent"*
- *"Add a CMS connection (Sanity) so I can edit projects without touching code"*

### Deploy
- *"Set up deployment on Vercel and write me a checklist of what to do"*
- *"Add proper SEO metadata, Open Graph tags, and a favicon"*

---

## Project Structure

```
jessica-resume-site/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main resume page
│   └── globals.css         # Tailwind + design tokens + custom styles
├── components/
│   ├── TopBar.tsx          # Sticky top navigation
│   ├── Hero.tsx            # Editorial nameplate hero
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # All work history
│   ├── Role.tsx            # Single role card (used inside Experience)
│   ├── Project.tsx         # Single project block (used inside Role)
│   ├── Education.tsx       # Education grid
│   ├── Skills.tsx          # Skills list
│   └── Footer.tsx          # CTA footer
├── lib/
│   └── content.ts          # All resume content as typed data
├── public/                 # Static assets (favicon, images)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Design Tokens

All colors, fonts, and spacing live in `tailwind.config.ts` and `app/globals.css`. The key tokens:

```
ink:        #2C2E3A     (primary text — deep navy)
ink-soft:   #5b5e6e     (muted text)
ink-faint:  #9b9da8     (very muted, for labels)
paper:      #faf7f2     (background — warm off-white)
paper-warm: #f3ede3     (sub-section background)
accent:     #c8553d     (warm terracotta — used very sparingly)

Display font: Besley (Google Fonts)
Body font:    Poppins (Google Fonts)
```

Edit these in `tailwind.config.ts` to retheme the whole site.

---

## All Resume Content is Centralized

Open `lib/content.ts`. All your roles, projects, education, and skills live there as typed data. Edit them in one place and the components pick them up.

This means you can refresh content without touching design code, and Claude Code can help you re-arrange or update specific items easily.

---

## Deploying to Vercel

The fastest path:

1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import the repo
4. Click Deploy — that's it

You can also point a custom subdomain like `cv.jessie-co.com` at the deployment.

---

## Customisation Notes

- **Fonts:** Loaded via `next/font/google` in `app/layout.tsx` — no FOUT, optimised for performance
- **Motion:** Pure CSS + Intersection Observer in `app/page.tsx` — no animation library required
- **Reduced motion:** `prefers-reduced-motion` is respected throughout
- **Responsive:** Mobile-first; key breakpoint at `md:` (768px)
- **Print:** A print stylesheet hasn't been added yet. Ask Claude Code to generate one when you want a clean PDF export

---

## Built April 2026
