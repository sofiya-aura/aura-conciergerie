import React from 'react';
import { Shield, UserCheck, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Discrétion absolue',
    description: 'Votre vie privée est notre priorité absolue.'
  },
  {
    icon: UserCheck,
    title: 'Service personnalisé',
    description: 'Des solutions sur mesure adaptées à vos besoins.'
  },
  {
    icon: Star,
    title: 'Expertise de luxe',
    description: 'Une équipe d\'experts dédiée à l\'excellence.'
  }
];

export function WhyUs() {
  return (
    <section className="py-20 bg-[#F8F5F1]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center mb-16">
          Pourquoi Aura Conciergerie ?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-block p-4 rounded-full bg-[#C4A484] mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-playfair mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}