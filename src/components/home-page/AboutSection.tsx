import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-[#dfdfe5] to-[#a2b6c5]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section - Slide in from bottom */}
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <img
              src="/home-page/about-img.png"
              alt="Mechanic working on a car"
            />
          </motion.div>

          {/* Text Section - Slide in from right to left and animate every time in view */}
          <motion.div
            className="lg:w-1/2 lg:pl-16"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl font-bold mb-6">
              ABOUT <span className="text-nsauto-yellow">US</span>
            </h2>
            <p className="text-gray-700 mb-6">
              At NS Auto, we are your trusted car garage in Dubai, offering top-quality car services and repairs.
              With over 20 years in the UAE and a strong reputation for excellence, we provide comprehensive automotive care,
              from routine car service to specialized repairs. Our expertise includes car body kits, window tints,
              paint protection, and professional car painting. NS Auto’s customized warranty and service packages are
              designed to meet every client’s needs. Choose us for reliable, customer-focused solutions and experience premier
              automotive care.
            </p>
            <a
              href="#contact"
              className="inline-block bg-black text-white font-bold py-3 px-8 rounded hover:bg-nsauto-yellow hover:text-white transition duration-300"
            >
              READ MORE
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
