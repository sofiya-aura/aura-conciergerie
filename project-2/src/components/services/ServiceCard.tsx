import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-scroll';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export function ServiceCard({ id, title, description, image, icon: Icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
      </div>
      <div className="p-8">
        <div className="flex items-center mb-4">
          <Icon className="w-6 h-6 text-[#C4A484] mr-2" />
          <h3 className="text-2xl font-playfair">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link
          to={id}
          smooth={true}
          duration={500}
          className="block w-full bg-[#C4A484] hover:bg-[#B08968] text-white py-3 rounded-full transition-colors text-center cursor-pointer"
        >
          Découvrir
        </Link>
      </div>
    </div>
  );
}