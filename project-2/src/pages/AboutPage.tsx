import React from 'react';

export function AboutPage() {
  return (
    <div className="pt-20">
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
          alt="Luxury Villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-playfair text-white text-center">Notre Histoire</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-playfair mb-6">Notre Vision</h2>
            <p className="text-gray-600 mb-4">
              Fondée sur la Côte d'Azur, Aura Conciergerie incarne l'excellence du service personnalisé.
              Notre mission est de transformer chaque demande en une expérience exceptionnelle, en alliant
              luxe, discrétion et attention aux détails.
            </p>
            <p className="text-gray-600">
              Nous nous engageons à offrir un service sur mesure qui dépasse les attentes de notre clientèle
              exigeante, en cultivant des relations privilégiées avec les meilleurs prestataires de la région.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-playfair mb-6">Notre Expertise</h2>
            <p className="text-gray-600 mb-4">
              Avec plus d'une décennie d'expérience dans le secteur du luxe, notre équipe maîtrise
              parfaitement les codes de l'excellence. Chaque membre de notre équipe est sélectionné
              pour son professionnalisme, sa discrétion et sa capacité à anticiper les besoins de nos clients.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-playfair mb-6">Nos Valeurs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-playfair mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Nous visons l'excellence dans chaque aspect de nos services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-playfair mb-3">Discrétion</h3>
                <p className="text-gray-600">
                  La confidentialité de nos clients est notre priorité absolue.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-playfair mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Nous anticipons les tendances pour offrir des services avant-gardistes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}