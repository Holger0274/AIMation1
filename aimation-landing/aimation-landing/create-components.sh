#!/bin/bash

# Navigation Component
cat > components/Navigation.jsx << 'COMP1'
'use client';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Leistungen', href: '#services' },
    { label: 'Prozess', href: '#process' },
    { label: 'Use Cases', href: '#usecases' },
    { label: 'Schulungen', href: '#training' },
    { label: 'Blog', href: '#blog' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${isScrolled ? 'bg-navy shadow-lg' : 'bg-transparent'}\`}>
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white hover:text-lightblue transition-colors">AI.mation</a>
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-white hover:text-lightblue transition-colors font-medium">{link.label}</a>
            ))}
            <a href="#contact" className="bg-magenta text-white px-6 py-3 rounded-lg font-semibold hover:shadow-magenta-hover transform hover:scale-105 transition-all duration-200">Erstgespräch buchen</a>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white text-3xl" aria-label="Toggle menu">{isMobileMenuOpen ? <HiX /> : <HiMenu />}</button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden mt-4 bg-navy/95 rounded-lg p-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-lightblue transition-colors font-medium text-lg">{link.label}</a>
                ))}
                <hr className="border-lightblue/30" />
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-magenta text-white px-6 py-3 rounded-lg font-semibold text-center">Erstgespräch buchen</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
COMP1

echo "Navigation created"
