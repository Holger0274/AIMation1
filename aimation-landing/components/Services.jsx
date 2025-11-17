'use client';

import { motion } from 'framer-motion';
import { HiBookOpen, HiAcademicCap, HiCog, HiChatAlt2, HiGlobe, HiChip, HiWrench } from 'react-icons/hi';

export default function Services() {
  const services = [
    {
      icon: HiBookOpen,
      title: 'Microsoft Copilot Training',
      description: 'Du hast Microsoft 365? Dann hast du bereits KI – du musst nur lernen, sie richtig zu nutzen.',
      features: ['Copilot in Word, Excel, PowerPoint, Outlook, Teams', 'Professionelles Prompting', 'DSGVO-konform'],
      timesSaved: '40-60% Zeitersparnis',
    },
    {
      icon: HiAcademicCap,
      title: 'Maßgeschneiderte KI-Schulungen',
      description: 'Führungskräfte brauchen andere KI-Skills als Entwickler. Wir schulen zielgruppengerecht.',
      features: ['Für alle: KI-Grundlagen, Copilot-Basics', 'Für Manager: Prompt Engineering', 'Für Technical Teams'],
      timesSaved: 'Workshops, Webinare, 1:1-Coaching',
    },
    {
      icon: HiCog,
      title: 'KI-Automatisierung ohne Code',
      description: 'Automatisiere wiederkehrende Aufgaben – ohne IT-Abteilung, ohne Entwickler-Team.',
      features: ['make.com, n8n, Power Automate', 'Meeting-Nachbereitung', 'Dokumenten-Verarbeitung'],
      timesSaved: '50-75% Zeitersparnis',
    },
    {
      icon: HiChatAlt2,
      title: 'Custom GPT-Entwicklung',
      description: 'Allgemeine Chatbots kennen dein Unternehmen nicht. Custom GPTs schon.',
      features: ['Wissensdatenbanken', 'Spezialisierte Assistenten', 'Integration in deine Systeme'],
      timesSaved: '1-3 Wochen für MVP',
    },
    {
      icon: HiGlobe,
      title: 'Multi-Agent-Systeme',
      description: 'Stell dir vor, du hättest ein Team aus 5 Experten, die parallel für dich arbeiten – 24/7, in 30 Minuten.',
      features: ['Mehrere KI-Agenten arbeiten gleichzeitig', 'Von 3 Wochen zu 30 Minuten', 'Produktentwicklung'],
      timesSaved: '95%+ Zeitersparnis',
      isFlagship: true,
    },
    {
      icon: HiChip,
      title: 'Agentische KI-Systeme',
      description: 'Agentische Systeme können eigenständig Aufgaben planen, ausführen und anpassen – mit menschlicher Kontrolle.',
      features: ['Automatisierte Research-Pipelines', 'Dynamische Datenverarbeitung', 'Selbstoptimierende Workflows'],
      timesSaved: '3-6 Wochen Entwicklungszeit',
    },
    {
      icon: HiWrench,
      title: 'Maßgeschneiderte AI-Lösungen',
      description: 'Du brauchst etwas Spezifisches, das es so nicht von der Stange gibt? Wir entwickeln Custom AI-Lösungen.',
      features: ['Rapid Prototyping (2-4 Wochen)', 'Iterative Entwicklung', 'Kein Vendor Lock-in'],
      timesSaved: 'Discovery → Prototyp → Feedback',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Von Microsoft Copilot bis Custom AI: Unser komplettes Portfolio
          </h2>
          <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
            Egal, ob du gerade erst mit KI startest oder schon fortgeschrittene Multi-Agent-Systeme brauchst – wir begleiten dich auf jedem Level.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white border-2 border-lightblue/20 rounded-xl p-8 hover:border-lightblue hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Flagship Badge */}
              {service.isFlagship && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-magenta/10 text-magenta border border-magenta/30">
                    ⭐ FLAGSHIP
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-lightblue mb-4">
                <service.icon className="w-12 h-12" />
              </div>

              {/* Title */}
              <h4 className="text-xl md:text-2xl font-semibold text-navy mb-4">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-base text-black/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-black/70">
                    <span className="text-lightblue mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Time Saved / Duration */}
              <p className="text-sm font-semibold text-magenta">{service.timesSaved}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
