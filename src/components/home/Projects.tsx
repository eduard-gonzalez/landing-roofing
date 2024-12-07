"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS_CONFIG } from "@/utils/constants";
import type { Project } from "@/interfaces/dataInterface";

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    const featuredProjects: Project[] = PROJECTS_CONFIG.items.slice(0, 3);

    featuredProjects.forEach((_, index) => {
      const project = projectRefs.current[index];
      if (!project) return;

      gsap.fromTo(
        project,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="featured-projects"
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {PROJECTS_CONFIG.title}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            {PROJECTS_CONFIG.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS_CONFIG.items.slice(0, 3).map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
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
                      <p className="text-gold-400 font-medium">Ubicación</p>
                      <p>{project.details.location}</p>
                    </div>
                    <div>
                      <p className="text-gold-400 font-medium">Área</p>
                      <p>{project.details.area}</p>
                    </div>
                    <div>
                      <p className="text-gold-400 font-medium">Duración</p>
                      <p>{project.details.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            {PROJECTS_CONFIG.cta}
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
