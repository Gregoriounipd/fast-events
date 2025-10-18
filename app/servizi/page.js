"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dati servizi (solo COMPLEANNI)
const services = [
  {
    id: 'compleanni',
    title: 'Compleanni',
    icon: '🎂',
    shortDescription: 'Feste personali per ogni età',
    fullDescription: 'Compleanni indimenticabili per bambini, adulti e occasioni speciali. Ogni età merita una festa su misura che lasci ricordi indelebili.',
    features: [
      'Temi personalizzati per ogni età',
      'Animazione per bambini',
      'Torte artistiche su misura',
      'Giochi e attività',
      'Allestimenti scenografici',
      'Servizio catering completo',
      'Location indoor e outdoor'
    ],
    priceRange: 'Da €500',
    gradient: 'from-orange-400 to-amber-500',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    href: '/compleanni',
    image: '/images/compleanno-hero.jpg',
    stats: { eventi: '300+', soddisfazione: '97%' }
  },
  {
    id: 'feste-laurea',
    title: 'Feste di Laurea',
    icon: '🎓',
    shortDescription: 'Celebra il tuo traguardo con stile',
    fullDescription: 'Feste di laurea memorabili per celebrare il raggiungimento del tuo obiettivo accademico. Dalla location al catering, pensiamo a tutto noi.',
    features: [
      'Location universitarie e non',
      'Buffet e menu personalizzati',
      'Decorazioni a tema',
      'Servizio audio e video',
      'Animazione e intrattenimento',
      'Servizio fotografico',
      'Gadget personalizzati'
    ],
    priceRange: 'Da €800',
    gradient: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    href: '/feste-laurea',
    image: '/images/laurea-hero.jpg',
    stats: { eventi: '150+', soddisfazione: '95%' }
  }
];

// Altri servizi
const otherServices = [
  {
    icon: '🎉',
    title: 'Battesimi e Comunioni',
    description: 'Cerimonie religiose con allestimenti eleganti e catering raffinato',
    price: 'Da €600'
  },
  {
    icon: '💕',
    title: 'Anniversari',
    description: 'Celebra i momenti importanti con una festa su misura',
    price: 'Da €400'
  },
  {
    icon: '🎭',
    title: 'Eventi Privati',
    description: 'Feste ed eventi personalizzati per ogni occasione',
    price: 'Da €500'
  },
  {
    icon: '🎪',
    title: 'Feste a Tema',
    description: 'Eventi tematici creativi e coinvolgenti',
    price: 'Da €700'
  }
];

// Form preventivo veloce
function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    servizio: '',
    messaggio: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quick quote:', formData);
    alert('Richiesta inviata! Ti contatteremo presto.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Richiedi Preventivo Veloce</h3>
      
      <div className="space-y-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome e Cognome"
          value={formData.nome}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email"
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
        
        <select
          name="servizio"
          value={formData.servizio}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Seleziona servizio</option>
          <option value="feste-laurea">🎓 Feste di Laurea</option>
          <option value="compleanni">🎂 Compleanni</option>
          <option value="altro">🎉 Altro</option>
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
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
        >
          Invia Richiesta
        </button>
      </div>
    </div>
  );
}

export default function ServiziPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I Nostri Servizi
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Dalle feste di laurea ai compleanni più creativi. 
            Ogni occasione merita la perfezione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#servizi-principali"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Esplora i Servizi
            </a>
            <a
              href="#contatto-rapido"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Preventivo Gratuito
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-indigo-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Servizi</span>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Cosa Possiamo Organizzare per Te
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Con oltre 15 anni di esperienza nell&apos;organizzazione eventi, il nostro team
            di professionisti si dedica a creare esperienze uniche e indimenticabili. 
            Dalla pianificazione alla realizzazione, ci occupiamo di ogni dettaglio 
            per garantire il successo del vostro evento.
          </p>
        </div>
      </section>

      {/* Servizi Principali */}
      <section id="servizi-principali" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              I Nostri Servizi Principali
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ogni evento è unico. Scopri i nostri servizi specializzati e lasciati ispirare.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200"
              >
                {/* Service Header */}
                <div className={`${service.bgColor} p-8`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white text-3xl`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-600">A partire da</div>
                      <div className={`text-2xl font-bold ${service.textColor}`}>{service.priceRange}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Service Features */}
                <div className="p-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Cosa Include:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-green-500 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="flex gap-6 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-2xl font-bold text-gray-800">{service.stats.eventi}</div>
                      <div className="text-sm text-gray-600">Eventi organizzati</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">{service.stats.soddisfazione}</div>
                      <div className="text-sm text-gray-600">Clienti soddisfatti</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Link
                      href={service.href}
                      className={`flex-1 text-center bg-gradient-to-r ${service.gradient} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105`}
                    >
                      Scopri di Più
                    </Link>
                    <a
                      href="#contatto-rapido"
                      className={`flex-1 text-center border-2 border-gray-300 ${service.textColor} py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300`}
                    >
                      Preventivo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Altri Servizi */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Altri Servizi Disponibili
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  <div className="text-indigo-600 font-semibold">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Perché Scegliere Fast Events
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">15+ Anni di Esperienza</h3>
              <p className="text-gray-600">Oltre 500 eventi organizzati con successo in tutta Italia.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                💎
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Servizio Personalizzato</h3>
              <p className="text-gray-600">Ogni evento è unico. Creiamo soluzioni su misura per te.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Partner Affidabili</h3>
              <p className="text-gray-600">Collaboriamo solo con i migliori fornitori della regione.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section id="contatto-rapido" className="py-20 px-6 bg-white">
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contattaci Direttamente</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">📱</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">WhatsApp</div>
                      <div className="text-gray-600">+39 389 257 4273</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">✉️</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Email</div>
                      <div className="text-gray-600">info@fast-events.com</div>
                    </div>
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
      </section>
    </div>
  );
}
