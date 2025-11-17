'use client';

import { motion } from 'framer-motion';
import { HiChartBar, HiCurrencyDollar, HiDocumentText, HiLightningBolt, HiAcademicCap, HiOfficeBuilding } from 'react-icons/hi';

export default function Difference() {
  const principles = [
    {
      icon: HiChartBar,
      title: 'Fundament zuerst',
      other: '"Hier ist ChatGPT Enterprise für €50.000/Jahr"',
      us: '"Lass uns erst schauen, ob du das überhaupt brauchst"',
    },
    {
      icon: HiCurrencyDollar,
      title: 'ROI-fokussiert',
      other: '"KI ist die Zukunft!" (ohne Zahlen)',
      us: '"Use Case X spart dir €50.000/Jahr, Break-Even nach 6 Monaten"',
    },
    {
      icon: HiDocumentText,
      title: 'Transparent über Status',
      other: 'Versprechen 50 fertige Use Cases',
      us: 'Zeigen Status-Badges (Produktiv, PoC, In Entwicklung, Konzept)',
    },
    {
      icon: HiLightningBolt,
      title: 'Agil statt Wasserfall',
      other: 'Monatelange Konzeptphase, dann riesiges Projekt',
      us: 'Schnell testen, lernen, anpassen',
    },
    {
      icon: HiAcademicCap,
      title: 'Enablement vor Abhängigkeit',
      other: 'Verkaufen langfristige Betreuungsverträge',
      us: 'Schulen dein Team, machen uns überflüssig',
    },
    {
      icon: HiOfficeBuilding,
      title: 'KMU-spezialisiert',
      other: 'Enterprise-Lösungen für KMUs umbauen',
      us: 'Von Anfang an für KMUs entwickelt',
    },
  ];

  return (
    <section id="difference" className="section-padding bg-white">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-navy text-center mb-12"
        >
          Nicht noch ein AI-Berater: Das macht uns einzigartig
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <principle.icon className="w-10 h-10 text-lightblue mb-4" />
              <h4 className="text-xl font-semibold text-navy mb-4">{principle.title}</h4>
              <div className="space-y-3">
                <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
                  <p className="text-sm text-black/70"><strong>Andere:</strong> {principle.other}</p>
                </div>
                <div className="bg-green-50 border-l-4 border-lightblue p-3 rounded">
                  <p className="text-sm text-black/70"><strong>Wir:</strong> {principle.us}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
