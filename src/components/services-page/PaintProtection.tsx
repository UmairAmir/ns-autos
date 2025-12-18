import React from "react";
import { motion } from "framer-motion";
import VehicleCardGroup from "../vehicle-card/VehicleCardGroup";
import ServicesOverview from "../home-page/ServicesOverview";
import AboutSection from "../home-page/AboutSection";
import WhyChooseUs from "../home-page/WhyChooseUs";
import CTASection from "../home-page/CTASection";
import FAQSection from "../home-page/FAQSection";

export default function PaintProtection() {
  const services = [
    {
      title: "HATCHBACK",
      heading1: "NANO",
      price1: "AED 899",
      heading2: "CERAMIC",
      price2: "AED 1,099",
      isPopular: false,
    },
    {
      title: "Sedan",
      heading1: "NANO",
      price1: "AED 1,199",
      heading2: "CERAMIC",
      price2: "AED 1,399",
      isPopular: true,
    },
    {
      title: "SUV",
      heading1: "NANO",
      price1: "AED 1,499",
      heading2: "CERAMIC",
      price2: "AED 1,999",
      isPopular: false,
    },
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
              src="/services/paint-protection/paint-protection-img-1.png"
              alt="Paint Protection Service"
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
              <span className="text-black">PAINT </span>
              <span className="text-nsauto-yellow">PROTECTION</span>
            </h1>
            <p className="text-lg mb-6">
              Protect your vehicle's exterior with our premium car painting
              services in Dubai and advanced paint protection film solutions.
              Choose nanocoating for a stunning shine and enhanced durability,
              or opt for ceramic coating to safeguard against scratches, UV
              damage, and environmental contaminants. Trust our experts to keep your car looking brand new with
              professional application techniques.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing Section */}
      <div
        className="relative py-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(/services/paint-protection/paint-protection-img-2.png)`,
        }}
      >
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <VehicleCardGroup packages={services} />
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
