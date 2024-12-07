'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE_CONFIG } from '@/utils/constants';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.services-title',
        start: 'top 80%',
      }
    });

    tl.fromTo('.services-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    ).fromTo('.services-description',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5'
    );

    cardsRef.current.forEach((card, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        }
      });

      tl.fromTo(card,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          delay: index * 0.2,
        }
      ).fromTo(card.querySelector('.card-border'),
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        },
        '-=0.4'
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="services-title text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {SITE_CONFIG.services.title}
          </h2>
          <p className="services-description max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            {SITE_CONFIG.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SITE_CONFIG.services.items.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => el && (cardsRef.current[index] = el)}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="card-border absolute inset-0">
                <div className="absolute inset-0 rounded-2xl border-2 border-gold-500/20 transition-transform duration-700 group-hover:scale-95" />
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent blur opacity-0 group-hover:opacity-100 animate-shimmer" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gold-500/5 dark:to-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    className="w-8 h-8"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transform group-hover:translate-y-[-5px] group-hover:text-gold-500 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 transform group-hover:translate-y-[-3px] transition-transform duration-300">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start justify-start text-gray-700 dark:text-gray-200 transform group-hover:translate-y-[-2px] transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-8 px-6 py-2 relative overflow-hidden rounded-lg border-2 border-gold-500 text-gold-500 transition-all duration-300 before:absolute before:inset-0 before:bg-gold-500 before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left hover:text-white group">
                  <span className="relative z-10">{SITE_CONFIG.services.cta}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;