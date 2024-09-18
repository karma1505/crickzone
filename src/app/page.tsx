import React from 'react';
import Hero from './sections/hero'; 
import { WelcomeSection } from './sections/WelcomeSection';

const Page = () => {
  return (
    <main>
      <Hero />
      <WelcomeSection />
    </main>
  );
};

export default Page;
