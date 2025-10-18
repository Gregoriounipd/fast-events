"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dati delle sale





export default function SalePage() {
  const [selectedType, setSelectedType] = useState("Tutti");
  const [selectedCapacity, setSelectedCapacity] = useState("Tutti");
  const [selectedLocation, setSelectedLocation] = useState("Tutte");
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);

  
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/30"></div>
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
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-indigo-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Sale</span>
          </nav>
        </div>
      </div>

      {/* Intro Section - Testo + Immagine */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Testo */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Location Selezionate con Cura
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Collaboriamo esclusivamente con le migliori location della Lombardia. 
                Ogni spazio è stato selezionato personalmente dal nostro team per garantire 
                qualità, eleganza e servizi impeccabili.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Che tu stia cercando una villa storica per un matrimonio da favola, 
                un castello affacciato sul lago, o un loft moderno per un evento corporate, 
                abbiamo la soluzione perfetta per te.
              </p>
              <div className="flex gap-4 items-center">
                <div className="text-4xl font-bold text-indigo-600">50+</div>
                <div className="text-gray-600">
                  <div className="font-semibold">Location Partner</div>
                  <div className="text-sm">In tutta la Lombardia</div>
                </div>
              </div>
            </div>

            {/* Immagine */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
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
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Immagine */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/images/servizio-location.jpg"
                alt="Il nostro servizio"
                fill
                className="object-cover"
              />
            </div>

            {/* Testo */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Perché Affidarsi a Noi
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Sopralluoghi Gratuiti</h3>
                    <p className="text-gray-600">
                      Ti accompagniamo a visitare le location senza alcun costo aggiuntivo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Prezzi Negoziati</h3>
                    <p className="text-gray-600">
                      Grazie alle nostre partnership ottieni tariffe esclusive.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Coordinamento Completo</h3>
                    <p className="text-gray-600">
                      Gestiamo ogni aspetto logistico con la location per te.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Non Trovi la Location Perfetta?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contattaci e troveremo insieme lo spazio ideale per il tuo evento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/3892574273?text=Ciao! Vorrei informazioni sulle vostre location."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              <span>💬</span>
              <span>Contattaci su WhatsApp</span>
            </a>
            <button
              onClick={() => setShowContactForm(true)}
              className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              <span>📧</span>
              <span>Richiedi Consulenza</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}