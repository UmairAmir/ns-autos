import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";
import CylinderCardGroup from "../components/cyliner-card/CylinderCardGroup";
import PageBanner from "../components/hero-section/PageBanner";

const Warranty = () => {
  const oneYearPackages = [
    {
      cylinderCount: "4 CYLINDER",
      standardPrice: "AED 3,999",
      luxuryPrice: "AED 4,999",
    },
    {
      cylinderCount: "6 CYLINDER",
      standardPrice: "AED 4,999",
      luxuryPrice: "AED 5,999",
      isPopular: true,
    },
    {
      cylinderCount: "8 CYLINDER",
      standardPrice: "AED 5,999",
      luxuryPrice: "AED 6,999",
    },
  ];

  const twoYearPackages = [
    {
      cylinderCount: "4 CYLINDER",
      standardPrice: "AED 6,998",
      luxuryPrice: "AED 8,998",
    },
    {
      cylinderCount: "6 CYLINDER",
      standardPrice: "AED 8,749",
      luxuryPrice: "AED 10,748",
      isPopular: true,
    },
    {
      cylinderCount: "8 CYLINDER",
      standardPrice: "AED 10,498",
      luxuryPrice: "AED 12,498",
    },
  ];

  const coverageItems = [
    {
      title: "ENGINE COVERAGE",
      color: "text-nsauto-yellow",
      description:
        "Comprehensive coverage for all engine components, including pistons, valves, oil pump, camshafts, lifters, valves, and all essential parts for reliable performance.",
    },
    {
      title: "MANUAL GEARBOX COVERAGE",
      color: "text-nsauto-yellow",
      description:
        "Full protection for gears, bearings, synchro rings, selector rods, shafts and all essential parts which help to ensure smooth gear shifting.",
    },
    {
      title: "AUTOMATIC TRANSMISSION COVERAGE",
      color: "text-nsauto-yellow",
      description:
        "Includes torque converters, valve body, and all internal components that ensure optimal shifting and drivability for your vehicle.",
    },
    {
      title: "FUEL SYSTEM COVERAGE",
      color: "text-nsauto-yellow",
      description:
        "Covers all the fuel-related essential pumps and ensures your proper energy efficiency.",
    },
    {
      title: "ELECTRICAL SYSTEM COVERAGE",
      color: "text-nsauto-yellow",
      description:
        "Covers all of the components, including power door locks, power windows, and all electrical items for reliable electrical performance.",
    },
    {
      title: "FINAL DRIVE & PROPELLER SHAFT COVERAGE",
      color: "text-nsauto-yellow",
      description:
        "Protection for propeller shafts, hub assemblies, and all other drive components for smooth vehicle mobility.",
    },
    {
      title: "FRONT & REAR SUSPENSION COVERAGE",
      color: "text-nsauto-yellow",
      description:
        "Comprehensive coverage for ball joints, wheel bearings, and steering components to ensure safe handling and stability.",
    },
    {
      title: "BRAKES COVERAGE",
      color: "text-nsauto-yellow",
      description:
        "Includes protection for brake calipers, master cylinders, and all essential parts necessary for safe braking.",
    },
    {
      title: "ABS COVERAGE",
      color: "text-nsauto-yellow",
      description:
        "Covers important sensors and the ABS control module for enhanced safety and control during braking.",
    },
    {
      title: "AIR CONDITIONING COVERAGE",
      color: "text-nsauto-yellow",
      description:
        "Protection for compressors, evaporators, and all essential air conditioning system components in your vehicle.",
    },
    {
      title: "COOLING SYSTEM COVERAGE",
      color: "text-nsauto-yellow",
      description:
        "Comprehensive coverage for water pumps, radiators, thermostats, and all cooling components for optimal engine performance.",
    },
    {
      title: "SUNDRY MATERIALS COVERAGE",
      color: "text-nsauto-yellow",
      description:
        "Lubricant replacement for oils, filters, and any expendable materials required during the repair of covered components.",
    },
  ];

  return (
    <>
      <Navbar currentPage="WARRANTY" />
      <div>
        <PageBanner
          title="WARRANTY"
          backgroundImage="/warranty-page/warranty-banner.jpg"
          breadcrumbs={[
            { label: "HOME", url: "/" },
            { label: "WARRANTY", url: "/warranty" },
          ]}
        />

        {/* 1 Year Warranty Section */}
        <div className="mb-20 bg-white text-black py-16">
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              1 YEAR <span className="text-nsauto-yellow">WARRANTY</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              1-YEAR WARRANTY PACKAGE - CLAIM LIMIT AED 30,000
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto mt-2">
              GET PEACE OF MIND WITH OUR 1-YEAR OR 20,000 KM WARRANTY, COVERING
              ESSENTIAL REPAIRS AND MAINTENANCE TO KEEP YOUR VEHICLE IN TOP
              SHAPE, ENSURING RELIABILITY AND PERFORMANCE.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <CylinderCardGroup packages={oneYearPackages} />
          </div>
        </div>

        {/* 2 Year Warranty Section */}
        <div
          className="mb-20 py-16 text-white bg-cover bg-center"
          style={{
            backgroundImage: "url('/warranty-page/about-us-img-2.png')",
          }}
        >
          <div className="text-center mb-8 px-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              2 YEAR <span className="text-nsauto-yellow">WARRANTY</span>
            </h2>
            <p className="text-gray-100 max-w-3xl mx-auto">
              2-YEARS WARRANTY PACKAGE - CLAIM LIMIT AED 60,000
            </p>
            <p className="text-gray-100 max-w-3xl mx-auto mt-2">
              ENJOY EXTENDED POWERTRAIN COVERAGE WITH OUR 2-YEAR WARRANTY,
              PROVIDING LONG-TERM PROTECTION AND COMPREHENSIVE SERVICE FOR
              ESSENTIAL PARTS FOR YOUR VEHICLE FOR THE ROAD AHEAD.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-10 px-4">
            <CylinderCardGroup packages={twoYearPackages} />
          </div>
        </div>

        {/* What's Covered Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            WHAT'S COVERED UNDER{" "}
            <span className="text-nsauto-yellow">OUR WARRANTY ?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-xl font-bold mb-3 ${item.color}`}>
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Warranty;
