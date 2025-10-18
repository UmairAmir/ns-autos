import React from 'react';
import { motion } from 'framer-motion';

type CylinderCardProps = {
  cylinderCount: string;
  standardPrice: string; 
  luxuryPrice: string;  
  isPopular?: boolean;
  index: number;
};

const CylinderCard = ({ cylinderCount, standardPrice, luxuryPrice, isPopular, index }: CylinderCardProps) => {
  const [currency1, standardAmount] = standardPrice.split(' ');
  const [currency2, luxuryAmount] = luxuryPrice.split(' ');

  return (
    <motion.div 
      className="relative service-card text-white w-[260px] sm:w-[280px] h-[400px] flex flex-col items-center bg-black p-4"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: index * 0.1 }}
      viewport={{ once: false }}
      style={{
        backgroundImage: "url('/background-images/cylinder-s.png')",
      }}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 z-20">
          <img src="/icons/yellow-corner-shape.svg" alt="" />
        </div>
      )}
      <div className="absolute top-0 right-0 z-10">
        <img src="/icons/corner-shape-s.svg" alt="" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between h-full w-full items-center py-6 z-10">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2 text-nsauto-yellow">{cylinderCount}</h3>
          <p className="text-nsauto-yellow mb-2">STARTING FROM</p>
        </div>

        <div className="text-center space-y-2">
          <p className="text-white">Standard</p>
          <h4 className="text-xl font-bold text-nsauto-yellow">{currency1} {standardAmount}</h4>
          <div className="w-full bg-white bg-opacity-20 h-px"></div>
          <p className="text-white">Luxury</p>
          <h4 className="text-xl font-bold text-nsauto-yellow">{currency2} {luxuryAmount}</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default CylinderCard;
