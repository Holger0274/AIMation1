# AI.mation Landing Page - Strategischer Bauplan (Kompakt)

**Version 1.1 | November 2025**

---

## 1. EXECUTIVE SUMMARY

**Das einzigartige Versprechen:**  
AI.mation positioniert sich als **transparenter, agiler KI-Partner für KMUs** mit strukturiertem 4-Phasen-Prozess statt Tool-First-Ansatz.

**Der eine Satz:** "Eine Landing Page, die KMUs zeigt, wie sie KI in 2-4 Wochen praktisch nutzen können – mit voller Transparenz über Kosten, ROI und Entwicklungsstatus."

**Hauptproblem der Zielgruppe:**  
KMUs sind überfordert von Tool-Jungle, ROI-Unsicherheit, Angst vor Abhängigkeit, Change-Widerstand und fehlender Expertise.

**Unsere Lösung:** Transparenter, ROI-fokussierter Ansatz mit Rapid Prototyping (2-4 Wochen), der Teams befähigt statt abhängig macht.

---

## 2. ZIELGRUPPEN-ANALYSE

**Primäre Zielgruppe:**
- Unternehmensgröße: 10-250 Mitarbeiter
- Branchen: Dienstleistung, Handel, Produktion, Beratung, Gesundheit
- Entscheider: Geschäftsführer, IT-Leiter, Innovationsmanager
- Budget: €10.000-€100.000 mit ROI-Erwartung
- Tech-Reifegrad: Mittel bis hoch (Microsoft 365, CRM)

**Schmerzpunkte:**
1. "Wir wissen nicht, wo wir anfangen sollen" → Überwältigung
2. "Wir können uns keine jahrelangen Projekte leisten" → Brauchen schnelle Erfolge
3. "Wir haben keine eigene AI-Abteilung" → Fehlende Expertise
4. "Wir wollen keine schwarze Box" → Angst vor Intransparenz
5. "Unsere Mitarbeiter haben Angst vor KI" → Change-Widerstand

**Voice:** Direkt, pragmatisch, skeptisch, ROI-fokussiert, bodenständig ("Was kostet's? Was bringt's?")

**Was überzeugt:** Transparenz, schnelle Erfolge (2-4 Wochen), konkrete Zahlen, Enablement, pragmatische Tools, Human in the Loop

---

## 3. DESIGN-PHILOSOPHIE & FARBSTRATEGIE

### Farbpalette & strategische Verwendung

**Navy (#031d44) - Vertrauensbasis (60%)**
- Einsatz: Hero, 4-Phasen-Prozess, Footer, Navigation
- Begründung: Stabilität und Professionalität für KMUs, die zum ersten Mal in KI investieren

**Magenta (#f90093) - Conversion-Trigger (10%)**
- Einsatz: Alle CTAs, Status-Badges, wichtige Zahlen
- Begründung: Durchbricht Navy, signalisiert Handlung und Innovation

**Hellblau (#60AFFF) - Innovations-Marker (20%)**
- Einsatz: Icons, Service-Cards, Multi-Agent-Section, Akzente
- Begründung: Macht Tech-Konzepte visuell zugänglich

**Weiß (#ffffff) - Klarheit (50% Fläche)**
- Einsatz: Haupthintergrund, Breathing Room
- Begründung: Viel Weißraum = Professionalität

**Schwarz (#071013) - Kontrast**
- Einsatz: Fließtexte, Headlines
- Begründung: Lesbarkeit und Autorität

**Differenzierung:** Navy + Magenta = einzigartige Kombination (nicht generisches Blau/Cyan wie andere AI-Berater)

---

## 4. USER JOURNEY & CTA-STRATEGIE

### User Flow
```
AWARENESS → INTERESSE → VERTRAUEN → ÜBERLEGUNG → AKTION
    ↓            ↓           ↓            ↓           ↓
  Hero     Problem/Multi   4-Phasen   Use Cases    CTA
           Agent          Services    ROI-Daten   Formular
```

**Phase 1 (0-10s):** Hero → "Das ist für mich relevant!"  
**Phase 2 (10-60s):** Problem/Multi-Agent → "Die verstehen mein Problem!"  
**Phase 3 (1-3 Min):** 4-Phasen/Services/Use Cases → "Die sind ehrlich und strukturiert"  
**Phase 4 (3-8 Min):** ROI/Unterschied/Risiko → "Das lohnt sich"  
**Phase 5 (Final):** Lead-Magnet/Nächste Schritte → "Ich buche jetzt"

### CTA-Strategie (6 CTAs)
1. **Hero:** "Kostenloses Erstgespräch buchen" (Magenta, primär)
2. **Nach Problem:** "Wie wir arbeiten →" (Hellblau, sekundär)
3. **Nach Multi-Agent:** "Multi-Agent-System explorieren" (Magenta, primär)
4. **Nach ROI:** "ROI für mein Unternehmen berechnen" (Magenta, primär)
5. **Lead-Magnet:** "KI-POTENZIAL ANALYSIEREN" (Magenta, alternative)
6. **Finale:** "Jetzt Erstgespräch vereinbaren" (Magenta, größter)

### Vertrauensaufbau
- Transparenz: Use Cases zeigen Status "In Entwicklung"
- Struktur: 4-Phasen-Prozess mit klaren Deliverables
- Enablement: "Wir machen euch unabhängig"
- Human in the Loop: KI als Werkzeug, nicht Ersatz
- Risikominimierung: Schrittweise, 2-4 Wochen PoC

---

## 5. TECH-STACK-EMPFEHLUNG

**Stack: Next.js 14 + Tailwind CSS + Framer Motion**

**Warum?**
- Next.js: Anfängerfreundlich, SSR, SEO-optimiert, Vercel-Deployment, skalierbar
- Tailwind: Utility-first, responsive, Farben in Config, Rapid Prototyping
- Framer Motion: Smooth Animations, deklarativ, performant
- React Icons: Große Auswahl
- React Hook Form: Formular-Handling

**Ordnerstruktur:**
```
/app (page.js, layout.js, globals.css)
/components (Hero.jsx, Problem.jsx, Process.jsx, etc.)
/public/images
tailwind.config.js (Farben definieren!)
```

**Fallstricke vermeiden:** Nur essentials, kein Redux, Formular = Mock-up, KISS-Prinzip

---

## 6. RESPONSIVE & SEO

### Mobile-First
- Mobile < 640px, Tablet 640-1024px, Desktop > 1024px
- Hero: Desktop split, Mobile stacked
- 4-Phasen: Desktop horizontal, Mobile vertical
- Services/Use Cases: Desktop 3-Spalten, Mobile 1-Spalte
- Navigation: Desktop horizontal, Mobile Hamburger

### SEO
**Meta (155 Zeichen):** "KI-Transformation für KMUs in 2-4 Wochen. Von AI Audit bis Multi-Agent-Systeme. ROI-fokussiert, transparent, agil. Jetzt kostenloses Erstgespräch!"

**Keywords:** KI-Beratung für KMUs, AI-Transformation Mittelstand, Microsoft Copilot Training, Multi-Agent-Systeme, KI-Automatisierung, AI Readiness Assessment

**H-Struktur:** H1 nur einmal (Hero), H2 pro Section, H3 für Sub-Sections

---

## 7. CONTENT-STRATEGIE: ALLE 17 SECTIONS (KOMPAKT)

### SECTION 1: HERO
**Ziel:** User versteht sofort "Das ist für mich (KMU)" und "Hier bekomme ich konkrete Lösungen"  
**Headline:** "Von 3 Wochen Recherche zu 30 Minuten Entscheidungsgrundlage"  
**Sub:** "Wir helfen KMUs, KI vollständig zu integrieren – von Microsoft Copilot Training bis zu Multi-Agent-Systemen. Transparent, agil, ROI-fokussiert."  
**CTA:** "Kostenloses Erstgespräch buchen" (Magenta, groß)  
**Farben:** Navy-Hintergrund mit Hellblau-Gradient, weißer Text, Magenta-CTA

---

### SECTION 2: PROBLEM/SOLUTION
**Ziel:** "Die verstehen meine Situation. Andere starten falsch."  
**Headline:** "Warum 85% der KI-Projekte scheitern (und wie du es richtig machst)"  
**Copy:** Meiste Beratungen starten mit Technologie → Projekte versanden. Unser Ansatz: ✓ Fundament vor Technologie ✓ Strategie vor Tools ✓ Enablement vor Abhängigkeit ✓ Rapid Prototyping (2-4 Wochen)  
**Farben:** Weiß-Hintergrund, Navy-Highlight-Box, Hellblau-Checkmarks

---

### SECTION 3: 4-PHASEN-PROZESS
**Ziel:** "Die haben einen klaren Plan. Kein Chaos."  
**Headline:** "Der AI.mation Weg: Fundament → Strategie → Enablement → Umsetzung"  
**Copy:** 
- Phase 1 (Lupe): Discovery & Landkarten → AI Readiness Report (1-2 Wochen)
- Phase 2 (Schachfigur): Strategie & Use Cases → AI Audit, Readiness, ROI-Analyse, Use Case Roadmap (1-2 Wochen)
- Phase 3 (Menschen): Enablement & Training → Schulungen, Change Management (2-4 Wochen parallel)
- Phase 4 (Rakete): Implementation & PoC → Funktionale PoCs, Custom GPTs, Workflows (2-4 Wochen)  
**Farben:** Navy-Gradient-Hintergrund, weiße Cards, Hellblau-Timeline, Magenta-Deliverables

---

### SECTION 4: SERVICES
**Ziel:** "Die bieten alles, was ich brauche."  
**Headline:** "Von Microsoft Copilot bis Custom AI: Unser komplettes Portfolio"  
**Copy:** 7 Service-Cards:
1. Microsoft Copilot Training
2. KI-Schulungen nach Zielgruppen
3. KI-Automatisierung (make.com, n8n, Power Automate)
4. Custom GPT-Entwicklung
5. Multi-Agent-Systeme ⭐ FLAGSHIP
6. Agentische Systeme
7. Maßgeschneiderte AI-Lösungen (2-4 Wochen)  
**Farben:** Weiß-Hintergrund, Hellblau-Icons, Magenta-Flagship-Badge

---

### SECTION 5: MULTI-AGENT-SYSTEME HIGHLIGHT
**Ziel:** "DAS ist das Leuchtturm-Angebot. Wow-Effekt!"  
**Headline:** "Multi-Agent-Systeme: KI-Expert-Teams, die für dich arbeiten"  
**Sub:** "Von 3 Wochen Recherche zu 30 Minuten Entscheidungsgrundlage"  
**Copy:** Produktentwicklung braucht normalerweise 3-4 Wochen (Technik, Patent, Markt, Finance, Compliance). Mit 5 KI-Agenten parallel: 30-60 Min Report. Human in the Loop: Du entscheidest.  
**CTA:** "Multi-Agent-System explorieren"  
**Farben:** Navy mit Hellblau-Gradient, Hellblau-Agent-Icons, Magenta-CTA

---

### SECTION 6: USE CASES (MIT STATUS-TRANSPARENZ)
**Ziel:** "Konkrete Lösungen + ehrlicher Status = Vertrauen"  
**Headline:** "Use Cases in Entwicklung: Transparent, agil, ROI-fokussiert"  
**Copy:** Wir zeigen den echten Status. Beispiele:
- 🔬 Research: Patent-Intelligence (Konzeptphase, 60-70% Zeitersparnis)
- 🗂️ Wissensmanagement: Intelligente Wissensdatenbank (In Entwicklung)
- 💼 Office: Intelligente Meeting-Verarbeitung (In Entwicklung, 90% Zeitersparnis, PoC 2-3 Wochen)
- 💰 Sales: Kundengesprächs-Vorbereitung (PoC-Phase, 90% Zeitersparnis)
- 👥 HR: Recruiting Automation (PoC-Phase, 50-70% Zeitersparnis)
- 🎧 Customer Service: Intelligente Chat Bots (In Entwicklung, 60-80% gelöst)
- 📝 Content: Content-Repurposing (In Entwicklung, 5x mehr Content)  
**Farben:** Weiß-Hintergrund, Magenta-Status-Badges, Hellblau-ROI-Zahlen

---

### SECTION 7: SCHULUNGSPORTFOLIO
**Ziel:** "Training auf allen Levels = echtes Enablement"  
**Headline:** "Enablement statt Abhängigkeit: Unser Schulungsportfolio"  
**Copy:** 
- 👥 Für alle: Einstieg KI, Microsoft Copilot ⭐
- 💼 Manager: Professionelles Prompting, KI Transformation
- 🎯 Führung: KI für Führungskräfte
- 🛠️ Technical: Automatisierung ohne Code, KI-Coden, Prompt Engineering Advanced, Custom GPT Aufbau  
**Farben:** Navy-Gradient, Hellblau-Icons, Magenta-Kernangebot-Badge

---

### SECTION 8: ERFOLGSFAKTOR MENSCH
**Ziel:** "Die nehmen Teams ernst, nicht nur Tech."  
**Headline:** "Deine Mitarbeiter sind der wichtigste Teil jeder KI-Strategie"  
**Copy:** Beste Tech bringt nichts, wenn Team blockiert. Change Management integriert: ✓ Ängste ernst nehmen ✓ Teams einbinden ✓ Quick Wins ✓ Enablement ✓ Champions identifizieren  
**Farben:** Weiß-Hintergrund, Hellblau-Checkmarks

---

### SECTION 9: ROI & INVESTITION
**Ziel:** "Das rechnet sich konkret."  
**Headline:** "Break-Even in 3-6 Monaten: So rechnet sich KI"  
**Copy:** Einsparungspotenziale:
- 📊 Meeting-Nachbereitung: 40-60%
- 🔍 Patent-Analyse: 70-80%
- 📝 Dokumenten-Verarbeitung: 75%
- 💬 Customer Service: 60-80% automatisch
- 📧 Lead-Qualifizierung: 50% mehr qualifizierte Calls
Break-Even: 3-6 Monate. ROI: 300-500% über 3 Jahre.  
**Disclaimer:** Zahlen basieren auf Studien (McKinsey, Deloitte, HBR). Individuelle Ergebnisse variieren.  
**CTA:** "ROI für mein Unternehmen berechnen"  
**Farben:** Weiß-Hintergrund, Magenta-Zahlen, Hellblau-Diagramme

---

### SECTION 10: TECH-ECOSYSTEM
**Ziel:** "Tool-agnostisch = kein Vendor Lock-in"  
**Headline:** "Tools nach Eignung, nicht nach Lizenzvertrag"  
**Copy:** Wir verkaufen keine Lizenzen. Unabhängige Beratung. Tech-Ecosystem: ChatGPT, Claude, Gemini, Perplexity | make.com, n8n, Power Automate | Cursor, Lovable | Copilot M365, Azure AI | CrewAI, AutoGen | Pinecone, Weaviate  
**Farben:** Navy-Gradient, Tool-Logos auf weißen Cards, Hellblau-Kategorien

---

### SECTION 11: AGILE KI-INTEGRATION
**Ziel:** "Agil ist Notwendigkeit, kein Buzzword"  
**Headline:** "Warum agile KI-Integration? Weil sich KI wöchentlich weiterentwickelt"  
**Copy:** GPT-4 (März 2023) → GPT-4o (Mai 2024) → Claude 3.5 (Juni 2024) → GPT-o1 (Sept 2024). 18-Monate-Projekte = veraltete Tech. Unser Ansatz: ✓ Rapid Prototyping (2-4 Wochen) ✓ Iterativ ✓ Modular ✓ Kein Lock-in ✓ Continuous Improvement  
**Farben:** Weiß-Hintergrund, Hellblau-Timeline, Hellblau-Checkmarks

---

### SECTION 12: AI.MATION UNTERSCHIED
**Ziel:** "6 Prinzipien, die uns anders machen"  
**Headline:** "Nicht noch ein AI-Berater: Das macht uns einzigartig"  
**Copy:** 
1. Fundament zuerst (AI Audit vor Tools)
2. ROI-fokussiert (Transparente Berechnung)
3. Transparent (Status-Badges, klare Kosten)
4. Agil (2-4 Wochen PoCs)
5. Enablement (Team unabhängig machen)
6. KMU-spezialisiert (Pragmatisch, schnell, kosteneffizient)  
**Farben:** Weiß-Hintergrund, Hellblau-Icons, Magenta-Zahlen

---

### SECTION 13: RISIKOMINIMIERUNG
**Ziel:** "Risiko ist minimal und kalkulierbar"  
**Headline:** "Schrittweise statt All-in: So minimieren wir Risiken"  
**Copy:** ✓ Analyse vor Investment ✓ Rapid Prototyping (2-4 Wochen) ✓ Use Case Priorisierung ✓ Kein Vendor Lock-in ✓ Human in the Loop  
**Farben:** Navy-Gradient, weiße Checkmarks, Hellblau-Icons

---

### SECTION 14: BLOG-SECTION (VORBEREITUNG)
**Ziel:** "Thought Leadership, Wissen teilen"  
**Headline:** "Insights & Best Practices: Unser Blog"  
**Copy:** 3 Platzhalter-Cards:
1. "5 Fehler bei KI-Einführung in KMUs"
2. "Microsoft Copilot: 10 Prompts für Excel"
3. "Multi-Agent-Systeme erklärt"  
**Farben:** Weiß-Hintergrund, Hellblau-Buttons, Navy-Titel

---

### SECTION 15: LEAD-MAGNET FORMULAR
**Ziel:** "Lower Commitment als Termin"  
**Headline:** "Finde heraus: Wo kann KI in deinem Unternehmen 30%+ Zeit sparen?"  
**Copy:** Felder: Vorname, Nachname, Firma, Branche, E-Mail, Tel (optional), Nachricht. Erhalte: AI Readiness, 3-5 Use Cases, ROI-Schätzung.  
**Button:** "KI-POTENZIAL ANALYSIEREN" (Magenta, groß)  
**Wichtig:** Mock-up, nicht funktional!  
**Farben:** Navy-Gradient-Hintergrund, weiße Formular-Box, Magenta-Button

---

### SECTION 16: NÄCHSTE SCHRITTE / CTA
**Ziel:** "Finale Conversion - klarer Prozess"  
**Headline:** "In 3 Schritten zu deiner KI-Strategie"  
**Copy:**
1. Kostenloses Erstgespräch (30-60 Min, unverbindlich)
2. Discovery Workshop (Optional, 1-2 Tage) → AI Readiness Report
3. Transparentes Angebot (Use Cases, ROI, Zeitrahmen, Deliverables)
**CTA:** "Jetzt Erstgespräch vereinbaren" (Magenta, SEHR groß)
**Farben:** Weiß-Hintergrund, Hellblau-Step-Cards, Magenta-Nummern & CTA

---

### SECTION 17: FOOTER
**Ziel:** "Alle wichtigen Links und Kontaktdaten"  
**Copy:** 4 Spalten:
- Logo & Tagline: "Automatisierung mit Intelligenz"
- Schnelllinks: Leistungen, Über uns, Blog, Kontakt
- Legal: Impressum, Datenschutz, AGB
- Kontakt: info@aimation.de, www.aimation.de | Social Media Icons
**Footer-Bottom:** "© 2025 AI.mation | Made with ❤️ and AI"
**Farben:** Navy-Hintergrund, weißer Text, Hellblau-Links (Hover), Hellblau-Trennlinie

---

## 8. WETTBEWERBS-DIFFERENZIERUNG (KOMPAKT)

### Was andere falsch machen
1. **Technologie-First:** Tools ohne Strategie → AI.mation: Discovery vor Tools
2. **Konzern-Denke:** 12-24 Monate, 6-stellig → AI.mation: 2-4 Wochen, skalierbar
3. **Abhängigkeit:** Retainer, kein Wissen → AI.mation: Training, Übergabe
4. **Intransparenz:** Buzzwords, keine Zahlen → AI.mation: Status-Badges, ROI-Quellen
5. **Generisch:** One-size-fits-all → AI.mation: Individuelle Use Cases

### Positionierungs-Matrix

| Dimension | Typische Berater | AI.mation |
|-----------|-----------------|-----------|
| Projektdauer | 12-24 Monate | 2-4 Wochen PoC |
| Ansatz | Technologie-First | Strategie-First |
| Zielgruppe | Konzerne | KMUs |
| Transparenz | "Alles möglich!" | "Status Quo zeigen" |
| Enablement | "Wir machen" | "Wir befähigen" |
| Tools | Vendor-gebunden | Tool-agnostisch |

### 6 Wiederkehrende Botschaften (Red Thread)
1. "2-4 Wochen Rapid Prototyping" → Geschwindigkeit
2. "Transparent über Status" → Use Cases zeigen "In Entwicklung"
3. "Enablement statt Abhängigkeit" → Training als Kern
4. "Human in the Loop" → KI als Werkzeug
5. "ROI-fokussiert" → Break-Even 3-6 Monate
6. "Multi-Agent-Systeme" → Flaggschiff-Differenzierung

---

## 9. KONKRETE COPY-BEISPIELE

### Hero-Section (Empfohlene Version)

```
Von 3 Wochen Recherche zu 30 Minuten Entscheidungsgrundlage

Wir helfen KMUs, KI vollständig in ihre Geschäftsprozesse zu integrieren – 
von Microsoft Copilot Training bis zu Multi-Agent-Systemen, die als Expert-Teams 
für dich arbeiten. Transparent, agil, ROI-fokussiert.

[Button: "Kostenloses Erstgespräch buchen"]
[Link: "Wie wir arbeiten →"]
```

**Warum?** Dramatischer Benefit (3 Wochen → 30 Min), Zielgruppe (KMUs), Differenzierung (Multi-Agent), Positionierung (transparent, agil, ROI)

### Problem-Section (Empfohlene Version)

```
Warum 85% der KI-Projekte scheitern (und wie du es richtig machst)

Die harten Fakten:
→ 67% der KI-Projekte kommen nie über Pilotphase hinaus (McKinsey)
→ 3 von 4 Unternehmen haben keine klare KI-Strategie (Deloitte)
→ 58% der Mitarbeiter fühlen sich überfordert (Harvard Business Review)

Unser Ansatz ist anders:
1️⃣ Fundament: AI Audit & Readiness Assessment
2️⃣ Strategie: Use Case Identifizierung & ROI-Analyse
3️⃣ Enablement: Training auf allen Ebenen
4️⃣ Implementation: Rapid Prototyping in 2-4 Wochen

Das Ergebnis: KI, die funktioniert – und Teams befähigt statt überfordert.
```

### CTA-Button-Texte (A/B-Test-Empfehlungen)

**Primary CTA:** "Kostenloses Erstgespräch buchen" vs. "30-Min-Gespräch vereinbaren (kostenfrei)"  
*Hypothese:* Explizite Zeit (30 Min) reduziert Hürde

**Secondary CTA:** "KI-POTENZIAL ANALYSIEREN" vs. "Kostenlose AI Readiness Analyse"  
*Hypothese:* "Potenzial" ist emotionaler

---

## 10. IMPLEMENTATION-HINWEISE

### Navigation (Sticky Header)
- **Desktop:** [Logo] | Leistungen | Use Cases | Schulungen | Blog | [Button: "Erstgespräch"]
- **Mobile:** [Logo] ... [Hamburger-Menu]
- **Scroll:** Header transparent, CTA sticky, Hellblau-Underline aktive Section

### Animations (Framer Motion)
- **Hero:** Headline Fade in + Slide up (0.3s), Sub (0.5s), CTA (0.7s)
- **4-Phasen:** Scroll-triggered, Stagger-Effekt
- **Multi-Agent:** Agenten nacheinander, Verbindungslinien zeichnen
- **Use Cases:** Cards Fade in on scroll
- **Regel:** Subtil, Performance > Wow, `prefers-reduced-motion` respektieren

### Typografie
- **Font:** Inter (Headlines Bold, Body Regular) - modern, lesbar
- **Größen:** H1 `text-5xl md:text-6xl`, H2 `text-4xl md:text-5xl`, H3 `text-2xl md:text-3xl`, Body `text-base md:text-lg`

### Spacing (Tailwind)
- Section-Abstände: `py-16 md:py-24`
- Elemente: `space-y-8`
- Container: `max-w-7xl mx-auto px-6 md:px-8`

### Bilder & Icons
- Illustrationen: Undraw.co, Storyset, AI-generiert
- Icons: React Icons (Lucide, Heroicons)
- Keine generischen Stock-Photos

### Performance
- Lazy Loading, WebP, Next.js Image-Component
- Lighthouse Score: 90+, FCP < 1.5s, TTI < 3s

---

## 11. IMPLEMENTATION-REIHENFOLGE

**Woche 1:** Next.js Setup, Tailwind Config (Farben!), Navigation, Footer, Component-Struktur  
**Woche 2:** Hero, Problem, 4-Phasen-Prozess, Services, Multi-Agent, Use Cases  
**Woche 3:** Schulungen, ROI, Tech-Ecosystem, Unterschied, Risiko, Lead-Magnet, Nächste Schritte  
**Woche 4:** Animationen, Responsive Testing, Performance, SEO

---

## 12. REVIEW-CHECKLISTE

**Content:**
- [ ] Use Cases haben Status-Badge
- [ ] ROI-Zahlen haben Disclaimer
- [ ] Kontakt korrekt (info@aimation.de, www.aimation.de)
- [ ] Du-Ansprache durchgehend

**Design:**
- [ ] Farbschema konsistent (Navy, Hellblau, Magenta, Weiß, Schwarz)
- [ ] Alle CTAs in Magenta
- [ ] Viel Whitespace
- [ ] Mobile-optimiert

**Technical:**
- [ ] Lighthouse Score 90+
- [ ] Formular als Mock-up gekennzeichnet
- [ ] SEO Meta-Tags gesetzt

---

## 🎯 FINALER STRATEGISCHER HINWEIS

**Was diese Landing Page einzigartig macht:**

Während 95% der AI-Berater zu technisch, zu vage oder zu generisch sind, macht AI.mation 3 Dinge fundamental anders:

1. **Transparenz als Differenzierung:** "Use Cases in Entwicklung" zeigen = mutig, schafft Vertrauen
2. **Multi-Agent-Systeme als Leuchtturm:** "Von 3 Wochen zu 30 Minuten" = THE Hook
3. **Enablement statt Abhängigkeit:** "Wir machen euch unabhängig" = disruptiv

**Der rote Faden:**
- "Wir sind anders" (Differenzierung) → Problem, Multi-Agent, Unterschied
- "Wir sind ehrlich" (Vertrauen) → Use Cases mit Status, ROI mit Quellen
- "Wir sind schnell & effektiv" (Benefit) → 2-4 Wochen PoC, 3-6 Monate Break-Even

**Wenn diese drei Botschaften ankommen, ist die Landing Page erfolgreich.**

---

**Version:** 1.1 (Kompakt)  
**Erstellt:** November 2025  
**Status:** Ready for Implementation  
**Token-Ziel:** ~18.000 (unter 24.000) ✓

