'use client';

import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { BiErrorCircle } from 'react-icons/bi';

export default function Problem() {
  const problems = [
    { stat: '67%', text: 'kommen nicht über die Pilotphase hinaus', source: 'McKinsey' },
    { stat: '3 von 4', text: 'Unternehmen haben keine KI-Strategie', source: 'Deloitte' },
    { stat: '58%', text: 'der Teams fühlen sich überfordert', source: 'Harvard Business Review' },
  ];

  const solutions = [
    'Fundament vor Technologie – AI Readiness Check vor Tool-Auswahl',
    'Strategie vor Tools – Use Case Roadmap mit ROI-Prognose',
    'Enablement vor Abhängigkeit – Dein Team lernt, KI selbst zu nutzen',
    'Rapid Prototyping – 2-4 Wochen für funktionierende Prototypen statt monatelanger Projekte',
  ];

  return (
    <section id="problem" className="section-padding bg-white">
      <div className="container-custom">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-navy text-center mb-12"
        >
          Warum 85% der KI-Projekte scheitern (und wie du es richtig machst)
        </motion.h2>

        {/* Problem Section */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-black/80 text-center mb-8"
          >
            Die meisten KI-Beratungen starten mit der Technologie. Das Ergebnis:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="bg-navy/5 border-2 border-navy/10 rounded-xl p-6 text-center"
              >
                <BiErrorCircle className="w-12 h-12 text-lightblue mx-auto mb-4" />
                <p className="text-3xl md:text-4xl font-bold text-magenta mb-2">
                  {problem.stat}
                </p>
                <p className="text-base text-black/80 mb-2">{problem.text}</p>
                <p className="text-sm text-black/60">({problem.source})</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg font-semibold text-navy text-center"
          >
            Das Problem: Tool-First-Denken statt Strategie-First-Ansatz.
          </motion.p>
        </div>

        {/* Solution Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-navy mb-8"
          >
            Unser Ansatz ist anders:
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="flex items-start space-x-3"
              >
                <HiCheckCircle className="w-6 h-6 text-lightblue flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg text-black/80 leading-relaxed">
                  <strong className="text-navy">{solution.split(' – ')[0]}</strong>
                  {' – '}
                  {solution.split(' – ')[1]}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-base md:text-lg text-black/70 italic"
          >
            Das Ergebnis: Break-Even in 3-6 Monaten statt endloser Experimente.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
