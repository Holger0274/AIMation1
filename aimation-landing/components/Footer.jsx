'use client';

import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { name: 'Leistungen', href: '#services' },
    { name: 'Unser Prozess', href: '#process' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Schulungen', href: '#training' },
    { name: 'Über uns', href: '#' },
    { name: 'Blog', href: '#blog' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Impressum', href: '#' },
    { name: 'Datenschutz', href: '#' },
    { name: 'AGB', href: '#' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Spalte 1: Logo & Beschreibung */}
          <div>
            <div className="text-2xl font-extrabold mb-4">
              AI<span className="text-magenta">.mation</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Automatisierung mit Intelligenz
            </p>
            <p className="text-white/70 text-sm mb-6">
              KI-Transformation für KMUs. Transparent, agil, ROI-fokussiert.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-lightblue hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-lightblue hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-lightblue hover:text-white transition-colors duration-200"
                aria-label="YouTube"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Spalte 2: Schnelllinks */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-lightblue transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-lightblue transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 4: Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <a
                  href="mailto:info@aimation.de"
                  className="hover:text-lightblue transition-colors duration-200"
                >
                  info@aimation.de
                </a>
              </li>
              <li>
                <a
                  href="https://www.aimation.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lightblue transition-colors duration-200"
                >
                  www.aimation.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © 2025 AI.mation | Made with ❤️ and AI
          </p>
        </div>
      </div>
    </footer>
  );
}
