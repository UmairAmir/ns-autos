import React, { useState, useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { motion, useInView } from "framer-motion";
import ServiceFeatures from "../components/home-page/services-section/ServiceFeatures";
import PageBanner from "../components/hero-section/PageBanner";

const About = () => {
  React.useEffect(() => {
    document.title = "About NS Auto | Trusted Car Garage in Dubai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "NS Auto has 20+ years of experience in Dubai providing reliable car services and repairs. Call or WhatsApp to learn more about us.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "NS Auto has 20+ years of experience in Dubai providing reliable car services and repairs. Call or WhatsApp to learn more about us.";
      document.head.appendChild(meta);
    }
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const aboutTextRef = useRef(null);
  const aboutImageRef = useRef(null);

  const isAboutTextInView = useInView(aboutTextRef, { once: true });
  const isAboutImageInView = useInView(aboutImageRef, { once: true });

  const teamMembers = [
    { name: "HASSAN", image: "/about-page/team-1.png" },
    { name: "AUSTIN", image: "/about-page/team-2.png" },
    { name: "ASRAR", image: "/about-page/team-3.png" },
    { name: "MICHAEL", image: "/about-page/team-4.png" },
    { name: "TARIQ", image: "/about-page/team-5.png" },
  ];

  const features = [
    "Expert car repair and maintenance for all vehicle types, centrally located in Dubai's automotive hub",
    "Transparent communication and trustworthy service practices",
    "Highly trained technicians and service advisors committed to quality",
    "Unmatched dedication to delivering exceptional car repair and car service in Dubai",
    "Comprehensive range of auto repair and maintenance services for discerning vehicle owners",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  return (
    <>
      <Navbar currentPage="ABOUT US" />
      <div>
        <PageBanner
          title="ABOUT US"
          backgroundImage="/about-page/about-us-banner.jpg"
          breadcrumbs={[
            { label: "HOME", url: "/" },
            { label: "ABOUT US", url: "/about" },
          ]}
        />

        {/* About Content */}
        <div className="container mx-auto px-4 py-10 md:py-20">
          {/* About Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 overflow-hidden">
            <div
              ref={aboutImageRef}
              className="flex items-center justify-center"
            >
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={isAboutImageInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src="/about-page/about-us-img-1.png"
                  alt="NS Auto Team"
                  className="max-w-full rounded-md shadow-lg"
                />
              </motion.div>
            </div>
            <div ref={aboutTextRef} className="flex flex-col justify-center">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={isAboutTextInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  ABOUT <span className="text-nsauto-yellow">US</span>
                </h2>
                <p className="text-gray-700 mb-4">
                  Welcome to NS Auto, Dubai's premier car repair and service
                  center, located in the heart of the city. Since 2020, NS Auto
                  has led the industry in quality car services in Dubai,
                  providing luxury car care and expert repairs.
                </p>
                <p className="text-gray-700 mb-4">
                  With master technicians and service advisors, we are dedicated
                  to precision and transparency, earning customer trust with
                  every interaction. Offering a full range of auto repair,
                  maintenance, and tailored service packages, NS Auto is where
                  trust meets excellence in Dubai's automotive hub.
                </p>
                <p className="text-gray-700 mb-8">
                  Our Promise: Trust, Precision, and Dedication!
                </p>
                <p className="text-gray-700">
                  At NS Auto, we build trust through transparent communication,
                  fair practices, and unwavering commitment to excellence. Our
                  mission is to earn your loyalty by delivering on our promises
                  and surpassing your expectations.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-2xl font-bold text-center mb-10">
              NS AUTO: WHERE EXCELLENCE MEETS PRECISION
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0">
                    <img
                      src="/icons/tik.svg"
                      alt="Checkmark"
                      className="w-5 h-5"
                    />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <h3 className="text-2xl md:text-2xl font-bold text-nsauto-yellow mb-2">
                EXPERIENCE A NEW LEVEL OF LUXURY CAR CARE. VISIT US TODAY!
              </h3>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
              OUR <span className="text-nsauto-yellow">TEAM</span>
            </h2>

            {/* Desktop Team Grid */}
            <div className="hidden md:grid grid-cols-5 gap-5">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="bg-black  w-full mb-3 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-xl mt-2 text-black">
                    {member.name}
                  </h4>
                </div>
              ))}
            </div>

            {/* Mobile Team Slider */}
            <div className="md:hidden">
              <div className="relative">
                <div className="bg-black aspect-w-1 w-full mb-3">
                  <img
                    src={teamMembers[currentSlide].image}
                    alt={teamMembers[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-xl text-center">
                  {teamMembers[currentSlide].name}
                </h4>

                {/* Slider Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2"
                  aria-label="Previous slide"
                >
                  <img
                    src="/icons/prev.svg"
                    alt="Previous"
                    className="w-10 h-10"
                  />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  aria-label="Next slide"
                >
                  <img src="/icons/next.svg" alt="Next" className="w-10 h-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
