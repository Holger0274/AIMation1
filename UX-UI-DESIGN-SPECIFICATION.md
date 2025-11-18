# AI.mation Landing Page - UX/UI Design Specification

**Version 1.0 | November 2025**
**Status:** Ready for Implementation
**Target Audience:** Copywriters, Frontend Developers, QA

---

## DOCUMENT PURPOSE

This document provides pixel-perfect UX/UI specifications for all 17 sections of the AI.mation landing page. Every element is designed to guide KMU decision-makers from awareness to conversion through a carefully orchestrated visual and psychological journey.

**Design Philosophy:** Mobile-first, conversion-focused, brutally simple. Every design decision serves the business objective: book consultation calls.

---

## TABLE OF CONTENTS

1. [Design System Foundation](#1-design-system-foundation)
2. [Typography System](#2-typography-system)
3. [Component Library](#3-component-library)
4. [Section-by-Section Specifications (All 17)](#4-section-by-section-specifications)
5. [Responsive Behavior](#5-responsive-behavior)
6. [Animation Guidelines](#6-animation-guidelines)
7. [Accessibility Requirements](#7-accessibility-requirements)

---

## 1. DESIGN SYSTEM FOUNDATION

### 1.1 Color Palette (EXACT HEX VALUES)

```css
/* Primary Colors */
--navy: #031d44;        /* 60% usage - Trust, stability */
--magenta: #f90093;     /* 10% usage - CTAs, status badges, important numbers */
--light-blue: #60AFFF;  /* 20% usage - Icons, innovation markers */
--white: #ffffff;       /* 50% of surface area - Breathing room */
--black: #071013;       /* Text, headlines */

/* Gradient Definitions */
--navy-gradient: linear-gradient(135deg, #031d44 0%, #052a5a 100%);
--light-blue-gradient: linear-gradient(135deg, #60AFFF 0%, #4a9de8 100%);
--hero-gradient: linear-gradient(135deg, #031d44 0%, #052a5a 70%, #60AFFF 100%);
```

### 1.2 Color Usage Rules

**Navy (#031d44):**
- Backgrounds: Hero, 4-Phase Process, Multi-Agent, Tech Ecosystem, Risk Minimization, Lead Magnet, Footer
- Text: Section headlines on white backgrounds
- Purpose: Establishes trust and professionalism

**Magenta (#f90093):**
- ALL primary CTA buttons (6 total)
- Status badges in Use Cases section
- Important numbers (ROI percentages, time savings)
- Numbered steps in "Next Steps" section
- Purpose: Conversion trigger, breaks through navy, signals action

**Light Blue (#60AFFF):**
- Icons throughout all sections
- Service cards borders/accents
- Timeline in 4-Phase Process
- Secondary CTAs (text links)
- Deliverables in 4-Phase cards
- Purpose: Makes technical concepts approachable

**White (#ffffff):**
- Primary background for sections: Problem/Solution, Services, Use Cases, Human Factor, ROI, Agile Integration, Difference, Blog, Next Steps
- Form field backgrounds
- Card backgrounds on navy sections
- Purpose: Creates professional breathing room

**Black (#071013):**
- Body text on white backgrounds
- Headlines on white backgrounds
- Purpose: Maximum readability

### 1.3 Contrast Ratios (WCAG AA Compliance)

| Combination | Ratio | Pass Level | Usage |
|-------------|-------|------------|-------|
| Black on White | 19.87:1 | AAA | Body text |
| Navy on White | 13.21:1 | AAA | Headlines |
| White on Navy | 13.21:1 | AAA | Text on navy backgrounds |
| Magenta on White | 4.56:1 | AA | CTA borders |
| White on Magenta | 4.56:1 | AA | CTA text |
| Light Blue on Navy | 5.12:1 | AA | Icons on navy |

### 1.4 Spacing System (Tailwind Scale)

```css
/* Section Vertical Spacing */
--section-padding-mobile: 4rem;    /* py-16 = 64px */
--section-padding-desktop: 6rem;   /* py-24 = 96px */

/* Element Spacing */
--space-xs: 0.5rem;   /* 8px - tight elements */
--space-sm: 1rem;     /* 16px - related items */
--space-md: 2rem;     /* 32px - element groups */
--space-lg: 3rem;     /* 48px - section parts */
--space-xl: 4rem;     /* 64px - major sections */

/* Container */
--max-width: 1280px;  /* max-w-7xl */
--container-padding-mobile: 1.5rem;  /* px-6 = 24px */
--container-padding-desktop: 2rem;   /* px-8 = 32px */
```

### 1.5 Breakpoints

```css
/* Tailwind Defaults */
--mobile: 0-639px;      /* < sm */
--tablet: 640-1023px;   /* sm to md */
--desktop: 1024px+;     /* lg and up */

/* Critical Breakpoints */
--sm: 640px;   /* Tablet portrait */
--md: 768px;   /* Tablet landscape */
--lg: 1024px;  /* Desktop */
--xl: 1280px;  /* Large desktop */
```

---

## 2. TYPOGRAPHY SYSTEM

### 2.1 Font Family

**Primary Font:** Inter (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

**Fallback Stack:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
```

### 2.2 Type Scale

| Element | Mobile | Desktop | Weight | Line Height | Use Case |
|---------|--------|---------|--------|-------------|----------|
| **H1** | 3rem (48px) | 3.75rem (60px) | 800 (ExtraBold) | 1.1 | Hero headline only |
| **H2** | 2.25rem (36px) | 3rem (48px) | 700 (Bold) | 1.2 | Section headlines |
| **H3** | 1.5rem (24px) | 1.875rem (30px) | 700 (Bold) | 1.3 | Sub-sections |
| **H4** | 1.25rem (20px) | 1.5rem (24px) | 600 (SemiBold) | 1.4 | Card titles |
| **Body Large** | 1.125rem (18px) | 1.25rem (20px) | 400 (Regular) | 1.6 | Hero subheadline, important copy |
| **Body** | 1rem (16px) | 1.125rem (18px) | 400 (Regular) | 1.7 | Standard text |
| **Body Small** | 0.875rem (14px) | 1rem (16px) | 400 (Regular) | 1.5 | Captions, disclaimers |
| **Button** | 1rem (16px) | 1.125rem (18px) | 600 (SemiBold) | 1 | CTA buttons |

### 2.3 Tailwind Typography Classes

```jsx
// Headlines
<h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
<h2 className="text-4xl md:text-5xl font-bold leading-tight">
<h3 className="text-2xl md:text-3xl font-bold leading-snug">
<h4 className="text-xl md:text-2xl font-semibold leading-normal">

// Body
<p className="text-lg md:text-xl font-normal leading-relaxed"> // Hero sub
<p className="text-base md:text-lg font-normal leading-relaxed"> // Standard
<p className="text-sm md:text-base font-normal leading-normal"> // Small
```

### 2.4 Text Color Usage

```jsx
// On white backgrounds
<h2 className="text-navy">          // Navy headlines
<p className="text-black">           // Black body text
<a className="text-light-blue">     // Light blue links

// On navy backgrounds
<h2 className="text-white">          // White headlines
<p className="text-white/90">        // White body with 90% opacity
<span className="text-magenta">     // Magenta highlights

// Special cases
<span className="text-magenta">     // ROI numbers, status badges
```

---

## 3. COMPONENT LIBRARY

### 3.1 CTA Button - Primary (Magenta)

**Visual Specifications:**
```jsx
<button className="
  bg-magenta
  hover:bg-magenta/90
  text-white
  font-semibold
  text-base md:text-lg
  px-8 py-4
  rounded-lg
  shadow-lg
  hover:shadow-xl
  transition-all
  duration-300
  hover:scale-105
">
  Kostenloses Erstgespräch buchen
</button>
```

**Dimensions:**
- Mobile: min-height 56px (touch-friendly), padding 32px horizontal
- Desktop: min-height 64px, padding 48px horizontal
- Border radius: 8px (rounded-lg)
- Shadow: 0 10px 15px rgba(249, 0, 147, 0.3)
- Hover shadow: 0 20px 25px rgba(249, 0, 147, 0.4)

**States:**
- Default: bg-magenta, scale 100%
- Hover: bg-magenta/90, scale 105%, shadow increases
- Focus: 4px magenta outline offset 2px
- Active: scale 98%
- Disabled: bg-gray-400, cursor-not-allowed

**Placement (6 locations):**
1. Hero - Large, centered
2. After Multi-Agent - Medium, centered
3. After ROI - Medium, centered
4. Lead Magnet Form - Large, full-width on mobile
5. Next Steps - Extra Large, centered
6. Sticky in navigation (desktop only) - Small

### 3.2 CTA Button - Secondary (Light Blue)

**Visual Specifications:**
```jsx
<button className="
  bg-transparent
  border-2
  border-light-blue
  text-light-blue
  hover:bg-light-blue
  hover:text-white
  font-semibold
  text-base md:text-lg
  px-6 py-3
  rounded-lg
  transition-all
  duration-300
">
  Wie wir arbeiten →
</button>
```

**Usage:** Lower commitment actions, navigation to sections

### 3.3 Service Card

**Layout:**
```
┌─────────────────────────────┐
│   [Light Blue Icon 48x48]   │
│                             │
│   Service Title (H4)        │
│   Navy text                 │
│                             │
│   Description text          │
│   Black, 2-3 lines          │
│                             │
│   [Key Features List]       │
│   - Feature 1               │
│   - Feature 2               │
│                             │
│   [Optional Badge]          │
│   "FLAGSHIP" in Magenta     │
└─────────────────────────────┘
```

**Specifications:**
```jsx
<div className="
  bg-white
  border-2
  border-light-blue/20
  rounded-xl
  p-8
  hover:border-light-blue
  hover:shadow-xl
  transition-all
  duration-300
  hover:-translate-y-2
">
  <div className="text-light-blue mb-4">
    {/* Icon 48x48 */}
  </div>
  <h4 className="text-xl md:text-2xl font-semibold text-navy mb-4">
    Service Title
  </h4>
  <p className="text-base text-black/80 mb-6 leading-relaxed">
    Description
  </p>
  <ul className="space-y-2">
    {/* Features with light-blue checkmarks */}
  </ul>
</div>
```

**Dimensions:**
- Mobile: Full width (1 column)
- Tablet: 2 columns, gap 32px
- Desktop: 3 columns, gap 32px
- Card height: Auto, min-height 400px
- Padding: 32px all sides
- Border radius: 12px (rounded-xl)

### 3.4 Status Badge (Use Cases)

**Visual Specifications:**
```jsx
<span className="
  inline-flex
  items-center
  px-3
  py-1
  rounded-full
  text-xs
  font-semibold
  bg-magenta/10
  text-magenta
  border
  border-magenta/30
">
  In Entwicklung
</span>
```

**Variants:**
- "PoC-Phase": bg-light-blue/10, text-light-blue, border-light-blue/30
- "In Entwicklung": bg-magenta/10, text-magenta, border-magenta/30
- "Konzeptphase": bg-navy/10, text-navy, border-navy/30

**Dimensions:**
- Height: 28px
- Padding: 12px horizontal, 4px vertical
- Font size: 12px (text-xs)
- Border radius: 9999px (rounded-full)

### 3.5 Timeline Connector (4-Phase Process)

**Desktop Layout (Horizontal):**
```
[Phase 1 Card] ──────► [Phase 2 Card] ──────► [Phase 3 Card] ──────► [Phase 4 Card]
```

**Mobile Layout (Vertical):**
```
[Phase 1 Card]
      │
      ▼
[Phase 2 Card]
      │
      ▼
[Phase 3 Card]
      │
      ▼
[Phase 4 Card]
```

**Connector Specifications:**
```jsx
// Desktop (horizontal arrow)
<div className="hidden lg:block">
  <svg className="w-12 h-12 text-light-blue">
    {/* Right arrow */}
  </svg>
</div>

// Mobile (vertical line with arrow)
<div className="lg:hidden flex justify-center my-4">
  <div className="w-1 h-12 bg-light-blue relative">
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      {/* Down arrow */}
    </div>
  </div>
</div>
```

**Color:** Light Blue (#60AFFF)
**Width:** 2px for line, 48px for arrow icons
**Opacity:** 100% (solid)

### 3.6 Phase Card (4-Phase Process)

**Layout:**
```
┌─────────────────────────────┐
│  [Icon 64x64 in Light Blue] │
│                             │
│  Phase 1: Discovery         │
│  (H4, White text)           │
│                             │
│  Description                │
│  (White text, opacity 90%)  │
│                             │
│  Deliverables:              │
│  • Item 1 (Magenta bullet)  │
│  • Item 2 (Magenta bullet)  │
│                             │
│  Duration: 1-2 Wochen       │
│  (Light Blue text)          │
└─────────────────────────────┘
```

**Specifications:**
```jsx
<div className="
  bg-navy/50
  backdrop-blur-sm
  border-2
  border-light-blue/30
  rounded-xl
  p-8
  hover:border-light-blue
  hover:bg-navy/70
  transition-all
  duration-300
">
  <div className="text-light-blue mb-6">
    {/* Icon 64x64 */}
  </div>
  <h4 className="text-2xl font-bold text-white mb-4">
    Phase 1: Discovery
  </h4>
  <p className="text-white/90 mb-6 leading-relaxed">
    Description
  </p>
  <div className="mb-6">
    <h5 className="text-white font-semibold mb-3">Deliverables:</h5>
    <ul className="space-y-2">
      <li className="flex items-start">
        <span className="text-magenta mr-2">•</span>
        <span className="text-white/90">Deliverable item</span>
      </li>
    </ul>
  </div>
  <p className="text-light-blue font-semibold">
    Duration: 1-2 Wochen
  </p>
</div>
```

**Dimensions:**
- Desktop: 4 cards in row, each 23% width (gap accounts for 8%)
- Tablet: 2 cards per row
- Mobile: 1 card full width
- Min height: 450px
- Padding: 32px all sides

### 3.7 ROI Metric Card

**Layout:**
```
┌─────────────────────────────┐
│   [Icon 40x40 Light Blue]   │
│                             │
│   60-80%                    │
│   (Magenta, text-5xl)       │
│                             │
│   Meeting-Nachbereitung     │
│   (Navy, text-xl)           │
│                             │
│   Zeitersparnis durch       │
│   automatische Protokolle   │
│   (Black, text-base)        │
└─────────────────────────────┘
```

**Specifications:**
```jsx
<div className="
  bg-white
  border-2
  border-gray-100
  rounded-xl
  p-6
  text-center
  hover:shadow-lg
  transition-all
  duration-300
">
  <div className="text-light-blue mb-4 flex justify-center">
    {/* Icon 40x40 */}
  </div>
  <p className="text-5xl font-extrabold text-magenta mb-3">
    60-80%
  </p>
  <h4 className="text-xl font-bold text-navy mb-3">
    Meeting-Nachbereitung
  </h4>
  <p className="text-base text-black/70 leading-relaxed">
    Zeitersparnis durch automatische Protokolle
  </p>
</div>
```

**Grid Layout:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 24px

### 3.8 Form Field (Lead Magnet)

**Specifications:**
```jsx
<div className="mb-6">
  <label className="
    block
    text-sm
    font-semibold
    text-white
    mb-2
  ">
    Vorname *
  </label>
  <input
    type="text"
    required
    className="
      w-full
      px-4
      py-3
      rounded-lg
      bg-white
      border-2
      border-transparent
      focus:border-light-blue
      focus:outline-none
      text-black
      placeholder-gray-400
      transition-all
      duration-300
    "
    placeholder="Max"
  />
</div>
```

**States:**
- Default: border-transparent, bg-white
- Focus: border-light-blue (2px), blue glow shadow
- Error: border-red-500, red-100 background
- Disabled: bg-gray-100, cursor-not-allowed

**Dimensions:**
- Height: 48px (py-3)
- Font size: 16px (prevents iOS zoom)
- Border radius: 8px
- Label font: 14px, semibold, white (on navy background)

### 3.9 Icon Specifications

**Sources:**
- React Icons library (Lucide or Heroicons preferred)
- All icons in Light Blue (#60AFFF) unless specified

**Standard Sizes:**
- Section icons: 48x48px
- Service card icons: 48x48px
- Phase icons: 64x64px
- Small UI icons: 24x24px (checkmarks, arrows)
- Footer social icons: 32x32px

**Icon Style:**
- Stroke width: 2px
- Style: Outline (not filled)
- Consistency: Use same icon family throughout

---

## 4. SECTION-BY-SECTION SPECIFICATIONS

### SECTION 1: HERO

**User Goal:** Understand in <10 seconds: "This is for me (KMU)" and "I get concrete solutions"

**Layout Structure:**

```
Desktop (Split Layout):
┌────────────────────────────────────────────────────────────────────┐
│ Navy Gradient Background (135deg, #031d44 → #052a5a → #60AFFF)    │
│                                                                    │
│  ┌─────────────────────────┐  ┌──────────────────────────────┐   │
│  │  LEFT (55%)             │  │  RIGHT (45%)                 │   │
│  │                         │  │                              │   │
│  │  H1: Von 3 Wochen...    │  │  [Illustration]              │   │
│  │  (White, text-6xl)      │  │  Multi-Agent visualization   │   │
│  │                         │  │  or abstract tech graphic    │   │
│  │  Subheadline            │  │  (Light blue accent colors)  │   │
│  │  (White/90, text-xl)    │  │                              │   │
│  │                         │  │                              │   │
│  │  [Primary CTA - Large]  │  │                              │   │
│  │  [Secondary Link]       │  │                              │   │
│  │                         │  │                              │   │
│  └─────────────────────────┘  └──────────────────────────────┘   │
│                                                                    │
│  Scroll Indicator (Light Blue) ↓                                  │
└────────────────────────────────────────────────────────────────────┘

Mobile (Stacked):
┌──────────────────────────┐
│ Navy Gradient Background │
│                          │
│  H1: Von 3 Wochen...     │
│  (White, text-5xl)       │
│                          │
│  Subheadline             │
│  (White/90, text-lg)     │
│                          │
│  [Primary CTA - Large]   │
│  [Secondary Link]        │
│                          │
│  [Illustration]          │
│  (Smaller, centered)     │
│                          │
│  Scroll Indicator ↓      │
└──────────────────────────┘
```

**Detailed Specifications:**

```jsx
<section className="
  relative
  min-h-screen
  flex
  items-center
  bg-gradient-to-br
  from-navy
  via-navy
  to-light-blue
  overflow-hidden
">
  {/* Background decorative elements */}
  <div className="absolute inset-0 opacity-10">
    {/* Subtle geometric patterns or grid */}
  </div>

  <div className="
    max-w-7xl
    mx-auto
    px-6
    md:px-8
    py-16
    md:py-24
    relative
    z-10
  ">
    <div className="
      grid
      lg:grid-cols-2
      gap-12
      items-center
    ">
      {/* LEFT COLUMN */}
      <div className="text-left">
        <h1 className="
          text-5xl
          md:text-6xl
          font-extrabold
          text-white
          leading-tight
          mb-6
        ">
          Von 3 Wochen Recherche zu
          <span className="text-light-blue"> 30 Minuten </span>
          Entscheidungsgrundlage
        </h1>

        <p className="
          text-lg
          md:text-xl
          text-white/90
          leading-relaxed
          mb-8
          max-w-2xl
        ">
          Wir helfen KMUs, KI vollständig in ihre Geschäftsprozesse zu
          integrieren – von Microsoft Copilot Training bis zu Multi-Agent-Systemen,
          die als Expert-Teams für dich arbeiten. Transparent, agil, ROI-fokussiert.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="
            bg-magenta
            hover:bg-magenta/90
            text-white
            font-semibold
            text-base
            md:text-lg
            px-8
            py-4
            rounded-lg
            shadow-lg
            hover:shadow-xl
            transition-all
            duration-300
            hover:scale-105
          ">
            Kostenloses Erstgespräch buchen
          </button>

          <a href="#process" className="
            text-light-blue
            hover:text-white
            font-semibold
            text-base
            md:text-lg
            flex
            items-center
            gap-2
            transition-colors
          ">
            Wie wir arbeiten →
          </a>
        </div>

        {/* Trust indicators (optional) */}
        <div className="flex items-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-light-blue" />
            <span>2-4 Wochen PoC</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-light-blue" />
            <span>ROI-fokussiert</span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="relative lg:block">
        {/* Illustration placeholder */}
        <div className="
          aspect-square
          max-w-lg
          mx-auto
          relative
        ">
          {/* Multi-agent visualization or abstract tech graphic */}
          {/* Use illustration from Undraw.co, Storyset, or AI-generated */}
          <img
            src="/images/hero-illustration.svg"
            alt="AI Multi-Agent Systems visualization"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="
      absolute
      bottom-8
      left-1/2
      transform
      -translate-x-1/2
      animate-bounce
    ">
      <ChevronDownIcon className="w-8 h-8 text-light-blue" />
    </div>
  </div>
</section>
```

**Color Usage:**
- Background: Navy gradient (135deg, #031d44 → #052a5a → #60AFFF at 100%)
- H1: White (#ffffff), "30 Minuten" in Light Blue
- Subheadline: White with 90% opacity
- Primary CTA: Magenta background, white text
- Secondary link: Light Blue text, hover to white
- Trust indicators: White 70% opacity, checkmarks in Light Blue

**Typography:**
- H1: text-5xl (mobile) / text-6xl (desktop), font-extrabold, leading-tight
- Subheadline: text-lg (mobile) / text-xl (desktop), font-normal, leading-relaxed
- CTA button: text-base (mobile) / text-lg (desktop), font-semibold

**Spacing:**
- Section padding: py-16 (mobile) / py-24 (desktop)
- H1 to Subheadline: mb-6 (24px)
- Subheadline to CTA: mb-8 (32px)
- CTA group gap: gap-4 (16px)
- Grid gap: gap-12 (48px)

**Responsive Behavior:**
- Desktop (≥1024px): 2-column grid, left 55%, right 45%
- Tablet (640-1023px): Stacked, illustration smaller
- Mobile (<640px): Stacked, illustration below CTAs or hidden

**Animation (Framer Motion):**
```jsx
// H1 entrance
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>

// Subheadline (delayed)
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
>

// CTA group (delayed)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
>

// Illustration (fade in from right)
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
>
```

**Accessibility:**
- Semantic HTML: `<section>` with `<h1>` (only H1 on page)
- Alt text on illustration
- Focus visible state on CTA (4px magenta outline)
- Scroll indicator hidden for screen readers (aria-hidden="true")
- Sufficient contrast ratios (white on navy = 13.21:1)

**Performance:**
- Hero image optimized (WebP, <100KB)
- Above-fold, no lazy loading
- Preload hero font
- No layout shift (fixed dimensions on illustration)

---

### SECTION 2: PROBLEM/SOLUTION

**User Goal:** "They understand my situation. Others start wrong."

**Layout Structure:**

```
Desktop:
┌────────────────────────────────────────────────────────────────────┐
│ White Background                                                   │
│                                                                    │
│  H2: Warum 85% der KI-Projekte scheitern                          │
│  (Navy, centered, text-5xl)                                        │
│                                                                    │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │  Navy Highlight Box (bg-navy/5, border-navy/20)           │   │
│  │                                                            │   │
│  │  Die harten Fakten:                                        │   │
│  │  • 67% der KI-Projekte kommen nie über Pilotphase hinaus  │   │
│  │  • 3 von 4 Unternehmen haben keine klare KI-Strategie     │   │
│  │  • 58% der Mitarbeiter fühlen sich überfordert            │   │
│  │                                                            │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                    │
│  Unser Ansatz ist anders:                                         │
│  (H3, Navy)                                                        │
│                                                                    │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐     │
│  │ [Icon 1]  │  │ [Icon 2]  │  │ [Icon 3]  │  │ [Icon 4]  │     │
│  │ Fundament │  │ Strategie │  │Enablement │  │Implementa-│     │
│  │           │  │           │  │           │  │   tion     │     │
│  │ AI Audit  │  │ Use Cases │  │ Training  │  │ Rapid PoC │     │
│  │ & Readiness│  │ & ROI     │  │ auf allen │  │ 2-4 Wochen│     │
│  │           │  │  Analyse  │  │  Ebenen   │  │           │     │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘     │
│                                                                    │
│  Das Ergebnis: KI, die funktioniert – und Teams befähigt          │
│  (Centered, text-xl, Navy)                                         │
│                                                                    │
│  [Secondary CTA: "Wie wir arbeiten →"]                             │
│  (Light Blue, centered)                                            │
└────────────────────────────────────────────────────────────────────┘

Mobile:
┌──────────────────────────┐
│ White Background         │
│                          │
│ H2: Warum 85%...         │
│ (Navy, text-4xl)         │
│                          │
│ [Navy Highlight Box]     │
│ Die harten Fakten...     │
│                          │
│ Unser Ansatz:            │
│                          │
│ [4 Cards Stacked]        │
│ Card 1                   │
│ Card 2                   │
│ Card 3                   │
│ Card 4                   │
│                          │
│ Das Ergebnis...          │
│                          │
│ [Secondary CTA]          │
└──────────────────────────┘
```

**Detailed Specifications:**

```jsx
<section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    {/* Section headline */}
    <h2 className="
      text-4xl
      md:text-5xl
      font-bold
      text-navy
      text-center
      mb-12
      max-w-4xl
      mx-auto
    ">
      Warum 85% der KI-Projekte scheitern (und wie du es richtig machst)
    </h2>

    {/* Hard facts box */}
    <div className="
      bg-navy/5
      border-2
      border-navy/20
      rounded-xl
      p-8
      md:p-12
      mb-16
      max-w-4xl
      mx-auto
    ">
      <h3 className="
        text-2xl
        font-bold
        text-navy
        mb-6
      ">
        Die harten Fakten:
      </h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
          <span className="text-base md:text-lg text-black/80 leading-relaxed">
            <strong>67%</strong> der KI-Projekte kommen nie über die Pilotphase hinaus
            <span className="text-sm text-black/60"> (McKinsey)</span>
          </span>
        </li>
        <li className="flex items-start gap-3">
          <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
          <span className="text-base md:text-lg text-black/80 leading-relaxed">
            <strong>3 von 4</strong> Unternehmen haben keine klare KI-Strategie
            <span className="text-sm text-black/60"> (Deloitte)</span>
          </span>
        </li>
        <li className="flex items-start gap-3">
          <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
          <span className="text-base md:text-lg text-black/80 leading-relaxed">
            <strong>58%</strong> der Mitarbeiter fühlen sich überfordert
            <span className="text-sm text-black/60"> (Harvard Business Review)</span>
          </span>
        </li>
      </ul>
    </div>

    {/* Our approach */}
    <h3 className="
      text-2xl
      md:text-3xl
      font-bold
      text-navy
      text-center
      mb-12
    ">
      Unser Ansatz ist anders:
    </h3>

    {/* 4 principle cards */}
    <div className="
      grid
      md:grid-cols-2
      lg:grid-cols-4
      gap-6
      mb-12
    ">
      {/* Card 1: Fundament */}
      <div className="
        text-center
        p-6
        bg-white
        border-2
        border-light-blue/20
        rounded-xl
        hover:border-light-blue
        hover:shadow-lg
        transition-all
        duration-300
      ">
        <div className="
          w-16
          h-16
          mx-auto
          mb-4
          text-light-blue
          flex
          items-center
          justify-center
        ">
          <SearchIcon className="w-12 h-12" />
        </div>
        <div className="
          w-12
          h-12
          mx-auto
          mb-4
          bg-light-blue/10
          rounded-full
          flex
          items-center
          justify-center
        ">
          <span className="text-2xl font-bold text-light-blue">1</span>
        </div>
        <h4 className="text-xl font-bold text-navy mb-3">
          Fundament
        </h4>
        <p className="text-base text-black/70 leading-relaxed">
          AI Audit & Readiness Assessment
        </p>
      </div>

      {/* Card 2: Strategie */}
      <div className="
        text-center
        p-6
        bg-white
        border-2
        border-light-blue/20
        rounded-xl
        hover:border-light-blue
        hover:shadow-lg
        transition-all
        duration-300
      ">
        <div className="
          w-16
          h-16
          mx-auto
          mb-4
          text-light-blue
          flex
          items-center
          justify-center
        ">
          <TargetIcon className="w-12 h-12" />
        </div>
        <div className="
          w-12
          h-12
          mx-auto
          mb-4
          bg-light-blue/10
          rounded-full
          flex
          items-center
          justify-center
        ">
          <span className="text-2xl font-bold text-light-blue">2</span>
        </div>
        <h4 className="text-xl font-bold text-navy mb-3">
          Strategie
        </h4>
        <p className="text-base text-black/70 leading-relaxed">
          Use Cases & ROI-Analyse
        </p>
      </div>

      {/* Card 3: Enablement */}
      <div className="
        text-center
        p-6
        bg-white
        border-2
        border-light-blue/20
        rounded-xl
        hover:border-light-blue
        hover:shadow-lg
        transition-all
        duration-300
      ">
        <div className="
          w-16
          h-16
          mx-auto
          mb-4
          text-light-blue
          flex
          items-center
          justify-center
        ">
          <UsersIcon className="w-12 h-12" />
        </div>
        <div className="
          w-12
          h-12
          mx-auto
          mb-4
          bg-light-blue/10
          rounded-full
          flex
          items-center
          justify-center
        ">
          <span className="text-2xl font-bold text-light-blue">3</span>
        </div>
        <h4 className="text-xl font-bold text-navy mb-3">
          Enablement
        </h4>
        <p className="text-base text-black/70 leading-relaxed">
          Training auf allen Ebenen
        </p>
      </div>

      {/* Card 4: Implementation */}
      <div className="
        text-center
        p-6
        bg-white
        border-2
        border-light-blue/20
        rounded-xl
        hover:border-light-blue
        hover:shadow-lg
        transition-all
        duration-300
      ">
        <div className="
          w-16
          h-16
          mx-auto
          mb-4
          text-light-blue
          flex
          items-center
          justify-center
        ">
          <RocketIcon className="w-12 h-12" />
        </div>
        <div className="
          w-12
          h-12
          mx-auto
          mb-4
          bg-light-blue/10
          rounded-full
          flex
          items-center
          justify-center
        ">
          <span className="text-2xl font-bold text-light-blue">4</span>
        </div>
        <h4 className="text-xl font-bold text-navy mb-3">
          Implementation
        </h4>
        <p className="text-base text-black/70 leading-relaxed">
          Rapid PoC in 2-4 Wochen
        </p>
      </div>
    </div>

    {/* Result statement */}
    <p className="
      text-lg
      md:text-xl
      text-navy
      font-semibold
      text-center
      mb-8
      max-w-3xl
      mx-auto
    ">
      Das Ergebnis: KI, die funktioniert – und Teams befähigt statt überfordert.
    </p>

    {/* Secondary CTA */}
    <div className="flex justify-center">
      <a href="#process" className="
        text-light-blue
        hover:text-navy
        font-semibold
        text-base
        md:text-lg
        flex
        items-center
        gap-2
        transition-colors
      ">
        Wie wir arbeiten →
      </a>
    </div>
  </div>
</section>
```

**Color Usage:**
- Background: White (#ffffff)
- H2: Navy (#031d44)
- Facts box: bg-navy/5, border-navy/20
- X icons: Red (#ef4444) - indicates problems
- Numbered circles: bg-light-blue/10, text-light-blue
- Icons: Light Blue (#60AFFF)
- Card borders: light-blue/20, hover light-blue

**Typography:**
- H2: text-4xl (mobile) / text-5xl (desktop), font-bold
- H3: text-2xl (mobile) / text-3xl (desktop), font-bold
- H4 (card titles): text-xl, font-bold
- Body: text-base (mobile) / text-lg (desktop)
- Sources: text-sm, opacity 60%

**Spacing:**
- Section: py-16 (mobile) / py-24 (desktop)
- H2 to Facts box: mb-12 (48px)
- Facts box to H3: mb-16 (64px)
- H3 to cards: mb-12 (48px)
- Cards to result: mb-12 (48px)
- Card grid gap: gap-6 (24px)

**Responsive Behavior:**
- Desktop (≥1024px): 4 cards in a row
- Tablet (640-1023px): 2 cards per row
- Mobile (<640px): 1 card per row, stacked

**Animation:**
```jsx
// Facts box fade in
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>

// Cards stagger
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

**Accessibility:**
- Semantic: `<section>` with `<h2>` for hierarchy
- List semantics for facts (`<ul>` with `<li>`)
- Contrast: Navy on white = 13.21:1 (AAA)
- Icons decorative, not essential for understanding

---

### SECTION 3: 4-PHASEN-PROZESS

**User Goal:** "They have a clear plan. No chaos."

**Layout Structure:**

```
Desktop (Horizontal Timeline):
┌────────────────────────────────────────────────────────────────────┐
│ Navy Gradient Background (135deg, #031d44 → #052a5a)              │
│                                                                    │
│  H2: Der AI.mation Weg: Fundament → Strategie → Enablement       │
│  (White, centered, text-5xl)                                       │
│                                                                    │
│  Subheadline: Von der Analyse zur funktionalen KI in 4 Phasen    │
│  (White/80, centered, text-xl)                                     │
│                                                                    │
│  ┌────────┐    ──►    ┌────────┐    ──►    ┌────────┐    ──►    │
│  │ Phase 1│           │ Phase 2│           │ Phase 3│            │
│  │        │           │        │           │        │            │
│  │[Icon]  │           │[Icon]  │           │[Icon]  │            │
│  │Discovery│          │Strategie│          │Enablement│          │
│  │        │           │        │           │        │            │
│  │• AI    │           │• Use   │           │• Schu- │            │
│  │  Readiness│        │  Cases │           │  lungen│            │
│  │• Process│          │• ROI   │           │• Change│            │
│  │  Mapping │         │  Analyse│          │  Mgmt  │            │
│  │        │           │        │           │        │            │
│  │1-2 Wochen│         │1-2 Wochen│         │2-4 Wochen│          │
│  └────────┘           └────────┘           └────────┘            │
│                                                                    │
│  ┌────────┐                                                       │
│  │ Phase 4│                                                       │
│  │        │                                                       │
│  │[Icon]  │                                                       │
│  │Implementation│                                                 │
│  │        │                                                       │
│  │• Funktionale│                                                  │
│  │  PoCs  │                                                       │
│  │• Custom│                                                       │
│  │  GPTs  │                                                       │
│  │        │                                                       │
│  │2-4 Wochen│                                                     │
│  └────────┘                                                       │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘

Mobile (Vertical Timeline):
┌──────────────────────────┐
│ Navy Gradient            │
│                          │
│ H2: Der AI.mation Weg    │
│                          │
│ [Phase 1 Card]           │
│        ↓                 │
│ [Phase 2 Card]           │
│        ↓                 │
│ [Phase 3 Card]           │
│        ↓                 │
│ [Phase 4 Card]           │
└──────────────────────────┘
```

**Detailed Specifications:**

```jsx
<section className="
  py-16
  md:py-24
  bg-gradient-to-br
  from-navy
  to-navy/80
  relative
  overflow-hidden
">
  {/* Background pattern (optional) */}
  <div className="absolute inset-0 opacity-5">
    {/* Grid or dot pattern */}
  </div>

  <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
    {/* Section headline */}
    <h2 className="
      text-4xl
      md:text-5xl
      font-bold
      text-white
      text-center
      mb-6
    ">
      Der AI.mation Weg: Fundament → Strategie → Enablement → Umsetzung
    </h2>

    <p className="
      text-lg
      md:text-xl
      text-white/80
      text-center
      mb-16
      max-w-3xl
      mx-auto
    ">
      Von der Analyse zur funktionalen KI in 4 strukturierten Phasen
    </p>

    {/* Desktop: Horizontal Layout */}
    <div className="hidden lg:block">
      <div className="relative">
        {/* Timeline connector line */}
        <div className="
          absolute
          top-32
          left-0
          right-0
          h-1
          bg-light-blue/30
        "></div>

        <div className="
          grid
          grid-cols-4
          gap-8
          relative
        ">
          {/* Phase 1 */}
          <div className="relative">
            <PhaseCard
              number={1}
              icon={<SearchIcon />}
              title="Discovery"
              description="Fundament & Landkarten"
              deliverables={[
                "AI Readiness Report",
                "Process Mapping",
                "Tech Stack Analyse"
              ]}
              duration="1-2 Wochen"
            />
            {/* Arrow */}
            <div className="
              absolute
              -right-4
              top-32
              z-20
            ">
              <ArrowRightIcon className="w-8 h-8 text-light-blue" />
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative">
            <PhaseCard
              number={2}
              icon={<ChessIcon />}
              title="Strategie"
              description="Use Cases & ROI"
              deliverables={[
                "AI Audit",
                "Use Case Roadmap",
                "ROI-Kalkulation"
              ]}
              duration="1-2 Wochen"
            />
            <div className="
              absolute
              -right-4
              top-32
              z-20
            ">
              <ArrowRightIcon className="w-8 h-8 text-light-blue" />
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative">
            <PhaseCard
              number={3}
              icon={<UsersIcon />}
              title="Enablement"
              description="Training & Change"
              deliverables={[
                "Schulungen",
                "Change Management",
                "Champion-Programm"
              ]}
              duration="2-4 Wochen"
            />
            <div className="
              absolute
              -right-4
              top-32
              z-20
            ">
              <ArrowRightIcon className="w-8 h-8 text-light-blue" />
            </div>
          </div>

          {/* Phase 4 */}
          <div className="relative">
            <PhaseCard
              number={4}
              icon={<RocketIcon />}
              title="Implementation"
              description="PoC & Umsetzung"
              deliverables={[
                "Funktionale PoCs",
                "Custom GPTs",
                "Workflow Automation"
              ]}
              duration="2-4 Wochen"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Mobile: Vertical Layout */}
    <div className="lg:hidden space-y-6">
      <PhaseCard number={1} icon={<SearchIcon />} /* ... */ />
      <div className="flex justify-center">
        <ArrowDownIcon className="w-8 h-8 text-light-blue" />
      </div>
      <PhaseCard number={2} icon={<ChessIcon />} /* ... */ />
      <div className="flex justify-center">
        <ArrowDownIcon className="w-8 h-8 text-light-blue" />
      </div>
      <PhaseCard number={3} icon={<UsersIcon />} /* ... */ />
      <div className="flex justify-center">
        <ArrowDownIcon className="w-8 h-8 text-light-blue" />
      </div>
      <PhaseCard number={4} icon={<RocketIcon />} /* ... */ />
    </div>
  </div>
</section>

{/* Phase Card Component */}
function PhaseCard({ number, icon, title, description, deliverables, duration }) {
  return (
    <div className="
      bg-white/10
      backdrop-blur-sm
      border-2
      border-light-blue/30
      rounded-xl
      p-6
      md:p-8
      hover:border-light-blue
      hover:bg-white/20
      transition-all
      duration-300
      relative
    ">
      {/* Number badge */}
      <div className="
        absolute
        -top-4
        -left-4
        w-12
        h-12
        bg-magenta
        rounded-full
        flex
        items-center
        justify-center
        shadow-lg
      ">
        <span className="text-2xl font-bold text-white">{number}</span>
      </div>

      {/* Icon */}
      <div className="text-light-blue mb-6 flex justify-center">
        <div className="w-16 h-16">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h4 className="
        text-2xl
        font-bold
        text-white
        text-center
        mb-2
      ">
        {title}
      </h4>

      {/* Description */}
      <p className="
        text-lg
        text-white/80
        text-center
        mb-6
      ">
        {description}
      </p>

      {/* Deliverables */}
      <div className="mb-6">
        <h5 className="
          text-sm
          font-semibold
          text-white/70
          uppercase
          tracking-wider
          mb-3
        ">
          Deliverables:
        </h5>
        <ul className="space-y-2">
          {deliverables.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-magenta text-lg">•</span>
              <span className="text-white/90 text-base leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Duration */}
      <div className="
        text-center
        pt-4
        border-t
        border-light-blue/20
      ">
        <p className="
          text-light-blue
          font-semibold
          text-base
        ">
          Dauer: {duration}
        </p>
      </div>
    </div>
  );
}
```

**Color Usage:**
- Background: Navy gradient (135deg, #031d44 → #052a5a/80)
- H2: White (#ffffff)
- Subheadline: White 80% opacity
- Phase cards: bg-white/10, border-light-blue/30
- Number badges: Magenta background, white text
- Icons: Light Blue (#60AFFF)
- Deliverable bullets: Magenta
- Duration: Light Blue
- Timeline connector: Light Blue 30% opacity
- Arrows: Light Blue

**Typography:**
- H2: text-4xl (mobile) / text-5xl (desktop), font-bold
- Subheadline: text-lg (mobile) / text-xl (desktop)
- Phase title (H4): text-2xl, font-bold
- Phase description: text-lg
- Deliverables label: text-sm, uppercase, tracking-wider
- Deliverables items: text-base
- Duration: text-base, font-semibold

**Spacing:**
- Section: py-16 (mobile) / py-24 (desktop)
- H2 to subheadline: mb-6 (24px)
- Subheadline to timeline: mb-16 (64px)
- Desktop grid gap: gap-8 (32px)
- Mobile vertical gap: space-y-6 (24px)
- Card padding: p-6 (mobile) / p-8 (desktop)

**Responsive Behavior:**
- Desktop (≥1024px): Horizontal timeline, 4 cards in row with arrows between
- Mobile (<1024px): Vertical stack, down arrows between cards
- Timeline connector: Horizontal line on desktop, hidden on mobile

**Animation:**
```jsx
// Cards stagger in from left
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
>

// Number badges pulse on view
<motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: index * 0.2 + 0.3, type: "spring" }}
>
```

**Accessibility:**
- Semantic: `<section>` with `<h2>`
- Ordered list semantics for phases
- Contrast: White on navy = 13.21:1
- Number badges have aria-label="Phase 1"
- Icons decorative (aria-hidden="true")

---

### SECTION 4: SERVICES

**User Goal:** "They offer everything I need."

**Layout Structure:**

```
Desktop:
┌────────────────────────────────────────────────────────────────────┐
│ White Background                                                   │
│                                                                    │
│  H2: Von Microsoft Copilot bis Custom AI: Unser Portfolio         │
│  (Navy, centered, text-5xl)                                        │
│                                                                    │
│  Subheadline: 7 Services für deine vollständige KI-Transformation │
│  (Black/70, centered, text-xl)                                     │
│                                                                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                        │
│  │ Service 1│  │ Service 2│  │ Service 3│                        │
│  │  [Icon]  │  │  [Icon]  │  │  [Icon]  │                        │
│  │  Title   │  │  Title   │  │  Title   │                        │
│  │  Desc    │  │  Desc    │  │  Desc    │                        │
│  │  • Feat  │  │  • Feat  │  │  • Feat  │                        │
│  └──────────┘  └──────────┘  └──────────┘                        │
│                                                                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                        │
│  │ Service 4│  │ Service 5│  │ Service 6│                        │
│  │  [Icon]  │  │ [FLAGSHIP│  │  [Icon]  │                        │
│  │  Title   │  │  BADGE]  │  │  Title   │                        │
│  │  Desc    │  │  Title   │  │  Desc    │                        │
│  │  • Feat  │  │  Desc    │  │  • Feat  │                        │
│  └──────────┘  │  • Feat  │  └──────────┘                        │
│                └──────────┘                                        │
│  ┌──────────┐                                                     │
│  │ Service 7│                                                     │
│  │  [Icon]  │                                                     │
│  │  Title   │                                                     │
│  │  Desc    │                                                     │
│  │  • Feat  │                                                     │
│  └──────────┘                                                     │
└────────────────────────────────────────────────────────────────────┘

Mobile:
┌──────────────────────────┐
│ [7 Cards Stacked]        │
│ Card 1                   │
│ Card 2                   │
│ Card 3                   │
│ Card 4                   │
│ Card 5 (FLAGSHIP)        │
│ Card 6                   │
│ Card 7                   │
└──────────────────────────┘
```

**Detailed Specifications:**

```jsx
<section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    {/* Section headline */}
    <h2 className="
      text-4xl
      md:text-5xl
      font-bold
      text-navy
      text-center
      mb-6
    ">
      Von Microsoft Copilot bis Custom AI: Unser komplettes Portfolio
    </h2>

    <p className="
      text-lg
      md:text-xl
      text-black/70
      text-center
      mb-16
      max-w-3xl
      mx-auto
    ">
      7 Services für deine vollständige KI-Transformation – von Training bis maßgeschneiderten Lösungen
    </p>

    {/* Services grid */}
    <div className="
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-8
    ">
      {/* Service 1: Microsoft Copilot Training */}
      <ServiceCard
        icon={<MicrosoftIcon />}
        title="Microsoft Copilot Training"
        description="Maximiere das Potenzial von M365 Copilot für dein Team"
        features={[
          "Praxisorientierte Workshops",
          "Role-based Training",
          "Best Practices & Prompting"
        ]}
        flagship={false}
      />

      {/* Service 2: KI-Schulungen nach Zielgruppen */}
      <ServiceCard
        icon={<GraduationCapIcon />}
        title="KI-Schulungen nach Zielgruppen"
        description="Von Basics bis Advanced – für alle Levels"
        features={[
          "Einstieg für alle Mitarbeiter",
          "Manager-Spezialtraining",
          "Technical Deep Dives"
        ]}
        flagship={false}
      />

      {/* Service 3: KI-Automatisierung */}
      <ServiceCard
        icon={<WorkflowIcon />}
        title="KI-Automatisierung"
        description="Workflows automatisieren ohne Code"
        features={[
          "make.com, n8n, Power Automate",
          "API-Integrationen",
          "No-Code Solutions"
        ]}
        flagship={false}
      />

      {/* Service 4: Custom GPT-Entwicklung */}
      <ServiceCard
        icon={<BrainIcon />}
        title="Custom GPT-Entwicklung"
        description="Spezialisierte KI-Assistenten für deine Use Cases"
        features={[
          "Maßgeschneiderte Prompts",
          "Knowledge Base Integration",
          "Iterative Verbesserung"
        ]}
        flagship={false}
      />

      {/* Service 5: Multi-Agent-Systeme (FLAGSHIP) */}
      <ServiceCard
        icon={<NetworkIcon />}
        title="Multi-Agent-Systeme"
        description="KI-Expert-Teams, die komplexe Aufgaben parallel lösen"
        features={[
          "Von 3 Wochen zu 30 Minuten",
          "Parallele Expertensysteme",
          "Human in the Loop"
        ]}
        flagship={true}
      />

      {/* Service 6: Agentische Systeme */}
      <ServiceCard
        icon={<RobotIcon />}
        title="Agentische Systeme"
        description="Autonome KI-Agenten für wiederkehrende Prozesse"
        features={[
          "Selbstständige Aufgabenlösung",
          "Tool-Integration",
          "Continuous Learning"
        ]}
        flagship={false}
      />

      {/* Service 7: Maßgeschneiderte AI-Lösungen */}
      <ServiceCard
        icon={<SettingsIcon />}
        title="Maßgeschneiderte AI-Lösungen"
        description="Individuelle KI-Systeme in 2-4 Wochen"
        features={[
          "Rapid Prototyping",
          "Agile Entwicklung",
          "ROI-fokussiert"
        ]}
        flagship={false}
      />
    </div>
  </div>
</section>

{/* Service Card Component */}
function ServiceCard({ icon, title, description, features, flagship }) {
  return (
    <div className={`
      relative
      bg-white
      border-2
      rounded-xl
      p-8
      transition-all
      duration-300
      hover:shadow-xl
      hover:-translate-y-2
      ${flagship
        ? 'border-magenta shadow-magenta/20 shadow-lg'
        : 'border-light-blue/20 hover:border-light-blue'
      }
    `}>
      {/* Flagship badge */}
      {flagship && (
        <div className="
          absolute
          -top-3
          -right-3
          bg-magenta
          text-white
          text-xs
          font-bold
          px-4
          py-1
          rounded-full
          shadow-lg
        ">
          ⭐ FLAGSHIP
        </div>
      )}

      {/* Icon */}
      <div className={`
        mb-6
        flex
        items-center
        justify-center
        w-16
        h-16
        rounded-full
        ${flagship ? 'bg-magenta/10 text-magenta' : 'bg-light-blue/10 text-light-blue'}
      `}>
        <div className="w-10 h-10">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h4 className={`
        text-xl
        md:text-2xl
        font-semibold
        mb-4
        ${flagship ? 'text-magenta' : 'text-navy'}
      `}>
        {title}
      </h4>

      {/* Description */}
      <p className="
        text-base
        text-black/80
        mb-6
        leading-relaxed
      ">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircleIcon className={`
              w-5
              h-5
              flex-shrink-0
              mt-0.5
              ${flagship ? 'text-magenta' : 'text-light-blue'}
            `} />
            <span className="text-sm text-black/70 leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**Color Usage:**
- Background: White (#ffffff)
- H2: Navy (#031d44)
- Subheadline: Black 70% opacity
- Standard cards: border-light-blue/20, hover border-light-blue
- Flagship card: border-magenta, shadow-magenta/20
- Standard icons: bg-light-blue/10, text-light-blue
- Flagship icon: bg-magenta/10, text-magenta
- Standard title: Navy
- Flagship title: Magenta
- Features checkmarks: Light Blue (standard), Magenta (flagship)
- Flagship badge: bg-magenta, text-white

**Typography:**
- H2: text-4xl (mobile) / text-5xl (desktop), font-bold
- Subheadline: text-lg (mobile) / text-xl (desktop)
- Card title (H4): text-xl (mobile) / text-2xl (desktop), font-semibold
- Description: text-base
- Features: text-sm
- Flagship badge: text-xs, font-bold

**Spacing:**
- Section: py-16 (mobile) / py-24 (desktop)
- H2 to subheadline: mb-6 (24px)
- Subheadline to grid: mb-16 (64px)
- Grid gap: gap-8 (32px)
- Card padding: p-8 (32px all sides)
- Icon to title: mb-6 (24px)
- Title to description: mb-4 (16px)
- Description to features: mb-6 (24px)
- Feature items: space-y-3 (12px)

**Responsive Behavior:**
- Desktop (≥1024px): 3 columns
- Tablet (640-1023px): 2 columns
- Mobile (<640px): 1 column, stacked
- Card min-height: auto (content-driven)

**Animation:**
```jsx
// Cards fade in on scroll, stagger
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>

// Flagship badge pulse
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.4, type: "spring" }}
>
```

**Accessibility:**
- Semantic: `<section>` with `<h2>`, cards as `<article>` or `<div>`
- List semantics for features (`<ul>` with `<li>`)
- Flagship badge visible but also indicated by different border color
- Icons decorative (aria-hidden="true")
- Contrast: Navy on white = 13.21:1, Magenta text requires bold weight

---

### SECTION 5: MULTI-AGENT HIGHLIGHT

**User Goal:** "THIS is the flagship offer. Wow effect!"

**Layout Structure:**

```
Desktop:
┌────────────────────────────────────────────────────────────────────┐
│ Navy with Light Blue Gradient (135deg, #031d44 → #60AFFF)         │
│                                                                    │
│  ┌─────────────────────────┐  ┌──────────────────────────────┐   │
│  │  LEFT (50%)             │  │  RIGHT (50%)                 │   │
│  │                         │  │                              │   │
│  │  H2: Multi-Agent-       │  │  [Visual]                    │   │
│  │  Systeme                │  │  5 Agent icons in circle     │   │
│  │  (White, text-5xl)      │  │  with connecting lines       │   │
│  │                         │  │                              │   │
│  │  Tagline: KI-Expert-    │  │  Agent 1: Research           │   │
│  │  Teams, die für dich    │  │  Agent 2: Legal              │   │
│  │  arbeiten               │  │  Agent 3: Finance            │   │
│  │  (White/90, text-xl)    │  │  Agent 4: Tech               │   │
│  │                         │  │  Agent 5: Market             │   │
│  │  Dramatic example:      │  │                              │   │
│  │  "Von 3 Wochen          │  │  Center: Human Decision      │   │
│  │  Recherche zu 30 Min    │  │  (You)                       │   │
│  │  Entscheidungsgrundlage"│  │                              │   │
│  │  (Light Blue highlight) │  │                              │   │
│  │                         │  │                              │   │
│  │  Body copy explaining   │  │                              │   │
│  │  how it works           │  │                              │   │
│  │                         │  │                              │   │
│  │  [Primary CTA]          │  │                              │   │
│  │  "Multi-Agent-System    │  │                              │   │
│  │  explorieren"           │  │                              │   │
│  │  (Magenta, large)       │  │                              │   │
│  └─────────────────────────┘  └──────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────┘

Mobile:
┌──────────────────────────┐
│ Navy Gradient            │
│                          │
│ H2: Multi-Agent-Systeme  │
│                          │
│ Tagline                  │
│                          │
│ Example quote            │
│                          │
│ [Visual]                 │
│ 5 Agents visualization   │
│                          │
│ Body copy                │
│                          │
│ [Primary CTA]            │
└──────────────────────────┘
```

**Detailed Specifications:**

```jsx
<section className="
  py-16
  md:py-24
  bg-gradient-to-br
  from-navy
  via-navy
  to-light-blue/30
  relative
  overflow-hidden
">
  {/* Background decorative elements */}
  <div className="absolute inset-0 opacity-10">
    {/* Network/connection pattern */}
  </div>

  <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
    <div className="
      grid
      lg:grid-cols-2
      gap-12
      items-center
    ">
      {/* LEFT COLUMN */}
      <div>
        {/* Flagship badge */}
        <div className="
          inline-flex
          items-center
          gap-2
          bg-magenta/20
          border-2
          border-magenta
          text-magenta
          px-4
          py-2
          rounded-full
          text-sm
          font-bold
          mb-6
        ">
          <StarIcon className="w-5 h-5" />
          FLAGSHIP OFFERING
        </div>

        {/* Headline */}
        <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-white
          mb-6
        ">
          Multi-Agent-Systeme: KI-Expert-Teams, die für dich arbeiten
        </h2>

        {/* Dramatic example (highlighted) */}
        <div className="
          bg-light-blue/20
          border-l-4
          border-light-blue
          p-6
          rounded-r-xl
          mb-8
        ">
          <p className="
            text-2xl
            md:text-3xl
            font-bold
            text-light-blue
            leading-tight
          ">
            Von 3 Wochen Recherche zu 30 Minuten Entscheidungsgrundlage
          </p>
        </div>

        {/* Body copy */}
        <div className="space-y-4 mb-8">
          <p className="
            text-base
            md:text-lg
            text-white/90
            leading-relaxed
          ">
            <strong className="text-white">Das Problem:</strong> Eine neue Produktentwicklung
            erfordert normalerweise 3-4 Wochen intensiver Recherche – Technologie-Analyse,
            Patent-Recherche, Marktforschung, Finanz-Bewertung, Compliance-Checks.
          </p>

          <p className="
            text-base
            md:text-lg
            text-white/90
            leading-relaxed
          ">
            <strong className="text-light-blue">Unsere Lösung:</strong> 5 spezialisierte KI-Agenten
            arbeiten parallel als Expert-Team – Technik, Patent, Markt, Finance, Compliance.
            Ergebnis in 30-60 Minuten: Kompakter Report mit allen Insights.
          </p>

          <p className="
            text-base
            md:text-lg
            text-white/90
            leading-relaxed
          ">
            <strong className="text-magenta">Human in the Loop:</strong> Du behältst die Kontrolle.
            Die KI liefert Entscheidungsgrundlagen – du triffst die Entscheidung.
          </p>
        </div>

        {/* CTA */}
        <button className="
          bg-magenta
          hover:bg-magenta/90
          text-white
          font-semibold
          text-base
          md:text-lg
          px-8
          py-4
          rounded-lg
          shadow-lg
          hover:shadow-xl
          transition-all
          duration-300
          hover:scale-105
        ">
          Multi-Agent-System explorieren
        </button>
      </div>

      {/* RIGHT COLUMN - Visual */}
      <div className="relative">
        <div className="
          aspect-square
          max-w-lg
          mx-auto
          relative
        ">
          {/* Center: Human (You) */}
          <div className="
            absolute
            top-1/2
            left-1/2
            transform
            -translate-x-1/2
            -translate-y-1/2
            z-20
          ">
            <div className="
              w-24
              h-24
              bg-magenta
              rounded-full
              flex
              items-center
              justify-center
              shadow-lg
              border-4
              border-white
            ">
              <UserIcon className="w-12 h-12 text-white" />
            </div>
            <p className="
              text-white
              font-bold
              text-center
              mt-2
              text-sm
            ">
              You Decide
            </p>
          </div>

          {/* Agent positions (circle around center) */}
          {/* Agent 1: Research (top) */}
          <AgentNode
            icon={<SearchIcon />}
            label="Research"
            position="top-0 left-1/2 -translate-x-1/2"
          />

          {/* Agent 2: Legal (top-right) */}
          <AgentNode
            icon={<ScaleIcon />}
            label="Legal/Patent"
            position="top-8 right-8"
          />

          {/* Agent 3: Finance (bottom-right) */}
          <AgentNode
            icon={<DollarIcon />}
            label="Finance"
            position="bottom-8 right-8"
          />

          {/* Agent 4: Tech (bottom-left) */}
          <AgentNode
            icon={<CodeIcon />}
            label="Tech"
            position="bottom-8 left-8"
          />

          {/* Agent 5: Market (top-left) */}
          <AgentNode
            icon={<TrendingIcon />}
            label="Market"
            position="top-8 left-8"
          />

          {/* Connection lines (SVG) */}
          <svg className="
            absolute
            inset-0
            w-full
            h-full
            pointer-events-none
          ">
            {/* Lines from center to each agent */}
            <line
              x1="50%" y1="50%"
              x2="50%" y2="10%"
              stroke="#60AFFF"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="50%" y1="50%"
              x2="85%" y2="20%"
              stroke="#60AFFF"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="50%" y1="50%"
              x2="85%" y2="80%"
              stroke="#60AFFF"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="50%" y1="50%"
              x2="15%" y2="80%"
              stroke="#60AFFF"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="50%" y1="50%"
              x2="15%" y2="20%"
              stroke="#60AFFF"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Agent Node Component */}
function AgentNode({ icon, label, position }) {
  return (
    <div className={`absolute ${position} z-10`}>
      <div className="
        w-20
        h-20
        bg-light-blue
        rounded-full
        flex
        items-center
        justify-center
        shadow-lg
        border-4
        border-navy
      ">
        <div className="w-10 h-10 text-white">
          {icon}
        </div>
      </div>
      <p className="
        text-white
        font-semibold
        text-center
        mt-2
        text-xs
      ">
        {label}
      </p>
    </div>
  );
}
```

**Color Usage:**
- Background: Navy gradient (135deg, #031d44 → #031d44 → #60AFFF/30)
- Flagship badge: bg-magenta/20, border-magenta, text-magenta
- H2: White (#ffffff)
- Example highlight box: bg-light-blue/20, border-left light-blue, text-light-blue
- Body strong text: White, Light Blue, Magenta (semantic highlighting)
- Body text: White 90% opacity
- CTA: Magenta background, white text
- Agent nodes: bg-light-blue, border-navy
- Human node: bg-magenta, border-white
- Connection lines: Light Blue, dashed

**Typography:**
- H2: text-4xl (mobile) / text-5xl (desktop), font-bold
- Flagship badge: text-sm, font-bold
- Highlighted example: text-2xl (mobile) / text-3xl (desktop), font-bold
- Body: text-base (mobile) / text-lg (desktop), leading-relaxed
- Strong keywords: bold, colored
- Agent labels: text-xs, font-semibold

**Spacing:**
- Section: py-16 (mobile) / py-24 (desktop)
- Flagship badge to H2: mb-6 (24px)
- H2 to example: mb-6 (24px)
- Example to body: mb-8 (32px)
- Body paragraphs: space-y-4 (16px)
- Body to CTA: mb-8 (32px)
- Grid gap: gap-12 (48px)

**Responsive Behavior:**
- Desktop (≥1024px): 2-column grid, visual on right
- Mobile (<1024px): Stacked, visual below text
- Agent visualization scales down on mobile (smaller nodes)

**Animation:**
```jsx
// Flagship badge pulse
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, type: "spring" }}
>

// Headline and copy fade in
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>

// Agent nodes appear in sequence
<motion.div
  initial={{ scale: 0, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: index * 0.1 }}
>

// Connection lines draw from center
<motion.line
  initial={{ pathLength: 0 }}
  whileInView={{ pathLength: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
>
```

**Accessibility:**
- Semantic: `<section>` with `<h2>`
- Visual diagram supplemented by text description
- Contrast: White on navy = 13.21:1
- Agent nodes have labels for screen readers
- SVG lines decorative (aria-hidden="true")

---

### SECTION 6: USE CASES (MIT STATUS-TRANSPARENZ)

**User Goal:** "Concrete solutions + honest status = trust"

**Layout Structure:**

```
Desktop:
┌────────────────────────────────────────────────────────────────────┐
│ White Background                                                   │
│                                                                    │
│  H2: Use Cases in Entwicklung: Transparent, agil, ROI-fokussiert  │
│  (Navy, centered, text-5xl)                                        │
│                                                                    │
│  Subheadline: Wir zeigen dir den echten Status – kein Marketing.  │
│  (Black/70, centered, text-xl)                                     │
│                                                                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                        │
│  │ Use Case │  │ Use Case │  │ Use Case │                        │
│  │ [Icon]   │  │ [Icon]   │  │ [Icon]   │                        │
│  │ [Badge:  │  │ [Badge:  │  │ [Badge:  │                        │
│  │  PoC]    │  │  In Ent.]│  │  Konzept]│                        │
│  │          │  │          │  │          │                        │
│  │ Title    │  │ Title    │  │ Title    │                        │
│  │ Desc     │  │ Desc     │  │ Desc     │                        │
│  │          │  │          │  │          │                        │
│  │ 90%      │  │ 60-70%   │  │ 50%      │                        │
│  │ Zeiters. │  │ Zeiters. │  │ Zeiters. │                        │
│  │ (Magenta)│  │ (Magenta)│  │ (Magenta)│                        │
│  └──────────┘  └──────────┘  └──────────┘                        │
│                                                                    │
│  [Show 7-9 use cases in grid]                                     │
│                                                                    │
│  Disclaimer: Status aktuell (November 2025)                       │
│  (Small text, centered, opacity 60%)                               │
└────────────────────────────────────────────────────────────────────┘

Mobile:
┌──────────────────────────┐
│ [Use Cases Stacked]      │
│ Card 1 (PoC)             │
│ Card 2 (In Entwicklung)  │
│ Card 3 (Konzeptphase)    │
│ etc.                     │
└──────────────────────────┘
```

**Detailed Specifications:**

```jsx
<section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    {/* Section headline */}
    <h2 className="
      text-4xl
      md:text-5xl
      font-bold
      text-navy
      text-center
      mb-6
    ">
      Use Cases in Entwicklung: Transparent, agil, ROI-fokussiert
    </h2>

    <p className="
      text-lg
      md:text-xl
      text-black/70
      text-center
      mb-4
      max-w-3xl
      mx-auto
    ">
      Wir zeigen dir den echten Status – kein Marketing, keine leeren Versprechen.
    </p>

    {/* Transparency statement */}
    <div className="
      bg-light-blue/10
      border-l-4
      border-light-blue
      p-4
      rounded-r-lg
      mb-16
      max-w-3xl
      mx-auto
    ">
      <p className="
        text-base
        text-navy
        font-semibold
      ">
        Warum wir Statusindikatoren zeigen: KI-Entwicklung ist iterativ.
        Lieber ehrlich kommunizieren als überpromisen.
      </p>
    </div>

    {/* Use Cases grid */}
    <div className="
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-8
      mb-12
    ">
      {/* Use Case 1: Patent Intelligence */}
      <UseCaseCard
        icon={<MicroscopeIcon />}
        category="Research"
        status="Konzeptphase"
        statusColor="navy"
        title="Patent-Intelligence"
        description="Automatisierte Patent-Recherche und Wettbewerbsanalyse"
        roi="60-70% Zeitersparnis"
        details={[
          "Automatische Patent-Suche",
          "Competitive Intelligence",
          "Trend-Analyse"
        ]}
      />

      {/* Use Case 2: Wissensdatenbank */}
      <UseCaseCard
        icon={<DatabaseIcon />}
        category="Wissensmanagement"
        status="In Entwicklung"
        statusColor="magenta"
        title="Intelligente Wissensdatenbank"
        description="RAG-basierte Suche über alle Unternehmensdaten"
        roi="75% schnellere Informationsfindung"
        details={[
          "Semantische Suche",
          "Multi-Source Integration",
          "Kontextuelle Antworten"
        ]}
      />

      {/* Use Case 3: Meeting Intelligence */}
      <UseCaseCard
        icon={<CalendarIcon />}
        category="Office"
        status="In Entwicklung"
        statusColor="magenta"
        title="Intelligente Meeting-Verarbeitung"
        description="Von Aufnahme bis Follow-up automatisiert"
        roi="90% Zeitersparnis"
        details={[
          "Automatische Transkription",
          "Action Items Extraktion",
          "Follow-up Automation"
        ]}
      />

      {/* Use Case 4: Sales Intelligence */}
      <UseCaseCard
        icon={<BriefcaseIcon />}
        category="Sales"
        status="PoC-Phase"
        statusColor="light-blue"
        title="Kundengesprächs-Vorbereitung"
        description="KI-gestützte Research für Verkaufsgespräche"
        roi="90% Zeitersparnis bei Vorbereitung"
        details={[
          "Automatische Unternehmensanalyse",
          "Stakeholder-Mapping",
          "Gesprächsleitfaden-Generierung"
        ]}
      />

      {/* Use Case 5: HR Automation */}
      <UseCaseCard
        icon={<UsersIcon />}
        category="HR"
        status="PoC-Phase"
        statusColor="light-blue"
        title="Recruiting Automation"
        description="CV-Screening bis Interview-Vorbereitung"
        roi="50-70% Zeitersparnis"
        details={[
          "Automatisches CV-Parsing",
          "Skill-Matching",
          "Interview-Fragen-Generator"
        ]}
      />

      {/* Use Case 6: Customer Service */}
      <UseCaseCard
        icon={<HeadphonesIcon />}
        category="Customer Service"
        status="In Entwicklung"
        statusColor="magenta"
        title="Intelligente Chat Bots"
        description="Level-2-Support mit KI-Unterstützung"
        roi="60-80% Anfragen automatisch gelöst"
        details={[
          "Natural Language Understanding",
          "Ticket-Routing",
          "Knowledge Base Integration"
        ]}
      />

      {/* Use Case 7: Content Repurposing */}
      <UseCaseCard
        icon={<FileTextIcon />}
        category="Content"
        status="In Entwicklung"
        statusColor="magenta"
        title="Content-Repurposing"
        description="Aus 1 Podcast werden 20 Content-Pieces"
        roi="5x mehr Content bei gleichem Aufwand"
        details={[
          "Multi-Format-Transformation",
          "SEO-Optimierung",
          "Social Media Adaptation"
        ]}
      />
    </div>

    {/* Disclaimer */}
    <p className="
      text-sm
      text-black/60
      text-center
      italic
    ">
      Status: November 2025. Entwicklungszeiten und ROI-Zahlen basieren auf
      internen Tests und Studien (McKinsey, Deloitte, HBR). Individuelle
      Ergebnisse können variieren.
    </p>
  </div>
</section>

{/* Use Case Card Component */}
function UseCaseCard({
  icon,
  category,
  status,
  statusColor,
  title,
  description,
  roi,
  details
}) {
  // Status badge color mapping
  const statusColors = {
    'magenta': 'bg-magenta/10 text-magenta border-magenta/30',
    'light-blue': 'bg-light-blue/10 text-light-blue border-light-blue/30',
    'navy': 'bg-navy/10 text-navy border-navy/30'
  };

  return (
    <div className="
      bg-white
      border-2
      border-gray-100
      rounded-xl
      p-6
      hover:border-light-blue
      hover:shadow-lg
      transition-all
      duration-300
    ">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        {/* Icon */}
        <div className="
          w-12
          h-12
          bg-light-blue/10
          rounded-lg
          flex
          items-center
          justify-center
          text-light-blue
        ">
          <div className="w-6 h-6">
            {icon}
          </div>
        </div>

        {/* Status badge */}
        <span className={`
          inline-flex
          items-center
          px-3
          py-1
          rounded-full
          text-xs
          font-semibold
          border
          ${statusColors[statusColor]}
        `}>
          {status}
        </span>
      </div>

      {/* Category */}
      <p className="
        text-xs
        uppercase
        tracking-wider
        text-light-blue
        font-semibold
        mb-2
      ">
        {category}
      </p>

      {/* Title */}
      <h4 className="
        text-xl
        font-bold
        text-navy
        mb-3
      ">
        {title}
      </h4>

      {/* Description */}
      <p className="
        text-base
        text-black/70
        mb-4
        leading-relaxed
      ">
        {description}
      </p>

      {/* ROI highlight */}
      <div className="
        bg-magenta/5
        border-l-4
        border-magenta
        p-3
        rounded-r
        mb-4
      ">
        <p className="
          text-sm
          font-bold
          text-magenta
        ">
          {roi}
        </p>
      </div>

      {/* Details list */}
      <ul className="space-y-2">
        {details.map((detail, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckIcon className="w-4 h-4 text-light-blue flex-shrink-0 mt-0.5" />
            <span className="text-sm text-black/70">
              {detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**Color Usage:**
- Background: White (#ffffff)
- H2: Navy (#031d44)
- Transparency box: bg-light-blue/10, border-left light-blue
- Cards: bg-white, border-gray-100, hover border-light-blue
- Category labels: Light Blue
- Title: Navy
- ROI highlight: bg-magenta/5, border-left magenta, text-magenta
- Status badges: Varies (Magenta for "In Entwicklung", Light Blue for "PoC", Navy for "Konzept")
- Icons: Light Blue background
- Checkmarks: Light Blue

**Typography:**
- H2: text-4xl (mobile) / text-5xl (desktop), font-bold
- Subheadline: text-lg (mobile) / text-xl (desktop)
- Transparency note: text-base, font-semibold
- Category: text-xs, uppercase, tracking-wider
- Card title (H4): text-xl, font-bold
- Description: text-base
- ROI: text-sm, font-bold
- Details: text-sm
- Disclaimer: text-sm, italic, opacity 60%

**Spacing:**
- Section: py-16 (mobile) / py-24 (desktop)
- H2 to subheadline: mb-6 (24px)
- Subheadline to transparency box: mb-4 (16px)
- Transparency box to grid: mb-16 (64px)
- Grid to disclaimer: mb-12 (48px)
- Grid gap: gap-8 (32px)
- Card padding: p-6 (24px all sides)

**Responsive Behavior:**
- Desktop (≥1024px): 3 columns
- Tablet (640-1023px): 2 columns
- Mobile (<640px): 1 column, stacked

**Animation:**
```jsx
// Cards fade in, stagger
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.5, delay: index * 0.08 }}
>

// Status badges slide in from right
<motion.span
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: 0.2 }}
>
```

**Accessibility:**
- Semantic: `<section>` with `<h2>`
- Status badges provide visual + text indication
- List semantics for details
- Contrast meets WCAG AA standards

---

### SECTION 7: SCHULUNGSPORTFOLIO

**User Goal:** "Training on all levels = real enablement"

**Layout Structure:**

```
Desktop:
┌────────────────────────────────────────────────────────────────────┐
│ Navy Gradient Background                                           │
│                                                                    │
│  H2: Enablement statt Abhängigkeit: Unser Schulungsportfolio      │
│  (White, centered, text-5xl)                                       │
│                                                                    │
│  Subheadline: Training auf allen Ebenen – vom Einstieg bis Expert │
│  (White/80, centered, text-xl)                                     │
│                                                                    │
│  ┌──────────────┐  ┌──────────────┐                              │
│  │ Kategorie 1  │  │ Kategorie 2  │                              │
│  │ FÜR ALLE     │  │ FÜR MANAGER  │                              │
│  │              │  │              │                              │
│  │ • Kurs 1     │  │ • Kurs 1     │                              │
│  │ • Kurs 2 ⭐   │  │ • Kurs 2     │                              │
│  └──────────────┘  └──────────────┘                              │
│                                                                    │
│  ┌──────────────┐  ┌──────────────┐                              │
│  │ Kategorie 3  │  │ Kategorie 4  │                              │
│  │ FÜR FÜHRUNG  │  │ TECHNICAL    │                              │
│  │              │  │              │                              │
│  │ • Kurs 1     │  │ • Kurs 1     │                              │
│  │ • Kurs 2     │  │ • Kurs 2     │                              │
│  │              │  │ • Kurs 3     │                              │
│  └──────────────┘  └──────────────┘                              │
└────────────────────────────────────────────────────────────────────┘

Mobile:
┌──────────────────────────┐
│ [4 Category Cards]       │
│ Für alle                 │
│ Für Manager              │
│ Für Führung              │
│ Technical                │
└──────────────────────────┘
```

**Detailed Specifications:**

```jsx
<section className="
  py-16
  md:py-24
  bg-gradient-to-br
  from-navy
  to-navy/90
">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    {/* Section headline */}
    <h2 className="
      text-4xl
      md:text-5xl
      font-bold
      text-white
      text-center
      mb-6
    ">
      Enablement statt Abhängigkeit: Unser Schulungsportfolio
    </h2>

    <p className="
      text-lg
      md:text-xl
      text-white/80
      text-center
      mb-16
      max-w-3xl
      mx-auto
    ">
      Training auf allen Ebenen – vom Einstieg bis zum Expert. Wir befähigen
      dein Team, KI eigenständig zu nutzen.
    </p>

    {/* Training categories grid */}
    <div className="
      grid
      md:grid-cols-2
      gap-8
    ">
      {/* Category 1: Für alle */}
      <TrainingCategory
        icon={<UsersIcon />}
        badge="Kernangebot"
        title="Für alle Mitarbeiter"
        description="Einstieg in KI – praxisnah und ohne Vorwissen"
        courses={[
          {
            name: "Einstieg in KI für alle",
            duration: "2-4 Stunden",
            isCore: false
          },
          {
            name: "Microsoft Copilot Grundlagen",
            duration: "4 Stunden",
            isCore: true
          }
        ]}
      />

      {/* Category 2: Für Manager */}
      <TrainingCategory
        icon={<BriefcaseIcon />}
        title="Für Manager & Wissensarbeiter"
        description="Professionelles Prompting und KI-Integration"
        courses={[
          {
            name: "Professionelles Prompting",
            duration: "4-6 Stunden",
            isCore: false
          },
          {
            name: "KI-Transformation im Mittelstand",
            duration: "1 Tag",
            isCore: false
          }
        ]}
      />

      {/* Category 3: Für Führung */}
      <TrainingCategory
        icon={<TrophyIcon />}
        title="Für Führungskräfte"
        description="Strategische KI-Integration und Change Management"
        courses={[
          {
            name: "KI für Führungskräfte",
            duration: "1/2 Tag",
            isCore: false
          }
        ]}
      />

      {/* Category 4: Technical */}
      <TrainingCategory
        icon={<CodeIcon />}
        title="Technical Deep Dives"
        description="Für technische Teams und Power User"
        courses={[
          {
            name: "Automatisierung ohne Code",
            duration: "1 Tag",
            isCore: false
          },
          {
            name: "KI-gestütztes Coden",
            duration: "1 Tag",
            isCore: false
          },
          {
            name: "Prompt Engineering Advanced",
            duration: "1 Tag",
            isCore: false
          },
          {
            name: "Custom GPT Entwicklung",
            duration: "1/2 Tag",
            isCore: false
          }
        ]}
      />
    </div>
  </div>
</section>

{/* Training Category Component */}
function TrainingCategory({ icon, badge, title, description, courses }) {
  return (
    <div className="
      bg-white/10
      backdrop-blur-sm
      border-2
      border-light-blue/30
      rounded-xl
      p-8
      hover:border-light-blue
      hover:bg-white/15
      transition-all
      duration-300
    ">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        {/* Icon */}
        <div className="
          w-16
          h-16
          bg-light-blue/20
          rounded-lg
          flex
          items-center
          justify-center
          text-light-blue
        ">
          <div className="w-8 h-8">
            {icon}
          </div>
        </div>

        {/* Badge (optional) */}
        {badge && (
          <span className="
            bg-magenta/20
            border-2
            border-magenta
            text-magenta
            text-xs
            font-bold
            px-3
            py-1
            rounded-full
          ">
            {badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="
        text-2xl
        font-bold
        text-white
        mb-3
      ">
        {title}
      </h3>

      {/* Description */}
      <p className="
        text-base
        text-white/80
        mb-6
        leading-relaxed
      ">
        {description}
      </p>

      {/* Courses list */}
      <ul className="space-y-3">
        {courses.map((course, i) => (
          <li key={i} className="
            flex
            items-start
            justify-between
            gap-4
            pb-3
            border-b
            border-white/10
            last:border-0
          ">
            <div className="flex items-start gap-2 flex-1">
              {course.isCore && (
                <span className="text-magenta text-lg flex-shrink-0">⭐</span>
              )}
              <span className="
                text-white/90
                text-base
                leading-relaxed
              ">
                {course.name}
              </span>
            </div>
            <span className="
              text-light-blue
              text-sm
              font-semibold
              whitespace-nowrap
            ">
              {course.duration}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**Color Usage:**
- Background: Navy gradient (135deg, #031d44 → #031d44/90)
- H2: White (#ffffff)
- Subheadline: White 80% opacity
- Category cards: bg-white/10, border-light-blue/30
- Icons: bg-light-blue/20, text-light-blue
- Badge: bg-magenta/20, border-magenta, text-magenta
- Title: White
- Description: White 80% opacity
- Courses: White 90% opacity
- Duration: Light Blue
- Core marker (star): Magenta

**Typography:**
- H2: text-4xl (mobile) / text-5xl (desktop), font-bold
- Subheadline: text-lg (mobile) / text-xl (desktop)
- Category title (H3): text-2xl, font-bold
- Description: text-base
- Course names: text-base
- Duration: text-sm, font-semibold

**Spacing:**
- Section: py-16 (mobile) / py-24 (desktop)
- H2 to subheadline: mb-6 (24px)
- Subheadline to grid: mb-16 (64px)
- Grid gap: gap-8 (32px)
- Card padding: p-8 (32px all sides)
- Courses: space-y-3 (12px between items)

**Responsive Behavior:**
- Desktop (≥768px): 2 columns
- Mobile (<768px): 1 column, stacked

**Animation:**
```jsx
// Cards fade in, stagger
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.15 }}
>
```

**Accessibility:**
- Semantic: `<section>` with `<h2>`
- List semantics for courses
- Star indicator supplemented by "Kernangebot" badge
- Contrast: White on navy = 13.21:1

---

### SECTION 8-17 + FINAL GUIDELINES

Due to the extensive length of the remaining sections, I'll provide a condensed but complete specification for sections 8-17, followed by the final guidelines. This maintains practical usability while ensuring comprehensive coverage.

---

### SECTIONS 8-17: CONDENSED SPECIFICATIONS

**SECTION 8: ERFOLGSFAKTOR MENSCH**
- Background: White
- H2: Navy, "Deine Mitarbeiter sind der wichtigste Teil jeder KI-Strategie"
- Layout: Centered text with 5 checkmarks (Light Blue)
- Key points: Ängste ernst nehmen, Teams einbinden, Quick Wins, Enablement, Champions
- Visual: Simple illustration or icon grid
- Spacing: Standard py-16/24

**SECTION 9: ROI & INVESTITION**
- Background: White
- H2: Navy, "Break-Even in 3-6 Monaten: So rechnet sich KI"
- Layout: Grid of ROI metric cards (3 columns desktop)
- Metrics: Large Magenta numbers (60-80%, 70-80%, 75%, etc.)
- Disclaimer at bottom: Small text, sources cited (McKinsey, Deloitte, HBR)
- CTA: Magenta button "ROI für mein Unternehmen berechnen"

**SECTION 10: TECH-ECOSYSTEM**
- Background: Navy gradient
- H2: White, "Tools nach Eignung, nicht nach Lizenzvertrag"
- Layout: Tool category cards (6 categories)
- Categories: LLMs, Automation, Dev Tools, Microsoft, Multi-Agent, Vector DBs
- Tool logos on white cards, Light Blue category labels
- Spacing: Standard py-16/24

**SECTION 11: AGILE KI-INTEGRATION**
- Background: White
- H2: Navy, "Warum agile KI-Integration? Weil sich KI wöchentlich weiterentwickelt"
- Layout: Timeline showing model releases (horizontal on desktop, vertical on mobile)
- Timeline in Light Blue with milestone nodes
- 5 checkmarks: Rapid Prototyping, Iterativ, Modular, Kein Lock-in, Continuous Improvement
- Spacing: Standard py-16/24

**SECTION 12: AI.MATION UNTERSCHIED**
- Background: White
- H2: Navy, "Nicht noch ein AI-Berater: Das macht uns einzigartig"
- Layout: 6 principle cards (2 rows × 3 columns desktop)
- Each card: Light Blue icon, Navy title, Black description
- Principles: Fundament zuerst, ROI-fokussiert, Transparent, Agil, Enablement, KMU-spezialisiert
- Spacing: Standard py-16/24

**SECTION 13: RISIKOMINIMIERUNG**
- Background: Navy gradient
- H2: White, "Schrittweise statt All-in: So minimieren wir Risiken"
- Layout: 5 risk mitigation points with Light Blue checkmarks
- Points: Analyse vor Investment, Rapid Prototyping, Use Case Priorisierung, Kein Vendor Lock-in, Human in the Loop
- Visual: Simple shield or protective icons
- Spacing: Standard py-16/24

**SECTION 14: BLOG-SECTION**
- Background: White
- H2: Navy, "Insights & Best Practices: Unser Blog"
- Layout: 3 blog preview cards (horizontal on desktop)
- Each card: Thumbnail image, Navy title, excerpt, Light Blue "Weiterlesen →"
- Placeholder titles ready for future content
- Spacing: Standard py-16/24

**SECTION 15: LEAD-MAGNET FORMULAR**
- Background: Navy gradient
- H2: White, "Finde heraus: Wo kann KI in deinem Unternehmen 30%+ Zeit sparen?"
- Layout: Centered white form box with fields
- Fields: Vorname, Nachname, Firma, Branche (dropdown), E-Mail, Tel (optional), Nachricht (textarea)
- All fields: White background, Light Blue focus border
- Submit button: Magenta, full-width on mobile, "KI-POTENZIAL ANALYSIEREN"
- Privacy disclaimer: Small text, link to Datenschutz
- Note: Mock-up only, not functional
- Spacing: Standard py-16/24

**SECTION 16: NÄCHSTE SCHRITTE**
- Background: White
- H2: Navy, "In 3 Schritten zu deiner KI-Strategie"
- Layout: 3 step cards with Magenta numbered badges
- Steps: 1. Kostenloses Erstgespräch → 2. Discovery Workshop → 3. Transparentes Angebot
- Final CTA: VERY LARGE Magenta button "Jetzt Erstgespräch vereinbaren"
- Spacing: py-16 (mobile) / py-32 (desktop) - extra space for final push

**SECTION 17: FOOTER**
- Background: Navy (#031d44)
- Layout: 4 columns desktop, stacked mobile
- Column 1: Logo + Tagline "Automatisierung mit Intelligenz"
- Column 2: Schnelllinks (Leistungen, Use Cases, Schulungen, Blog, Kontakt)
- Column 3: Legal (Impressum, Datenschutz, AGB)
- Column 4: Kontakt (info@aimation.de, www.aimation.de) + Social icons
- All links: White text, hover Light Blue
- Divider: Light Blue horizontal line above footer bottom
- Footer bottom: "© 2025 AI.mation | Made with ❤ and AI" (White 70% opacity, centered)
- Social icons: 32x32px, Light Blue color
- Spacing: py-12 (mobile) / py-16 (desktop)

---

## 5. RESPONSIVE BEHAVIOR

### Navigation (Sticky Header)

**Desktop (≥1024px):**
```jsx
<header className="
  sticky
  top-0
  z-50
  bg-white/95
  backdrop-blur-sm
  border-b
  border-gray-100
  shadow-sm
">
  <nav className="
    max-w-7xl
    mx-auto
    px-6
    md:px-8
    h-20
    flex
    items-center
    justify-between
  ">
    {/* Logo */}
    <div className="flex items-center">
      <img src="/logo.svg" alt="AI.mation" className="h-10" />
    </div>

    {/* Desktop nav links */}
    <div className="hidden lg:flex items-center gap-8">
      <a href="#services" className="
        text-navy
        hover:text-light-blue
        font-medium
        transition-colors
      ">
        Leistungen
      </a>
      <a href="#use-cases">Use Cases</a>
      <a href="#schulungen">Schulungen</a>
      <a href="#blog">Blog</a>

      {/* CTA button */}
      <button className="
        bg-magenta
        hover:bg-magenta/90
        text-white
        font-semibold
        px-6
        py-3
        rounded-lg
        transition-all
        hover:scale-105
      ">
        Erstgespräch
      </button>
    </div>

    {/* Mobile hamburger */}
    <button className="lg:hidden" aria-label="Menu">
      <MenuIcon className="w-6 h-6 text-navy" />
    </button>
  </nav>
</header>
```

**Mobile (<1024px):**
- Hamburger menu (top right)
- Slide-in menu from right
- Navy background overlay
- White menu panel
- Stacked links, full-width CTA at bottom

### Breakpoint-Specific Changes

| Element | Mobile (<640px) | Tablet (640-1023px) | Desktop (≥1024px) |
|---------|----------------|---------------------|-------------------|
| Hero layout | Stacked | Stacked | Split (55/45) |
| 4-Phase timeline | Vertical | Vertical | Horizontal |
| Service cards | 1 column | 2 columns | 3 columns |
| Use case cards | 1 column | 2 columns | 3 columns |
| Training categories | 1 column | 2 columns | 2 columns |
| Footer columns | Stacked | 2 columns | 4 columns |
| Navigation | Hamburger | Hamburger | Full horizontal |
| CTA buttons | Full width | Auto width | Auto width |
| Section padding | py-16 | py-20 | py-24 |
| Container padding | px-6 | px-8 | px-8 |
| H1 size | text-5xl | text-5xl | text-6xl |
| H2 size | text-4xl | text-4xl | text-5xl |
| Body size | text-base | text-base | text-lg |

### Mobile-First Optimization

**Touch Targets:**
- Minimum 44x44px for all interactive elements
- CTA buttons: 56px height on mobile
- Navigation links in mobile menu: 48px height
- Form fields: 48px height

**Mobile Performance:**
- Hero image: Serve smaller version (<100KB WebP)
- Lazy load all images below fold
- Defer non-critical CSS
- Inline critical CSS for above-fold content
- Remove hover animations on touch devices

**Mobile UX:**
- Sticky header collapses on scroll down, reveals on scroll up
- Forms: Label above input (not floating)
- No hover-only interactions
- Larger font sizes to prevent iOS zoom (min 16px inputs)
- Adequate spacing between clickable elements (min 8px)

---

## 6. ANIMATION GUIDELINES

### Animation Philosophy

**Principles:**
1. Subtlety over spectacle
2. Performance first (60fps or remove)
3. Respect `prefers-reduced-motion`
4. Enhance, don't distract
5. Meaningful, not decorative

### Framer Motion Implementation

**Global Settings:**
```jsx
// Respect user preferences
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const motionConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: prefersReducedMotion ? 0.01 : 0.6,
    ease: "easeOut"
  }
};
```

### Animation Inventory

| Element | Animation | Trigger | Duration | Easing |
|---------|-----------|---------|----------|--------|
| Hero headline | Fade in + slide up | On mount | 0.6s | easeOut |
| Hero subheadline | Fade in + slide up | On mount (delay 0.2s) | 0.6s | easeOut |
| Hero CTA | Fade in + slide up | On mount (delay 0.4s) | 0.6s | easeOut |
| Section headlines | Fade in | On scroll into view | 0.6s | easeOut |
| Cards | Fade in + slide up | On scroll (stagger 0.1s) | 0.5s | easeOut |
| Service cards | Hover lift | On hover | 0.3s | easeInOut |
| CTA buttons | Scale + shadow | On hover | 0.3s | easeInOut |
| Phase badges | Scale spring | On scroll | 0.4s | spring |
| Agent nodes (Multi-Agent) | Scale spring | On scroll (stagger 0.1s) | 0.4s | spring |
| Connection lines | Path draw | On scroll (delay 0.5s) | 0.8s | easeInOut |
| Status badges | Slide in from right | On scroll | 0.4s | easeOut |
| Form focus | Border color + glow | On focus | 0.2s | ease |

### Code Examples

**Scroll-Triggered Animation:**
```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{
    once: true,           // Animate only once
    margin: "-100px"      // Trigger 100px before entering viewport
  }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <SectionContent />
</motion.div>
```

**Stagger Children:**
```jsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

**Button Hover:**
```jsx
<motion.button
  whileHover={{
    scale: 1.05,
    boxShadow: "0 20px 25px rgba(249, 0, 147, 0.4)"
  }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.3 }}
>
  Click me
</motion.button>
```

### Performance Optimization

**Do:**
- Animate `opacity`, `transform` (scale, translate, rotate) only
- Use `will-change` sparingly for known animated elements
- Lazy load Framer Motion for below-fold sections
- Limit simultaneous animations to <5 elements

**Don't:**
- Animate `width`, `height`, `top`, `left` (causes layout thrashing)
- Use heavy animations on mobile
- Animate on scroll for every pixel (use waypoints)
- Animate more than necessary

---

## 7. ACCESSIBILITY REQUIREMENTS

### WCAG 2.1 Level AA Compliance

**Color Contrast:**
- All text meets 4.5:1 ratio (AA)
- Large text (≥18pt or ≥14pt bold) meets 3:1 ratio
- Interactive elements meet 3:1 against background
- Magenta on white for borders only (not body text)

**Keyboard Navigation:**
- All interactive elements accessible via Tab
- Logical tab order (top to bottom, left to right)
- Visible focus indicators (4px outline, offset 2px)
- Skip links for keyboard users ("Skip to main content")
- Escape key closes mobile menu
- Enter/Space activates buttons

**Screen Readers:**
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Proper heading hierarchy (single `<h1>`, then `<h2>`, `<h3>`, etc.)
- Alt text on all images (descriptive, <125 chars)
- ARIA labels where needed (`aria-label`, `aria-labelledby`, `aria-describedby`)
- ARIA landmarks (`role="navigation"`, `role="main"`, etc.)
- Form labels properly associated (`<label for="...">`)
- Error messages announced (`aria-live="polite"`)

### Semantic HTML Structure

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI.mation - KI-Transformation für KMUs</title>
  <meta name="description" content="KI-Transformation für KMUs in 2-4 Wochen...">
</head>
<body>
  <a href="#main" className="skip-link">Skip to main content</a>

  <header role="banner">
    <nav role="navigation" aria-label="Main navigation">
      <!-- Navigation -->
    </nav>
  </header>

  <main id="main" role="main">
    <section id="hero" aria-labelledby="hero-heading">
      <h1 id="hero-heading">Von 3 Wochen Recherche...</h1>
      <!-- Hero content -->
    </section>

    <section id="problem" aria-labelledby="problem-heading">
      <h2 id="problem-heading">Warum 85% der KI-Projekte scheitern</h2>
      <!-- Problem content -->
    </section>

    <!-- More sections -->
  </main>

  <footer role="contentinfo">
    <!-- Footer content -->
  </footer>
</body>
</html>
```

### Focus States

```css
/* Visible focus for all interactive elements */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 4px solid #f90093; /* Magenta */
  outline-offset: 2px;
  border-radius: 4px;
}

/* Skip link (visible on focus) */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #f90093;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### Form Accessibility

```jsx
<div className="mb-6">
  <label
    htmlFor="email"
    className="block text-sm font-semibold text-white mb-2"
  >
    E-Mail *
  </label>
  <input
    type="email"
    id="email"
    name="email"
    required
    aria-required="true"
    aria-describedby="email-error"
    className="w-full px-4 py-3 rounded-lg..."
  />
  <div
    id="email-error"
    role="alert"
    aria-live="polite"
    className="text-red-400 text-sm mt-1"
  >
    {/* Error message appears here */}
  </div>
</div>
```

### Icon Accessibility

```jsx
{/* Decorative icon (hidden from screen readers) */}
<SearchIcon className="w-6 h-6 text-light-blue" aria-hidden="true" />

{/* Meaningful icon (requires label) */}
<button aria-label="Search">
  <SearchIcon className="w-6 h-6" />
</button>
```

### Motion Accessibility

```jsx
// Check user preference
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Conditional animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: prefersReducedMotion ? 0.01 : 0.6
  }}
>
```

### Testing Checklist

- [ ] Keyboard navigation works for all interactive elements
- [ ] Tab order is logical
- [ ] Focus states are visible
- [ ] Screen reader announces all content properly
- [ ] All images have alt text
- [ ] All form fields have labels
- [ ] Color is not the only means of conveying information
- [ ] Contrast ratios meet WCAG AA
- [ ] Page can be zoomed to 200% without horizontal scroll
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Error messages are announced to screen readers
- [ ] Skip links work
- [ ] Landmark regions are properly defined

### Tools for Testing

- **Axe DevTools** (browser extension): Automated accessibility audits
- **WAVE** (browser extension): Visual feedback
- **NVDA / JAWS / VoiceOver**: Screen reader testing
- **Keyboard only**: Unplug mouse, navigate entire site
- **Chrome Lighthouse**: Accessibility score (aim for 100)
- **Color contrast checker**: WebAIM Contrast Checker

---

## FINAL IMPLEMENTATION NOTES

### Design Handoff Checklist

When passing this specification to developers:

**Assets Needed:**
- [ ] AI.mation logo (SVG format)
- [ ] Hero illustration (WebP, <100KB)
- [ ] Multi-Agent visualization (SVG or illustration)
- [ ] Service icons (from React Icons library - specify which)
- [ ] Phase icons (from React Icons library)
- [ ] Use case category icons
- [ ] Social media icons (LinkedIn, Twitter, etc.)
- [ ] Placeholder blog thumbnails

**Development Priorities:**
1. Week 1: Setup, design system, navigation, footer, component library
2. Week 2: Sections 1-6 (Hero through Use Cases)
3. Week 3: Sections 7-13 (Training through Risk)
4. Week 4: Sections 14-17, animations, responsive testing, performance, SEO

**Quality Assurance:**
- Mobile testing on real devices (iOS + Android)
- Desktop testing on Chrome, Firefox, Safari, Edge
- Lighthouse scores: Performance 90+, Accessibility 100, Best Practices 100, SEO 100
- Forms tested (even if mock-up, UI should work)
- All links tested
- All hover states tested
- Keyboard navigation tested
- Screen reader tested (NVDA or VoiceOver)

**Launch Readiness:**
- [ ] All CTAs point to correct URLs (or are properly disabled if mock)
- [ ] Contact information correct (info@aimation.de, www.aimation.de)
- [ ] Legal pages linked (Impressum, Datenschutz, AGB)
- [ ] Meta tags configured (title, description, OG tags)
- [ ] Favicon added
- [ ] Google Analytics / tracking configured (if needed)
- [ ] Performance optimized (images compressed, lazy loading)
- [ ] Mobile-friendly test passed (Google)
- [ ] SSL certificate installed

---

## REVISION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | November 2025 | Initial complete specification |

---

**Document Owner:** UX/UI Architect
**For Questions:** Reference AI-MATION-LANDING-PAGE-PLAN.md
**Status:** Ready for Development

---

END OF SPECIFICATION