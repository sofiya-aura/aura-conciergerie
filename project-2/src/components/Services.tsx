import React from 'react';
import { Home, Calendar, ChefHat } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Gestion de Propriétés',
    description: 'Une gestion complète et personnalisée de vos biens immobiliers.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80'
  },
  {
    icon: Calendar,
    title: 'Événements sur Mesure',
    description: 'Organisation d\'événements exclusifs adaptés à vos désirs.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80'
  },
  {
    icon: ChefHat,
    title: 'Chefs à Domicile',
    description: 'Une expérience gastronomique unique dans le confort de votre demeure.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80'
  }
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center mb-16">Nos Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.title} className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="text-center">
                <service.icon className="w-8 h-8 mx-auto mb-4 text-[#C4A484]" />
                <h3 className="text-2xl font-playfair mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}