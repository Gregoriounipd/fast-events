"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function SalePage() {
  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-[#1A237E] via-[#283593] to-[#1A237E]">
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
                Collaboriamo esclusivamente con le migliori location della Lombardia. 
                Ogni spazio è stato selezionato personalmente dal nostro team per garantire 
                qualità, eleganza e servizi impeccabili.
              </p>
              <p className="text-lg text-[#424242] leading-relaxed mb-6">
                Che tu stia cercando una villa storica per un matrimonio da favola, 
                un castello affacciato sul lago, o un loft moderno per un evento corporate, 
                abbiamo la soluzione perfetta per te.
              </p>
              <div className="flex gap-4 items-center">
                <div className="text-5xl font-bold text-[#D4AF37]">50+</div>
                <div className="text-[#424242]">
                  <div className="font-semibold text-[#1A237E]">Location Partner</div>
                  <div className="text-sm">In tutta la Lombardia</div>
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

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#1A237E] via-[#283593] to-[#1A237E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Non Trovi la Location Perfetta?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contattaci e troveremo insieme lo spazio ideale per il tuo evento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/3892574273?text=Ciao! Vorrei informazioni sulle vostre location."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#1A237E] px-8 py-4 rounded-full font-bold hover:bg-[#DAB86A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="text-xl">💬</span>
              <span>Contattaci su WhatsApp</span>
            </a>
            <a
              href="#contatti"
              className="inline-flex items-center gap-3 border-2 border-[#D4AF37] text-white px-8 py-4 rounded-full font-bold hover:bg-[#D4AF37] hover:text-[#1A237E] transition-all duration-300"
            >
              <span className="text-xl">📧</span>
              <span>Richiedi Consulenza</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}