import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '../components/contact/ContactForm';

export function ContactPage() {
  return (
    <div className="pt-20">
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1536854150886-354a3b64b7d9?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-playfair text-center mb-16 text-white">
              Contactez-nous
            </h1>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Informations de contact */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-3xl font-playfair mb-8">
                  Informations de Contact
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-[#C4A484] mr-4" />
                    <div>
                      <p className="font-semibold">Téléphone</p>
                      <p className="text-gray-600">06 22 10 33 24</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-[#C4A484] mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">contact@aura-conciergerie.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-[#C4A484] mr-4" />
                    <div>
                      <p className="font-semibold">Adresse</p>
                      <p className="text-gray-600">Le plan de la tour, 83120 France</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-3xl font-playfair mb-8">
                  Envoyez-nous un message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}