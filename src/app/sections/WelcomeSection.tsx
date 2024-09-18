"use client";

import React from "react";
import { motion } from "framer-motion";
import { poppins } from "../fonts"; 

export const WelcomeSection = () => {
  return (
    <section className={`relative bg-white py-16 px-4 sm:px-6 lg:px-8 ${poppins.variable} font-poppins`}>
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl sm:text-5xl text-gray-900"
        >
          WELCOME TO THE SPORTING HEART OF INDIA.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg sm:text-xl text-gray-900"
        >
          Your go-to platform for cricket tournaments.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
        </motion.div>
      </div>
    </section>
  );
};
