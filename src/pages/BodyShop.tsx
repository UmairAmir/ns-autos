import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageBanner from "@/components/hero-section/PageBanner";
import { motion } from "framer-motion";
import ServiceIconCard from "@/components/body-shop-page/ServiceIconCard";
import BodyShopCard from "@/components/body-shop-page/BodyShopCard";
import BodyShopCardGroup from "@/components/body-shop-page/BodyShopCardGroup";

const BodyShop = () => {
  React.useEffect(() => {
    document.title = "Car Body Shop Dubai | NS Auto Expert Repairs";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "NS Auto provides professional car body repairs in Dubai. Restore your vehicle’s look with expert care—call or WhatsApp to book now.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "NS Auto provides professional car body repairs in Dubai. Restore your vehicle’s look with expert care—call or WhatsApp to book now.";
      document.head.appendChild(meta);
    }
  }, []);

  const services = [
    { name: "CAR ACCIDENT REPAIR", icon: "/body-shop-page/icons/1.svg" },
    { name: "CAR COLLISION REPAIR", icon: "/body-shop-page/icons/2.svg" },
    { name: "CHASSIS REPAIR", icon: "/body-shop-page/icons/3.svg" },
    { name: "CAR PAINTING SERVICE", icon: "/body-shop-page/icons/4.svg" },
    { name: "CALIPERS PAINTING", icon: "/body-shop-page/icons/5.svg" },
    { name: "PEARL/ABLE PAINT", icon: "/body-shop-page/icons/6.svg" },
    { name: "RIM PAINTING SERVICE", icon: "/body-shop-page/icons/7.svg" },
    { name: "SCRATCH REMOVAL & REPAINT", icon: "/body-shop-page/icons/8.svg" },
    { name: "DENT REPAIR", icon: "/body-shop-page/icons/9.svg" },
    { name: "CAR DETAILING", icon: "/body-shop-page/icons/10.svg" },
    { name: "CAR POLISHING", icon: "/body-shop-page/icons/11.svg" },
    { name: "CAR CERAMIC COATING", icon: "/body-shop-page/icons/12.svg" },
    {
      name: "PPF (PAINT PROTECTION FILM)",
      icon: "/body-shop-page/icons/13.svg",
    },
    { name: "HEAD-LIGHTS RESTORATION", icon: "/body-shop-page/icons/14.svg" },
    { name: "BUMPER REPAIR", icon: "/body-shop-page/icons/15.svg" },
    { name: "FRAME STRAIGHTENING", icon: "/body-shop-page/icons/16.svg" },
    {
      name: "WINDSHIELD REPAIR AND REPLACEMENT",
      icon: "/body-shop-page/icons/17.svg",
    },
    { name: "HAIL DAMAGE REPAIR", icon: "/body-shop-page/icons/18.svg" },
    { name: "PAINTLESS DENT REPAIR", icon: "/body-shop-page/icons/19.svg" },
    { name: "UPHOLSTERY SERVICES", icon: "/body-shop-page/icons/20.svg" },
    { name: "CAR TINTING", icon: "/body-shop-page/icons/21.svg" },
    { name: "UNDER COATING", icon: "/body-shop-page/icons/22.svg" },
    { name: "RUST PROOFING", icon: "/body-shop-page/icons/23.svg" },
    { name: "INTERIOR REPAIR", icon: "/body-shop-page/icons/24.svg" },
    { name: "CONVERTIBLE ROOF REPAIR", icon: "/body-shop-page/icons/25.svg" },
    { name: "DASHBOARD REPAIR", icon: "/body-shop-page/icons/26.svg" },
    { name: "SAND BLASTING", icon: "/body-shop-page/icons/27.svg" },
    {
      name: "LEATHER REPAIR & RESTORATION",
      icon: "/body-shop-page/icons/28.svg",
    },
    { name: "SUNROOF REPAIR", icon: "/body-shop-page/icons/29.svg" },
  ];

  const bodyShopPackages = [
    {
      type: "HATCHBACK",
      packages: [
        { name: "Minor", price: "AED 349" },
        { name: "Scratch Repair & Repaint", price: "AED 399" },
        { name: "Accident Repair & Repaint", price: "AED 449" },
      ],
    },
    {
      type: "SEDAN",
      packages: [
        { name: "Minor", price: "AED 349" },
        { name: "Scratch Repair & Repaint", price: "AED 399" },
        { name: "Accident Repair & Repaint", price: "AED 499" },
      ],
    },
    {
      type: "SUV",
      packages: [
        { name: "Minor", price: "AED 349" },
        { name: "Scratch Repair & Repaint", price: "AED 399" },
        { name: "Accident Repair & Repaint", price: "AED 549" },
      ],
    },
  ];

  return (
    <>
      <Navbar currentPage="BODY SHOP" />
      <PageBanner
        title="BODY SHOP"
        backgroundImage="/body-shop-page/body-shop-banner.jpg"
        breadcrumbs={[
          { label: "HOME", url: "/" },
          { label: "BODY SHOP", url: "/body-shop" },
        ]}
      />

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/body-shop-page/body-shop-img-1.png"
              alt="Body Shop"
              className="w-full rounded"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              BODY <span className="text-nsauto-yellow">SHOP</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Comprehensive body shop repairs, repainting, and auto detailing at
              NS Auto. Your car repair experts in Dubai. Offering specialized
              repairs and a 2-year warranty on all paint jobs. Trust NS Auto to
              expert auto repair and the quality, precision, and durability.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            SERVICES WE <span className="text-nsauto-yellow">PROVIDE</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                // Removed viewport={{ once: true }} so animation triggers every time in view
              >
                <ServiceIconCard name={service.name} iconSrc={service.icon} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `url(/body-shop-page/body-shop-img-2.png)` }}
      >
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <BodyShopCardGroup packages={bodyShopPackages} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BodyShop;
