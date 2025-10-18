
import React from "react";
import { motion } from "framer-motion";
import VehicleCardGroup from "../vehicle-card/VehicleCardGroup";

export default function WindowTinting() {

  const services = [
    {
      title: "HATCHBACK",
      heading1: "Normal",
      price1: "AED 399",
      heading2: "3M",
      price2: "AED 999",
      isPopular: false,
    },
    {
      title: "Sedan",
      heading1: "Normal",
      price1: "AED 499",
      heading2: "3M",
      price2: "AED 1,199",
      isPopular: true,
    },
    {
      title: "SUV",
      heading1: "Normal",
      price1: "AED 599",
      heading2: "3M",
      price2: "AED 1,399",
      isPopular: false,
    },
  ];

  const features = [
    "Tints Available in 30% or 50%",
    "Normal Tints: 1-Year Warranty",
    "3M Tints: 5-Year Warranty"
  ];

  return (
    <div className="bg-white">
      {/* Info Section with Image */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Image Column */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img 
              src="/services/window-tinting/window-tinting-img-1.png" 
              alt="Window Tinting Service" 
              className="w-full"
            />
          </motion.div>
          
          {/* Text Column */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-black">WINDOW </span>
              <span className="text-nsauto-yellow">TINTING</span>
            </h1>
            <p className="text-lg mb-6">
              Experience the best in window tinting in Dubai, designed to enhance your vehicle's appearance while providing UV protection and increased privacy. Trust our experts to deliver high-quality installations tailored to your needs.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="mt-1 flex-shrink-0 me-2">
                    <img
                      src="/icons/tik.svg"
                      alt="Checkmark"
                      className="w-5 h-5"
                    />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Section */}
      <div
        className="relative py-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(/services/window-tinting/window-tintinimg-2.png)`,
        }}
      >
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <VehicleCardGroup packages={services} />
        </div>
      </div>
    </div>
  );
}