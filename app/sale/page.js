"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';

function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    utente: '',
    tipoEvento: 'Feste di laurea', // ✅ Deve matchare con il name del select
    budget: '', // Aggiungi questo se serve
    messaggio: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validazione
    if (!formData.nome || !formData.email || !formData.utente) {
      alert('⚠️ Compila tutti i campi obbligatori (Nome, Email, Instagram)');
      return;
    }

    try {
      console.log('📤 Invio quick quote:', formData);

      // Invia a Google Forms (STESSO URL del form principale)
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdlZEv6k-vgrV3yVwZsaIiLUYqwLsffPrPASZqmAXzn090Ukw/formResponse';

      const formDataToSend = new FormData();
      formDataToSend.append('entry.1293752853', formData.nome);
      formDataToSend.append('entry.1222330538', formData.email);
      formDataToSend.append('entry.996676258', formData.telefono);
      formDataToSend.append('entry.417819852', formData.utente);
      formDataToSend.append('entry.1185668983', formData.tipoEvento);
      formDataToSend.append('entry.984905371', formData.budget || ''); // Budget opzionale
      formDataToSend.append('entry.811715166', formData.messaggio);

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors',
      });

      // BACKUP LOCALE
      const backupKey = `richiesta_servizi_${Date.now()}`;
      localStorage.setItem(backupKey, JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'pagina_servizi' // Per distinguerlo dal form homepage
      }));

      console.log('✅ Quick quote inviata! Backup:', backupKey);
      alert('✅ Richiesta inviata! Ti contatteremo entro 24 ore.');

      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        utente: '',
        tipoEvento: 'Feste di laurea',
        budget: '',
        messaggio: ''
      });

    } catch (error) {
      console.error('❌ Errore invio quick quote:', error);

      // Backup anche in caso di errore
      const backupKey = `richiesta_servizi_errore_${Date.now()}`;
      localStorage.setItem(backupKey, JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'pagina_servizi',
        errore: error.message
      }));

      alert('❌ Errore nell\'invio. Contattaci direttamente su WhatsApp: +39 3921209212');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Richiedi Preventivo Veloce</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome e Cognome *"
          value={formData.nome}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
        />

        <input
          type="tel"
          name="telefono"
          placeholder="Telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />

        <input
          type="text"
          name="utente"
          placeholder="Nome Instagram *"
          value={formData.utente}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
        />

        {/* ✅ CORRETTO: name="tipoEvento" (non "servizio") */}
        <select
          name="tipoEvento"
          value={formData.tipoEvento}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
        >
          <option value="Feste di laurea">🎓 Feste di Laurea</option>
          <option value="Compleanni">🎂 Compleanni</option>
          <option value="18 esimo">🎉 18° Compleanno</option>
          <option value="Altro">✨ Altro</option>
        </select>

        <textarea
          name="messaggio"
          placeholder="Descrivi il tuo evento..."
          rows="3"
          value={formData.messaggio}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
        />

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white font-semibold rounded-xl hover:from-blue-950 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Invia Richiesta ✨
        </button>
      </form>
    </div>
  );
}

export default function SalePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#FFFEF7]">

        {/* Hero Section */}
        <section className="relative h-[70vh] bg-gradient-to-r from-[#1A237E] via-[#283593] to-[#1A237E]">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-6 z-10">
            <span className="text-5xl mb-4">🏛️</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Le Nostre Sale & Location
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl opacity-90">
              Scopri location esclusive e raffinate per ogni tipo di evento
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-[#1A237E] font-medium">Sale</span>
            </nav>
          </div>
        </div>

        {/* Intro Section - Testo + Immagine */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Testo */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-6">
                  Location Selezionate con Cura
                </h2>
                <p className="text-lg text-[#424242] leading-relaxed mb-6">
                  Collaboriamo esclusivamente con le migliori location del Veneto.
                  Ogni spazio è stato selezionato personalmente dal nostro team per garantire
                  qualità, eleganza e servizi impeccabili.
                </p>
                <p className="text-lg text-[#424242] leading-relaxed mb-6">
                  Che tu stia cercando una villa storica per una laurea da favola,
                  un castello affacciato sul lago, o un loft moderno per un evento corporate,
                  abbiamo la soluzione perfetta per te.
                </p>
                <div className="flex gap-4 items-center">
                  <div className="text-5xl font-bold text-[#D4AF37]">10+</div>
                  <div className="text-[#424242]">
                    <div className="font-semibold text-[#1A237E]">Location Partner</div>
                    <div className="text-sm">In tutto il Veneto</div>
                  </div>
                </div>
              </div>

              {/* Immagine */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-[#D4AF37]/20">
                <Image
                  src="/images/location-hero.jpg"
                  alt="Location elegante"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sezione Perché Scegliere - Immagine + Testo (ordine invertito) */}
        <section className="py-20 bg-gradient-to-br from-[#FFFEF7] to-[#F5F5DC]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Immagine */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1 ring-2 ring-[#D4AF37]/20">
                <Image
                  src="/images/servizio-location.jpg"
                  alt="Il nostro servizio"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Testo */}
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-8">
                  Perché Affidarsi a Noi
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0 ring-2 ring-[#D4AF37]/20">
                      <span className="text-2xl text-[#D4AF37]">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A237E] mb-2 text-lg">Sopralluoghi Gratuiti</h3>
                      <p className="text-[#424242]">
                        Ti accompagniamo a visitare le location senza alcun costo aggiuntivo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0 ring-2 ring-[#D4AF37]/20">
                      <span className="text-2xl text-[#D4AF37]">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A237E] mb-2 text-lg">Prezzi Negoziati</h3>
                      <p className="text-[#424242]">
                        Grazie alle nostre partnership ottieni tariffe esclusive e vantaggiose.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0 ring-2 ring-[#D4AF37]/20">
                      <span className="text-2xl text-[#D4AF37]">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A237E] mb-2 text-lg">Coordinamento Completo</h3>
                      <p className="text-[#424242]">
                        Gestiamo ogni aspetto logistico con la location per te, senza stress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sezione Tipi di Location */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-6">
                Tipologie di Location
              </h2>
              <p className="text-xl text-[#424242] max-w-3xl mx-auto">
                Dalle ville storiche ai loft moderni, ogni location è selezionata per garantire il successo del tuo evento
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Ville e Castelli */}
              <div className="bg-gradient-to-br from-[#FFFEF7] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/40">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🏰</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3 text-center">
                  Ville e Castelli
                </h3>
                <p className="text-[#424242] text-center">
                  Location storiche ed eleganti per matrimoni da sogno e cerimonie raffinate
                </p>
              </div>

              {/* Agriturismi e Country House */}
              <div className="bg-gradient-to-br from-[#FFFEF7] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/40">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3 text-center">
                  Agriturismi Chic
                </h3>
                <p className="text-[#424242] text-center">
                  Atmosfera rustica ma raffinata, immersa nella natura con cucina genuina
                </p>
              </div>

              {/* Spazi Moderni */}
              <div className="bg-gradient-to-br from-[#FFFEF7] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/40">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3 text-center">
                  Spazi Moderni
                </h3>
                <p className="text-[#424242] text-center">
                  Loft e location urbane per eventi aziendali e feste contemporanee
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Quick Contact Form */}
        < section id="contatto-rapido" className="py-20 px-6 bg-white" >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Richiedi un Preventivo Gratuito
              </h2>
              <p className="text-xl text-gray-600">
                Raccontaci la tua idea e ti aiuteremo a realizzarla
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <QuickQuoteForm />
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Non trovi la location perfetta? Contattaci Direttamente</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600">📱</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">WhatsApp</div>
                        <div className="text-gray-600">+39 392 1209 212</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">

                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600">⏰</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Orari</div>
                        <div className="text-gray-600">Lun-Ven 9:00-18:00</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold mb-2">Consulenza Gratuita</h4>
                  <p className="text-sm opacity-90">
                    Ti offriamo sempre una prima consulenza gratuita per capire le tue esigenze e proporti la soluzione migliore.
                  </p>
                </div>

                <div className="text-center">
                  <a
                    href="https://wa.me/3921209212?text=Ciao! Vorrei informazioni sui vostri servizi."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105"
                  >
                    <span>💬</span>
                    <span>Contattaci su WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section >
      </div >
    </>
  );
}
