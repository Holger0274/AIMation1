'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

export default function LeadMagnet() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    alert('Vielen Dank! Deine Anfrage wurde empfangen. (Dies ist ein Mock-up – keine echte Übermittlung.)');
    console.log('Form data:', data);
    reset();
  };

  return (
    <section id="contact" className="section-padding bg-hero-gradient">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Finde heraus: Wo kann KI in deinem Unternehmen 30%+ Zeit sparen?
          </h2>
          <p className="text-xl text-lightblue font-semibold mb-4">
            Kostenloses AI Potential Assessment (Wert: €2.500)
          </p>
          <div className="text-white/90 space-y-2">
            <p className="flex items-center justify-center space-x-2">
              <span className="text-lightblue">✓</span>
              <span>AI Readiness Score – Wie bereit ist dein Unternehmen für KI?</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <span className="text-lightblue">✓</span>
              <span>3-5 priorisierte Use Cases – Wo lohnt sich KI bei dir am meisten?</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <span className="text-lightblue">✓</span>
              <span>ROI-Schätzung – Welche Einsparungen sind realistisch?</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Vorname *</label>
                <input
                  type="text"
                  {...register('vorname', { required: true })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lightblue focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Nachname *</label>
                <input
                  type="text"
                  {...register('nachname', { required: true })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lightblue focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Unternehmen *</label>
              <input
                type="text"
                {...register('unternehmen', { required: true })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lightblue focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">E-Mail *</label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lightblue focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Telefon (Optional)</label>
                <input
                  type="tel"
                  {...register('telefon')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lightblue focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Nachricht (Optional)</label>
              <textarea
                {...register('nachricht')}
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lightblue focus:outline-none"
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                {...register('datenschutz', { required: true })}
                className="mt-1 w-4 h-4"
                required
              />
              <label className="text-sm text-black/70">
                Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu. *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-magenta hover:bg-magenta/90 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-magenta hover:shadow-magenta-hover transition-all duration-300 hover:scale-105"
            >
              KI-POTENZIAL ANALYSIEREN
            </button>

            <p className="text-center text-sm text-black/60">
              Dauert 3 Minuten | Ergebnis in 24-48 Stunden | Unverbindlich & kostenlos
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
