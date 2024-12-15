import React from 'react';
import { Instagram, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Compass className="w-8 h-8 text-[#C4A484]" />
              <span className="text-2xl font-playfair">Aura-Conciergerie.com</span>
            </div>
            <p className="text-gray-400">
              Service de conciergerie de luxe sur la Côte d'Azur
            </p>
          </div>

          <div>
            <h3 className="text-lg font-playfair mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#C4A484]">Accueil</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#C4A484]">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#C4A484]">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#C4A484]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-playfair mb-4">Suivez-nous</h3>
            <a 
              href="https://www.instagram.com/aura.conciergerie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-[#C4A484]"
            >
              <Instagram className="w-5 h-5" />
              <span>@aura.conciergerie</span>
            </a>
          </div>

          <div>
            <h3 className="text-lg font-playfair mb-4">Contact</h3>
            <p className="text-gray-400">Le plan de la tour, 83120 France</p>
            <p className="text-gray-400">06 22 10 33 24</p>
            <p className="text-gray-400">contact@aura-conciergerie.com</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aura-Conciergerie.com. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}