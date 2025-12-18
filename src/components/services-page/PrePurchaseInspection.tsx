
import React from "react";
import { motion } from "framer-motion";
import ServicesOverview from "../home-page/ServicesOverview";
import AboutSection from "../home-page/AboutSection";
import WhyChooseUs from "../home-page/WhyChooseUs";
import CTASection from "../home-page/CTASection";
import FAQSection from "../home-page/FAQSection";

export default function PrePurchaseInspection() {
  const inspectionServices = [
    {
      icon: "/services/pre-purchase-inspection/chassis-damage-check.svg",
      title: "CHASSIS DAMAGE CHECK",
    },
    {
      icon: "/services/pre-purchase-inspection/electrical-check.svg",
      title: "ELECTRICAL CHECK",
    },
    {
      icon: "/services/pre-purchase-inspection/underbody-check.svg",
      title: "UNDERBODY CHECK",
    },
    {
      icon: "/services/pre-purchase-inspection/road-test-conducted.svg",
      title: "ROAD TEST CONDUCTED",
    },
    {
      icon: "/services/pre-purchase-inspection/interior-and-exterior-check-with-pictures.svg",
      title: "INTERIOR AND EXTERIOR CHECK WITH PICTURES",
    },
    {
      icon: "/services/pre-purchase-inspection/full-fault-code-diagnostics.svg",
      title: "FULL FAULT CODE DIAGNOSTICS",
    },
    {
      icon: "/services/pre-purchase-inspection/mechanical-check.svg",
      title: "MECHANICAL CHECK",
    },
    {
      icon: "/services/pre-purchase-inspection/brake-system-check.svg",
      title: "BRAKE SYSTEM CHECK",
    },
    {
      icon: "/services/pre-purchase-inspection/accident-check.svg",
      title: "ACCIDENT CHECK",
    },
    {
      icon: "/services/pre-purchase-inspection/gearbox-check.svg",
      title: "GEARBOX CHECK",
    },
    {
      icon: "/services/pre-purchase-inspection/suspension-check.svg",
      title: "SUSPENSION CHECK",
    },
    {
      icon: "/services/pre-purchase-inspection/paint-check.svg",
      title: "PAINT CHECK",
    },
  ];

  return (
    <div className="bg-white">
      {/* Info Section with Image */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Image Column */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img 
              src="/services/pre-purchase-inspection/purchase-inspection-img-1.png" 
              alt="Pre-Purchase Inspection" 
              className="w-full"
            />
            {/* AED 399 placed on the top-left corner */}
            <div className="absolute top-0 left-0 bg-nsauto-yellow text-black px-4 py-2 text-lg font-bold">
              AED 399
            </div>
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
              <span className="text-black">PURCHASE </span>
              <span className="text-nsauto-yellow">INSPECTION</span>
            </h1>
            <p className="text-lg mb-6">
              Receive a comprehensive vehicle check at the seller's location in Dubai, including diagnostics, road tests, and detailed inspections of critical components. Our service ensures a safe purchase with complete confidence and includes detailed photos for your peace of mind.
            </p>
            
          </motion.div>
        </div>
      </div>

      {/* Service Icons Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-6xl mx-auto">
            {inspectionServices.map((service, index) => (
              <ServiceIconItem 
                key={index}
                iconSrc={service.icon}
                title={service.title}
                index={index}
              />
            ))}
          </div>
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

interface ServiceIconItemProps {
  iconSrc: string;
  title: string;
  index: number;
}

const ServiceIconItem: React.FC<ServiceIconItemProps> = ({ iconSrc, title, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
    >
      <img src={iconSrc} alt={title} className="h-16 mb-4" />
      <h3 className="font-bold text-sm text-center">{title}</h3>
    </motion.div>
  );
};
