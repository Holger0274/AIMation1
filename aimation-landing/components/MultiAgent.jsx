'use client';

import { motion } from 'framer-motion';
import { HiChip, HiDocumentSearch, HiTrendingUp, HiCurrencyDollar, HiShieldCheck } from 'react-icons/hi';

export default function MultiAgent() {
  const agents = [
    { name: 'Technik', icon: HiChip, color: 'text-lightblue' },
    { name: 'Patent', icon: HiDocumentSearch, color: 'text-lightblue' },
    { name: 'Markt', icon: HiTrendingUp, color: 'text-lightblue' },
    { name: 'Finance', icon: HiCurrencyDollar, color: 'text-lightblue' },
    { name: 'Compliance', icon: HiShieldCheck, color: 'text-lightblue' },
  ];

  return (
    <section id="multi-agent" className="section-padding bg-hero-gradient">
      <div className="container-custom">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lightblue text-sm font-semibold uppercase tracking-wide text-center mb-4"
        >
          Unser Flaggschiff-Service
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-6"
        >
          Multi-Agent-Systeme: KI-Expert-Teams, die für dich arbeiten
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl text-magenta text-center font-bold mb-8"
        >
          Von 3 Wochen Recherche zu 30 Minuten Entscheidungsgrundlage
        </motion.p>

        {/* Intro Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-white/90 max-w-4xl mx-auto text-center mb-16 space-y-4"
        >
          <p>
            Stell dir vor, du könntest 5 Experten gleichzeitig beauftragen – einen Technik-Analysten, einen Patent-Rechercheur, einen Marktforscher, einen Finance-Experten und einen Compliance-Spezialisten.
          </p>
          <p className="text-xl font-semibold">
            Normalerweise dauert so eine umfassende Analyse 3-4 Wochen. Mit Multi-Agent-Systemen: <span className="text-magenta">30-60 Minuten</span>.
          </p>
        </motion.div>

        {/* Agent Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16"
        >
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-lightblue/30 rounded-xl p-6 text-center hover:border-lightblue transition-all duration-300"
            >
              <agent.icon className={`w-12 h-12 ${agent.color} mx-auto mb-3`} />
              <p className="text-white font-semibold">{agent.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border-2 border-lightblue/20 rounded-xl p-8 md:p-12 mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Warum Multi-Agent-Systeme?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Zeitersparnis: 95%+ bei umfassenden Analysen',
              'Konsistenz: Alle Perspektiven berücksichtigt, keine Silos',
              'Skalierbar: Funktioniert für 1 Projekt genauso wie für 100',
              'Transparent: Du siehst, wie jeder Agent zu seiner Schlussfolgerung kommt',
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-lightblue text-xl">✓</span>
                <p className="text-white/90">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-magenta hover:bg-magenta/90 text-white font-semibold text-base md:text-lg px-8 py-4 rounded-lg shadow-magenta hover:shadow-magenta-hover transition-all duration-300 hover:scale-105"
          >
            Multi-Agent-System explorieren
          </a>
          <p className="text-white/60 text-sm mt-4">
            30-minütiges Demo-Call | Wir zeigen dir ein Live-Beispiel
          </p>
        </motion.div>
      </div>
    </section>
  );
}
