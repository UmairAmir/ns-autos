import React from 'react';
import { motion } from 'framer-motion';

type CylinderCardProps = {
    title: string;
    heading1: string;
    price1: string;
    heading2: string;
    price2: string;
    isPopular?: boolean;
  index: number;
};

const VehicleCard = ({ title, heading1, price1, heading2, price2,isPopular,index }: CylinderCardProps) => {
  const [currency1, standardAmount] = price1.split(' ');
  const [currency2, luxuryAmount] = price2.split(' ');

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
        <div className=" space-y-7">
          <h2 className="text-3xl font-bold mb-2 text-nsauto-yellow">{title}</h2>

          <p className="text-white text-xl">{heading1}</p>
          <h5 className="text-xl font-bold text-nsauto-yellow">{currency1} {standardAmount}</h5>
          <div className="w-full bg-white bg-opacity-20 h-px"></div>
          <p className="text-white text-xl">{heading2}</p>
          <h5 className="text-xl font-bold text-nsauto-yellow">{currency2} {luxuryAmount}</h5>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
