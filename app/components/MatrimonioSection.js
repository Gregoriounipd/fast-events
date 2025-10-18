"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dati dei pacchetti matrimonio
const weddingPackages = [
  {
    id: 'essential',
    name: 'Essential',
    price: '3.500',
    description: 'Perfetto per matrimoni intimi',
    features: [
      'Coordinamento giorno evento',
      'Allestimento base cerimonia',
      'Bouquet sposa + boutonnière',
      'Servizio fotografico (4 ore)',
      'Aperitivo di benvenuto',
      'Menu 3 portate per 50 persone'
    ],
    highlight: false,
    gradient: 'from-rose-400 to-pink-400'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '6.500',
    description: 'Il matrimonio che hai sempre sognato',
    features: [
      'Tutto del pacchetto Essential',
      'Wedding planner dedicato',
      'Allestimento floreale completo',
      'Servizio foto + video (8 ore)',
      'Aperitivo + open bar',
      'Menu 4 portate per 100 persone',
      'Intrattenimento musicale',
      'Wedding cake personalizzata'
    ],
    highlight: true,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'luxury',
    name: 'Luxury',
    price: 'Su misura',
    description: 'Lusso e personalizzazione totale',
    features: [
      'Tutto del pacchetto Premium',
      'Location esclusiva',
      'Allestimenti di design',
      'Servizio foto/video cinematic',
      'Chef stellato',
      'Menù degustazione',
      'Intrattenimento live',
      'Servizio maggiordomo',
      'Wedding favors personalizzati'
    ],
    highlight: false,
    gradient: 'from-amber-400 to-orange-500'
  }
];

// Servizi aggiuntivi
const additionalServices = [
  {
    icon: '💐',
    title: 'Allestimenti Floreali',
    description: 'Bouquet, centrotavola e decorazioni su misura',
    price: 'Da €500'
  },
  {
    icon: '📸',
    title: 'Servizio Fotografico',
    description: 'Reportage matrimonio con fotografo professionista',
    price: 'Da €800'
  },
  {
    icon: '🎵',
    title: 'Intrattenimento',
    description: 'DJ, band live, animazione per ogni momento',
    price: 'Da €400'
  },
  {
    icon: '🚗',
    title: 'Trasporti',
    description: 'Auto d\'epoca, limousine per sposi e invitati',
    price: 'Da €300'
  },
  {
    icon: '💒',
    title: 'Location',
    description: 'Ville, castelli, agriturismi in locations da sogno',
    price: 'Da €1.200'
  },
  {
    icon: '🍰',
    title: 'Wedding Cake',
    description: 'Torte nuziali artistiche e personalizzate',
    price: 'Da €250'
  }
];

// Componente form per richiesta preventivo matrimonio
function WeddingQuoteForm() {
  const [formData, setFormData] = useState({
    nomeSposa: '',
    nomeSposo: '',
    email: '',
    telefono: '',
    dataMatrimonio: '',
    numeroInvitati: '',
    pacchetto: '',
    servizi: [],
    budget: '',
    messaggio: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Wedding quote:', formData);
    alert('Richiesta matrimonio inviata! Vi contatteremo presto per organizzare il vostro giorno speciale.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (serviceId) => {
    setFormData({
      ...formData,
      servizi: formData.servizi.includes(serviceId)
        ? formData.servizi.filter(s => s !== serviceId)
        : [...formData.servizi, serviceId]
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-rose-100">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Richiedi Preventivo Matrimonio</h3>
        <p className="text-gray-600">Raccontaci del vostro giorno speciale</p>
      </div>
      
      <div className="space-y-6">
        {/* Nomi sposi */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Sposa</label>
            <input
              type="text"
              name="nomeSposa"
              placeholder="Nome della sposa"
              value={formData.nomeSposa}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Sposo</label>
            <input
              type="text"
              name="nomeSposo"
              placeholder="Nome dello sposo"
              value={formData.nomeSposo}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
              required
            />
          </div>
        </div>

        {/* Contatti */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email@esempio.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Telefono</label>
            <input
              type="tel"
              name="telefono"
              placeholder="+39 333 123 4567"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
            />
          </div>
        </div>

        {/* Dettagli matrimonio */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Data Matrimonio</label>
            <input
              type="date"
              name="dataMatrimonio"
              value={formData.dataMatrimonio}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Numero Invitati</label>
            <select
              name="numeroInvitati"
              value={formData.numeroInvitati}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
            >
              <option value="">Seleziona...</option>
              <option value="20-50">20-50 persone</option>
              <option value="50-100">50-100 persone</option>
              <option value="100-150">100-150 persone</option>
              <option value="150-200">150-200 persone</option>
              <option value="200+">200+ persone</option>
            </select>
          </div>
        </div>

        {/* Pacchetto */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Pacchetto di Interesse</label>
          <select
            name="pacchetto"
            value={formData.pacchetto}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
          >
            <option value="">Seleziona pacchetto...</option>
            <option value="essential">💒 Essential (€3.500)</option>
            <option value="premium">👑 Premium (€6.500)</option>
            <option value="luxury">💎 Luxury (Su misura)</option>
            <option value="personalizzato">✨ Pacchetto personalizzato</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Orientativo</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
          >
            <option value="">Seleziona range...</option>
            <option value="3000-5000">€3.000 - €5.000</option>
            <option value="5000-8000">€5.000 - €8.000</option>
            <option value="8000-12000">€8.000 - €12.000</option>
            <option value="12000-20000">€12.000 - €20.000</option>
            <option value="20000+">€20.000+</option>
          </select>
        </div>

        {/* Messaggio */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Il Vostro Matrimonio da Sogno</label>
          <textarea
            name="messaggio"
            placeholder="Raccontateci la vostra storia e come immaginate il vostro matrimonio perfetto..."
            rows="4"
            value={formData.messaggio}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all resize-none"
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Richiedi Preventivo Matrimonio 💕
        </button>
      </div>
    </div>
  );
}

export default function MatrimonioSection() {
  const [selectedPackage, setSelectedPackage] = useState('premium');

  return (
    <section id="matrimonio-dettagli" className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
            <span className="text-3xl">💒</span>
            <span className="text-lg font-semibold text-gray-600">Matrimoni</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Il Vostro Giorno
            </span>
            <br />
            <span className="text-gray-800">Perfetto</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trasformiamo il vostro sogno d'amore in una realtà indimenticabile. 
            Ogni dettaglio curato con passione per il giorno più importante della vostra vita.
          </p>
        </div>

        {/* Pacchetti Matrimonio */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">I Nostri Pacchetti Matrimonio</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:scale-105 ${
                  pkg.highlight 
                    ? 'border-purple-200 ring-4 ring-purple-100' 
                    : 'border-gray-100 hover:border-rose-200'
                }`}
              >
                {/* Badge per pacchetto consigliato */}
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      ⭐ Più Scelto
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header pacchetto */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${pkg.gradient} text-white mb-4`}>
                      <span className="text-3xl">💍</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h4>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="text-4xl font-bold">
                      {pkg.price === 'Su misura' ? (
                        <span className="text-gray-800">Su misura</span>
                      ) : (
                        <>
                          <span className="text-gray-800">€{pkg.price}</span>
                          <span className="text-lg text-gray-500 font-normal">/evento</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-500 text-lg flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.highlight
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {pkg.highlight ? 'Scegli Premium' : 'Scopri di Più'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Servizi Aggiuntivi */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Servizi Aggiuntivi</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-rose-200 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="text-rose-600 font-semibold">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perché scegliere noi per il matrimonio */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Perché Affidarci il Vostro Matrimonio</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                💕
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Passione Autentica</h4>
              <p className="text-gray-600">Ogni matrimonio è unico per noi. Mettiamo il cuore in ogni dettaglio.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🎨
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Creatività Senza Limiti</h4>
              <p className="text-gray-600">Realizziamo le vostre idee più creative con stile e originalità.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🤵👰
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Esperienza Dedicata</h4>
              <p className="text-gray-600">Oltre 200 matrimoni organizzati. Ogni coppia ha la sua storia speciale.</p>
            </div>
          </div>
        </div>

        {/* Form e CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <WeddingQuoteForm />
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-4">Consulenza Gratuita</h4>
              <p className="text-lg mb-6 opacity-90">
                Vi offriamo sempre un primo incontro gratuito per conoscervi e capire insieme come realizzare il vostro matrimonio perfetto.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Chiamaci ora</div>
                  <div className="opacity-90">+39 392 120 9212</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Pacchetti All-Inclusive</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Coordinamento completo giorno evento</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Wedding planner dedicato</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Fornitori di fiducia selezionati</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Supporto pre e post matrimonio</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link
                href="/matrimoni"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>💒</span>
                <span>Scopri Tutti i Dettagli</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}