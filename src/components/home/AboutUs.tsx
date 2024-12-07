'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SITE_CONFIG } from '@/utils/constants'

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([])
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!textRef.current || !imageRef.current || !statsRef.current) return

    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    })

    const textElements = [
      textRef.current.querySelector('.about-title'),
      textRef.current.querySelector('.about-subtitle'),
      textRef.current.querySelector('.about-description')
    ].filter(Boolean)

    textElements.forEach((element, index) => {
      if (element) {
        textTl.fromTo(
          element,
          { 
            opacity: 0, 
            y: 30 + (index * 10)
          },
          { 
            opacity: 1, 
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          },
          index * 0.2
        )
      }
    })

    gsap.fromTo(
      imageRef.current,
      { 
        scale: 0.8,
        opacity: 0,
        rotateY: 15
      },
      {
        scale: 1,
        opacity: 1,
        rotateY: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    SITE_CONFIG.about.stats.forEach((stat, index) => {
      const counterRef = counterRefs.current[index]
      if (!counterRef) return

      const statItem = counterRef.closest('.stat-item')
      if (!statItem) return

      gsap.fromTo(
        statItem,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 70%',
            onEnter: () => {
              gsap.to(counterRef, {
                innerText: stat.number,
                duration: 2,
                snap: { innerText: 1 },
                ease: 'power1.inOut'
              })
            }
          }
        }
      )
    })

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-500/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold-500/5 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={textRef} className="space-y-8">
            <div className="space-y-4">
              <h2 className="about-title text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {SITE_CONFIG.about.title}
              </h2>
              <p className="about-subtitle text-xl text-gold-500 font-medium">
                {SITE_CONFIG.about.subtitle}
              </p>
              <p className="about-description text-lg text-gray-600 dark:text-gray-300">
                En {SITE_CONFIG.name}, {SITE_CONFIG.about.description}
              </p>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="absolute -inset-4 bg-gold-500/20 rounded-2xl transform rotate-6 dark:bg-gold-500/10" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={SITE_CONFIG.about.image}
                alt={SITE_CONFIG.name}
                width={600}
                height={400}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div ref={statsRef} className="grid md:grid-cols-4 gap-8 mt-24">
          {SITE_CONFIG.about.stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-item group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gold-500/5 rounded-2xl transform group-hover:scale-95 transition-transform duration-300" />
              <div className="relative text-center">
                <div className="flex items-center justify-center text-4xl font-bold text-gold-500 mb-2">
                  <span ref={el => counterRefs.current[index] = el}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs