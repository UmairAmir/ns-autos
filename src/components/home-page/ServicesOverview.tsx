
import React from 'react';

interface ServicesOverviewProps {
  introTitle?: React.ReactNode;
  introText?: string;
  services?: (string | { label: string; link: string })[];
}

const ServicesOverview = ({ introTitle, introText, services }: ServicesOverviewProps) => {
  const defaultServicesList = [
    "Engine Repair",
    "Genuine Spare Part Sourcing",
    "Battery Replacement",
    "Brake Repair",
    "Gearbox & Radiator Repair",
    "Suspension Repair",
    "Electrical Repairs",
    "Programming (Gearbox, ECU, Key)",
    "Navigation System Assistance"
  ];

  // Use provided services or default list.
  // Normalize everything to be an object or string for rendering logic loop, or just handle types in map.
  const displayList = services || defaultServicesList;

  const defaultIntroText = "We are a fully operational car service and warranty center in Dubai. Trusted by thousands of customers and partnered with leading insurance companies, NS Auto offers expert car services in Dubai, including car garage repair, car service, and car repair shop solutions. Our services include:";

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {introTitle && <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{introTitle}</h2>}
          <p className="text-lg mb-10">
            {introText || defaultIntroText}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayList.map((service, index) => (
              <div key={index} className="flex items-start">
                <img src="/icons/tik.svg" alt="Tick" className="mt-1 mr-3 flex-shrink-0" />
                {typeof service === 'string' ? (
                  <span className="text-left font-medium">{service}</span>
                ) : (
                  <a href={service.link} className="text-left font-medium hover:text-nsauto-yellow transition-colors">{service.label}</a>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <button 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('cta-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="bg-nsauto-yellow text-nsauto-black px-8 py-3 font-bold uppercase hover:bg-yellow-600 transition duration-300"
            >
              Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;