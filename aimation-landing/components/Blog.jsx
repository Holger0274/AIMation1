'use client';

import { motion } from 'framer-motion';

export default function Blog() {
  const blogPosts = [
    {
      title: '5 Fehler bei KI-Einführung in KMUs (und wie du sie vermeidest)',
      category: 'Strategie',
      readTime: '8 Minuten',
      teaser: 'Die meisten KMUs starten KI-Projekte mit den gleichen Fehlern. Wir haben 30+ Unternehmen begleitet – hier sind die Top 5 Stolpersteine.',
    },
    {
      title: 'Microsoft Copilot: 10 Prompts, die deine Excel-Arbeit revolutionieren',
      category: 'Praxis-Tipps',
      readTime: '5 Minuten',
      teaser: 'Du nutzt Copilot in Excel, aber nicht richtig? Diese 10 Prompts sparen dir Stunden pro Woche.',
    },
    {
      title: 'Multi-Agent-Systeme erklärt: Wenn 5 KI-Experten parallel arbeiten',
      category: 'Tech Deep-Dive',
      readTime: '12 Minuten',
      teaser: 'Was sind Multi-Agent-Systeme? Wie funktionieren sie? Wo lohnen sie sich? Ein verständlicher Deep-Dive ohne Tech-Jargon.',
    },
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-navy text-center mb-12"
        >
          Insights & Best Practices: Unser Blog
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-lightblue">{post.category}</span>
                <span className="text-sm text-black/60">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{post.title}</h3>
              <p className="text-base text-black/70 mb-4">{post.teaser}</p>
              <a href="#" className="text-lightblue hover:text-navy font-semibold transition-colors">
                Weiterlesen →
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="#" className="text-lightblue hover:text-navy font-semibold text-lg transition-colors">
            Alle Artikel anzeigen →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
