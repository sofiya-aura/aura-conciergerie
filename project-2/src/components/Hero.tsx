import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-playfair mb-6 text-center">
          L'élégance à portée de main
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-center font-light">
          Votre service sur mesure
        </p>
        <div className="flex gap-6">
          <Link 
            to="/services" 
            className="bg-[#C4A484] hover:bg-[#B08968] text-white px-8 py-3 rounded-full transition-colors"
          >
            Explorez nos services
          </Link>
          <Link 
            to="/contact"
            className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8" />
      </div>
    </div>
  );
}