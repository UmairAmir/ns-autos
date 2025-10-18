import React from "react";
import { motion } from "framer-motion";
import CylinderCardGroup from "../../cyliner-card/CylinderCardGroup";
import ServiceFeatures from "./ServiceFeatures";

type ServiceSectionProps = {
  title: string;
  services: {
    cylinderCount: string;
    standardPrice: string;
luxuryPrice: string;

    features: string[];
    isPopular?: boolean;
  }[];
  serviceItems: string[];
  carImage: string;
  id: string;
};

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  services,
  serviceItems,
  carImage,
  id,
}) => {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4 ">
        <motion.h2
          className="text-6xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center text-5xl">
            <span className="text-black">{title.split(" ")[0]} </span>
            <span className="text-nsauto-yellow">{title.split(" ")[1]}</span>
          </div>
        </motion.h2>

        <ServiceFeatures title={title} features={serviceItems} />

        <div className="relative">
          {/* Car image absolutely positioned inside the parent container */}
          <motion.div
            className={`absolute z-10 ${
              title === "MINOR SERVICE" ? "right-0 bottom-0" : "left-0 bottom-0"
            } w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72`}
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 180 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <img src={carImage} alt="Car" className="w-full" />
          </motion.div>

          {/* Cylinder Cards grid */}
          <div className="relative z-0 mt-20">
            <CylinderCardGroup packages={services} />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="inline-flex items-center bg-nsauto-black text-white px-6 py-2 hover:bg-nsauto-yellow"
          >
            KNOW MORE <span className="ml-2">+</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
