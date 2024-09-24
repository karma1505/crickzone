"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { poppins } from "../fonts";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={`bg-gray-800 text-gray-300 py-10 ${poppins.variable} font-poppins`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image src="/logo.png" alt="Logo" width={150} height={50} />
              </motion.div>
            </Link>
            <p className="mt-4 text-sm">
              Elevating your on-pitch experience.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://facebook.com" aria-label="Facebook">
                <FaFacebook className="text-xl hover:text-blue-600 transition" />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <FaTwitter className="text-xl hover:text-blue-400 transition" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <FaInstagram className="text-xl hover:text-pink-500 transition" />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedin className="text-xl hover:text-blue-700 transition" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@yourdomain.com" className="hover:text-white transition">info@crickzone.com</a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition">+91 99990-98900</a>
              </li>
              <li>
                <address className="not-italic">123 Connaught Place, New Delhi</address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
          <p>&copy; 2024 Crickzone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
