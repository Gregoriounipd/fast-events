'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const Section = ({ id, title, children }) => (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
      >
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        {expandedSections[id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {expandedSections[id] && (
        <div className="px-6 py-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-12">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-xl opacity-90">Adori Events</p>
          <p className="text-sm mt-2 opacity-75">Ultimo aggiornamento: 24 dicembre 2025</p>
        </div>

        <div className="p-8">
          {/* Titolare */}
          <Section id="titolare" title="1. Titolare del Trattamento">
            <div className="space-y-3">
              <p className="font-semibold text-lg text-purple-600">Adori Events</p>
              <div className="flex items-start gap-2 text-gray-700">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>[Inserire indirizzo completo]</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail size={18} className="flex-shrink-0" />
                <span>[inserire email]</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={18} className="flex-shrink-0" />
                <span>[inserire numero]</span>
              </div>
              <p className="text-gray-700">Partita IVA: [Inserire P.IVA]</p>
            </div>
          </Section>

          {/* Finalità */}
          <Section id="finalita" title="2. Finalità e Base Giuridica del Trattamento">
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-purple-700 mb-2">2.1 Organizzazione Eventi</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Gestione prenotazioni e registrazioni</li>
                  <li>Comunicazioni relative all'evento</li>
                  <li>Gestione pagamenti e fatturazione</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600">Base giuridica: esecuzione del contratto</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-blue-700 mb-2">2.2 Adempimenti Legali</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Obblighi fiscali e contabili</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600">Base giuridica: obbligo di legge</p>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-semibold text-pink-700 mb-2">2.3 Marketing (con consenso)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Invio newsletter e comunicazioni promozionali</li>
                  <li>Informazioni su nuovi eventi</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600">Base giuridica: consenso dell'interessato</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-green-700 mb-2">2.4 Miglioramento Servizi</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Analisi statistiche anonime</li>
                  <li>Feedback e sondaggi di soddisfazione</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600">Base giuridica: legittimo interesse</p>
              </div>
            </div>
          </Section>

          {/* Dati Raccolti */}
          <Section id="dati" title="3. Tipologie di Dati Raccolti">
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-800">Dati identificativi:</p>
                <p className="text-gray-700">nome, cognome, email, numero di telefono, indirizzo</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Dati di pagamento:</p>
                <p className="text-gray-700">informazioni necessarie per l'elaborazione dei pagamenti (tramite sistemi sicuri di terze parti)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Dati di navigazione:</p>
                <p className="text-gray-700">indirizzi IP, tipo di browser, sistema operativo (raccolti tramite cookie)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Dati fotografici e video:</p>
                <p className="text-gray-700">durante gli eventi possono essere scattate foto e realizzati video per documentazione e promozione</p>
              </div>
            </div>
          </Section>

          {/* Modalità di Trattamento */}
          <Section id="modalita" title="4. Modalità di Trattamento">
            <p className="text-gray-700 mb-3">I dati personali sono trattati con strumenti informatici e cartacei, adottando misure di sicurezza adeguate per prevenire:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Accessi non autorizzati</li>
              <li>Divulgazione impropria</li>
              <li>Modifica o distruzione illecita</li>
              <li>Perdita accidentale</li>
            </ul>
          </Section>

          {/* Conservazione */}
          <Section id="conservazione" title="5. Periodo di Conservazione">
            <p className="text-gray-700 mb-3">I dati saranno conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti:</p>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-gray-800">Dati contrattuali:</p>
                <p className="text-gray-700">10 anni dalla conclusione del rapporto (obblighi fiscali)</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-gray-800">Dati di marketing:</p>
                <p className="text-gray-700">fino a revoca del consenso</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-gray-800">Dati di navigazione:</p>
                <p className="text-gray-700">massimo 24 mesi</p>
              </div>
            </div>
          </Section>

          {/* Comunicazione */}
          <Section id="comunicazione" title="6. Comunicazione e Diffusione dei Dati">
            <p className="text-gray-700 mb-3">I dati personali potranno essere comunicati a:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Collaboratori e fornitori:</strong> per l'organizzazione degli eventi (catering, location, tecnici)</li>
              <li><strong>Professionisti:</strong> commercialisti, consulenti fiscali</li>
              <li><strong>Istituti bancari:</strong> per l'elaborazione dei pagamenti</li>
              <li><strong>Autorità competenti:</strong> in caso di obblighi di legge</li>
            </ul>
            <p className="mt-3 text-gray-700">I dati non saranno diffusi pubblicamente senza consenso esplicito.</p>
          </Section>

          {/* Diritti */}
          <Section id="diritti" title="8. Diritti dell'Interessato">
            <p className="text-gray-700 mb-3">Hai il diritto di:</p>
            <div className="space-y-2">
              {[
                { title: "Accesso", desc: "ottenere conferma dell'esistenza dei tuoi dati e riceverne copia" },
                { title: "Rettifica", desc: "correggere dati inesatti o incompleti" },
                { title: "Cancellazione", desc: "richiedere la cancellazione dei dati (diritto all'oblio)" },
                { title: "Limitazione", desc: "limitare il trattamento in casi specifici" },
                { title: "Portabilità", desc: "ricevere i dati in formato strutturato" },
                { title: "Opposizione", desc: "opporti al trattamento per motivi legittimi" },
                { title: "Revoca consenso", desc: "revocare in qualsiasi momento il consenso al marketing" }
              ].map((diritto, idx) => (
                <div key={idx} className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold text-purple-700">{diritto.title}:</p>
                  <p className="text-gray-700">{diritto.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-700">Per esercitare i tuoi diritti, contattaci a: <span className="text-purple-600 font-semibold">[inserire email privacy]</span></p>
          </Section>

          {/* Garante */}
          <Section id="garante" title="9. Reclamo all'Autorità Garante">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-3">Hai il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali:</p>
              <p className="font-semibold text-blue-900">Garante per la protezione dei dati personali</p>
              <p className="text-gray-700">Piazza Venezia, 11 - 00187 Roma</p>
              <p className="text-gray-700">Tel: +39 06.696771</p>
              <p className="text-gray-700">Email: garante@gpdp.it</p>
              <p className="text-gray-700">Web: www.garanteprivacy.it</p>
            </div>
          </Section>

          {/* Foto e Video */}
          <Section id="foto" title="11. Foto e Video agli Eventi">
            <div className="bg-pink-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-3">Durante i nostri eventi potrebbero essere scattate fotografie e realizzati video per scopi di:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                <li>Documentazione dell'evento</li>
                <li>Promozione su social media e sito web</li>
                <li>Marketing e pubblicità</li>
              </ul>
              <p className="text-gray-700">La partecipazione all'evento comporta il consenso implicito alla ripresa, salvo espressa opposizione da comunicare preventivamente agli organizzatori.</p>
            </div>
          </Section>

          {/* Footer con contatti */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contatti</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-purple-600" />
                <span>[inserire email privacy]</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-purple-600" />
                <span>[inserire numero]</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-purple-600 mt-1" />
                <span>[inserire indirizzo]</span>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-gray-500 italic">
              Adori Events si impegna a proteggere la tua privacy e a trattare i tuoi dati personali nel rispetto della normativa vigente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;