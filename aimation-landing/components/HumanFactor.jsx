'use client';

import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

export default function HumanFactor() {
  const principles = [
    'Ängste ernst nehmen – Offene Diskussion statt "Das wird schon"',
    'Teams frühzeitig einbinden – Nicht über ihre Köpfe hinweg entscheiden',
    'Quick Wins zeigen – Erfolgserlebnisse statt monatelanger Theorie',
    'Enablement vor Automatisierung – Teams befähigen, nicht ersetzen',
    'Champions aufbauen – Enthusiasten identifizieren und fördern',
  ];

  return (
    <section id="human-factor" className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-navy text-center mb-8"
        >
          Deine Mitarbeiter sind der wichtigste Teil jeder KI-Strategie
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-black/80 text-center mb-12"
        >
          Wir könnten dir die beste KI-Technologie der Welt installieren. Wenn dein Team sie nicht nutzt, war&apos;s für die Katz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy/5 border-2 border-navy/10 rounded-xl p-8 mb-12"
        >
          <h3 className="text-xl font-bold text-navy mb-6">Unser Change-Management-Ansatz:</h3>
          <div className="space-y-4">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-start space-x-3">
                <HiCheckCircle className="w-6 h-6 text-lightblue flex-shrink-0 mt-1" />
                <p className="text-base text-black/80">{principle}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
