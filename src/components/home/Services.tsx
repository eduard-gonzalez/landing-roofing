'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  {
    id: 1,
    title: 'Techado de Tejas',
    description:
      'Instalación y reparación de tejas premium importadas con garantía de por vida. Diseños clásicos y modernos para cada estilo de hogar.',
    icon: '/icons/tiles-roof.svg',
    features: [
      'Tejas importadas',
      'Garantía de por vida',
      'Diseños personalizados',
    ],
  },
  {
    id: 2,
    title: 'Techado Metálico',
    description:
      'Sistemas de techado metálico de alta durabilidad. Soluciones modernas que combinan estética y resistencia superior.',
    icon: '/icons/metal-roof.svg',
    features: [
      'Alta durabilidad',
      'Bajo mantenimiento',
      'Eficiencia energética',
    ],
  },
  {
    id: 3,
    title: 'Techado Ecológico',
    description:
      'Techos verdes y sistemas sostenibles que mejoran la eficiencia energética y contribuyen al medio ambiente.',
    icon: '/icons/eco-roof.svg',
    features: ['Sostenible', 'Ahorro energético', 'Certificación LEED'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      '.services-title',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.services-title',
          start: 'top 80%',
        },
      }
    );

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="services-title text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestros Servicios Premium
          </h2>
          <p className="services-title max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Ofrecemos soluciones de techado exclusivas para residencias de lujo,
            combinando materiales premium con artesanía experta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => el && (cardsRef.current[index] = el)}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-gray-700 dark:text-gray-200 flex items-center justify-center"
                    >
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-8 px-6 py-2 bg-transparent border-2 border-gold-500 text-gold-500 rounded-lg hover:bg-gold-500 hover:text-white transition-colors duration-300">
                  Más Detalles
                </button>
              </div>

              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold-500/20 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-500/20 rounded-br-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}