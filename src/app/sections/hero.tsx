"use client";
import React from 'react';
import { FloatingDockDemo } from '../components/navbar'; // Adjust path if needed
import { IconChevronDown } from '@tabler/icons-react'; // Import the Icon
import { poppins } from "../fonts";

const Hero: React.FC = () => {
  return (
    <>
      <FloatingDockDemo />

      <section className={`relative flex items-center justify-center h-screen bg-cover bg-center ${poppins.variable} font-poppins`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center px-4 md:px-8 lg:px-16">
          <h1 className="text-6xl md:text-6xl lg:text-8xl xl:text-9xl text-white ease-in">
            CRICKZONE
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200">
            Join the Ultimate Cricket Experience
          </p>
        </div>

        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2">
          <IconChevronDown className="h-10 w-10 md:h-12 md:w-12 text-white animate-bounce" />
        </div>
      </section>
    </>
  );
};

export default Hero;
