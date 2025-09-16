"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/foto1_banner.jpg',
  '/images/foto2_banner.jpg',
  '/images/foto3_banner.jpg',
];

const services = [
  {
    icon: "💒",
    title: "Matrimoni",
    description: "Il giorno più importante della vostra vita"
  },
  {
    icon: "🎓",
    title: "Feste di Laurea", 
    description: "Celebra il tuo traguardo con stile"
  },
  {
    icon: "🎂",
    title: "Compleanni",
    description: "Feste personali per ogni età"
  },
  {
    icon: "🏢",
    title: "Eventi Aziendali",
    description: "Conferenze e team building"
  }
];

// FORM POPUP CON STYLING MIGLIORATO
function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    tipoEvento: 'matrimonio',
    messaggio: ''
  });

  const handleSubmit = async () => {
    console.log('Form inviato:', formData);
    alert('Richiesta inviata! Ti contatteremo presto.');
    onClose();
    setFormData({ nome: '', email: '', telefono: '', tipoEvento: 'matrimonio', messaggio: '' });
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
        {/* Header Migliorato */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Richiedi Preventivo</h2>
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
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 bg-gray-50 hover:bg-white text-gray-800 placeholder-gray-400"
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
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 bg-gray-50 hover:bg-white text-gray-800 placeholder-gray-400"
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
              placeholder="+39 333 123 4567"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 bg-gray-50 hover:bg-white text-gray-800 placeholder-gray-400"
            />
          </div>
          
          {/* Select Tipo Evento - MIGLIORATO */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo di Evento *
            </label>
            <select
              name="tipoEvento"
              value={formData.tipoEvento}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 bg-gradient-to-r from-gray-50 to-white hover:from-white hover:to-gray-50 text-gray-800 font-medium shadow-sm cursor-pointer appearance-none bg-no-repeat bg-right bg-[length:24px_24px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTBMMTIgMTVMMTcgMTAiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+')]"
            >
              <option value="matrimonio" className="py-2">💒 Matrimonio</option>
              <option value="laurea" className="py-2">🎓 Festa di Laurea</option>
              <option value="compleanno" className="py-2">🎂 Compleanno</option>
              <option value="aziendale" className="py-2">🏢 Evento Aziendale</option>
              <option value="battesimo" className="py-2">⛪ Battesimo/Comunione</option>
              <option value="anniversario" className="py-2">💕 Anniversario</option>
              <option value="altro" className="py-2">🎉 Altro</option>
            </select>
          </div>
          
          {/* Messaggio */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Messaggio
            </label>
            <textarea
              name="messaggio"
              value={formData.messaggio}
              onChange={handleChange}
              placeholder="Descrivi il tuo evento ideale: data, location preferita, numero partecipanti, budget orientativo..."
              rows="4"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 bg-gray-50 hover:bg-white text-gray-800 placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Privacy */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl border border-pink-100">
            <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
              <input 
                type="checkbox" 
                required 
                className="mt-1 w-4 h-4 text-pink-600 border-2 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
              />
              <span>
                Accetto il trattamento dei dati personali secondo la Privacy Policy.
                I tuoi dati verranno utilizzati esclusivamente per rispondere alla tua richiesta.
              </span>
            </label>
          </div>
          
          {/* Buttons Migliorati */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={onClose}
              className="flex-1 py-4 px-6 border-2 border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 hover:border-gray-300 font-semibold transition-all duration-200 hover:shadow-md"
            >
              Annulla
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 py-4 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Invia Richiesta ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// COMPONENTE CHATBOT
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 z-40"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-64 bg-white rounded-lg shadow-xl z-40 p-4">
          <h3 className="font-bold mb-2">Ciao! 👋</h3>
          <p className="text-sm text-gray-600 mb-4">
            Sono l'assistente di Fast Events. Contattaci per informazioni sui nostri servizi!
          </p>
          <div className="space-y-2">
            <button 
              onClick={() => window.open('https://wa.me/3892574273?text=Ciao, vorrei informazioni sui matrimoni', '_blank')}
              className="block w-full text-left p-2 bg-green-50 rounded hover:bg-green-100 text-sm"
            >
              💒 Info Matrimoni
            </button>
            <button 
              onClick={() => window.open('https://wa.me/3892574273?text=Ciao, vorrei informazioni sulle feste di laurea', '_blank')}
              className="block w-full text-left p-2 bg-blue-50 rounded hover:bg-blue-100 text-sm"
            >
              🎓 Info Lauree
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// HOMEPAGE PRINCIPALE
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
    const phoneNumber = '3892574273'; // CAMBIA CON IL TUO NUMERO
    const message = 'Ciao! Sono interessato ai vostri servizi per organizzazione eventi.';
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
    <main className="w-full">
      {/* HERO BANNER (il tuo codice esistente) */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
          <button 
            onClick={prevSlide} 
            className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition text-xl"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition text-xl"
          >
            ▶
          </button>
        </div>

        <div className="relative h-full w-full">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 h-full w-full transition-opacity duration-800 ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Organizziamo i tuoi momenti speciali
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl mb-8">
            Matrimoni, feste di laurea, compleanni ed eventi aziendali.
            Ci occupiamo di tutto, dalla pianificazione alla realizzazione.
          </p>
          <div className="flex gap-4">
            <a
              href="#servizi"
              className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-full font-semibold transition"
            >
              Scopri i servizi
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="border-2 border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full font-semibold transition"
            >
              Richiedi preventivo
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* SERVIZI (il tuo codice esistente) */}
      <section id="servizi" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            I Nostri Servizi
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4 text-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESENTAZIONE (il tuo codice esistente) */}
      <section id="presentazione" className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Benvenuti nel nostro mondo
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Siamo un'agenzia di organizzazione eventi dedicata a trasformare i tuoi momenti speciali in ricordi indimenticabili. 
            Con anni di esperienza nel settore, il nostro team di esperti si impegna a curare ogni dettaglio.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Che tu stia pianificando un matrimonio da sogno, una festa di laurea memorabile, un compleanno speciale 
            o un evento aziendale di successo, siamo qui per aiutarti a realizzare la tua visione con creatività, 
            professionalità e passione.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Iniziamo insieme
          </button>
        </div>
      </section>

      {/* CONTATTI MIGLIORATI - QUI LA NOVITÀ! */}
      <section id="contatti" className="py-16 bg-pink-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto per il tuo evento da sogno?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contattaci oggi per una consulenza gratuita
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition inline-flex items-center justify-center gap-2"
          >
            📱 WhatsApp: +39 3892574273
          </button>
          
          <button
            onClick={() => setShowModal(true)}
            className="border-2 border-white hover:bg-white hover:text-pink-600 px-6 py-3 rounded-full font-semibold transition inline-flex items-center justify-center gap-2"
          >
            ✉️ Richiedi Preventivo
          </button>
        </div>

        <div className="mt-8 text-sm opacity-90">
          <p>📞 Rispondiamo entro 2 ore | 💬 Chat dal vivo disponibile</p>
        </div>
      </section>

      {/* MODAL E CHATBOT - AGGIUNTI QUI */}
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Chatbot />
    </main>
  );
}