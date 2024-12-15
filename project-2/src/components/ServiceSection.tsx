import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: LucideIcon;
}

export function ServiceSection({ id, title, description, features, image, icon: Icon }: ServiceSectionProps) {
  return (
    <div id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Icon className="w-8 h-8 text-[#C4A484] mr-3" />
            <h2 className="text-4xl font-playfair">{title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <img
                src={image}
                alt={title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-6">{description}</p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#C4A484] rounded-full mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block mt-8 bg-[#C4A484] hover:bg-[#B08968] text-white px-8 py-3 rounded-full transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}