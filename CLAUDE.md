# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **AI.mation Landing Page** project - a strategic marketing website for AI.mation, a German AI consulting service targeting SMBs (small and medium-sized businesses / KMUs).

**Current Status**: Planning phase only. The repository contains:
- ✅ `AI-MATION-LANDING-PAGE-PLAN.md` (26,000+ tokens) - Complete strategic blueprint
- ✅ `.claude/agents/` - Three specialized development agents
- ✅ `.gitignore` - Configured for Next.js/Vite projects
- ❌ No code implementation yet

**Repository Structure**:
```
/
├── AI-MATION-LANDING-PAGE-PLAN.md    # Detailed strategy document
├── CLAUDE.md                          # This file
├── .claude/
│   └── agents/
│       ├── ux-ui-architect.md
│       ├── landing-page-copywriter.md
│       └── responsive-frontend-developer.md
└── .gitignore
```

## Getting Started with Implementation

When ready to begin development, you have two approaches:

### Option 1: Implement in Current Directory
```bash
# Initialize Next.js in current directory (will merge with existing files)
npx create-next-app@latest . --no-git

# Or initialize Vite + React
npm create vite@latest . -- --template react
```

### Option 2: Create Subdirectory (Recommended)
```bash
# Keep planning docs separate from implementation
npx create-next-app@latest aimation-landing --no-git
cd aimation-landing
npm install framer-motion react-icons react-hook-form
```

## Planned Tech Stack

When implementing this project, use the following stack as specified in the planning document:

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Forms**: React Hook Form
- **Deployment**: Vercel
- **Language**: JavaScript/JSX (TypeScript optional but not required)

### Alternative Stack
If Next.js proves too complex, the plan allows for: **Vite + React + Tailwind**

### Common Commands (After Project Setup)
```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server (Next.js)
npm start

# Start preview server (Vite)
npm run preview
```

## Architecture Overview

### Planned Folder Structure

```
/app
  page.js              # Main landing page
  layout.js            # Layout with navigation/footer
  globals.css          # Tailwind + custom fonts

/components
  Hero.jsx             # Hero section
  Problem.jsx          # Problem/solution section
  Process.jsx          # 4-phase process section
  Services.jsx         # Services overview
  MultiAgent.jsx       # Multi-agent systems highlight
  UseCases.jsx         # Use cases showcase
  Training.jsx         # Training/workshops section
  ROI.jsx              # ROI calculator section
  TechEcosystem.jsx    # Technology partners section
  Difference.jsx       # AI.mation difference section
  RiskMinimization.jsx # Risk minimization section
  LeadMagnet.jsx       # Lead capture form
  NextSteps.jsx        # Call-to-action section
  Footer.jsx           # Footer with links

/public
  /images              # Logos, icons, graphics
```

### Design System (Tailwind Config)

**Color Palette** - must be defined in `tailwind.config.js`:
- **Navy**: `#031d44` (60% usage - trust/professionalism)
- **Magenta**: `#f90093` (10% usage - CTAs/highlights)
- **Light Blue**: `#60AFFF` (20% usage - innovation markers)
- **White**: `#ffffff` (50% usage - clarity/whitespace)
- **Black**: `#071013` (text/contrast)

**Breakpoints** (Tailwind defaults):
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Key Landing Page Sections (17 Total)

The landing page follows this user journey:
1. **Hero** - Immediate value proposition
2. **Problem/Solution** - Address pain points
3. **Multi-Agent Systems** - Flagship offering
4. **4-Phase Process** - Discovery → Strategy → Enablement → Implementation
5. **Services** - 7 core services overview
6. **Use Cases** - 15+ examples with status badges
7. **Training/Workshops** - Educational offerings
8. **ROI Section** - Concrete numbers and calculations
9. **Tech Ecosystem** - Technology partners
10. **AI.mation Difference** - Competitive differentiation
11. **Risk Minimization** - Trust building
12. **Lead Magnet Form** - Low-commitment capture
13. **Next Steps** - Final CTA
14. **Footer** - Links and legal

## Language and Content Notes

**Primary Language**: German (the target audience is German-speaking SMBs)

**Voice and Tone**:
- Direct and pragmatic (no buzzwords)
- Skeptical-aware (address "not another consultant" mindset)
- ROI-focused with concrete numbers
- Transparent about development status

**Key Messaging Principles**:
- Transparency over polish (show "in development" status badges)
- Enablement over dependency (teach teams, don't create vendor lock-in)
- Strategy before technology (AI Audit before tool selection)
- Human-in-the-loop (AI as tool, not replacement)
- Fast results (2-4 weeks, not 12-24 months)

## SEO Strategy

**Primary H1**: "Von 3 Wochen Recherche zu 30 Minuten Entscheidungsgrundlage"

**Target Keywords**:
- KI-Beratung für KMUs
- AI-Transformation Mittelstand
- Microsoft Copilot Training
- Multi-Agent-Systeme
- KI-Automatisierung

**Meta Description** (155 chars):
"KI-Transformation für KMUs in 2-4 Wochen. Von AI Audit bis Multi-Agent-Systeme. ROI-fokussiert, transparent, agil. Jetzt kostenloses Erstgespräch!"

## Design Principles

1. **Mobile-first**: 40-60% of B2B traffic is mobile
2. **White space**: Professional appearance, avoid information overload
3. **Progressive disclosure**: Use modals/expansion for detailed content
4. **Visual hierarchy**: Clear H1 → H2 → H3 structure
5. **Accessibility**: Semantic HTML, ARIA labels, alt text on all images
6. **Performance**: Lazy loading, WebP images, reduced motion support

## CTA Strategy

All primary CTAs use **Magenta** color and point to:
- "Kostenloses Erstgespräch buchen" (Book free consultation)
- "KI-Potenzial analysieren" (Analyze AI potential - lower commitment)

CTA placement:
- Hero (above fold)
- After Multi-Agent section
- After ROI section
- Lead magnet form
- Final "Next Steps" section

## Specialized Claude Agents

This repository includes three specialized agents in `.claude/agents/` for the landing page development workflow:

### 1. **ux-ui-architect** (Yellow)
Use for designing structure, layout, and user experience:
- Information architecture and section flow
- Visual hierarchy and typography specifications
- Mobile-first design patterns
- Conversion optimization and CTA placement
- Accessibility considerations

### 2. **landing-page-copywriter** (Blue)
Use for creating German marketing copy:
- Headlines and subheadlines (Hauptüberschrift/Unterüberschrift)
- Benefit-driven copy that answers "What's in it for me?"
- Trust-building language and social proof
- Action-oriented CTAs in natural German
- Follows principle: Clarity over cleverness

### 3. **responsive-frontend-developer** (Green)
Use for implementing production-ready code:
- Semantic HTML5 structure
- Mobile-first CSS with Flexbox/Grid
- Performance optimization (lazy loading, efficient selectors)
- Cross-browser compatibility
- WCAG AA accessibility standards

**Recommended Workflow**: UX/UI Architect → Copywriter → Frontend Developer

## Development Guidelines

1. **Keep it simple**: This is a landing page, not a web app. No complex state management needed.
2. **No backend initially**: Lead magnet form can be a mock-up or use a simple service like Formspree
3. **Component-per-section**: Each landing page section = one component
4. **Semantic HTML**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
5. **Responsive by default**: Test all breakpoints (mobile, tablet, desktop)
6. **Use specialized agents**: Leverage the three Claude agents above for their specific expertise

## Important Context from Planning Document

Before implementing any section, **always reference** `AI-MATION-LANDING-PAGE-PLAN.md` for:
- Exact copy text and headlines
- Visual element specifications
- Section-specific responsive behavior
- User psychology and conversion strategy

The planning document is extremely detailed (26,000+ tokens) and contains:
- Complete content strategy for all 17 sections
- Visual/animation specifications
- Competitive differentiation rationale
- Trust-building tactics
- Performance optimization requirements

## Git Strategy

The repository is already initialized with git. Standard workflow:

```bash
# Check status
git status

# Commit changes
git add .
git commit -m "Your commit message"

# View history
git log --oneline
```

A comprehensive `.gitignore` is already configured for Next.js/Vite projects.
