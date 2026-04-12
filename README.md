# Sasabase — Website

兵庫県川西市の地域学習拠点「Sasabase」の公式ウェブサイト。

**Built with:** Next.js 14 (App Router) + TypeScript + Tailwind CSS

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## Project Structure

```
sasabase-next/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (header, footer, fonts)
│   ├── page.tsx                # Home page (assembles all sections)
│   ├── globals.css             # Global styles + Tailwind base
│   ├── about/page.tsx          # About Sasabase
│   ├── concept/page.tsx        # Learning & Local Design concept
│   ├── programs/page.tsx       # All programs (6th Sector, Corporate, etc.)
│   ├── activities/page.tsx     # Terra'Co + Sasamai Club
│   ├── space/page.tsx          # Space rental
│   ├── events/page.tsx         # Events & news
│   ├── access/page.tsx         # Access / directions
│   └── contact/page.tsx        # Contact form
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Fixed navigation bar (client component)
│   │   ├── Footer.tsx          # Site footer
│   │   └── MobileMenu.tsx      # Mobile slide-in drawer (client component)
│   ├── sections/               # Homepage section components
│   │   ├── Hero.tsx
│   │   ├── Introduction.tsx
│   │   ├── WhatWeDo.tsx
│   │   ├── ConceptSection.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── ActivitiesSection.tsx
│   │   ├── SpaceSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── AccessSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                     # Reusable UI primitives
│       ├── SectionHeader.tsx   # Consistent section titles with label
│       ├── ImagePlaceholder.tsx # Placeholder while real photos are added
│       └── ProgramCard.tsx     # Reusable card for programs
│
├── public/
│   └── images/                 # Add real photos here
│
├── tailwind.config.ts          # Design system (colors, fonts, spacing)
├── next.config.ts
└── tsconfig.json
```

---

## Design System

Defined in `tailwind.config.ts`:

| Token | Value | Usage |
|---|---|---|
| `primary` | `#2C5840` (forest green) | Buttons, accents, links |
| `background` | `#F9F8F5` | Page background |
| `foreground` | `#1C1C1A` | Primary text |
| `muted` | `#6A6560` | Secondary text |
| `border` | `#E4DDD3` | Dividers, card borders |
| `amber` | `#8B6420` | Highlight accents |
| `surface` | `#FFFFFF` | Card backgrounds |

**Font:** Noto Sans JP (loaded via `next/font/google`) — optimized for Japanese text.

**Reusable CSS classes** (defined in `globals.css`):
- `.container-base` — max-width container with responsive padding
- `.section-padding` — consistent vertical section spacing
- `.btn-primary`, `.btn-outline`, `.btn-ghost` — button variants
- `.prose-jp` — body text optimized for Japanese
- `.label-text` — small uppercase label style

---

## Adding Real Content

### Photos
Replace `ImagePlaceholder` components with `next/image`:

```tsx
import Image from 'next/image'
// Replace:
<ImagePlaceholder label="外観" aspectRatio="video" />
// With:
<Image src="/images/exterior.jpg" alt="Sasabase外観" fill className="object-cover" />
```

Place images in `public/images/`.

### Events & News
Currently hardcoded in `app/events/page.tsx`. To make dynamic:
- Add a CMS (Notion, Contentful, Sanity, or MDX files)
- Replace the `posts` array with a data fetch

### Contact Form
The form in `app/contact/page.tsx` and `components/sections/ContactSection.tsx`
simulates submission. Connect to a real backend:
- [Formspree](https://formspree.io/) — simplest option
- [Resend](https://resend.com/) — email API
- Any server action or API route

### Space Pricing
Update placeholder `¥○○,000` values in `app/space/page.tsx`.

### Map
Replace the map placeholder in `app/access/page.tsx` and
`components/sections/AccessSection.tsx` with Google Maps embed
or a `react-leaflet` component.

---

## Adding New Pages

Create a new folder under `app/`:

```
app/
└── new-page/
    └── page.tsx
```

Follow the existing page pattern:
1. Export `metadata` for SEO
2. Include a page hero section
3. Use `SectionHeader`, `ImagePlaceholder`, and layout components

The page will automatically be available at `/new-page`.

---

## Deployment

This is a standard Next.js app. Deploy to:

- **Vercel** (recommended): connect your GitHub repo, zero config
- **Netlify**: use `npm run build` + `npm start`
- **Any Node.js host**: run `npm run build && npm start`

For static export (no server-side features needed):
```ts
// next.config.ts
export default { output: 'export' }
```

---

## Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router, TypeScript
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP) — Japanese-optimized font
