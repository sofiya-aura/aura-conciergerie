import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WhyUs } from '../components/WhyUs';

export function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyUs />
    </div>
  );
}