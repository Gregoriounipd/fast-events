"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '/app/components/Header';

const images = [
  '/images/foto1_banner.jpg',
  '/images/foto2_banner.jpg',
  '/images/foto3_banner.jpg',
  '/images/foto4_banner.jpg',
  '/images/foto5_banner.jpg',
];

const services = [

  {
    icon: "🎓",
    title: "Feste di Laurea",
    description: "Celebra il tuo traguardo con stile",
    gradient: "from-blue-500 to-indigo-600",
    hoverColor: "hover:text-blue-600"
  },
  {
    icon: "🎂",
    title: "Compleanni",
    description: "Feste personali per ogni età",
    gradient: "from-orange-400 to-amber-500",
    hoverColor: "hover:text-orange-600"
  },
  {
    icon: "🏢",
    title: "Eventi Aziendali",
    description: "Conferenze e team building",
    gradient: "from-slate-500 to-gray-600",
    hoverColor: "hover:text-slate-600"
  }
];

// FORM POPUP MIGLIORATO
function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    tipoEvento: 'matrimonio',
    budget: '',
    messaggio: ''
  });

  const handleSubmit = async () => {
    console.log('Form inviato:', formData);
    alert('Richiesta inviata! Ti contatteremo presto.');
    onClose();
    setFormData({ nome: '', email: '', telefono: '', tipoEvento: 'matrimonio', budget: '', messaggio: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header con gradient versatile */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Richiedi Preventivo Gratuito</h2>
              <p className="opacity-90 mt-1">Ti contatteremo entro 24 ore ⚡</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-3xl hover:bg-white/20 w-10 h-10 rounded-full transition-all"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-8 space-y-6">
          {/* Nome */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nome e Cognome *
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Mario Rossi"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="mario.rossi@email.com"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Telefono */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Telefono
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="+39 389 257 4273"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Select Tipo Evento */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo di Evento *
            </label>
            <select
              name="tipoEvento"
              value={formData.tipoEvento}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gradient-to-r from-gray-50 to-white hover:from-white hover:to-gray-50 text-gray-800 font-medium shadow-sm cursor-pointer"
            >
              <option value="matrimonio">💒 Matrimonio</option>
              <option value="laurea">🎓 Festa di Laurea</option>
              <option value="compleanno">🎂 Compleanno</option>
              <option value="aziendale">🏢 Evento Aziendale</option>
              <option value="battesimo">⛪ Battesimo/Comunione</option>
              <option value="anniversario">💕 Anniversario</option>
              <option value="altro">🎉 Altro</option>
            </select>
          </div>
          {/* budget */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Budget
            </label>
            <textarea
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Dicci un po' quanto vorresti spendere."
              rows="1"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white text-gray-800 placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Messaggio */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Dettagli Evento
            </label>
            <textarea
              name="messaggio"
              value={formData.messaggio}
              onChange={handleChange}
              placeholder="Raccontaci il tuo evento ideale: data prevista, numero partecipanti, location preferita, servizi desiderati..."
              rows="4"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white text-gray-800 placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Privacy */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100">
            <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
              />
              <span>
                Accetto il trattamento dei dati personali secondo la Privacy Policy.
                I tuoi dati verranno utilizzati esclusivamente per rispondere alla tua richiesta.
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={onClose}
              className="flex-1 py-4 px-6 border-2 border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 hover:border-gray-300 font-semibold transition-all duration-200 hover:shadow-md"
            >
              Annulla
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 py-4 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Invia Richiesta ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// CHATBOT MIGLIORATO
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-600 hover:scale-110 transition-all duration-300 z-40"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-2xl z-40 border border-gray-200">
          {/* Header Chatbot */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-t-xl">
            <h3 className="font-bold">Fast Events Assistant</h3>
            <p className="text-sm opacity-90">Online ora • Risposta immediata</p>
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">
              Ciao! 👋 Sono qui per aiutarti. Scegli un argomento o scrivici su WhatsApp:
            </p>
            <div className="space-y-2">
              <button
                onClick={() => window.open('https://wa.me/3892574273?text=Ciao! Vorrei informazioni sui matrimoni e i vostri servizi.', '_blank')}
                className="block w-full text-left p-3 bg-rose-50 rounded-lg hover:bg-rose-100 text-sm transition-colors border border-rose-200"
              >
                <span className="text-lg mr-2">💒</span>
                <strong>Matrimoni</strong> - Info complete sui nostri servizi
              </button>
              <button
                onClick={() => window.open('https://wa.me/3892574273?text=Ciao! Vorrei organizzare una festa di laurea.', '_blank')}
                className="block w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 text-sm transition-colors border border-blue-200"
              >
                <span className="text-lg mr-2">🎓</span>
                <strong>Feste di Laurea</strong> - Celebra il tuo successo
              </button>
              <button
                onClick={() => window.open('https://wa.me/3892574273?text=Ciao! Vorrei organizzare un compleanno speciale.', '_blank')}
                className="block w-full text-left p-3 bg-orange-50 rounded-lg hover:bg-orange-100 text-sm transition-colors border border-orange-200"
              >
                <span className="text-lg mr-2">🎂</span>
                <strong>Compleanni</strong> - Feste memorabili
              </button>
              <button
                onClick={() => window.open('https://wa.me/3892574273?text=Ciao! Vorrei organizzare un evento aziendale.', '_blank')}
                className="block w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-sm transition-colors border border-gray-200"
              >
                <span className="text-lg mr-2">🏢</span>
                <strong>Eventi Aziendali</strong> - Professionalità garantita
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// HOMEPAGE PRINCIPALE MIGLIORATA
export default function Home() {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Funzione WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '3892574273';
    const message = 'Ciao! Sono interessato ai vostri servizi per organizzazione eventi. Potreste darmi maggiori informazioni?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Header />
      <main className="w-full pt-16">
        {/* HERO BANNER MIGLIORATO */}
        <section className="relative h-[90vh] w-full overflow-hidden">
          {/* Navigation Arrows Migliorati */}
          <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
            <button
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 text-xl border border-white/20 hover:scale-110"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 text-xl border border-white/20 hover:scale-110"
            >
              ▶
            </button>
          </div>

          {/* Images con transizione migliorata */}
          <div className="relative h-full w-full">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 h-full w-full transition-all duration-1000 ${index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
              >
                <Image
                  src={src}
                  alt={`Evento organizzato ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Overlay con gradient migliorato */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 flex flex-col items-center justify-center text-center text-white px-4 z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Organizziamo
              </span>
              <br />
              <span>i tuoi momenti speciali</span>
            </h1>
            <p className="mt-4 max-w-3xl text-xl md:text-2xl mb-10 leading-relaxed opacity-90">
              Matrimoni da sogno, feste di laurea memorabili, compleanni indimenticabili ed eventi aziendali di successo.
              <br />
              <span className="text-blue-200">Ci occupiamo di tutto, tu pensa solo a goderti l'attimo ✨</span>
            </p>

            {/* Bottoni Hero Migliorati */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#servizi"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span className="text-xl">🎉</span>
                  <span>Scopri tutti i servizi</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">📋</span>
                  <span>Richiedi preventivo gratuito</span>
                  <span className="transform group-hover:rotate-12 transition-transform duration-300">✨</span>
                </div>
              </button>
            </div>
          </div>

          {/* Slide Indicators Migliorati */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 ${index === current
                    ? 'w-8 h-3 bg-white rounded-full'
                    : 'w-3 h-3 bg-white/50 hover:bg-white/75 rounded-full'
                  }`}
              />
            ))}
          </div>
        </section>

        {/* SERVIZI MIGLIORATI */}
        <section id="servizi" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                I Nostri Servizi
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ogni evento è unico, proprio come te. Scopri come possiamo rendere speciale il tuo momento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 text-gray-800 group-hover:${service.hoverColor} transition-colors duration-300`}>
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-4 text-indigo-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Scopri di più →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRESENTAZIONE MIGLIORATA */}
        <section id="presentazione" className="py-20 px-6 md:px-20 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
              Benvenuti nel nostro
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"> mondo</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Siamo un'agenzia di organizzazione eventi dedicata a trasformare i tuoi momenti speciali in
                <strong className="text-indigo-600"> ricordi indimenticabili</strong>.
                Con anni di esperienza nel settore, il nostro team di esperti si impegna a curare ogni dettaglio.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Che tu stia pianificando un matrimonio da sogno, una festa di laurea memorabile, un compleanno speciale
                o un evento aziendale di successo, siamo qui per aiutarti a realizzare la tua visione con
                <em> creatività, professionalità e passione</em>.
              </p>
            </div>

            <div className="mt-12">
              <button
                onClick={() => setShowModal(true)}
                className="group relative px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span className="text-xl">💫</span>
                  <span>Iniziamo a pianificare insieme</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">✨</span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* CONTATTI MIGLIORATI */}
        <section id="contatti" className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto per il tuo evento da sogno?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Contattaci oggi per una consulenza gratuita e iniziamo insieme a pianificare il tuo momento speciale
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* WhatsApp Button Migliorato */}
              <button
                onClick={openWhatsApp}
                className="group relative px-8 py-4 bg-green-500 text-white font-semibold rounded-2xl transition-all duration-500 hover:bg-green-600 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-lg">💬</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-90">WhatsApp</div>
                    <div className="font-bold">+39 389 257 4273</div>
                  </div>
                  <div className="ml-2 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">📱</span>
                  </div>
                </div>
              </button>

              {/* Email Button Migliorato */}
              <button
                onClick={() => setShowModal(true)}
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-lg">📧</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-90">Preventivo</div>
                    <div className="font-bold">Gratuito e veloce</div>
                  </div>
                  <div className="ml-2 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">✨</span>
                  </div>
                </div>
              </button>
            </div>

            <div className="mt-10 text-lg opacity-90">
              <p>📞 Rispondiamo entro 2 ore | 💬 Chat dal vivo disponibile | 🎉 Consulenza sempre gratuita</p>
            </div>
          </div>
        </section>

        {/* MODAL E CHATBOT */}
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
        <Chatbot />
      </main>
    </>
  );
}