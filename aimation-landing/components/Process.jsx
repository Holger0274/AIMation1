'use client';

import { motion } from 'framer-motion';
import { HiSearch, HiLightningBolt, HiUserGroup, HiRocket } from 'react-icons/hi';

export default function Process() {
  const phases = [
    {
      icon: HiSearch,
      phase: '1. Fundament legen',
      duration: '1-2 Wochen',
      description:
        'Wir analysieren, wo dein Unternehmen steht – technisch, organisatorisch und kulturell.',
      deliverables: [
        'AI Readiness Report (Wo stehst du wirklich?)',
        'Prozess-Landkarte (Welche Abläufe sind KI-ready?)',
        'Tech-Bestandsaufnahme (Was hast du bereits?)',
        'Change Readiness Assessment (Wie offen ist dein Team?)',
      ],
    },
    {
      icon: HiLightningBolt,
      phase: '2. Strategie entwickeln',
      duration: '1-2 Wochen',
      description:
        'Keine Tool-Empfehlungen ohne Kontext. Wir identifizieren die Use Cases mit dem höchsten ROI.',
      deliverables: [
        'AI Audit (Welche KI-Technologien passen zu dir?)',
        'Use Case Roadmap (Priorisierung nach Quick Wins vs. langfristiger Impact)',
        'ROI-Analyse pro Use Case (Was kostet\'s? Was bringt\'s?)',
        'Tool-Empfehlungen (Unabhängig! Wir verkaufen keine Lizenzen)',
      ],
    },
    {
      icon: HiUserGroup,
      phase: '3. Dein Team befähigen',
      duration: '2-4 Wochen',
      description:
        'Die beste Technologie bringt nichts, wenn dein Team sie nicht nutzt. Enablement ist der Kern unseres Ansatzes.',
      deliverables: [
        'Maßgeschneiderte Schulungen (nach Rolle: Führung, Manager, Team)',
        'Change Management Support (Ängste ernst nehmen, Champions aufbauen)',
        'Hands-On Workshops (Kein Theorie-Vortrag, sondern echte Anwendung)',
        'Documentation & Playbooks (Dein Team kann\'s danach selbst)',
      ],
    },
    {
      icon: HiRocket,
      phase: '4. Schnell umsetzen',
      duration: '2-4 Wochen',
      description:
        'Rapid Prototyping statt endloser Konzeptphase. In 2-4 Wochen hast du funktionierende Prototypen.',
      deliverables: [
        'Proof of Concepts (Funktionale Prototypen, nicht nur Slides)',
        'Custom GPTs & Workflows (Maßgeschneidert für deine Prozesse)',
        'Integration in bestehende Systeme (Microsoft 365, CRM, etc.)',
        'Iterative Verbesserung (Agil, nicht Wasserfall)',
      ],
    },
  ];

  return (
    <section id="process" className="section-padding bg-navy-gradient">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Der AI.mation Weg: Fundament → Strategie → Enablement → Umsetzung
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Kein Chaos, keine Black Box. Unser strukturierter 4-Phasen-Prozess macht KI-Integration planbar.
          </p>
        </motion.div>

        {/* Timeline - Desktop Horizontal, Mobile Vertical */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-navy/50 backdrop-blur-sm border-2 border-lightblue/30 rounded-xl p-8 hover:border-lightblue hover:bg-navy/70 transition-all duration-300 h-full"
              >
                {/* Icon */}
                <div className="text-lightblue mb-6">
                  <phase.icon className="w-16 h-16" />
                </div>

                {/* Phase Title */}
                <h4 className="text-2xl font-bold text-white mb-4">{phase.phase}</h4>

                {/* Description */}
                <p className="text-white/90 mb-6 leading-relaxed">{phase.description}</p>

                {/* Deliverables */}
                <div className="mb-6">
                  <h5 className="text-white font-semibold mb-3">Was du bekommst:</h5>
                  <ul className="space-y-2">
                    {phase.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-magenta mr-2">•</span>
                        <span className="text-white/90 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration */}
                <p className="text-lightblue font-semibold">Dauer: {phase.duration}</p>
              </motion.div>

              {/* Connector Arrow (Desktop only, except last item) */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-lightblue" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}

              {/* Connector Line (Mobile only, except last item) */}
              {index < phases.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <div className="w-1 h-12 bg-lightblue" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
