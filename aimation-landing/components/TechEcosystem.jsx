'use client';

import { motion } from 'framer-motion';

export default function TechEcosystem() {
  const toolCategories = [
    {
      title: 'LLM-Modelle',
      tools: ['ChatGPT (OpenAI)', 'Claude (Anthropic)', 'Gemini (Google)', 'Weitere Modelle'],
    },
    {
      title: 'Automatisierungs-Tools',
      tools: ['make.com', 'n8n', 'Microsoft Power Automate', 'Zapier'],
    },
    {
      title: 'Microsoft 365 & Copilot',
      tools: ['Microsoft Copilot (M365)', 'Copilot Studio', 'Power Platform', 'Azure AI Services'],
    },
    {
      title: 'AI Frameworks & Entwicklung',
      tools: ['CrewAI', 'AutoGen (Microsoft)', 'LangChain', 'OpenAI API'],
    },
  ];

  return (
    <section id="tech-ecosystem" className="section-padding bg-navy-gradient">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tools nach Eignung, nicht nach Lizenzvertrag
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Viele Berater verkaufen dir die Tools, an denen sie verdienen. Wir nicht. Wir sind technologie-agnostisch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-navy mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.tools.map((tool, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-lightblue rounded-full" />
                    <span className="text-base text-black/80">{tool}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
