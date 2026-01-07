import React from 'react';
import { ArrowRight, Settings, Wrench, Shield, Sun, FileCheck, Search } from "lucide-react";

interface ServiceItem {
  label: string; 
  link?: string;
  description?: string;
  icon?: React.ReactNode;
}

interface ServicesOverviewProps {
  introTitle?: React.ReactNode;
  introText?: string;
  services?: (string | ServiceItem)[];
  layout?: 'list' | 'grid';
}

const ServicesOverview = ({ introTitle, introText, services, layout = 'list' }: ServicesOverviewProps) => {
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

  const displayList = services || defaultServicesList;
  const defaultIntroText = "We are a fully operational car service and warranty center in Dubai. Trusted by thousands of customers and partnered with leading insurance companies, NS Auto offers expert car services in Dubai, including car garage repair, car service, and car repair shop solutions. Our services include:";

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {introTitle && <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{introTitle}</h2>}
          <p className="text-lg text-gray-600">
            {introText || defaultIntroText}
          </p>
        </div>

        {layout === 'list' && (
          <div className="max-w-4xl mx-auto">
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
            
            <div className="mt-12 text-center">
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
        )}

        {layout === 'grid' && (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {displayList.map((service, index) => {
               const item = typeof service === 'string' ? { label: service } : service;
               
               const CardContent = () => (
                 <>
                   {item.icon && (
                     <div className="mb-6">
                       {item.icon}
                     </div>
                   )}
                   <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-nsauto-yellow transition-colors">
                     {item.label}
                   </h3>
                   {item.description && (
                     <p className="text-gray-600 leading-relaxed text-sm">
                       {item.description}
                     </p>
                   )}
                 </>
               );

               const cardClasses = "bg-white p-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full border border-gray-100 group cursor-pointer";

               return item.link ? (
                 <a key={index} href={item.link} className={cardClasses}>
                   <CardContent />
                 </a>
               ) : (
                 <div key={index} className={cardClasses}>
                   <CardContent />
                 </div>
               );
             })}
           </div>
        )}
      </div>
    </section>
  );
};

export default ServicesOverview;