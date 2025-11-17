'use client';

import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';

export default function NextSteps() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            In 3 Schritten zu deiner KI-Strategie
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Idee bis zur erfolgreichen Implementation – wir begleiten dich auf jedem Schritt.
          </p>
        </motion.div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              number: '1',
              title: 'Kostenloses Erstgespräch',
              description: '30-60 Minuten unverbindliches Gespräch. Wir analysieren deine Situation und zeigen erste Potenziale auf.',
              duration: '30-60 Min',
            },
            {
              number: '2',
              title: 'Discovery Workshop (Optional)',
              description: 'Tiefgehende Analyse deiner Prozesse. Du erhältst einen detaillierten AI Readiness Report mit konkreten Use Cases.',
              duration: '1-2 Tage',
            },
            {
              number: '3',
              title: 'Transparentes Angebot',
              description: 'Use Cases priorisiert, ROI-Prognosen, klare Zeitrahmen und Deliverables. Keine versteckten Kosten.',
              duration: 'Sofort',
            },
          ].map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white border-2 border-lightblue/20 rounded-xl p-8 hover:border-lightblue hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-magenta text-white rounded-full text-3xl font-bold mb-6 mx-auto">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-center">
                {step.description}
              </p>
              <div className="flex items-center justify-center text-lightblue font-semibold">
                <HiCheckCircle className="mr-2" />
                {step.duration}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-magenta text-white px-12 py-5 rounded-lg text-xl font-bold hover:shadow-magenta-hover transform hover:scale-105 transition-all duration-200 mb-6"
          >
            Jetzt Erstgespräch vereinbaren
          </a>
          
          {/* Phone Alternative */}
          <div className="flex items-center justify-center text-gray-600 mt-4">
            <FiPhone className="mr-2 text-lightblue" />
            <span>Oder ruf uns an: </span>
            <a
              href="tel:01746075259"
              className="ml-2 text-lightblue font-semibold hover:text-magenta transition-colors"
            >
              01746075259
            </a>
          </div>

          {/* Trust Elements */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <HiCheckCircle className="text-lightblue mr-2" />
              Unverbindlich
            </div>
            <div className="flex items-center">
              <HiCheckCircle className="text-lightblue mr-2" />
              Keine Verpflichtung
            </div>
            <div className="flex items-center">
              <HiCheckCircle className="text-lightblue mr-2" />
              Für KMUs entwickelt
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
