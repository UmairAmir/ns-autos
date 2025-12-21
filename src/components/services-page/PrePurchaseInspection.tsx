
import React from "react";
import { motion } from "framer-motion";
import { Users, BadgeCheck, ShieldCheck, Wrench } from "lucide-react";
import ServicesOverview from "../home-page/ServicesOverview";
import AboutSection from "../home-page/AboutSection";
import WhyChooseUs from "../home-page/WhyChooseUs";
import CTASection from "../home-page/CTASection";
import FAQSection from "../home-page/FAQSection";

export default function PrePurchaseInspection() {
  React.useEffect(() => {
    document.title = "Pre Purchase Car Inspection Dubai | NS Auto Experts";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Ensure your vehicle is in top condition with pre purchase inspection in Dubai. Trusted experts check all cars—call or WhatsApp to book today.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Ensure your vehicle is in top condition with pre purchase inspection in Dubai. Trusted experts check all cars—call or WhatsApp to book today.";
      document.head.appendChild(meta);
    }
  }, []);
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
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-black">PURCHASE </span>
              <span className="text-nsauto-yellow">INSPECTION</span>
            </h2>
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
      
      <ServicesOverview 
        introTitle={<>Our <span className="text-nsauto-yellow">Services</span></>}
        introText="NS Auto provides professional pre purchase inspection services in Dubai. Trusted by thousands of customers, our inspections cover all aspects of vehicle condition, including engine, suspension, brakes, bodywork, and overall performance, helping you make a confident purchase."
      />
      <AboutSection 
        title={<>About <span className="text-nsauto-yellow">NS Auto</span></>}
        description="NS Auto is a trusted car garage in Dubai, providing professional automotive services for over 20 years. We offer pre purchase inspections to help customers make informed decisions and ensure vehicle quality. Our expertise also includes car body kits, paint protection, window tinting, and professional car painting. NS Auto provides customized service and warranty packages to meet every client’s needs, delivering reliable and premium automotive care."
      />
      <WhyChooseUs 
        description="We are dedicated to delivering dependable pre purchase inspection services in Dubai, trusted by thousands of customers for thorough and accurate vehicle assessments."
        features={[
          {
            title: "Expert Technicians",
            description: "Our certified technicians perform detailed inspections on all vehicles, identifying issues before purchase and providing reliable guidance.",
            icon: <Users className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Genuine Parts",
            description: "We use high-quality assessment tools and replacement parts when necessary to ensure vehicle safety and longevity.",
            icon: <BadgeCheck className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Transparent Pricing",
            description: "All inspections are clearly priced with no hidden costs, providing full transparency before any work begins.",
            icon: <ShieldCheck className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Comprehensive Warranty",
            description: "Eligible inspections and minor corrective services are covered by warranty on parts and labor for peace of mind.",
            icon: <Wrench className="w-12 h-12 text-nsauto-yellow" />
          }
        ]}
      />
      <CTASection 
        description={<>For pre purchase inspection inquiries or bookings, contact NS Auto. Our experienced team is ready to assist you. Call or WhatsApp today for a free quotation or to schedule your inspection.</>}
      />
      <FAQSection 
        items={[
          {
            question: "What is included in a pre purchase inspection?",
            answer: "A pre purchase inspection includes checking the engine, suspension, brakes, bodywork, electrical systems, and overall vehicle condition."
          },
          {
            question: "Can you inspect luxury and premium cars?",
            answer: "Yes, we specialize in inspecting premium vehicles such as BMW, Mercedes, Porsche, Audi, Ferrari, Range Rover, and other luxury brands."
          },
          {
            question: "How long does a pre purchase inspection take?",
            answer: "Inspections typically take 1–2 hours, depending on the vehicle type and condition."
          },
          {
            question: "Do you provide pre purchase inspections across Dubai?",
            answer: "Yes, we serve Marina, Palm Jumeirah, Downtown, Business Bay, JVC, JLT, Dubai Hills, and nearby locations."
          },
          {
            question: "How can I book a pre purchase inspection?",
            answer: "You can call or WhatsApp our team to schedule a pre purchase inspection at your convenience."
          },
          {
            question: "Will the inspection prevent future issues?",
            answer: "While inspections can’t guarantee future problems, they provide a clear assessment of the current vehicle condition, helping you make informed decisions."
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
