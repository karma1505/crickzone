"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { poppins } from "../fonts";

export const WelcomeSection = () => {
  return (
    <section className={`relative bg-[#F9F6EE] py-16 px-4 sm:px-6 lg:px-8 ${poppins.variable} font-poppins`}>
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-6xl sm:text-5xl text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ease: "easeOut" }}
        >
          WELCOME TO THE SPORTING HEART OF INDIA.
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", delay: 0.2 }}
        >
          Your go-to platform for cricket tournaments.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ease: "easeOut", delay: 0.2 }}
        >
          <CrickzoneCards />
        </motion.div>
      </div>
    </section>
  );
};

export const CrickzoneCards = () => {
  const cards = [
    {
      title: "Exciting Tournaments",
      description: "Join thrilling cricket tournaments that bring together teams from all over. Compete, score big, and rise to the top!",
      image: "/card1.jpg", 
      delay: 0.2,
    },
    {
      title: "Celebrate Every Victory",
      description: "Celebrate every hard-earned victory with your team. Every run counts, every win matters!",
      image: "/cricket2.jpg", 
      delay: 0.4,
    },
    {
      title: "The Spirit of the Game",
      description: "Enjoy cricket not just as a game, but as a celebration of sportsmanship and teamwork. Play hard, play fair!",
      image: "/card3.jpg", 
      delay: 0.6,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="bg-gray-100 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: card.delay }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-full h-48">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-2xl mt-4 text-black">{card.title}</h3>
          <p className="text-gray-700 mt-2">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
};
