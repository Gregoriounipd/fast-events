"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Heart, Calendar, Users, Award, Phone, Mail, MapPin } from 'lucide-react';

const images = [
  '/images/foto1_banner.jpg',
  '/images/foto2_banner.jpg',
  '/images/foto3_banner.jpg',
];

const services = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Matrimoni",
    description: "Il giorno più importante della vostra vita, curato nei minimi dettagli",
    color: "from-pink-400 to-rose-500"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Feste di Laurea",
    description: "Celebra il tuo traguardo con un evento indimenticabile",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Compleanni",
    description: "Ogni età merita una festa speciale e personalizzata",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Eventi Aziendali",
    description: "Conferenze, team building e celebrazioni corporate",
    color: "from-green-400 to-teal-500"
  }
];

const testimonials = [
  {
    name: "Marco & Giulia",
    event: "Matrimonio",
    text: "Hanno trasformato il nostro sogno in realtà. Ogni dettaglio era perfetto!",
    rating: 5
  },
  {
    name: "Francesco",
    event: "Laurea in Ingegneria",
    text: "Una festa incredibile che ricorderò per sempre. Grazie team!",
    rating: 5
  },
  {
    name: "Azienda TechCorp",
    event: "Evento Aziendale",
    text: "Professionalità e creatività al top. I nostri clienti sono rimasti entusiasti.",
    rating: 5
  }
];

const stats = [
  { number: "500+", label: "Eventi Organizzati" },
  { number: "98%", label: "Clienti Soddisfatti" },
  { number: "50+", label: "Location Partner" },
  { number: "15", label: "Anni di Esperienza" }
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="w-full">
      {/* Enhanced Hero Banner */}
      <section 
        className="relative h-screen w-full overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4 z-30">
          <motion.button 
            onClick={prevSlide} 
            className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Image Carousel */}
        <div className="relative h-full w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="absolute top-0 left-0 h-full w-full"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={images[current]}
                alt={`Evento organizzato ${current + 1}`}
                fill
                className="object-cover"
                priority={current === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Organizziamo
              </span>
              <br />
              i tuoi momenti speciali
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Matrimoni da sogno, feste di laurea memorabili, compleanni indimenticabili ed eventi aziendali di successo.
              <span className="block mt-2 text-pink-300">
                Ci occupiamo di tutto, tu pensa solo a goderti l&apos;attimo ✨
              </span>
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <motion.a
                href="#servizi"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Heart className="w-5 h-5" />
                Scopri i nostri servizi
              </motion.a>
              
              <motion.a
                href="#contatti"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                Contattaci ora
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="servizi" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              I Nostri Servizi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ogni evento è unico, proprio come te. Scopri come possiamo rendere speciale il tuo momento.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {service.description}
                </p>
                
                {/* Hover Arrow */}
                <motion.div
                  className="mt-4 text-pink-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  Scopri di più →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Presentation Section */}
      <section id="presentazione" className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-800"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Benvenuti nel nostro 
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"> mondo</span>
            </motion.h2>
            
            <motion.div
              className="prose prose-xl max-w-none text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xl mb-6">
                Siamo un&apos;agenzia di organizzazione eventi dedicata a trasformare i tuoi momenti speciali in 
                <strong className="text-pink-600"> ricordi indimenticabili</strong>. 
                Con anni di esperienza nel settore, il nostro team di esperti si impegna a curare ogni dettaglio.
              </p>
              
              <p className="text-lg">
                Che tu stia pianificando un matrimonio da sogno, una festa di laurea memorabile, 
                un compleanno speciale o un evento aziendale di successo, siamo qui per aiutarti a 
                realizzare la tua visione con <em>creatività, professionalità e passione</em>.
              </p>
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Iniziamo a pianificare insieme
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Cosa Dicono i Nostri Clienti
            </h2>
            <p className="text-xl text-gray-600">
              La soddisfazione dei nostri clienti è la nostra più grande ricompensa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  &#34;{testimonial.text}&#34;
                </blockquote>
                
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contatti" className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto per il tuo evento da sogno?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Contattaci oggi per una consulenza gratuita e iniziamo insieme a pianificare il tuo momento speciale
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="tel:+393331234567"
                className="inline-flex items-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                +39 333 123 4567
              </motion.a>
              
              <motion.a
                href="mailto:info@tuoieventi.com"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                info@tuoieventi.com
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}