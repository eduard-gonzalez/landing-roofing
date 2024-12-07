'use client';
import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';
import Contact from "@/components/layout/Contact";
import { SITE_CONFIG } from '@/utils/constants';
import { ROUTES } from '@/utils/navigation';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section id="contact">
        <Contact />
      </section>
      <ScrollToTopButton />
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="text-2xl font-bold text-white">
                {SITE_CONFIG.name}
              </div>
              <p className="text-gray-400">
                {SITE_CONFIG.description}
              </p>
              <div className="flex space-x-4">
                {Object.entries(SITE_CONFIG.socials).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gold-500 transition-colors"
                  >
                    {key}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {Object.entries(ROUTES).map(([name, href]) => (
                  <li key={name}>
                    <Link href={href} className="text-gray-400 hover:text-gold-500 transition-colors">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Services
              </h3>
              <ul className="space-y-4">
                {SITE_CONFIG.services.items.map((service) => (
                  <li key={service.id}>
                    <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gold-500" />
                  <span>{SITE_CONFIG.contact.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold-500" />
                  <span>{SITE_CONFIG.contact.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-500" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="md:flex md:items-center md:justify-center">
              <div className="text-sm text-gray-400">
                © {currentYear} {SITE_CONFIG.name}. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;