
import React from "react";
import { motion } from "framer-motion";
import { Users, BadgeCheck, ShieldCheck, Wrench } from "lucide-react";
import VehicleCardGroup from "../vehicle-card/VehicleCardGroup";
import ServicesOverview from "../home-page/ServicesOverview";
import AboutSection from "../home-page/AboutSection";
import WhyChooseUs from "../home-page/WhyChooseUs";
import CTASection from "../home-page/CTASection";
import FAQSection from "../home-page/FAQSection";

export default function WindowTinting() {
  React.useEffect(() => {
    document.title = "Window Tinting in Dubai | Professional Car Tint Service";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Protect your car and enhance privacy with professional window tinting in Dubai. Expert service for all vehicles—call or WhatsApp to book today.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Protect your car and enhance privacy with professional window tinting in Dubai. Expert service for all vehicles—call or WhatsApp to book today.";
      document.head.appendChild(meta);
    }
  }, []);

  const services = [
    {
      title: "HATCHBACK",
      heading1: "Normal",
      price1: "AED 399",
      heading2: "3M",
      price2: "AED 999",
      isPopular: false,
    },
    {
      title: "Sedan",
      heading1: "Normal",
      price1: "AED 499",
      heading2: "3M",
      price2: "AED 1,199",
      isPopular: true,
    },
    {
      title: "SUV",
      heading1: "Normal",
      price1: "AED 599",
      heading2: "3M",
      price2: "AED 1,399",
      isPopular: false,
    },
  ];

  const features = [
    "Tints Available in 30% or 50%",
    "Normal Tints: 1-Year Warranty",
    "3M Tints: 5-Year Warranty"
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
              src="/services/window-tinting/window-tinting-img-1.png" 
              alt="Window Tinting Service" 
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
              <span className="text-black">WINDOW </span>
              <span className="text-nsauto-yellow">TINTING</span>
            </h1>
            <p className="text-lg mb-6">
              Experience the best in window tinting in Dubai, designed to enhance your vehicle's appearance while providing UV protection and increased privacy. Trust our experts to deliver high-quality installations tailored to your needs.
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
      <div
        className="relative py-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(/services/window-tinting/window-tintinimg-2.png)`,
        }}
      >
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <VehicleCardGroup packages={services} />
        </div>
      </div>
      
      <ServicesOverview 
        introTitle={<>Our <span className="text-nsauto-yellow">Services</span></>}
        introText="NS Auto provides professional window tinting services in Dubai. Trusted by thousands of customers, we offer complete automotive care, including premium tint application, car body detailing, and vehicle protection solutions, ensuring comfort, privacy, and long-lasting quality."
      />
      <AboutSection 
        title={<>About <span className="text-nsauto-yellow">NS Auto</span></>}
        description="NS Auto is a trusted car garage in Dubai, providing high-quality automotive services for over 20 years. We specialize in professional window tinting to protect your car from heat, UV rays, and glare. Our expertise also includes car body kits, paint protection, and professional car painting. NS Auto offers customized service and warranty packages to meet customer needs, ensuring reliable and premium automotive care."
      />
      <WhyChooseUs 
        description="We are dedicated to delivering reliable window tinting services in Dubai, trusted by thousands of customers for quality and professionalism."
        features={[
          {
            title: "Expert Technicians",
            description: "Our certified technicians have extensive experience applying window tints on all types of vehicles, ensuring precise and durable results.",
            icon: <Users className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Genuine Parts",
            description: "We use only high-quality films and materials to guarantee long-lasting protection and clarity.",
            icon: <BadgeCheck className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Transparent Pricing",
            description: "All work is explained in detail with clear pricing and no hidden costs before starting.",
            icon: <ShieldCheck className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Comprehensive Warranty",
            description: "Eligible window tinting services come with warranty coverage on parts and labor for peace of mind.",
            icon: <Wrench className="w-12 h-12 text-nsauto-yellow" />
          }
        ]}
      />
      <CTASection 
        description={<>For window tinting inquiries or bookings, contact NS Auto. Our experienced team is ready to assist you. Call or WhatsApp today for a free quotation or to schedule an appointment.</>}
      />
      <FAQSection 
        items={[
          {
            question: "What is included in a window tinting service?",
            answer: "Our window tinting service includes professional film application, cleaning, and inspection to ensure a flawless, durable finish."
          },
          {
            question: "Do you provide tinting for luxury cars?",
            answer: "Yes, we specialize in premium vehicles like BMW, Mercedes, Porsche, Audi, Ferrari, Range Rover, and other luxury brands."
          },
          {
            question: "How long does window tinting last?",
            answer: "Professional window tinting lasts several years, depending on film quality and proper care."
          },
          {
            question: "Do you offer window tinting across Dubai?",
            answer: "Yes, we serve all major areas including Marina, Palm Jumeirah, Downtown, Business Bay, JVC, JLT, Dubai Hills, and nearby locations."
          },
          {
            question: "Can I book a window tinting service online?",
            answer: "Yes, you can call or WhatsApp our team to schedule professional window tinting at your convenience."
          },
          {
            question: "Does window tinting help reduce heat and UV exposure?",
            answer: "Yes, our high-quality films protect against heat, glare, and harmful UV rays, improving comfort and preserving your car interior."
          }
        ]}
      />
    </div>
  );
}