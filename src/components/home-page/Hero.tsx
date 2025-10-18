
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[60vh] md:h-[80vh] bg-black overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          opacity: 0.4
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">JOIN THE <span className="text-yellow-500">NS AUTO</span> FAMILY</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A CHANCE TO<br />WIN A YEAR <span className="text-yellow-500">FREE</span><br />SERVICING
          </h2>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 uppercase transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
