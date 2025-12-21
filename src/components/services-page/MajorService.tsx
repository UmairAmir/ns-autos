
import React from "react";
import { motion } from "framer-motion";
import { Users, BadgeCheck, ShieldCheck, Wrench } from "lucide-react";
import CylinderCardGroup from "../cyliner-card/CylinderCardGroup";
import ServicesOverview from "../home-page/ServicesOverview";
import AboutSection from "../home-page/AboutSection";
import WhyChooseUs from "../home-page/WhyChooseUs";
import CTASection from "../home-page/CTASection";
import FAQSection from "../home-page/FAQSection";

export default function MajorService() {
  const carImage = "/services/major-service/service-img.png";

  React.useEffect(() => {
    document.title = "Major Car Service in Dubai | Complete Vehicle Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get professional major car service in Dubai for long-term performance and safety. Trusted experts for all vehicles—call or WhatsApp today.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Get professional major car service in Dubai for long-term performance and safety. Trusted experts for all vehicles—call or WhatsApp today.";
      document.head.appendChild(meta);
    }
  }, []);

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
        <h2 className="text-6xl font-bold mb-6">
          <span className="text-black">MAJOR </span>
          <span className="text-nsauto-yellow">SERVICE</span>
        </h2>
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

      <ServicesOverview 
        introTitle={<>Our <span className="text-nsauto-yellow">Services</span></>}
        introText="NS Auto operates as a full-service car service and warranty center in Dubai. Trusted by thousands of customers and partnered with leading insurance companies, we provide professional major car servicing, complete inspections, and comprehensive garage solutions for all vehicle types."
      />
      <AboutSection 
        title={<>About <span className="text-nsauto-yellow">NS Auto</span></>}
        description="NS Auto is a reliable car garage in Dubai, offering professional car services and repairs. With over 20 years of experience in the UAE, we provide complete automotive care, including major car servicing and specialized repairs. Our services also cover car body kits, window tinting, paint protection, and professional car painting. We offer customized service and warranty packages designed to meet individual customer needs while maintaining quality and reliability."
      />
      <WhyChooseUs 
        description="We focus on delivering dependable major car servicing in Dubai with attention to quality and customer satisfaction."
        features={[
          {
            title: "Expert Technicians",
            description: "Our certified technicians have years of experience handling all types of vehicles, ensuring every major service is done accurately and professionally.",
            icon: <Users className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Genuine Parts",
            description: "We use only genuine, high-quality spare parts to maintain your vehicle’s performance and longevity.",
            icon: <BadgeCheck className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Transparent Pricing",
            description: "We provide clear and detailed quotes before starting any work, with no hidden costs or surprises.",
            icon: <ShieldCheck className="w-12 h-12 text-nsauto-yellow" />
          },
          {
            title: "Comprehensive Warranty",
            description: "All eligible services come with warranty coverage on parts and labor, giving you peace of mind and reliable service.",
            icon: <Wrench className="w-12 h-12 text-nsauto-yellow" />
          }
        ]}
      />
      <CTASection 
        description={<>For major car service inquiries or bookings, feel free to contact us. Our experienced team is ready to assist you. Call us today for a free quotation or to book an appointment.</>}
      />
      <FAQSection 
        items={[
          {
            question: "What is included in a major car service?",
            answer: "A major service includes detailed inspections, fluid replacements, filter changes, system checks, and overall vehicle performance assessment."
          },
          {
            question: "When should I get a major car service in Dubai?",
            answer: "A major car service is usually recommended every 30,000–40,000 km or according to the manufacturer’s service schedule."
          },
          {
            question: "Do you provide major service for luxury cars?",
            answer: "Yes, we specialize in premium and luxury vehicles such as BMW, Mercedes, Porsche, Audi, Range Rover, and other high-end brands."
          },
          {
            question: "How long does a major car service take?",
            answer: "A major service typically takes one full day, depending on the vehicle condition and required inspections."
          },
          {
            question: "Do you offer major car service across Dubai?",
            answer: "Yes, we serve all major Dubai areas including Marina, Palm Jumeirah, Downtown, Business Bay, JVC, JLT, Dubai Hills, and nearby locations."
          },
          {
            question: "How can I book a major car service?",
            answer: "You can call or WhatsApp our team to schedule your major car service at a convenient time."
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
      <h3 className="font-bold text-xl text-center">{title}</h3>
    </motion.div>
  );
};
