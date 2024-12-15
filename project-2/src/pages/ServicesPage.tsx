import React from 'react';
import { Anchor, Car, Ship, Home, Calendar, ChefHat, Flower2 } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceSection } from '../components/ServiceSection';

const services = [
  {
    id: 'gestion-proprietes',
    icon: Home,
    title: 'Gestion de Propriétés',
    description: 'Service complet de gestion immobilière incluant maintenance, sécurité et conciergerie personnalisée.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    features: [
      'Maintenance préventive et réactive',
      'Sécurité 24/7',
      'Services de ménage premium',
      'Gestion des locations saisonnières',
      'Coordination des travaux',
    ],
    fullDescription: 'Notre service de gestion de propriétés offre une solution complète pour les propriétaires exigeants. Nous prenons en charge l\'ensemble des aspects de la gestion immobilière, de la maintenance quotidienne à la sécurité, en passant par les services de conciergerie personnalisée.'
  },
  {
    id: 'evenements',
    icon: Calendar,
    title: 'Événements sur Mesure',
    description: 'Organisation d\'événements exclusifs, de la conception à la réalisation, avec une attention particulière aux détails.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    features: [
      'Planification complète d\'événements',
      'Sélection des meilleurs prestataires',
      'Décoration sur mesure',
      'Coordination le jour J',
      'Service traiteur haut de gamme',
    ],
    fullDescription: 'Nous créons des événements uniques et mémorables, parfaitement adaptés à vos désirs. Notre équipe s\'occupe de chaque détail, de la conception initiale à la réalisation finale, pour garantir une expérience exceptionnelle.'
  },
  {
    id: 'chef-domicile',
    icon: ChefHat,
    title: 'Chefs à Domicile',
    description: 'Expériences culinaires uniques avec des chefs étoilés, menus personnalisés et service impeccable.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80',
    features: [
      'Chefs étoilés disponibles',
      'Menus personnalisés',
      'Accords mets et vins',
      'Service de table professionnel',
      'Événements culinaires spéciaux',
    ],
    fullDescription: 'Vivez une expérience gastronomique unique dans le confort de votre domicile. Nos chefs talentueux créent des menus sur mesure et offrent un service impeccable pour des moments inoubliables.'
  },
  {
    id: 'location-bateaux',
    icon: Ship,
    title: 'Location de Bateaux',
    description: 'Accès aux plus beaux yachts de la Côte d\'Azur avec équipage professionnel et service personnalisé.',
    image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80',
    features: [
      'Sélection de yachts premium',
      'Équipage professionnel',
      'Itinéraires personnalisés',
      'Service de restauration à bord',
      'Activités nautiques',
    ],
    fullDescription: 'Découvrez la Côte d\'Azur depuis la mer avec notre service de location de yachts. Nous vous proposons les plus beaux bateaux avec équipage professionnel pour des moments d\'exception.'
  },
  {
    id: 'chauffeur-prive',
    icon: Car,
    title: 'Chauffeur Privé',
    description: 'Service de transport haut de gamme avec chauffeurs expérimentés et véhicules de luxe.',
    image: 'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&q=80',
    features: [
      'Véhicules haut de gamme',
      'Chauffeurs expérimentés',
      'Service 24/7',
      'Transferts aéroport',
      'Circuits touristiques privés',
    ],
    fullDescription: 'Notre service de chauffeur privé vous garantit des déplacements en toute sérénité. Profitez du confort de nos véhicules de luxe et de l\'expertise de nos chauffeurs professionnels.'
  },
  {
    id: 'bien-etre',
    icon: Flower2,
    title: 'Services de bien-être',
    description: 'Réservation de spas exclusifs ou de soins à domicile, accompagnement personnalisé avec des coachs fitness et yoga.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80',
    features: [
      'Massages à domicile',
      'Cours de yoga privés',
      'Personal training',
      'Soins esthétiques',
      'Accès aux meilleurs spas',
    ],
    fullDescription: 'Prenez soin de vous avec nos services de bien-être personnalisés. De la réservation de spas aux séances de coaching privées, nous vous accompagnons dans votre quête de bien-être.'
  }
];

export function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#F8F5F1] py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair text-center mb-8">Nos Services</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Découvrez notre gamme complète de services de conciergerie de luxe,
            conçue pour répondre à vos besoins les plus exigeants.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {services.map((service) => (
        <ServiceSection
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.fullDescription}
          features={service.features}
          image={service.image}
          icon={service.icon}
        />
      ))}
    </div>
  );
}