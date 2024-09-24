"use client";
import React from 'react';
import { poppins } from "../fonts";

const AboutUs: React.FC = () => {
  return (
    <section className={`relative bg-[#F9F6EE] py-16 px-4 sm:px-6 lg:px-8  ${poppins.variable} font-poppins`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className={`text-3xl text-black sm:text-4xl`}>
          About Us
        </h2>
        <p className="mt-4 text-lg text-black">
          Crickzone is your one-stop platform for hosting and managing cricket tournaments, whether local or international.
          We provide real-time scoring, scheduling, and team management tools to make organizing cricket tournaments a breeze.
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl text-black">
            Our Vision
          </h3>
          <p className="mt-4 text-black">
            To revolutionize cricket tournament management by making it easier, faster, and more accessible for everyone.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl text-black">
            Our Mission
          </h3>
          <p className="mt-4 text-black">
            Empower teams and organizers to focus on the game while we handle the logistics with our comprehensive platform.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl  text-black">
            Why Choose Us?
          </h3>
          <p className="mt-4 text-black">
            Our platform is built with cutting-edge technology, designed to streamline every aspect of cricket tournament management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
