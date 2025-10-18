import React from 'react';

type PackageItem = {
  name: string;
  price: string;
};

type BodyShopCardProps = {
  type: string;
  packages: PackageItem[];
};

const BodyShopCard: React.FC<BodyShopCardProps> = ({ type, packages }) => {
  return (
    <div
      className="bg-cover bg-center relative p-8 w-full h-full text-white rounded-md"
      style={{
        backgroundImage: "url('/background-images/cylinder-s.png')",
      }}
    >
      {/* Triangle in corner */}
      <div className="absolute top-0 right-0">
        <div className="w-0 h-0 border-t-[20px] border-t-nsauto-yellow border-l-[20px] border-l-transparent"></div>
      </div>

      <h3 className="text-xl font-bold mb-8 text-nsauto-yellow">{type}</h3>

      <div className="space-y-6">
        {packages.map((pkg, index) => (
          <div key={index} className="border-b border-gray-800 pb-4 last:border-b-0 last:pb-0">
            <p className="text-sm text-gray-300 mb-2">{pkg.name}</p>
            <p className="text-xl text-nsauto-yellow font-bold">{pkg.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyShopCard;
