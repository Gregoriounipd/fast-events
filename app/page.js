"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';

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
    gradient: "from-blue-900 to-blue-700",
    hoverColor: "hover:text-blue-900"
  },
  {
    icon: "🎂",
    title: "Compleanni",
    description: "Feste personali per ogni età",
    gradient: "from-amber-600 to-yellow-600",
    hoverColor: "hover:text-amber-600"
  },
];

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    utente: '',
    tipoEvento: '', // ✅ Vuoto inizialmente
    budget: '',
    messaggio: '',
    privacy: false
  });

  const handleSubmit = async () => {
    try {
      // Validazione SOLO campi veramente obbligatori
      if (!formData.nome) {
        alert('⚠️ Inserisci almeno il tuo nome!');
        return;
      }

      if (!formData.privacy) {
        alert('⚠️ Devi accettare la privacy policy per continuare');
        return;
      }

      console.log('📤 Invio dati:', formData);


      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdlZEv6k-vgrV3yVwZsaIiLUYqwLsffPrPASZqmAXzn090Ukw/formResponse';

      const formDataToSend = new FormData();

      // ✅ SEMPRE invia tutti i campi, anche se vuoti
      formDataToSend.append('entry.1293752853', formData.nome || '');        // Nome
      formDataToSend.append('entry.1222330538', formData.email || '');       // Email
      formDataToSend.append('entry.996676258', formData.telefono || '');     // Telefono
      formDataToSend.append('entry.417819852', formData.utente || '');       // Instagram
      formDataToSend.append('entry.1185668983', formData.tipoEvento || '');  // Tipo Evento (TEXT!)
      formDataToSend.append('entry.984905371', formData.budget || '');       // Budget
      formDataToSend.append('entry.811715166', formData.messaggio || '');    // Messaggio

      console.log('📡 Invio a Google Forms...');

      // Invia con timeout per evitare hang
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 sec timeout

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors',
        signal: controller.signal
      }).catch(err => {
        // no-cors può dare errore anche se funziona
        console.log('⚠️ Fetch completato (no-cors)');
      });

      clearTimeout(timeoutId);

      // BACKUP LOCALE (SEMPRE, anche se Google Forms fallisce)
      const backupKey = `richiesta_${Date.now()}`;
      const backupData = {
        ...formData,
        timestamp: new Date().toISOString(),
        // Aggiungi info su quali campi erano vuoti
        campiVuoti: {
          telefono: !formData.telefono,
          budget: !formData.budget,
          messaggio: !formData.messaggio
        }
      };

      localStorage.setItem(backupKey, JSON.stringify(backupData));

      console.log('✅ Backup salvato:', backupKey);
      console.log('📊 Dati backup:', backupData);

      alert('✅ Richiesta inviata! Ti contatteremo entro 24 ore.');

      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        utente: '',
        tipoEvento: '',
        budget: '',
        messaggio: '',
        privacy: false
      });

    } catch (error) {
      console.error('❌ Errore:', error);

      // SALVA COMUNQUE IL BACKUP
      const backupKey = `richiesta_errore_${Date.now()}`;
      localStorage.setItem(backupKey, JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        errore: error.message
      }));

      console.log('💾 Backup errore salvato:', backupKey);

      alert('⚠️ Possibile problema di invio.\n\nI tuoi dati sono stati salvati in backup.\n\nPer sicurezza, contattaci anche su WhatsApp: +39 3921209212');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-amber-50 rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-200/50">
        {/* Header oro e blu */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Richiedi Preventivo Gratuito</h2>
              <p className="opacity-90 mt-1 text-sm sm:text-base">Ti contatteremo entro 24 ore ⚡</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-2xl sm:text-3xl hover:bg-white/20 w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all flex-shrink-0"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
          {/* Nome */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Nome e Cognome *
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Mario Rossi"
              className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 placeholder-slate-400 text-base"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="mario.rossi@email.com"
              className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 placeholder-slate-400 text-base"
            />
          </div>

          {/* Telefono */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Telefono
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="il tuo numero di telefono"
              className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 placeholder-slate-400 text-base"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Nome instagram *
            </label>
            <input
              type="text"
              name="utente"
              value={formData.utente}
              onChange={handleChange}
              placeholder="@nomeinstagram"
              className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 placeholder-slate-400 text-base"
            />
          </div>
          { /* Tipo di Evento */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Tipo di Evento *
            </label>
            <input
              type="text"
              name="tipoEvento"
              value={formData.tipoEvento}
              onChange={handleChange}
              placeholder="Es: Festa di Laurea, Compleanno, 18esimo..."
              className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 placeholder-slate-400 text-base"
            />
          </div>
          {/* Budget */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Budget
            </label>
            <textarea
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Dicci un po' quanto vorresti spendere."
              rows="1"
              className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 placeholder-slate-400 resize-none text-base"
            ></textarea>
          </div>

          {/* Messaggio */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Dettagli Evento
            </label>
            <textarea
              name="messaggio"
              value={formData.messaggio}
              onChange={handleChange}
              placeholder="Raccontaci il tuo evento ideale: data prevista, numero partecipanti, location preferita, servizi desiderati..."
              rows="3"
              className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 placeholder-slate-400 resize-none text-base"
            ></textarea>
          </div>

          {/* Privacy - SENZA required */}
          <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-3 sm:p-4 rounded-xl border border-blue-200">
            <label className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.privacy}
                onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                className="mt-0.5 sm:mt-1 w-4 h-4 text-blue-900 border-2 border-slate-300 rounded focus:ring-blue-900 focus:ring-2 flex-shrink-0"
              />
              <span>
                Accetto il trattamento dei dati personali secondo la Privacy Policy.
                I tuoi dati verranno utilizzati esclusivamente per rispondere alla tua richiesta.
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button
              onClick={onClose}
              className="w-full sm:flex-1 py-3 sm:py-4 px-6 border-2 border-slate-300 rounded-xl text-slate-700 hover:bg-slate-100 hover:border-slate-400 font-semibold transition-all duration-200 hover:shadow-md text-base"
            >
              Annulla
            </button>
            <button
              onClick={handleSubmit}
              className="w-full sm:flex-1 py-3 sm:py-4 px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white rounded-xl hover:from-blue-950 hover:via-blue-900 hover:to-amber-800 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base"
            >
              Invia Richiesta ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// CHATBOT MOBILE-OPTIMIZED
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-blue-900 to-amber-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:from-blue-950 hover:to-amber-800 hover:scale-110 transition-all duration-300 z-40 text-xl sm:text-2xl"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-4 sm:bottom-20 sm:right-6 w-[calc(100vw-2rem)] max-w-[320px] sm:w-80 bg-amber-50 rounded-xl shadow-2xl z-40 border border-amber-200">
          {/* Header Chatbot */}
          <div className="bg-gradient-to-r from-blue-900 to-amber-700 text-white p-3 sm:p-4 rounded-t-xl">
            <h3 className="font-bold text-sm sm:text-base">Fast Events Assistant</h3>
            <p className="text-xs sm:text-sm opacity-90">Online ora • Risposta immediata</p>
          </div>

          <div className="p-3 sm:p-4 max-h-[60vh] overflow-y-auto">
            <p className="text-xs sm:text-sm text-slate-700 mb-3 sm:mb-4">
              Ciao! 👋 Sono qui per aiutarti. Scegli un argomento o scrivici su WhatsApp:
            </p>
            <div className="space-y-2">
              <button
                onClick={() => window.open('https://wa.me/3921209212?text=Ciao! Vorrei informazioni sui matrimoni e i vostri servizi.', '_blank')}
                className="block w-full text-left p-2.5 sm:p-3 bg-blue-50 rounded-lg hover:bg-blue-100 text-xs sm:text-sm transition-colors border border-blue-200"
              >
                <span className="text-base sm:text-lg mr-2">💒</span>
                <strong>Matrimoni</strong> - Info complete sui nostri servizi
              </button>
              <button
                onClick={() => window.open('https://wa.me/3921209212?text=Ciao! Vorrei organizzare una festa di laurea.', '_blank')}
                className="block w-full text-left p-2.5 sm:p-3 bg-amber-50 rounded-lg hover:bg-amber-100 text-xs sm:text-sm transition-colors border border-amber-200"
              >
                <span className="text-base sm:text-lg mr-2">🎓</span>
                <strong>Feste di Laurea</strong> - Celebra il tuo successo
              </button>
              <button
                onClick={() => window.open('https://wa.me/3921209212?text=Ciao! Vorrei organizzare un compleanno speciale.', '_blank')}
                className="block w-full text-left p-2.5 sm:p-3 bg-amber-50 rounded-lg hover:bg-amber-100 text-xs sm:text-sm transition-colors border border-amber-200"
              >
                <span className="text-base sm:text-lg mr-2">🎂</span>
                <strong>Compleanni</strong> - Feste memorabili
              </button>
              <button
                onClick={() => window.open('https://wa.me/3921209212?text=Ciao! Vorrei organizzare un evento aziendale.', '_blank')}
                className="block w-full text-left p-2.5 sm:p-3 bg-slate-50 rounded-lg hover:bg-slate-100 text-xs sm:text-sm transition-colors border border-slate-200"
              >
                <span className="text-base sm:text-lg mr-2">🏢</span>
                <strong>Eventi Aziendali</strong> - Professionalità garantita
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// HOMEPAGE PRINCIPALE MOBILE-RESPONSIVE
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
    const phoneNumber = '3921209212';
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
  // Banner di avviso tecnico (toglilo tra 7 giorni)

  function WarningBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
      <div className="fixed top-16 left-0 right-0 bg-gradient-to-r from-red-600 via-orange-500 to-amber-600 text-white z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <span className="text-2xl animate-pulse">⚠️</span>
              <div className="flex-1">
                <p className="font-bold text-sm sm:text-base">
                  Importante: Problema tecnico risolto!
                </p>
                <p className="text-xs sm:text-sm opacity-90">
                  Se hai inviato una richiesta tra il 23 novembre e il 3 dicembre e non hai ricevuto risposta,
                  <strong> per favore ricontattaci</strong> su WhatsApp:
                  <a
                    href="https://wa.me/3921209212?text=Ciao! Ho inviato una richiesta nei giorni scorsi ma non ho ricevuto risposta"
                    className="underline ml-1 hover:text-yellow-200"
                    target="_blank"
                  >
                    +39 392 120 9212
                  </a>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white hover:bg-white/20 px-3 py-1 rounded-lg transition-all flex-shrink-0 text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <WarningBanner /> {/* rimuovi anche questo*/}
      <main className="w-full pt-16">
        {/* HERO BANNER MOBILE-FRIENDLY */}
        <section className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] w-full overflow-hidden">
          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4 z-20">
            <button
              onClick={prevSlide}
              className="bg-blue-900/30 backdrop-blur-sm text-white p-2 sm:p-3 lg:p-4 rounded-full hover:bg-blue-900/50 transition-all duration-300 text-base sm:text-lg lg:text-xl border border-amber-500/30 hover:scale-110"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="bg-blue-900/30 backdrop-blur-sm text-white p-2 sm:p-3 lg:p-4 rounded-full hover:bg-blue-900/50 transition-all duration-300 text-base sm:text-lg lg:text-xl border border-amber-500/30 hover:scale-110"
            >
              ▶
            </button>
          </div>

          {/* Images */}
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

          {/* Overlay SEPARATO - solo per sfondo scuro */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-slate-900/75 to-blue-900/65 z-5"></div>

          {/* Contenuto sopra l'overlay - z-index più alto */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-4 z-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-200 bg-clip-text text-transparent">
                Organizziamo
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">i tuoi momenti speciali</span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base md:text-lg lg:text-2xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed opacity-90 px-2">
              Feste di laurea memorabili, compleanni indimenticabili ed Diciottesimi.
              <br className="hidden sm:inline" />
              <span className="text-amber-300 block sm:inline mt-2 sm:mt-0"> Ci occupiamo di tutto, tu pensa solo a goderti l'attimo ✨</span>
            </p>

            {/* Bottoni Hero - ORA CLICCABILI */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 w-full max-w-2xl px-4">
              <Link
                href="/servizi"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white font-semibold text-sm sm:text-base rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-xl">🎉</span>
                  <span>Scopri tutti i servizi</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300 hidden sm:inline">→</span>
                </div>
              </Link>

              <button
                onClick={() => setShowModal(true)}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-amber-600/20 backdrop-blur-sm border-2 border-amber-400/40 text-white font-semibold text-sm sm:text-base rounded-full transition-all duration-300 hover:bg-amber-600/30 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-xl">📋</span>
                  <span className="whitespace-nowrap">Preventivo gratuito</span>
                  <span className="transform group-hover:rotate-12 transition-transform duration-300 hidden sm:inline">✨</span>
                </div>
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 ${index === current
                  ? 'w-6 sm:w-8 h-2 sm:h-3 bg-amber-400 rounded-full'
                  : 'w-2 sm:w-3 h-2 sm:h-3 bg-amber-400/50 hover:bg-amber-400/75 rounded-full'
                  }`}
              />
            ))}
          </div>
        </section>

        {/* SERVIZI MOBILE-RESPONSIVE */}
        <section id="servizi" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-amber-50 to-stone-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">
                I Nostri Servizi
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto px-4">
                Ogni evento è unico, proprio come te. Scopri come possiamo rendere speciale il tuo momento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-200/30 hover:border-amber-300/50 hover:-translate-y-2"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl sm:text-2xl">{service.icon}</span>
                  </div>

                  {/* Content */}
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-800 group-hover:${service.hoverColor} transition-colors duration-300`}>
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-3 sm:mt-4 text-blue-900 font-semibold text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Scopri di più →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRESENTAZIONE MOBILE-FRIENDLY */}
        <section id="presentazione" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-slate-900">
              Benvenuti nel nostro
              <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-amber-600 bg-clip-text text-transparent"> mondo</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-slate-800 leading-relaxed px-2">
                Siamo un'agenzia di organizzazione eventi dedicata a trasformare i tuoi momenti speciali in
                <strong className="text-blue-900"> ricordi indimenticabili</strong>.
                Con anni di esperienza nel settore, il nostro team di esperti si impegna a curare ogni dettaglio.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed px-2">
                Che tu stia pianificando una festa di laurea memorabile, un compleanno speciale
                o un diciottesimo, siamo qui per aiutarti a realizzare la tua visione con
                <em> creatività, professionalità e passione</em>.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12 px-4">
              <button
                onClick={() => setShowModal(true)}
                className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white font-semibold text-base sm:text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-xl">💫</span>
                  <span>Iniziamo a pianificare insieme</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300 hidden sm:inline">✨</span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* CONTATTI MOBILE-OPTIMIZED */}
        <section id="contatti" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Pronto per il tuo evento da sogno?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 opacity-90 max-w-3xl mx-auto px-2">
              Contattaci oggi per una consulenza gratuita e iniziamo insieme a pianificare il tuo momento speciale
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-3xl mx-auto">
              {/* WhatsApp Button */}
              <button
                onClick={openWhatsApp}
                className="group relative px-6 sm:px-8 py-4 bg-green-500 text-white font-semibold rounded-2xl transition-all duration-500 hover:bg-green-600 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative flex items-center justify-center sm:justify-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                    <span className="text-lg">💬</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm opacity-90">WhatsApp</div>
                    <div className="font-bold text-sm sm:text-base">+39 392 120 9212</div>
                  </div>
                  <div className="ml-2 transform group-hover:scale-110 transition-transform duration-300 hidden sm:block">
                    <span className="text-xl">📱</span>
                  </div>
                </div>
              </button>

              {/* Email Button */}
              <button
                onClick={() => setShowModal(true)}
                className="group relative px-6 sm:px-8 py-4 bg-amber-600/20 backdrop-blur-sm border-2 border-amber-400/40 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-amber-600/30 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
              >
                <div className="relative flex items-center justify-center sm:justify-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                    <span className="text-lg">📧</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm opacity-90">Preventivo</div>
                    <div className="font-bold text-sm sm:text-base">Gratuito e veloce</div>
                  </div>
                  <div className="ml-2 transform group-hover:scale-110 transition-transform duration-300 hidden sm:block">
                    <span className="text-xl">✨</span>
                  </div>
                </div>
              </button>
            </div>

            <div className="mt-8 sm:mt-10 text-sm sm:text-base lg:text-lg opacity-90 px-4">
              <p className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <span>📞 Rispondiamo entro 2 ore</span>
                <span className="hidden sm:inline">|</span>
                <span>💬 Chat dal vivo disponibile</span>
                <span className="hidden sm:inline">|</span>
                <span>🎉 Consulenza sempre gratuita</span>
              </p>
            </div>
          </div>
        </section>

        {/* MODAL E CHATBOT */}
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
        <Chatbot />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4">© 2025 Greg - Web Developer. Tutti i diritti riservati.</p>
            <p className="text-gray-400 mb-2">
              Creato con <span className="text-red-500">❤️</span> utilizzando le tecnologie che amo
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}