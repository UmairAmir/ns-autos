import React from "react";
import CylinderCard from "./CylinderCard";

type CylinderCardGroupProps = {
  packages: {
    cylinderCount: string;
    standardPrice: string;
    luxuryPrice: string;
    isPopular?: boolean;
  }[];
};

const CylinderCardGroup: React.FC<CylinderCardGroupProps> = ({ packages }) => {
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
            <CylinderCard
              cylinderCount={pkg.cylinderCount}
              standardPrice={pkg.standardPrice}
              luxuryPrice={pkg.luxuryPrice}
              isPopular={pkg.isPopular}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CylinderCardGroup;
