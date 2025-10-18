import React, { useState } from "react";
import { motion } from "framer-motion";

type ServiceItem = {
  id: number;
  title: string;
  image: string;
};

const topServices: ServiceItem[] = [
  {
    id: 1,
    title: "Paint Protection",
    image: "/home-page/paint-protection-w.png",
  },
  {
    id: 2,
    title: "Body Shop",
    image: "/home-page/body-shop-w.png",
  },
  {
    id: 3,
    title: "Warranty Package",
    image: "/home-page/warranty-package-w.png",
  },
];

const bottomServices: ServiceItem[] = [
  {
    id: 4,
    title: "Pre Purchase Inspections",
    image: "/home-page/pre-purchase-inspection-w.png",
  },
  {
    id: 5,
    title: "Window Tinting",
    image: "/home-page/window-tinting-w.png",
  },
  {
    id: 6,
    title: "Service Contracts",
    image: "/home-page/service-contracts-w.png",
  },
];

const ServiceGallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Render a single card; slideFromTop controls its initial vertical offset.
  // customTransform (if provided) is applied to lift the top card.
  const renderCard = (
    item: ServiceItem,
    slideFromTop: boolean,
    customTransform?: string
  ) => (
    <motion.div
      key={item.id}
      className="relative group cursor-pointer w-full max-w-[280px] mx-auto"
      initial={{ opacity: 0, y: slideFromTop ? -50 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
      style={customTransform ? { transform: customTransform } : {}}
    >
      {/* Image container with increased cut size */}
      <div
        className="overflow-hidden relative shadow-lg rounded"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-cover"
        />
        {hoveredId === item.id && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <img src="/icons/plus.svg" alt="Plus" className="w-12 h-12" />
          </div>
        )}
      </div>

      {/* Title area with increased cut size */}
      <div
        className="absolute bottom-0 left-0 px-4 py-2 text-black font-bold uppercase transition-all"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)",
          backgroundColor: hoveredId === item.id ? "#fff" : "#f7b500",
          transform: "translateY(50%)",
        }}
      >
        <span>{item.title}</span>
      </div>
    </motion.div>
  );

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/background-images/feature-bg-white.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Textured Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/background-images/textured-shape-white.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row">
          {/* Left column: Pairs of service cards */}
          <div className="w-full lg:w-2/3 space-y-12">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex flex-row items-center justify-center gap-6"
              >
                {/* Top service card with an upward transform */}
                <div className="w-1/2 flex justify-center">
                  {renderCard(topServices[i], true, "translateY(-30px)")}
                </div>
                {/* Bottom service card (no extra transform) */}
                <div className="w-1/2 flex justify-center">
                  {renderCard(bottomServices[i], false)}
                </div>
              </div>
            ))}
          </div>

          {/* Right column: Car image (Desktop) */}
          <div className="hidden lg:flex lg:w-1/3 items-center justify-center">
            <img
              src="/home-page/black-car.png"
              alt="Black Car"
              className="w-[700px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Mobile: Car image at bottom */}
        <div className="block lg:hidden mt-12 flex justify-center">
          <img
            src="/home-page/black-car.png"
            alt="Black Car"
            className="w-[350px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceGallery;
