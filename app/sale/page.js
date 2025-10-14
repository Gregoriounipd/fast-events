"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dati delle sale
const venues = [
  {
    id: 1,
    name: "Villa Romantica",
    type: "Villa Storica",
    location: "Monza, Brianza",
    capacity: "50-150 persone",
    description: "Una meravigliosa villa del XVIII secolo immersa in un parco secolare. Perfetta per matrimoni eleganti e ricevimenti esclusivi. Gli interni affrescati e i giardini all'italiana creano un'atmosfera da favola.",
    features: ["Giardino privato", "Parcheggio custodito", "Cucina interna", "Suite sposi"],
    priceRange: "€€€",
    image: "/images/villa1.jpg",
    gallery: ["/images/villa1.jpg", "/images/villa1-int.jpg", "/images/villa1-giardino.jpg"]
  },
  {
    id: 2,
    name: "Castello del Lago",
    type: "Castello",
    location: "Como",
    capacity: "100-300 persone",
    description: "Castello medievale affacciato sul Lago di Como. Un'esperienza unica tra storia e natura. Le sale affrescate e la torre panoramica offrono scenari mozzafiato per il vostro evento indimenticabile.",
    features: ["Vista lago", "Sale storiche", "Terrazza panoramica", "Cantina vini"],
    priceRange: "€€€€",
    image: "/images/castello1.jpg",
    gallery: ["/images/castello1.jpg", "/images/castello1-sala.jpg", "/images/castello1-terrazza.jpg"]
  },
  {
    id: 3,
    name: "Cascina Moderna",
    type: "Agriturismo Chic",
    location: "Lecco",
    capacity: "30-120 persone",
    description: "Cascina ristrutturata con stile contemporaneo, circondata da vigneti e ulivi. Ideale per chi cerca un'atmosfera rustica ma raffinata. La cucina a km zero e gli spazi all'aperto rendono ogni evento speciale.",
    features: ["Cucina km zero", "Spazi esterni", "Piscina", "Area bambini"],
    priceRange: "€€",
    image: "/images/cascina1.jpg",
    gallery: ["/images/cascina1.jpg", "/images/cascina1-tavoli.jpg", "/images/cascina1-esterni.jpg"]
  },
  {
    id: 4,
    name: "Loft Industriale",
    type: "Spazio Urbano",
    location: "Milano",
    capacity: "40-200 persone",
    description: "Loft moderno nel cuore di Milano, perfetto per eventi aziendali e feste contemporanee. L'architettura industriale con soffitti alti e ampie vetrate crea un'atmosfera unica e versatile.",
    features: ["Design moderno", "A/V professionale", "Zona lounge", "Catering interno"],
    priceRange: "€€€",
    image: "/images/loft1.jpg",
    gallery: ["/images/loft1.jpg", "/images/loft1-sala.jpg", "/images/loft1-setup.jpg"]
  },
  {
    id: 5,
    name: "Terrazza Panoramica",
    type: "Rooftop",
    location: "Milano Centro",
    capacity: "20-80 persone",
    description: "Terrazza esclusiva con vista a 360° sulla città. Perfetta per aperitivi, cene private e piccoli ricevimenti. Il tramonto sullo skyline milanese rende ogni momento magico e fotografabile.",
    features: ["Vista città", "Bar attrezzato", "Clima controllato", "DJ set"],
    priceRange: "€€€€",
    image: "/images/terrazza1.jpg",
    gallery: ["/images/terrazza1.jpg", "/images/terrazza1-sunset.jpg", "/images/terrazza1-party.jpg"]
  },
  {
    id: 6,
    name: "Relais di Campagna",
    type: "Country House",
    location: "Bergamo",
    capacity: "60-180 persone",
    description: "Relais immerso nelle colline bergamasche con camere per gli ospiti. Ideale per matrimoni di più giorni. Gli spazi interni ed esterni permettono di creare diverse atmosfere durante l'evento.",
    features: ["Camere ospiti", "Spa & wellness", "Piscina", "Cappella privata"],
    priceRange: "€€€",
    image: "/images/relais1.jpg",
    gallery: ["/images/relais1.jpg", "/images/relais1-camere.jpg", "/images/relais1-piscina.jpg"]
  }
];

// Filtri
const filterOptions = {
  types: ["Tutti", "Villa Storica", "Castello", "Agriturismo Chic", "Spazio Urbano", "Rooftop", "Country House"],
  capacities: ["Tutti", "Fino a 50", "50-100", "100-200", "200+"],
  locations: ["Tutte", "Milano", "Monza", "Como", "Lecco", "Bergamo"]
};

export default function SalePage() {
  const [selectedType, setSelectedType] = useState("Tutti");
  const [selectedCapacity, setSelectedCapacity] = useState("Tutti");
  const [selectedLocation, setSelectedLocation] = useState("Tutte");
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);

  // Filtra le sale
  const filteredVenues = venues.filter(venue => {
    const typeMatch = selectedType === "Tutti" || venue.type === selectedType;
    const locationMatch = selectedLocation === "Tutte" || venue.location.includes(selectedLocation);
    // Capacity filter logic qui
    return typeMatch && locationMatch;
  });

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

      {/* Filtri */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {filterOptions.types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {filterOptions.locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>

            <select
              value={selectedCapacity}
              onChange={(e) => setSelectedCapacity(e.target.value)}
              className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {filterOptions.capacities.map(cap => (
                <option key={cap} value={cap}>{cap}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Grid Sale */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Esplora le Nostre Location
            </h2>
            <p className="text-xl text-gray-600">
              {filteredVenues.length} location disponibili
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVenues.map((venue) => (
              <div
                key={venue.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Immagine */}
                <div className="relative h-64">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    {venue.priceRange}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {venue.name}
                      </h3>
                      <p className="text-sm text-indigo-600 font-medium">{venue.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <span>📍</span>
                    <span>{venue.location}</span>
                    <span>•</span>
                    <span>👥 {venue.capacity}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {venue.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {venue.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedVenue(venue)}
                      className="flex-1 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all font-medium"
                    >
                      Dettagli
                    </button>
                    <button
                      onClick={() => {
                        setSelectedVenue(venue);
                        setShowContactForm(true);
                      }}
                      className="flex-1 py-2 border-2 border-indigo-500 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all font-medium"
                    >
                      Richiedi Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
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