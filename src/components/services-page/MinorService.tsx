import React from "react";
import { motion } from "framer-motion";
import CylinderCardGroup from "../cyliner-card/CylinderCardGroup";
import ServicesOverview from "../home-page/ServicesOverview";
import AboutSection from "../home-page/AboutSection";
import WhyChooseUs from "../home-page/WhyChooseUs";
import CTASection from "../home-page/CTASection";
import FAQSection from "../home-page/FAQSection";

export default function MinorService() {
  const carImage = "/services/minor-service/service-img.png";

  React.useEffect(() => {
    document.title = "Minor Car Service in Dubai | Fast & Reliable Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Keep your car running smoothly with minor car service in Dubai. Expert checks for all vehicles—call or WhatsApp now to book today.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Keep your car running smoothly with minor car service in Dubai. Expert checks for all vehicles—call or WhatsApp now to book today.";
      document.head.appendChild(meta);
    }
  }, []);

  const services = [
    {
      cylinderCount: "4 CYLINDER",
      standardPrice: "AED 199",
      luxuryPrice: "AED 299",
      isPopular: false,
      features: [],
    },
    {
      cylinderCount: "6 CYLINDER",
      standardPrice: "AED 399",
      luxuryPrice: "AED 499",
      isPopular: true,
      features: [],
    },
    {
      cylinderCount: "8 CYLINDER",
      standardPrice: "AED 599",
      luxuryPrice: "AED 699",
      isPopular: false,
      features: [],
    },
  ];

  const serviceFeatures = [
    "Oil Flush and Change",
    "Air Filter Service and Clean",
    "Full Health Inspections",
    "New Oil Filter",
    "Full Diagnostics with Report",
    "Valet Service",
    "Aircon Service and Clean",
  ];

  return (
    <div className="bg-white">
      {/* Title and Description */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-6">
          <span className="text-black">MINOR </span>
          <span className="text-nsauto-yellow">SERVICE</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-16">
          Experience top-quality car servicing in Dubai designed to keep your
          vehicle in peak condition. Our expert team provides comprehensive
          minor services to ensure your car runs smoothly and reliably.
        </p>

        {/* Service Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
          <ServiceIconItem
            iconSrc="/services/minor-service/oil-flush-and-change.svg"
            title="OIL FLUSH AND CHANGE"
            index={0}
          />
          <ServiceIconItem
            iconSrc="/services/minor-service/air-filter-service-and-clean.svg"
            title="AIR FILTER SERVICE AND CLEAN"
            index={1}
          />
          <ServiceIconItem
            iconSrc="/services/minor-service/full-health-inspections.svg"
            title="FULL HEALTH INSPECTIONS"
            index={2}
          />
          <ServiceIconItem
            iconSrc="/services/minor-service/new-oil-filter.svg"
            title="NEW OIL FILTER"
            index={3}
          />
          <ServiceIconItem
            iconSrc="/services/minor-service/full-diagnostics-with-report.svg"
            title="FULL DIAGNOSTICS WITH REPORT"
            index={4}
          />
          <ServiceIconItem
            iconSrc="/services/minor-service/valet-service.svg"
            title="VALET SERVICE"
            index={5}
          />
          <ServiceIconItem
            iconSrc="/services/minor-service/aircon-service-and-clean.svg"
            title="AIRCON SERVICE AND CLEAN"
            index={6}
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

      <ServicesOverview 
        introTitle={<>Our <span className="text-nsauto-yellow">Services</span></>} 
        introText="NS Auto is a fully operational car service and warranty center in Dubai. Trusted by thousands of customers and partnered with leading insurance companies, we provide professional car services, including car repairs, routine servicing, and complete garage solutions for all vehicle types." 
      />
      <AboutSection 
        title={<>About <span className="text-nsauto-yellow">NS Auto</span></>} 
        description="NS Auto is a trusted car garage in Dubai, providing high-quality car services and repairs. With over 20 years of experience in the UAE, we are known for reliable and professional automotive care. We offer a wide range of services, from routine car servicing to specialized repairs. Our expertise also covers car body kits, window tinting, paint protection, and professional car painting. NS Auto offers customized warranty and service packages to suit individual customer needs, ensuring dependable and customer-focused automotive solutions."
      />
      <WhyChooseUs />
      <CTASection />
      <FAQSection 
        items={[
          {
            question: "What is included in a minor car service?",
            answer: "A minor service includes basic inspections, fluid checks, oil change, filter checks, and general safety assessment to keep your car running smoothly."
          },
          {
            question: "How often should I get a minor service in Dubai?",
            answer: "We recommend a minor car service every 5,000–10,000 km, depending on driving conditions and vehicle type."
          },
          {
            question: "Do you provide minor service for luxury cars?",
            answer: "Yes, we specialize in premium and luxury cars such as BMW, Mercedes, Porsche, Audi, Range Rover, and more."
          },
          {
            question: "How long does a minor car service take?",
            answer: "A minor service usually takes 1–2 hours, depending on the vehicle and inspection requirements."
          },
          {
            question: "Do you offer minor car service across Dubai?",
            answer: "Yes, we serve all major Dubai areas including Marina, Palm Jumeirah, Downtown, Business Bay, JVC, JLT, Dubai Hills, and nearby locations."
          },
          {
            question: "How can I book a minor car service?",
            answer: "You can call or WhatsApp us to schedule your minor car service at a convenient time."
          }
        ]}
      />
    </div>
  );
}

interface ServiceIconItemProps {
  iconSrc: string;
  title: string;
  index: number;
}

const ServiceIconItem: React.FC<ServiceIconItemProps> = ({
  iconSrc,
  title,
  index,
}) => {
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
