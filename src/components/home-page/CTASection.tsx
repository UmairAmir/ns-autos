import React from 'react';
import { Phone } from 'lucide-react';

interface CTASectionProps {
  description?: React.ReactNode;
}

const CTASection = ({ description }: CTASectionProps) => {
  const defaultDescription = (
    <>
      For all your automotive questions and service requests, please don't hesitate to contact us. 
      Our helpful and experienced team can assist you. Call us right now for a free quotation or to schedule an appointment.
    </>
  );

  return (
    <section id="cta-section" className="bg-nsauto-yellow py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 uppercase">
          Contact Us
        </h2>
        <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          {description || defaultDescription}
        </p>
        <div className="flex justify-center">
          <a 
            href="tel:+971542667527" 
            className="bg-white text-nsauto-black px-8 py-4 rounded-md font-bold text-xl flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Phone className="w-6 h-6" />
            <span>+971 54 266 7527</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
