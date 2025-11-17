'use client';

import { motion } from 'framer-motion';
import { HiGlobe, HiBriefcase, HiUserGroup, HiCode } from 'react-icons/hi';

export default function Training() {
  const categories = [
    {
      icon: HiGlobe,
      title: 'Für alle im Unternehmen',
      trainings: [
        { name: 'KI-Grundlagen', duration: '2-3 Stunden', isBestseller: false },
        { name: 'Microsoft Copilot Grundlagen', duration: '1 Tag', isBestseller: true },
      ],
    },
    {
      icon: HiBriefcase,
      title: 'Für Manager & Wissensarbeiter',
      trainings: [
        { name: 'Professionelles Prompting', duration: 'Halber Tag', isBestseller: false },
        { name: 'KI-gestützte Prozess-Transformation', duration: '1 Tag', isBestseller: false },
      ],
    },
    {
      icon: HiUserGroup,
      title: 'Für Führungskräfte',
      trainings: [{ name: 'KI-Strategie für Führungskräfte', duration: 'Halber Tag', isBestseller: false }],
    },
    {
      icon: HiCode,
      title: 'Für Technical Teams',
      trainings: [
        { name: 'KI-Automatisierung ohne Code', duration: '1-2 Tage', isBestseller: false },
        { name: 'KI-gestütztes Coden', duration: '1 Tag', isBestseller: false },
        { name: 'Custom GPT-Entwicklung', duration: '2 Tage', isBestseller: false },
      ],
    },
  ];

  return (
    <section id="training" className="section-padding bg-navy-gradient">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enablement statt Abhängigkeit: Unser Schulungsportfolio
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Technologie allein bringt nichts, wenn dein Team sie nicht nutzen kann. Deshalb ist Enablement der Kern unseres Ansatzes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border-2 border-lightblue/20 rounded-xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <category.icon className="w-10 h-10 text-lightblue" />
                <h3 className="text-xl md:text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.trainings.map((training, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{training.name}</h4>
                      {training.isBestseller && (
                        <span className="text-xs font-semibold text-magenta bg-magenta/10 px-2 py-1 rounded-full border border-magenta/30">
                          ⭐ BESTSELLER
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-lightblue">{training.duration}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-magenta hover:bg-magenta/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Schulungsplan erstellen
          </a>
          <p className="text-white/60 text-sm mt-4">
            Kostenloses Beratungsgespräch | Wir empfehlen die passenden Trainings für dein Team
          </p>
        </motion.div>
      </div>
    </section>
  );
}
