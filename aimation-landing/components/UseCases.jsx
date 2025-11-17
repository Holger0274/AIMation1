'use client';

import { motion } from 'framer-motion';

export default function UseCases() {
  const useCases = [
    {
      emoji: '🔍',
      title: 'Patent-Intelligence System',
      status: 'Konzeptphase',
      statusColor: 'navy',
      description: 'Umfassende Patent-Analysen in Minuten',
      timesSaved: '60-70% Zeitersparnis',
    },
    {
      emoji: '📚',
      title: 'Intelligente Wissensdatenbank',
      status: 'In Entwicklung',
      statusColor: 'magenta',
      description: 'Firmen-Wissen durchsuchbar machen',
      timesSaved: '50-60% Zeitersparnis',
    },
    {
      emoji: '📝',
      title: 'Automatisierte Meeting-Nachbereitung',
      status: 'In Entwicklung',
      statusColor: 'magenta',
      description: 'Von 2 Stunden Protokoll zu 2 Minuten Zusammenfassung',
      timesSaved: '90%+ Zeitersparnis',
    },
    {
      emoji: '🤝',
      title: 'KI-gestützte Kundengesprächs-Vorbereitung',
      status: 'PoC-Phase',
      statusColor: 'lightblue',
      description: 'Perfekt vorbereitet in jedes Kundengespräch',
      timesSaved: '90%+ Zeitersparnis',
    },
    {
      emoji: '👥',
      title: 'Recruiting-Automation',
      status: 'PoC-Phase',
      statusColor: 'lightblue',
      description: 'Von 100 Bewerbungen zu 5 Top-Kandidaten – automatisch',
      timesSaved: '50-70% Zeitersparnis',
    },
    {
      emoji: '💬',
      title: 'Intelligente Chat Bots für Support',
      status: 'In Entwicklung',
      statusColor: 'magenta',
      description: '80% der Support-Anfragen automatisch lösen',
      timesSaved: '60-80% Automatisierung',
    },
    {
      emoji: '🎬',
      title: 'Content-Repurposing-Engine',
      status: 'In Entwicklung',
      statusColor: 'magenta',
      description: 'Ein Podcast → 20 Content-Pieces in 30 Minuten',
      timesSaved: '70%+ Zeitersparnis',
    },
  ];

  const getStatusStyle = (color) => {
    const styles = {
      navy: 'bg-navy/10 text-navy border-navy/30',
      magenta: 'bg-magenta/10 text-magenta border-magenta/30',
      lightblue: 'bg-lightblue/10 text-lightblue border-lightblue/30',
    };
    return styles[color] || styles.navy;
  };

  return (
    <section id="use-cases" className="section-padding bg-white">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Use Cases in Entwicklung: Transparent, agil, ROI-fokussiert
          </h2>
          <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto mb-8">
            Wir könnten dir 50 fertige Use Cases versprechen. Machen wir aber nicht.
          </p>
          <p className="text-base text-black/70 max-w-3xl mx-auto">
            Stattdessen zeigen wir dir ehrlich, was heute schon funktioniert, was in Entwicklung ist und was noch Konzept-Phase ist. Das ist unser Transparenz-Versprechen.
          </p>
        </motion.div>

        {/* Badge Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-lightblue/10 text-lightblue border border-lightblue/30">
              PoC-Phase
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-magenta/10 text-magenta border border-magenta/30">
              In Entwicklung
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-navy/10 text-navy border border-navy/30">
              Konzeptphase
            </span>
          </div>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Emoji Icon */}
              <div className="text-5xl mb-4">{useCase.emoji}</div>

              {/* Title */}
              <h4 className="text-xl font-semibold text-navy mb-3">{useCase.title}</h4>

              {/* Status Badge */}
              <div className="mb-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusStyle(
                    useCase.statusColor
                  )}`}
                >
                  {useCase.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-base text-black/70 mb-4">{useCase.description}</p>

              {/* Time Saved */}
              <p className="text-sm font-semibold text-lightblue">{useCase.timesSaved}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-navy mb-4">Dein Use Case ist nicht dabei?</h3>
          <p className="text-base text-black/70 mb-6 max-w-2xl mx-auto">
            Wir entwickeln maßgeschneiderte Lösungen in 2-4 Wochen. Erzähl uns von deinem Prozess, wir zeigen dir, was möglich ist.
          </p>
          <a
            href="#contact"
            className="inline-block bg-magenta hover:bg-magenta/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Kostenloses Erstgespräch buchen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
