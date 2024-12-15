import React from 'react';
import { ServiceCard } from './ServiceCard';
import { services } from '../../data/services';

export function ServiceList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          image={service.image}
          icon={service.icon}
        />
      ))}
    </div>
  );
}