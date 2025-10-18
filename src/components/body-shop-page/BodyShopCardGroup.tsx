import React from 'react';
import BodyShopCard from './BodyShopCard';

type PackageItem = {
  name: string;
  price: string;
};

type CarPackage = {
  type: string;
  packages: PackageItem[];
};

type BodyShopCardGroupProps = {
  packages: CarPackage[];
};

const BodyShopCardGroup: React.FC<BodyShopCardGroupProps> = ({ packages }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {packages.map((pkg, index) => {
        const isMiddle = index === 1;
        const cardWidth = isMiddle ? 'w-[300px] h-[440px]' : 'w-[260px] h-[400px]';
        const scale = isMiddle ? 'scale-110 z-10' : 'scale-100';

        return (
          <div
            key={index}
            className={`transition-transform duration-300 ${cardWidth} ${scale}`}
          >
            <BodyShopCard type={pkg.type} packages={pkg.packages} />
          </div>
        );
      })}
    </div>
  );
};

export default BodyShopCardGroup;
