import React from "react";
import VehicleCard from "./VehicleCard";

type VehicleCardGroupProps = {
  packages: {
    title: string;
    heading1: string;
    price1: string;
    heading2: string;
    price2: string;
    isPopular?: boolean;
  }[];
};

const VehicleCardGroup: React.FC<VehicleCardGroupProps> = ({ packages }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {packages.map((pkg, index) => {
        const isMiddle = index === 1; // Make the middle card stand out
        return (
          <div
            key={index}
            className={`transition-transform ${
              isMiddle ? "scale-105 z-10 shadow-xl" : ""
            }`}
          >
            <VehicleCard
                title={pkg.title}
                heading1={pkg.heading1}
                price1={pkg.price1}
                heading2={pkg.heading2}
                price2={pkg.price2}
                isPopular={pkg.isPopular}
                index={index} // Pass the index to VehicleCard for animation
            />
          </div>
        );
      })}
    </div>
  );
};

export default VehicleCardGroup;