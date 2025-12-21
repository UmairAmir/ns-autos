
import React from "react";
import { motion } from "framer-motion";
import { Users, BadgeCheck, ShieldCheck, Wrench } from "lucide-react";
import CylinderCardGroup from "../cyliner-card/CylinderCardGroup";
import ServicesOverview from "../home-page/ServicesOverview";
import AboutSection from "../home-page/AboutSection";
import WhyChooseUs from "../home-page/WhyChooseUs";
import CTASection from "../home-page/CTASection";
import FAQSection from "../home-page/FAQSection";

export default function ServiceContract() {
  React.useEffect(() => {
    document.title = "Car Service Contracts in Dubai | NS Auto Plans";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Protect your vehicle with NS Auto service contracts in Dubai. Flexible plans for all cars—call or WhatsApp today to get your personalized plan.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Protect your vehicle with NS Auto service contracts in Dubai. Flexible plans for all cars—call or WhatsApp today to get your personalized plan.";
      document.head.appendChild(meta);
    }
  }, []);
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
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-black">SERVICE </span>
              <span className="text-nsauto-yellow">CONTRACT</span>
            </h2>
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
      
      <ServicesOverview 
        introTitle={<>Our <span className="text-nsauto-yellow">Services</span></>}
        introText="NS Auto provides professional service contracts in Dubai. Trusted by thousands of customers, our plans include routine maintenance, scheduled servicing, and complete car care solutions for all vehicle types, ensuring convenience, reliability, and long-term performance."
      />
      <AboutSection 
        title={<>About <span className="text-nsauto-yellow">NS Auto</span></>}
        description="NS Auto is a trusted car garage in Dubai, providing high-quality automotive services for over 20 years. We offer customized service contracts to ensure regular maintenance, prolonged vehicle performance, and peace of mind. Our expertise also includes car body kits, paint protection, window tinting, and professional car painting. NS Auto provides flexible service and warranty packages tailored to each customer’s needs, delivering reliable and premium automotive care."
      />
      <WhyChooseUs 
        description="We are dedicated to delivering dependable service contracts in Dubai, trusted by thousands of customers to protect their vehicles and ensure consistent care."
        features={[
          {
            title: "Expert Technicians",
            description: "Our certified technicians manage all aspects of service contracts, providing thorough inspections and professional maintenance.",
            icon: <Users className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Genuine Parts",
            description: "We use only high-quality and genuine parts to maintain vehicle performance and longevity under our service contracts.",
            icon: <BadgeCheck className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Transparent Pricing",
            description: "Our service contract plans are clearly explained with no hidden charges, giving full visibility on costs and coverage.",
            icon: <ShieldCheck className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Comprehensive Warranty",
            description: "Eligible services within our contracts are backed by warranty coverage on parts and labor for peace of mind.",
            icon: <Wrench className="w-12 h-12 text-nsauto-yellow" />
          }
        ]}
      />
      <CTASection 
        description={<>For service contract inquiries or bookings, contact NS Auto. Our experienced team is ready to assist you. Call or WhatsApp today for a free quotation or to subscribe to a plan.</>}
      />
      <FAQSection 
        items={[
          {
            question: "What is included in a service contract?",
            answer: "Our service contracts include scheduled maintenance, routine checks, parts replacements, and priority service to ensure your vehicle stays in top condition."
          },
          {
            question: "Are service contracts available for luxury cars?",
            answer: "Yes, we provide service contracts for premium vehicles including BMW, Mercedes, Porsche, Audi, Ferrari, Range Rover, and other luxury brands."
          },
          {
            question: "How long do service contracts last?",
            answer: "Contracts can be tailored for periods ranging from 6 months to 3 years, depending on your needs and vehicle type."
          },
          {
            question: "Do you offer service contracts across Dubai?",
            answer: "Yes, we cover all major areas including Marina, Palm Jumeirah, Downtown, Business Bay, JVC, JLT, Dubai Hills, and nearby locations."
          },
          {
            question: "How can I subscribe to a service contract?",
            answer: "You can call or WhatsApp our team to choose a plan and schedule your first maintenance session."
          },
          {
            question: "Do service contracts provide cost savings?",
            answer: "Yes, our plans help reduce unexpected repair costs while ensuring regular vehicle maintenance for long-term performance."
          }
        ]}
      />
    </div>
  );
}