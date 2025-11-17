'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      <div className="container-custom py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="text-white"
          >
            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            >
              Von 3 Wochen Recherche zu 30 Minuten Entscheidungsgrundlage
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed mb-8"
            >
              Wir helfen KMUs, KI vollständig zu integrieren – von Microsoft Copilot Training bis zu Multi-Agent-Systemen. Transparent, agil, ROI-fokussiert.
            </motion.p>

            {/* Body Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base md:text-lg text-white/80 leading-relaxed mb-10 space-y-4"
            >
              <p>
                Du weißt, dass KI dein Unternehmen voranbringen kann. Du weißt nur nicht, wo du anfangen sollst.
              </p>
              <p>
                Wir zeigen dir in 2-4 Wochen, welche Use Cases bei dir funktionieren – mit konkreten Zahlen, transparenten Kosten und echten Prototypen.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-6"
            >
              {/* Primary CTA */}
              <a
                href="#contact"
                className="bg-magenta hover:bg-magenta/90 text-white font-semibold text-base md:text-lg px-8 py-4 rounded-lg shadow-magenta hover:shadow-magenta-hover transition-all duration-300 hover:scale-105 text-center"
              >
                Kostenloses Erstgespräch buchen
              </a>

              {/* Secondary CTA */}
              <a
                href="#process"
                className="bg-transparent border-2 border-lightblue text-lightblue hover:bg-lightblue hover:text-white font-semibold text-base md:text-lg px-6 py-3 rounded-lg transition-all duration-300 text-center"
              >
                Wie wir arbeiten →
              </a>
            </motion.div>

            {/* Microcopy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-sm md:text-base text-white/60"
            >
              30-60 Minuten | Unverbindlich | Für KMUs entwickelt
            </motion.p>
          </motion.div>

          {/* Right Column: Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-lightblue/30 flex items-center justify-center">
              <p className="text-white/50 text-lg">
                [Hero Visual Placeholder]
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/30 pointer-events-none" />
    </section>
  );
}
