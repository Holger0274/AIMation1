'use client';

import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

export default function AgileIntegration() {
  const principles = [
    '2-4 Wochen für PoCs – Schnell testen, was funktioniert',
    'Iterativ verbessern – Nicht 6 Monate planen, dann bauen',
    'Modular aufbauen – Einzelne Use Cases statt Mega-Plattform',
    'Technologie-agnostisch – Wenn ein besseres Tool kommt, wechseln wir',
    'Kein Lock-in – Du bleibst flexibel',
  ];

  return (
    <section id="agile" className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-navy text-center mb-8"
        >
          Warum agile KI-Integration? Weil sich KI wöchentlich weiterentwickelt
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-black/80 text-center mb-12"
        >
          Die KI-Welt bewegt sich rasant. Das Problem mit 12-24-Monats-Projekten: Bis du fertig bist, ist die Technologie schon wieder veraltet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Rapid Prototyping statt Wasserfall-Projekte</h3>
          {principles.map((principle, index) => (
            <div key={index} className="flex items-start space-x-3 bg-navy/5 p-4 rounded-lg">
              <HiCheckCircle className="w-6 h-6 text-lightblue flex-shrink-0 mt-1" />
              <p className="text-base text-black/80">{principle}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
