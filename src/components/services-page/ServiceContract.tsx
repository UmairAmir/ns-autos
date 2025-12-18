
import React from "react";
import { motion } from "framer-motion";
import CylinderCardGroup from "../cyliner-card/CylinderCardGroup";
import ServicesOverview from "../home-page/ServicesOverview";
import AboutSection from "../home-page/AboutSection";
import WhyChooseUs from "../home-page/WhyChooseUs";
import CTASection from "../home-page/CTASection";
import FAQSection from "../home-page/FAQSection";

export default function ServiceContract() {
  const services = [
    {
      cylinderCount: "4 CYLINDER",
      standardPrice: "AED 1,499",
      luxuryPrice: "AED 1,999",
      isPopular: false,
    },
    {
      cylinderCount: "6 CYLINDER",
      standardPrice: "AED 2,699",
      luxuryPrice: "AED 3,199",
      isPopular: true,
    },
    {
      cylinderCount: "8 CYLINDER",
      standardPrice: "AED 3,699",
      luxuryPrice: "AED 4,199",
      isPopular: false,
    },
  ];

  const features = [
    "3 Years or 50,000 KMS",
    "Service Carried out every 10,000 KMS",
    "3 Minor Services",
    "2 Major Services",
    "Labour Charges Included for additional repairs"
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
              src="/services/service-contract/service-contract-img-1.png" 
              alt="Service Contract" 
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
              <span className="text-black">SERVICE </span>
              <span className="text-nsauto-yellow">CONTRACT</span>
            </h1>
            <p className="text-lg mb-6">
              Protect your vehicle with our comprehensive service contracts for cars in Dubai, offering reliable maintenance plans tailored to your needs. Explore flexible packages at NS Auto to keep your car running smoothly.
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
      <div className="relative py-16 bg-cover bg-center" style={{ backgroundImage: `url(/services/service-contract/service-contract-img-2.jpg)` }}>
        <div className="absolute inset-0"></div>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
            <CylinderCardGroup packages={services} />
          </div>
      </div>
      
      <ServicesOverview />
      <AboutSection />
      <WhyChooseUs />
      <CTASection />
      <FAQSection />
    </div>
  );
}