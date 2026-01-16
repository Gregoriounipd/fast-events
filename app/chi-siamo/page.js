"use client";

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';

// FORM POPUP MOBILE-FRIENDLY (copiato dalla home)
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
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdlZEv6k-vgrV3yVwZsaIiLUYqwLsffPrPASZqmAXzn090Ukw/formResponse';
      const formDataToSend = new FormData();
      formDataToSend.append('entry.1293752853', formData.nome);
      formDataToSend.append('entry.1222330538', formData.email);
      formDataToSend.append('entry.996676258', formData.telefono);
      formDataToSend.append('entry.417819852', formData.utente);
      formDataToSend.append('entry.1185668983', formData.tipoEvento);
      formDataToSend.append('entry.984905371', formData.budget);
      formDataToSend.append('entry.811715166', formData.messaggio);

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors',
      });

      console.log('Form inviato con successo!', formData);
      alert('✅ Richiesta inviata! Ti contatteremo entro 24 ore.');
      onClose();
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        utente: '',
        tipoEvento: 'Laurea',
        budget: '',
        messaggio: ''
      });
    } catch (error) {
      console.error('Errore invio:', error);
      alert('❌ Errore nell\'invio. Contattaci direttamente su WhatsApp: +39 392 120 9212');
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
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">Nome e Cognome *</label>
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Mario Rossi" className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 placeholder-slate-400 text-base" required />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="mario.rossi@email.com" className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 placeholder-slate-400 text-base" required />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">Telefono</label>
            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="+39 389 257 4273" className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 placeholder-slate-400 text-base" />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">Nome Instagram</label>
            <input type="text" name="utente" value={formData.utente} onChange={handleChange} placeholder="@nomeinstagram" className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 placeholder-slate-400 text-base" />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">Tipo di Evento *</label>
            <select name="tipoEvento" value={formData.tipoEvento} onChange={handleChange} className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 font-medium shadow-sm cursor-pointer text-base">
              <option value="Laurea">🎓 Festa di Laurea</option>
              <option value="18 esimo">🎂 18° Compleanno</option>
              <option value="Compleanno">💕 Compleanno</option>
              <option value="Altro">🎉 Altro</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">Budget</label>
            <textarea name="budget" value={formData.budget} onChange={handleChange} placeholder="Dicci un po' quanto vorresti spendere." rows="1" className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 placeholder-slate-400 resize-none text-base"></textarea>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800 mb-2">Dettagli Evento</label>
            <textarea name="messaggio" value={formData.messaggio} onChange={handleChange} placeholder="Raccontaci il tuo evento ideale: data prevista, numero partecipanti, location preferita, servizi desiderati..." rows="3" className="w-full p-3 sm:p-4 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-200 bg-white hover:bg-amber-50/50 text-slate-800 placeholder-slate-400 resize-none text-base"></textarea>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-3 sm:p-4 rounded-xl border border-blue-200">
            <label className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700 cursor-pointer">
              <input type="checkbox" required className="mt-0.5 sm:mt-1 w-4 h-4 text-blue-900 border-2 border-slate-300 rounded focus:ring-blue-900 focus:ring-2 flex-shrink-0" />
              <span>Accetto il trattamento dei dati personali secondo la Privacy Policy. I tuoi dati verranno utilizzati esclusivamente per rispondere alla tua richiesta.</span>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button onClick={onClose} className="w-full sm:flex-1 py-3 sm:py-4 px-6 border-2 border-slate-300 rounded-xl text-slate-700 hover:bg-slate-100 hover:border-slate-400 font-semibold transition-all duration-200 hover:shadow-md text-base">
              Annulla
            </button>
            <button onClick={handleSubmit} className="w-full sm:flex-1 py-3 sm:py-4 px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white rounded-xl hover:from-blue-950 hover:via-blue-900 hover:to-amber-800 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base">
              Invia Richiesta ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChiSiamoPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <main className="w-full pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 z-10">
            <span className="text-4xl sm:text-5xl mb-3 sm:mb-4">✨</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
              Chi Siamo
            </h1>
            <p className="text-base sm:text-lg md:text-2xl max-w-3xl opacity-90">
              La passione per gli eventi che diventa realtà
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <nav className="text-xs sm:text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-900">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Chi Siamo</span>
            </nav>
          </div>
        </section>

        {/* La Nostra Storia */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-amber-50 to-stone-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                La Nostra Storia
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-amber-600 mx-auto"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 space-y-6">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                <strong className="text-blue-900">Adori Events</strong> nasce dalla passione e dall'esperienza maturata nel mondo dell'organizzazione eventi.
                Siamo un team giovane e dinamico, ma con un bagaglio di competenze consolidate nel settore.
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                La nostra esperienza proviene da <strong className="text-amber-700">Fast Life</strong>, realtà affermata nell'organizzazione di eventi
                di successo. Abbiamo portato con noi il know-how acquisito e la voglia di creare qualcosa di nuovo,
                mantenendo sempre al centro <em>la qualità</em> e <em>l'attenzione ai dettagli</em>.
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Oggi mettiamo a disposizione questa esperienza per realizzare i vostri eventi da sogno:
                feste di laurea indimenticabili, compleanni speciali, diciottesimi memorabili e molto altro.
              </p>
            </div>
          </div>
        </section>

        {/* I Nostri Valori */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                I Nostri Valori
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                Cosa ci guida ogni giorno nel creare esperienze uniche
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Valore 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 sm:p-8 rounded-2xl border border-blue-200/50 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4">💎</div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">Qualità</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Curiamo ogni dettaglio con la massima attenzione, perché il vostro evento merita solo il meglio.
                </p>
              </div>

              {/* Valore 2 */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 sm:p-8 rounded-2xl border border-amber-200/50 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4">🤝</div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">Affidabilità</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Dalla prima consulenza al giorno dell'evento, siamo sempre al vostro fianco.
                </p>
              </div>

              {/* Valore 3 */}
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 sm:p-8 rounded-2xl border border-blue-200/50 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4">🎨</div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">Creatività</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Trasformiamo le vostre idee in realtà con soluzioni originali e personalizzate.
                </p>
              </div>

              {/* Valore 4 */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 sm:p-8 rounded-2xl border border-amber-200/50 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4">⚡</div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">Dinamicità</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Siamo un team giovane, veloce e sempre pronto a trovare la soluzione giusta.
                </p>
              </div>

              {/* Valore 5 */}
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 sm:p-8 rounded-2xl border border-blue-200/50 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4">❤️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">Passione</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Amiamo quello che facciamo e si vede in ogni evento che organizziamo.
                </p>
              </div>

              {/* Valore 6 */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 sm:p-8 rounded-2xl border border-amber-200/50 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4">🎯</div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">Esperienza</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Anni di eventi di successo ci hanno insegnato come rendere speciale ogni occasione.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perché Sceglierci */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-amber-50 to-stone-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                Perché Scegliere Adori Events
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-amber-600 mx-auto mb-6"></div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* Punto 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Esperienza Consolidata</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Proveniamo da Fast Life, una realtà riconosciuta nel settore degli eventi. Portiamo con noi
                      anni di successi e la capacità di gestire ogni situazione con professionalità.
                    </p>
                  </div>
                </div>
              </div>

              {/* Punto 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-700 to-amber-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Approccio Personale</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Ogni evento è unico come le persone che lo vivono. Ascoltiamo le vostre esigenze e
                      creiamo soluzioni su misura per realizzare esattamente ciò che desiderate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Punto 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Serenità Garantita</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Ci occupiamo di tutto: dalla location agli allestimenti, dalla musica al catering.
                      Voi dovete solo godervi il vostro momento speciale, al resto pensiamo noi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Iniziamo a Creare Insieme
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-90 max-w-2xl mx-auto">
              Raccontaci la tua idea e la trasformeremo in un evento indimenticabile
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/3272567518?text=Ciao! Vorrei sapere di più su Adori Events e organizzare un evento."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white font-semibold rounded-2xl transition-all duration-500 hover:bg-green-600 hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <div className="relative flex items-center justify-center gap-3">
                  <span className="text-xl sm:text-2xl">💬</span>
                  <span className="text-sm sm:text-base">Contattaci su WhatsApp</span>
                </div>
              </a>

              {/* Preventivo Button */}
              <button
                onClick={() => setShowModal(true)}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-amber-600/20 backdrop-blur-sm border-2 border-amber-400/40 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-amber-600/30 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative flex items-center justify-center gap-3">
                  <span className="text-xl sm:text-2xl">📋</span>
                  <span className="text-sm sm:text-base">Richiedi Preventivo</span>
                </div>
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