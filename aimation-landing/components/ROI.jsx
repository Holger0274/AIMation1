'use client';

import { motion } from 'framer-motion';

export default function ROI() {
  const metrics = [
    { percentage: '40-60%', title: 'Meeting-Nachbereitung', description: 'Bei 10 Meetings/Monat: 15 Stunden gespart' },
    { percentage: '70-80%', title: 'Patent-Analyse', description: 'Von 2-3 Wochen auf 2-3 Tage verkürzt' },
    { percentage: '75%', title: 'Dokumenten-Verarbeitung', description: 'Pro Mitarbeiter: 60 Stunden/Monat gespart' },
    { percentage: '60-80%', title: 'Customer Service', description: '2-3 Vollzeit-Äquivalente eingespart' },
    { percentage: '50%+', title: 'Lead-Qualifizierung', description: 'Doppelt so viele Abschlüsse bei gleicher Zeit' },
  ];

  return (
    <section id="roi" className="section-padding bg-white">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-navy text-center mb-12"
        >
          Break-Even in 3-6 Monaten: So rechnet sich KI
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <p className="text-5xl font-extrabold text-magenta mb-3">{metric.percentage}</p>
              <h4 className="text-xl font-semibold text-navy mb-3">{metric.title}</h4>
              <p className="text-sm text-black/70">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-magenta hover:bg-magenta/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            ROI für mein Unternehmen berechnen
          </a>
          <p className="text-black/60 text-sm mt-4">
            Kostenloses Erstgespräch | Wir rechnen gemeinsam durch, was bei dir möglich ist
          </p>
        </motion.div>
      </div>
    </section>
  );
}
