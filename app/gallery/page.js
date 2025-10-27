"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';

// FORM POPUP (stesso della home)
function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    tipoEvento: 'Laurea',
    budget: '',
    messaggio: ''
  });

  const handleSubmit = async () => {
    try {
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSePasSeI0x6sb0BsNxKi8vcx1ZfMQVbCHUMsYV6y8yBvF2VDQ/formResponse';
      
      const formDataToSend = new FormData();
      formDataToSend.append('entry.1286963313', formData.nome);
      formDataToSend.append('entry.1755813807', formData.email);
      formDataToSend.append('entry.1852190146', formData.telefono);
      formDataToSend.append('entry.33183968', formData.tipoEvento);
      formDataToSend.append('entry.121710793', formData.budget);
      formDataToSend.append('entry.2097799976', formData.messaggio);

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors',
      });

      alert('✅ Richiesta inviata! Ti contatteremo entro 24 ore.');
      onClose();
      setFormData({ nome: '', email: '', telefono: '', tipoEvento: 'Laurea', budget: '', messaggio: '' });
    } catch (error) {
      alert('❌ Errore nell\'invio. Contattaci su WhatsApp: +39 389 257 4273');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-amber-50 rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-amber-200/50">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Richiedi Preventivo Gratuito</h2>
              <p className="opacity-90 mt-1 text-sm sm:text-base">Ti contatteremo entro 24 ore ⚡</p>
            </div>
            <button onClick={onClose} className="text-white/80 hover:text-white text-2xl sm:text-3xl hover:bg-white/20 w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all">✕</button>
          </div>
        </div>

        <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">Nome e Cognome *</label>
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Mario Rossi" className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-white text-slate-800 text-base" required />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="mario.rossi@email.com" className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-white text-slate-800 text-base" required />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">Telefono</label>
            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="+39 389 257 4273" className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-white text-slate-800 text-base" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">Tipo di Evento *</label>
            <select name="tipoEvento" value={formData.tipoEvento} onChange={handleChange} className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-white text-slate-800 text-base">
              <option value="Laurea">🎓 Festa di Laurea</option>
              <option value="Compleanno">🎂 Compleanno</option>
              <option value="Anniversario">💕 Anniversario</option>
              <option value="Altro">🎉 Altro</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">Budget</label>
            <textarea name="budget" value={formData.budget} onChange={handleChange} placeholder="Dicci quanto vorresti spendere." rows="1" className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-white text-slate-800 text-base resize-none"></textarea>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">Dettagli Evento</label>
            <textarea name="messaggio" value={formData.messaggio} onChange={handleChange} placeholder="Raccontaci il tuo evento ideale..." rows="3" className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-white text-slate-800 text-base resize-none"></textarea>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-3 sm:p-4 rounded-xl border border-blue-200">
            <label className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700 cursor-pointer">
              <input type="checkbox" required className="mt-0.5 w-4 h-4 text-blue-900 border-2 rounded" />
              <span>Accetto il trattamento dei dati personali secondo la Privacy Policy.</span>
            </label>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button onClick={onClose} className="w-full sm:flex-1 py-3 px-6 border-2 border-slate-300 rounded-xl text-slate-700 hover:bg-slate-100 font-semibold text-base">Annulla</button>
            <button onClick={handleSubmit} className="w-full sm:flex-1 py-3 px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white rounded-xl hover:from-blue-950 hover:to-amber-800 font-semibold shadow-lg text-base">Invia Richiesta ✨</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tutti');
  const [lightboxImage, setLightboxImage] = useState(null);

  // Categorie
  const categories = ['Tutti', 'Lauree', 'Compleanni', 'Diciottesimi', 'Eventi Aziendali'];

  // PLACEHOLDER: Sostituisci con le tue foto vere
  // Struttura: { src: '/images/gallery/foto1.jpg', category: 'Lauree', title: 'Festa Laurea Marco' }
  const galleryImages = [
    { src: '/images/foto1_banner.jpg', category: 'Lauree', title: 'Festa di Laurea 2024' },
    { src: '/images/foto2_banner.jpg', category: 'Compleanni', title: 'Compleanno 30 Anni' },
    { src: '/images/foto3_banner.jpg', category: 'Diciottesimi', title: 'Diciottesimo Alice' },
    { src: '/images/foto4_banner.jpg', category: 'Lauree', title: 'Festa Laurea Gruppo' },
    { src: '/images/foto5_banner.jpg', category: 'Eventi Aziendali', title: 'Corporate Event' },
    { src: '/images/foto1_banner.jpg', category: 'Compleanni', title: 'Party 25 Anni' },
    { src: '/images/foto2_banner.jpg', category: 'Diciottesimi', title: '18 Anni di Luca' },
    { src: '/images/foto3_banner.jpg', category: 'Lauree', title: 'Laurea in Medicina' },
    { src: '/images/foto4_banner.jpg', category: 'Compleanni', title: 'Festa a Tema' },
  ];

  // Filtra per categoria
  const filteredImages = selectedCategory === 'Tutti' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="w-full pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 z-10">
            <span className="text-4xl sm:text-5xl mb-3 sm:mb-4">📸</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
              Gallery
            </h1>
            <p className="text-base sm:text-lg md:text-2xl max-w-3xl opacity-90">
              I nostri eventi più belli immortalati
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <nav className="text-xs sm:text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-900">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Gallery</span>
            </nav>
          </div>
        </section>

        {/* Filtri Categorie */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-br from-amber-50 to-stone-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-blue-900 to-amber-700 text-white shadow-lg scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border-2 border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {filteredImages.length === 0 ? (
              <div className="text-center py-20">
                <span className="text-6xl sm:text-8xl">📷</span>
                <p className="text-xl sm:text-2xl text-slate-600 mt-6">
                  Nessuna foto in questa categoria
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setLightboxImage(image)}
                    className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <h3 className="text-base sm:text-lg font-bold mb-1">{image.title}</h3>
                        <p className="text-xs sm:text-sm opacity-90">{image.category}</p>
                      </div>
                    </div>
                    {/* Icona Zoom */}
                    <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-lg">🔍</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Lightbox (modale foto ingrandita) */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white text-4xl hover:text-amber-400 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              ✕
            </button>
            <div className="relative max-w-5xl w-full h-[80vh]">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{lightboxImage.title}</h3>
                <p className="text-lg opacity-90">{lightboxImage.category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Vuoi essere il prossimo nella nostra Gallery?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-90 max-w-2xl mx-auto">
              Organizziamo il tuo evento da sogno e catturiamo ogni momento speciale
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto">
              <a
                href="https://wa.me/3892574273?text=Ciao! Ho visto la vostra Gallery e vorrei organizzare un evento!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white font-semibold rounded-2xl hover:bg-green-600 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                💬 Scrivici su WhatsApp
              </a>
              <button
                onClick={() => setShowModal(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-amber-600/20 backdrop-blur-sm border-2 border-amber-400/40 text-white font-semibold rounded-2xl hover:bg-amber-600/30 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                📋 Richiedi Preventivo
              </button>
            </div>
          </div>
        </section>

        {/* Modal */}
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </main>
    </>
  );
}