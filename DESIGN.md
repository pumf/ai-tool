---
version: alpha
name: tool.pumf.top
description: "A calm, light-toned developer-tool landing page built around a clean white canvas with a distinctive teal accent (#0abFA5). The system reads as utilitarian-craft: minimal decoration, functional typography, generous whitespace. The design prioritizes clarity and utility over visual noise — every element earns its place. Display type uses clean geometric sans at weights 600-700 with measured negative tracking. Cards live as white panels with hairline borders and subtle shadow on hover. The teal accent appears sparingly on CTAs, active states, and decorative micro-elements."

colors:
  primary: "#0abFA5"
  on-primary: "#ffffff"
  primary-hover: "#08d9a3"
  primary-focus: "#09b894"
  primary-soft: "rgba(10, 191, 165, 0.08)"
  primary-glow: "rgba(10, 191, 165, 0.15)"
  
  ink: "#1a1a2e"
  body: "#5c5c72"
  muted: "#9494a8"
  
  canvas: "#ffffff"
  canvas-soft: "#f8f9fb"
  canvas-soft-2: "#f0f2f8"
  
  border: "rgba(0, 0, 0, 0.07)"
  border-hover: "rgba(10, 191, 165, 0.3)"
  border-strong: "rgba(0, 0, 0, 0.12)"
  
  hairline: "#ebebeb"
  
  error: "#ef4444"
  error-soft: "rgba(239, 68, 68, 0.08)"
  
  success: "#10b981"
  
  overlay: "rgba(0, 0, 0, 0.5)"

typography:
  display-xl:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -2.4px
  display-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -1.6px
  display-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.8px
  display-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.4px
  body-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm-strong:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  mono:
    fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 24px
  pill: 100px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  section: 128px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.sm} {spacing.lg}"
    borderBottom: "1px solid {colors.border}"
  
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} {spacing.sm}"
    borderRadius: "{rounded.sm}"
  
  nav-link-active:
    textColor: "{colors.primary}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.xs} {spacing.sm}"
    borderRadius: "{rounded.sm}"
  
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    borderRadius: "{rounded.pill}"
    padding: "10px 20px"
  
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    borderColor: "{colors.border}"
    borderRadius: "{rounded.pill}"
    padding: "10px 20px"
  
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    borderRadius: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  
  badge-status:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    borderRadius: "{rounded.full}"
    padding: "4px 12px"
  
  badge-primary:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    borderRadius: "{rounded.full}"
    padding: "4px 12px"
  
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    borderColor: "{colors.border}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.xl}"
  
  card-hover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border-hover}"
    boxShadow: "0 8px 40px {colors.primary-glow}"
  
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    borderColor: "{colors.border}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.xl}"
  
  card-coming-soon:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    borderColor: "{colors.border}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.xl}"
    opacity: 0.75
  
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: "{spacing.section} {spacing.lg}"
    textAlign: "center"
  
  section-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    padding: "{spacing.4xl} {spacing.lg}"
  
  stats-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.lg} {spacing.xl}"
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)"
  
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
    borderTop: "1px solid {colors.border}"
  
  link-inline:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  
  divider:
    backgroundColor: "{colors.border}"
    height: "1px"
    margin: "{spacing.lg} 0"
  
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border}"
    typography: "{typography.body-sm}"
    borderRadius: "{rounded.sm}"
    padding: "10px 14px"
    height: 40px
  
  stat-value:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 28px
    fontWeight: 700
    color: "{colors.ink}"
    letterSpacing: -0.02em
    fontVariantNumeric: "tabular-nums"
  
  stat-label:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    color: "{colors.muted}"
    marginTop: 4px

---

## Overview

tool.pumf.top is a Chinese developer-tools landing page with a philosophy of "简洁工具，专注本质" (simple tools, focus on essence). The page serves as a hub for small utility projects — currently running a lottery system (cj.pumf.top) and an AI music player (music.pumf.top), with upcoming image tools and clipboard manager.

The design language is **calm utilitarianism** — a light canvas (#ffffff with #f8f9fb soft sections), a distinctive teal accent (#0abFA5), and typography that prioritizes readability over personality. The page should feel like a well-organized toolbox: everything has its place, nothing is decorative for decoration's sake.

**Key Characteristics:**
- **Light canvas system** — pure white cards on #f8f9fb soft background sections
- **Teal accent** (#0abFA5) — used sparingly for CTAs, active states, and micro-highlights
- **Minimal decoration** — no gradients at scale, no atmospheric effects. Whitespace IS the decoration
- **Card-based layout** — feature cards with hairline borders, subtle shadow on hover
- **Chinese content** — all text in Chinese, design should accommodate CJK character shapes
- **Scroll-triggered reveals** — staggered fade-up animations for cards

## Colors

### Brand & Accent
- **Primary Teal** (`{colors.primary}`): The signature accent — CTAs, active links, decorative micro-elements
- **Primary Hover** (`{colors.primary-hover}`): Slightly lighter teal for hover states
- **Primary Focus** (`{colors.primary-focus}`): Darker teal for focus rings
- **Primary Soft** (`{colors.primary-soft}`): 8% teal for badge backgrounds
- **Primary Glow** (`{colors.primary-glow}`): 15% teal for card hover shadows

### Surface
- **Canvas** (`{colors.canvas}`): Pure white — card surfaces, nav bar, hero background
- **Canvas Soft** (`{colors.canvas-soft}`): #f8f9fb — section backgrounds between cards
- **Canvas Soft 2** (`{colors.canvas-soft-2}`): #f0f2f8 — deeper inset, stats bar background

### Text
- **Ink** (`{colors.ink}`): #1a1a2e — headings and emphasized text
- **Body** (`{colors.body}`): #5c5c72 — secondary text, descriptions
- **Muted** (`{colors.muted}`): #9494a8 — tertiary text, placeholders

### Borders
- **Border** (`{colors.border}`): rgba(0,0,0,0.07) — card edges, dividers
- **Border Hover** (`{colors.border-hover}`): teal at 30% — card hover state border
- **Border Strong** (`{colors.border-strong}`): rgba(0,0,0,0.12) — stronger dividers
- **Hairline** (`{colors.hairline}`): #ebebeb — subtle 1px rules

### Semantic
- **Success** (`{colors.success}`): #10b981 — positive status
- **Error** (`{colors.error}`): #ef4444 — error states
- **Error Soft** (`{colors.error-soft}`): 8% red — error backgrounds
- **Overlay** (`{colors.overlay}`): 50% black — modal scrims

## Typography

### Font Family
- **Primary**: Inter (with -apple-system, BlinkMacSystemFont, 'Segoe UI' fallbacks)
- **Mono**: SF Mono, Fira Code, Consolas (for URLs and code-like text)

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 700 | 1.1 | -2.4px | Hero headline |
| `{typography.display-lg}` | 40px | 700 | 1.15 | -1.6px | Section headlines |
| `{typography.display-md}` | 28px | 600 | 1.2 | -0.8px | Card titles |
| `{typography.display-sm}` | 20px | 600 | 1.3 | -0.4px | Micro headlines |
| `{typography.body-lg}` | 18px | 400 | 1.7 | 0 | Lead paragraphs |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Default body |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Secondary body, nav |
| `{typography.body-sm-strong}` | 14px | 500 | 1.5 | 0 | Emphasized body |
| `{typography.caption}` | 12px | 400 | 1.4 | 0 | Badges, labels |
| `{typography.mono}` | 13px | 400 | 1.5 | 0 | URLs, code |
| `{typography.button}` | 14px | 500 | 1.2 | 0 | Button labels |

### Principles
- **Negative tracking on display sizes** — headlines use -0.4px to -2.4px tracking
- **Sentence-case headlines** — no all-caps except mono labels
- **Generous line-height for CJK** — body at 1.6-1.7 to accommodate Chinese characters
- **Teal accent on key interactions** — CTAs, links, hover states

## Layout

### Spacing System
- **Base unit**: 4px
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.2xl}` 40px · `{spacing.3xl}` 48px · `{spacing.4xl}` 64px · `{spacing.5xl}` 96px · `{spacing.section}` 128px
- **Section padding**: hero uses `{spacing.section}` 128px; content sections use `{spacing.4xl}` 64px
- **Card padding**: `{spacing.xl}` 32px interior padding
- **Card gap**: 16px between cards in grid

### Grid & Container
- **Max width**: 860px centered
- **Horizontal padding**: 28px on desktop, 20px on mobile
- **Card grid**: `repeat(auto-fit, minmax(280px, 1fr))` — responsive 1-2 columns
- **Stats bar**: flex layout with 56px gap on desktop, column on mobile

### Whitespace Philosophy
The design relies on whitespace rather than decoration. Section spacing is generous (64-128px vertical). Within cards, headline/paragraph stack is tight (8px gap), then wider gap before CTAs. The page reads as **engineered calm** — large gaps + tight interior.

### Responsive Strategy

| Breakpoint | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Stats stack vertically; card grid single column; nav hamburger |
| Tablet | 600-959px | Card grid 2-up |
| Desktop | ≥ 960px | Full layout |

#### Collapsing Strategy
- **Stats bar**: flex row → column stack at mobile
- **Card grid**: auto-fit maintains responsiveness
- **Hero**: scales down gracefully with clamp()

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border | Hero background, footer |
| Level 1 — Hairline | 1px solid border | Default card chrome |
| Level 2 — Subtle Shadow | border + 0 4px 24px rgba(0,0,0,0.04) | Stats bar |
| Level 3 — Hover Lift | border-hover + 0 8px 40px primary-glow | Hovered cards |
| Level 4 — Overlay | 50% black overlay | Modal scrim |

### Decorative Depth
- **No gradients at scale** — the design avoids atmospheric effects
- **Minimal decoration** — only essential visual cues (borders, subtle shadows)
- **Card accent line** — 3px gradient line at top of cards on hover (teal → transparent)

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Smallest inline elements |
| `{rounded.sm}` | 6px | Nav links, form inputs |
| `{rounded.md}` | 12px | Buttons, tags |
| `{rounded.lg}` | 16px | Cards, panels |
| `{rounded.xl}` | 20px | Larger cards |
| `{rounded.xxl}` | 24px | Stats bar |
| `{rounded.pill}` | 100px | Marketing CTA pills |
| `{rounded.full}` | 9999px | Badges, status pills |

## Components

### Navigation
**`nav-bar`** — Sticky top nav with logo left, links center, CTAs right
- Background `{colors.canvas}`, 64px height, 1px bottom border
- Logo text in `{typography.display-sm}` weight 600
- Links in `{typography.body-sm}` body color

**`nav-link`** — Navigation link items
- Padding 8px 12px, rounded `{rounded.sm}`
- Body color text, hover → primary color

### Buttons
**`button-primary`** — Teal CTA pill
- Background `{colors.primary}`, white text, rounded `{rounded.pill}`
- Padding 10px 20px, hover → `{colors.primary-hover}`

**`button-secondary`** — White outline button
- Background `{colors.canvas}`, ink text, 1px border
- Same shape as primary

**`button-ghost`** — Text-only button
- Transparent background, primary text
- Rounded `{rounded.sm}`

### Cards
**`card`** — Feature card container
- White background, 1px border, rounded `{rounded.lg}`
- Padding 32px, subtle shadow on hover

**`card-feature`** — Card for feature display (identical to card)
- Same styling as card

**`card-coming-soon`** — Muted card for upcoming features
- 75% opacity, same structure

**Card Elements:**
- `.card-accent` — 3px gradient line at top (teal → transparent), opacity 0 → 1 on hover
- `.card-arrow` — 28px circular arrow icon, top-right, animates on hover
- `.card-icon` — 32px emoji/icon at top
- `.card-url` — mono font for URLs, teal color

### Badges
**`badge-status`** — Status badge (e.g., "持续构建中")
- Soft gray background, body text color
- Rounded `{rounded.full}`, padding 4px 12px

**`badge-primary`** — Primary accent badge
- Soft teal background, primary text

### Stats
**`stats-card`** — Horizontal stats display bar
- White card with shadow, rounded `{rounded.xxl}`
- Large `{stat-value}` numbers with `{stat-label}` below

### Sections
**`hero-band`** — Full-viewport hero with centered content
- White background, generous padding (128px vertical)

**`section-band`** — Content section with soft background
- Canvas-soft background, 64px vertical padding

**`footer`** — Page footer
- White background, 1px top border, centered text

## Do's and Don'ts

### Do
- Use `{colors.primary}` teal sparingly — CTAs, links, active states only
- Maintain generous whitespace between sections (64-128px)
- Use negative letter-spacing on display headlines
- Keep card corners at `{rounded.lg}` 16px — consistent throughout
- Apply staggered fade-up animations on scroll for cards
- Use mono font for URLs and code-like elements

### Don't
- Don't introduce bright accent colors beyond teal
- Don't use heavy drop shadows — the design is flat with subtle elevation
- Don't add atmospheric gradients or decorative backgrounds
- Don't use all-caps for headlines (except mono labels)
- Don't overcrowd cards — generous padding and whitespace
- Don't mix border-radius styles — pick rounded.lg (16px) for cards

## Responsive Behavior

### Breakpoints
- **Mobile** (< 600px): Single column, stacked stats, compact spacing
- **Tablet** (600-959px): 2-column card grid
- **Desktop** (≥ 960px): Full layout, auto-fit card grid

### Touch Targets
- All buttons ≥ 40px tap height
- Card hover states have adequate padding for touch

### Collapsing Strategy
- Stats: flex-row → flex-column at mobile
- Cards: auto-fit responsive grid handles gracefully
- Hero: clamp() typography scales smoothly
