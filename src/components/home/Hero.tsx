'use client';
import { motion } from 'framer-motion';
import { HERO_CONFIG } from '@/utils/constants';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gold-500/10 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gold-500/10 blur-3xl rounded-full animate-pulse delay-700" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              {HERO_CONFIG.title.first}{" "}
              <span className="relative">
                <span className="text-gold-500">
                  {HERO_CONFIG.title.highlighted}
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold-500/30 rounded-full blur-sm" />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-200 font-light"
            >
              {HERO_CONFIG.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="#contact">
              <button className="mt-8 px-6 py-2 relative overflow-hidden rounded-lg border-2 border-gold-500 text-gold-500 transition-all duration-300 before:absolute before:inset-0 before:bg-gold-500 before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left hover:text-white group">
                <span className="relative z-10">
                  {HERO_CONFIG.cta.primary}
                </span>
              </button>
            </Link>
            <Link href="/projects">
              <button className="mt-8 px-6 py-2 relative overflow-hidden rounded-lg border-2 border-gold-500 text-gold-500 transition-all duration-300 before:absolute before:inset-0 before:bg-gold-500 before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left hover:text-white group">
                <span className="relative z-10">
                  {HERO_CONFIG.cta.secondary}
                  </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
    </section>
  );
};

export default Hero;
