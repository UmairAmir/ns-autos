import React from 'react';
import { 
  Wrench, 
  Car, 
  ThermometerSnowflake, 
  Zap, 
  Activity, 
  Disc 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailedServicesSection = () => {
  const services = [
    {
      title: "Engine Diagnostics & Repair",
      description: "Our state-of-the-art diagnostic tools allow us to accurately identify and fix engine issues. From minor tune-ups to complete overhauls, our certified technicians ensure your engine runs at peak performance.",
      icon: <Activity className="w-10 h-10 text-nsauto-yellow" />
    },
    {
      title: "Brake Service & Maintenance",
      description: "Your safety is our priority. We provide comprehensive brake services including pad replacement, rotor resurfacing, and fluid checks to ensure your vehicle stops effectively every time.",
      icon: <Disc className="w-10 h-10 text-nsauto-yellow" />
    },
    {
      title: "AC Repair & Servicing",
      description: "Beat the heat with our expert AC services. We handle leak detection, compressor repairs, and gas refilling to keep your cabin cool and comfortable throughout the year.",
      icon: <ThermometerSnowflake className="w-10 h-10 text-nsauto-yellow" />
    },
    {
      title: "Transmission Services",
      description: "Whether automatic or manual, we offer specialized transmission maintenance and repair. We ensure smooth gear shifts and prolong the lifespan of your vehicle's transmission system.",
      icon: <Wrench className="w-10 h-10 text-nsauto-yellow" />
    },
    {
      title: "Electrical System Repairs",
      description: "Modern cars rely heavily on complex electrical systems. Our experts troubleshoot and repair wiring, batteries, alternators, and starter motors to keep your car's electronics functioning perfectly.",
      icon: <Zap className="w-10 h-10 text-nsauto-yellow" />
    },
    {
      title: "Suspension & Steering",
      description: "Experience a smooth ride with our suspension and steering services. We repair shocks, struts, and steering components to improve handling and ride comfort on all road conditions.",
      icon: <Car className="w-10 h-10 text-nsauto-yellow" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-nsauto-yellow">Expert Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of automotive services designed to keep your vehicle in top condition. 
            Trust our experienced team for reliable and high-quality care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group">
              <CardHeader className="flex flex-col items-center text-center pt-8 pb-4">
                <div className="mb-4 p-4 bg-gray-50 rounded-full group-hover:bg-nsauto-yellow/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8 px-6">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
