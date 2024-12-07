'use client';
import { MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="text-2xl font-bold text-white">
              Lux<span className="text-gold-500">Toronto</span>
            </div>
            <p className="text-gray-400">
              Expertos en techado de lujo con más de 20 años transformando
              residencias exclusivas.
            </p>
            <div className="flex space-x-4"></div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Inicio", href: "/" },
                { name: "Servicios", href: "#servicios" },
                { name: "Proyectos", href: "#proyectos" },
                { name: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Servicios</h3>
            <ul className="space-y-4">
              {[
                "Techado de Tejas",
                "Techado Metálico",
                "Techado Ecológico",
                "Mantenimiento",
                "Reparaciones",
                "Impermeabilización",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gold-500 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold-500" />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500" />
                <span>(503) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500" />
                <span>info@luxtoronto.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              © {currentYear} Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
