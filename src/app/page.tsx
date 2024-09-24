import React from 'react';
import Hero from './sections/hero'; 
import { WelcomeSection } from './sections/WelcomeSection';
import TournamentRegistrationForm from './sections/registration';
import '../app/globals.css';
import Footer from './sections/Footer';

const Page: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <Hero />
        <WelcomeSection />
        <TournamentRegistrationForm />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
