
import React from 'react';

type ServiceIconCardProps = {
  name: string;
  iconSrc: string;
};

const ServiceIconCard: React.FC<ServiceIconCardProps> = ({ name, iconSrc }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 relative">
        <img 
          src={iconSrc} 
          alt={name} 
          className="h-14 w-16 object-contain"
        />
      </div>
      <h3 className="text-xs sm:text-sm font-semibold">{name}</h3>
    </div>
  );
};

export default ServiceIconCard;
