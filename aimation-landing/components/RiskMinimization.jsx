'use client';

import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

export default function RiskMinimization() {
  const principles = [
    {
      title: 'Analyse vor Investment',
      description: 'Kein Projekt ohne AI Readiness Check. Wir analysieren erst, ob du überhaupt bereit bist für KI.',
    },
    {
      title: 'Rapid Prototyping',
      description: 'Kleine Investments, schnelles Feedback. 2-4 Wochen für PoCs – wenn\'s nicht funktioniert, hast du nicht Monate verschwendet.',
    },
    {
      title: 'Use Case Priorisierung',
      description: 'Quick Wins zuerst, komplexe Projekte später. Das schafft Vertrauen und Budget für größere Projekte.',
    },
    {
      title: 'Kein Vendor Lock-in',
      description: 'Du behältst die Kontrolle. Wir nutzen Standard-Tools und offene APIs – keine proprietären Black Boxes.',
    },
    {
      title: 'Human in the Loop',
      description: 'KI schlägt vor, Mensch entscheidet. Wir bauen Systeme, bei denen Menschen die Kontrolle behalten.',
    },
  ];

  return (
    <section id="risk" className="section-padding bg-navy-gradient">
      <div className="container-custom max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
        >
          Schrittweise statt All-in: So minimieren wir Risiken
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-white/90 text-center mb-12"
        >
          KI-Projekte können scheitern. Das ist Fakt. Unsere Antwort: Strukturierte Risikominimierung durch schrittweises Vorgehen.
        </motion.p>

        <div className="space-y-6">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border-2 border-lightblue/20 rounded-xl p-6 flex items-start space-x-4"
            >
              <HiCheckCircle className="w-8 h-8 text-lightblue flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">{principle.title}</h4>
                <p className="text-white/80">{principle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
