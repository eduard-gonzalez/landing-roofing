'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PROJECTS_CONFIG, SITE_CONFIG } from '@/utils/constants';
import type { Project } from '@/interfaces/dataInterface';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([...PROJECTS_CONFIG.items]);

  const categories = ['all', ...Array.from(new Set(PROJECTS_CONFIG.items.map(project => project.category)))];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects([...PROJECTS_CONFIG.items]);
    } else {
      setFilteredProjects(
        PROJECTS_CONFIG.items.filter(project => project.category === selectedCategory).map(project => ({ ...project }))
      );
    }
  }, [selectedCategory]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/images/img1.jpg"
          alt={SITE_CONFIG.name}
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{PROJECTS_CONFIG.title}</h1>
          <p className="text-xl">{PROJECTS_CONFIG.description}</p>
        </div>
      </section>

      <section className="py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? 'border-gold-500 bg-gold-500 text-white'
                    : 'border-gray-300 dark:border-gray-700 hover:border-gold-500 text-gray-700 dark:text-gray-300'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/90 z-10" />

                <div className="relative h-[400px]">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                  <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                    <span className="inline-block px-3 py-1 bg-gold-500/80 rounded-full text-xs font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gold-400 font-medium">Location</p>
                        <p>{project.details.location}</p>
                      </div>
                      <div>
                        <p className="text-gold-400 font-medium">Area</p>
                        <p>{project.details.area}</p>
                      </div>
                      <div>
                        <p className="text-gold-400 font-medium">Duration</p>
                        <p>{project.details.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
