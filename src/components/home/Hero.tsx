'use client';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              Transformando Techos en{" "}
              <span className="text-gold-500">Obras Maestras</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-200"
            >
              Expertos en techado de lujo con más de 20 años de experiencia en
              residencias exclusivas
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-md text-lg font-semibold transition-colors w-full sm:w-auto">
                Solicitar Cotización
              </button>
              <button className="px-8 py-4 border-2 border-white hover:border-gold-500 text-white hover:text-gold-500 rounded-md text-lg font-semibold transition-colors w-full sm:w-auto">
                Ver Proyectos
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Proyectos Completados" },
                { number: "20+", label: "Años de Experiencia" },
                { number: "+2000", label: "Clientes Satisfechos" },
                { number: "25+", label: "Premios Ganados" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gold-500">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
