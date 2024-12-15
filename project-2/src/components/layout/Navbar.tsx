import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="w-8 h-8 text-[#C4A484]" />
            <span className="text-2xl font-playfair">Aura Conciergerie</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-[#C4A484]' : 'text-gray-600'
              } hover:text-[#C4A484] transition-colors`}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className={`${
                isActive('/services') ? 'text-[#C4A484]' : 'text-gray-600'
              } hover:text-[#C4A484] transition-colors`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-[#C4A484]' : 'text-gray-600'
              } hover:text-[#C4A484] transition-colors`}
            >
              À Propos
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-[#C4A484]' : 'text-gray-600'
              } hover:text-[#C4A484] transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}