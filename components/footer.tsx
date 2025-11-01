'use client';

import { Cpu, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@neurobots.ai', label: 'Email' },
  ];

  const footerLinks = [
    { title: 'Navigation', links: [
      { label: 'Accueil', href: '/' },
      { label: 'Projets', href: '/projets' },
    ]},
    { title: 'Légal', links: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/confidentialite' },
      { label: 'CGU', href: '/cgu' },
    ]},
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <span className="mb-4 block text-xl font-bold text-emerald-400">
              NeuroBots <span className="text-gray-400 text-base font-normal">by R</span>
            </span>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-emerald-400 font-medium">NeuroBots</span>. Tous droits réservés · by R
          </p>
        </div>
      </div>
    </footer>
  );
}
