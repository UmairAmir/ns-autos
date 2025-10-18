
import React from 'react';

type ServiceFeaturesProps = {
  title: string;
  features: string[];
};

const ServiceFeatures = ({ title, features }: ServiceFeaturesProps) => {
  return (
    <div className="mb-10 overflow-hidden">
      <h3 className="font-bold text-xl uppercase mb-6 text-center">
        {title} INCLUDES:
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto justify-items-start">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <img src="/icons/tik.svg" alt="" className="mr-2" />
            <span className="text-base font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;
