'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  category: string;
  details: {
    location: string;
    area: string;
    duration: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Mansión Pine Tree Drive',
    description:
      'Renovación completa de techo con tejas de pizarra importada y sistema de drenaje personalizado.',
    imagePath: '/images/img1.jpg',
    category: 'Residencial de Lujo',
    details: {
      location: 'Miami Beach, FL',
      area: '850 m²',
      duration: '3 meses',
    },
  },
  {
    id: 2,
    title: 'Villa Coral Gables',
    description:
      'Instalación de techo verde certificado LEED con sistema de recolección de agua pluvial.',
    imagePath: '/images/img2.jpg',
    category: 'Eco-Friendly',
    details: {
      location: 'Coral Gables, FL',
      area: '620 m²',
      duration: '4 meses',
    },
  },
  {
    id: 3,
    title: 'Residencia Star Island',
    description:
      'Sistema de techado metálico de alta gama con acabado personalizado resistente a la corrosión.',
    imagePath: '/images/img3.jpg',
    category: 'Contemporáneo',
    details: {
      location: 'Miami, FL',
      area: '750 m²',
      duration: '2.5 meses',
    },
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="proyectos" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`
            text-center mb-16 
            transition-all duration-700 transform
            ${
              isLoaded
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }
          `}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Proyectos Destacados
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Descubra nuestros proyectos más exclusivos, donde la excelencia en
            techado se encuentra con el diseño arquitectónico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                group relative overflow-hidden rounded-2xl shadow-lg
                transition-all duration-700 transform
                ${
                  isLoaded
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-80">
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gold-400">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <div>
                      <p className="text-xs text-gold-400">Ubicación</p>
                      <p className="text-sm">{project.details.location}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gold-400">Área</p>
                      <p className="text-sm">{project.details.area}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gold-400">Duración</p>
                      <p className="text-sm">{project.details.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            className="
              inline-flex items-center px-8 py-4 
              bg-gold-500 hover:bg-gold-600 
              text-white font-semibold rounded-lg
              transform hover:-translate-y-1
              transition-all duration-300
            "
          >
            Ver Más Proyectos
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
