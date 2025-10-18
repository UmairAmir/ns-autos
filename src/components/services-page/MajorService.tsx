
import React from "react";
import { motion } from "framer-motion";
import CylinderCardGroup from "../cyliner-card/CylinderCardGroup";

export default function MajorService() {
  const carImage = "/services/major-service/service-img.png";

  const services = [
    {
      cylinderCount: "4 CYLINDER",
      standardPrice: "AED 499",
      luxuryPrice: "AED 599",
      isPopular: false,
      features: []
    },
    {
      cylinderCount: "6 CYLINDER",
      standardPrice: "AED 799",
      luxuryPrice: "AED 899",
      isPopular: true,
      features: []
    },
    {
      cylinderCount: "8 CYLINDER",
      standardPrice: "AED 999",
      luxuryPrice: "AED 1,099",
      isPopular: false,
      features: []
    },
  ];

  const serviceFeatures = [
    "Oil Flush and Change",
    "Air Filter Service and Clean",
    "Full Diagnostics with Report",
    "New Oil Filter",
    "Brake Service",
    "Full Health Inspection",
    "New Spark Plugs",
    "Gearbox and Suspension Service",
    "Valet Service",
    "New Aircon Filter"
  ];

  return (
    <div className="bg-white">
      {/* Title and Description */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-6">
          <span className="text-black">MAJOR </span>
          <span className="text-nsauto-yellow">SERVICE</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-16">
          Discover comprehensive car services near you that prioritize your vehicle's performance and safety.
          Our expert technicians deliver tailored major service packages to keep your car running at its best.
        </p>

        {/* Service Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
          <ServiceIconItem 
            iconSrc="/services/major-service/oil-flush-and-change.svg"
            title="OIL FLUSH AND CHANGE"
            index={0}
          />
          <ServiceIconItem 
            iconSrc="/services/major-service/air-filter-service-and-clean.svg"
            title="AIR FILTER SERVICE AND CLEAN"
            index={1}
          />
          <ServiceIconItem 
            iconSrc="/services/major-service/full-diagnostics-with-report.svg"
            title="FULL DIAGNOSTICS WITH REPORT"
            index={2}
          />
          <ServiceIconItem 
            iconSrc="/services/major-service/new-oil-filter.svg"
            title="NEW OIL FILTER"
            index={3}
          />
          <ServiceIconItem 
            iconSrc="/services/major-service/brake-service.svg"
            title="BRAKE SERVICE"
            index={4}
          />
          <ServiceIconItem 
            iconSrc="/services/major-service/full-health-inspections.svg"
            title="FULL HEALTH INSPECTION"
            index={5}
          />
          <ServiceIconItem 
            iconSrc="/services/major-service/new-spark-plugs.svg"
            title="NEW SPARK PLUGS"
            index={6}
          />
          <ServiceIconItem 
            iconSrc="/services/major-service/gearbox-and-suspension-service.svg"
            title="GEARBOX AND SUSPENSION SERVICE"
            index={7}
          />
          <ServiceIconItem 
            iconSrc="/services/major-service/valet-service.svg"
            title="VALET SERVICE"
            index={8}
          />
          <ServiceIconItem 
            iconSrc="/services/major-service/new-aircon-filter.svg"
            title="NEW AIRCON FILTER"
            index={9}
          />
        </div>
      </div>

      {/* Cylinder Cards grid */}
      <div
        className="relative z-0 mt-20 bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage: "url('/services/minor-service/service-img.png')",
        }}
      >
        {/* White trapezium shape in the top-right corner */}
        <div className="absolute top-0 right-0 w-[900px] h-[80px] overflow-hidden z-10">
          <svg
            viewBox="0 0 400 80"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
            style={{ transform: "scaleY(-1)" }}
          >
            <path d="M0 80L300 0H400V80H0Z" fill="white" />
          </svg>
        </div>

        {/* Cylinder Cards */}
        <div className="relative z-20 py-10">
          <CylinderCardGroup packages={services} />
        </div>
      </div>
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
      <h3 className="font-bold text-xl text-center">{title}</h3>
    </motion.div>
  );
};
