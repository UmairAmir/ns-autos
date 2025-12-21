import React from "react";
import { motion } from "framer-motion";
import { Users, BadgeCheck, ShieldCheck, Wrench } from "lucide-react";
import VehicleCardGroup from "../vehicle-card/VehicleCardGroup";
import ServicesOverview from "../home-page/ServicesOverview";
import AboutSection from "../home-page/AboutSection";
import WhyChooseUs from "../home-page/WhyChooseUs";
import CTASection from "../home-page/CTASection";
import FAQSection from "../home-page/FAQSection";

export default function PaintProtection() {
  React.useEffect(() => {
    document.title = "Paint Protection in Dubai | Preserve Your Car’s Finish";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Protect your car’s paint in Dubai with expert paint protection services. Long-lasting shine and safety—call or WhatsApp to book now.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Protect your car’s paint in Dubai with expert paint protection services. Long-lasting shine and safety—call or WhatsApp to book now.";
      document.head.appendChild(meta);
    }
  }, []);

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

      <ServicesOverview 
        introTitle={<>Our <span className="text-nsauto-yellow">Services</span></>}
        introText="NS Auto offers professional paint protection services in Dubai. Trusted by thousands of customers, we provide complete automotive care, including protective coatings, car body detailing, and professional car painting. Our services ensure your vehicle maintains a premium look and long-lasting protection."
      />
      <AboutSection 
        title={<>About <span className="text-nsauto-yellow">NS Auto</span></>}
        description="NS Auto is a trusted car garage in Dubai, delivering high-quality automotive services for over 20 years. We offer professional paint protection to maintain your vehicle’s appearance and value. Our expertise also includes car body kits, window tinting, and professional car painting. NS Auto provides customized service and warranty packages designed to meet customer needs, ensuring reliable, premium automotive care."
      />
      <WhyChooseUs 
        description="We are dedicated to delivering reliable paint protection services in Dubai, trusted by thousands of customers for quality and professionalism."
        features={[
          {
            title: "Expert Technicians",
            description: "Our certified technicians have extensive experience applying paint protection to all types of vehicles, ensuring a flawless and durable finish.",
            icon: <Users className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Genuine Parts",
            description: "We use high-quality protective coatings and materials to ensure long-lasting results for your vehicle’s paint.",
            icon: <BadgeCheck className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Transparent Pricing",
            description: "Detailed quotes and clear explanations are provided before starting any work, with no hidden costs.",
            icon: <ShieldCheck className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Comprehensive Warranty",
            description: "Eligible paint protection services come with warranty coverage on parts and labor for peace of mind.",
            icon: <Wrench className="w-12 h-12 text-nsauto-yellow" />
          }
        ]}
      />
      <CTASection 
        description={<>For paint protection inquiries or bookings, contact NS Auto. Our experienced team is ready to assist you. Call or WhatsApp today for a free quotation or appointment.</>}
      />
      <FAQSection 
        items={[
          {
            question: "What is included in a paint protection service?",
            answer: "Our paint protection service includes surface cleaning, application of high-quality protective coatings, and polishing to ensure a long-lasting shine."
          },
          {
            question: "Is paint protection suitable for luxury cars?",
            answer: "Yes, we specialize in premium vehicles such as BMW, Mercedes, Porsche, Audi, Ferrari, Range Rover, and other luxury brands."
          },
          {
            question: "How long does paint protection last?",
            answer: "The duration depends on the coating type and care, but professional application ensures maximum durability and long-term shine."
          },
          {
            question: "Do you offer paint protection across Dubai?",
            answer: "Yes, we serve all major areas including Marina, Palm Jumeirah, Downtown, Business Bay, JVC, JLT, Dubai Hills, and nearby locations."
          },
          {
            question: "Can I book paint protection service online?",
            answer: "Yes, you can call or WhatsApp our team to schedule your professional paint protection service at a convenient time."
          },
          {
            question: "Will paint protection prevent scratches and damage?",
            answer: "Paint protection helps minimize minor scratches and protects your car from environmental damage, keeping the paint looking new for longer."
          }
        ]}
      />
    </div>
  );
}
