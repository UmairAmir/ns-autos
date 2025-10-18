import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import mapsIconUrl from "/icons/maps_icon.svg";

const FloatingQuickActions: React.FC = () => {
  return (
    <div className="
      fixed z-[100] bg-white shadow-xl rounded-full p-3 text-black
      flex items-center gap-3
      bottom-4 left-1/2 -translate-x-1/2
      sm:top-1/2 sm:right-4 sm:left-auto sm:bottom-auto sm:-translate-x-0 sm:-translate-y-1/2 sm:flex-col sm:gap-4
      min-w-[180px] sm:min-w-0 sm:min-h-[180px]
      max-w-[300px] sm:max-w-[80px]
    ">
      {/* Phone */}
      <a 
        href="tel:+971542667527" 
        aria-label="Call" 
        className="p-2.5 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200 flex-shrink-0 flex items-center justify-center"
      >
        <FaPhoneAlt className="w-5 h-5 text-white" />
      </a>

      {/* Maps */}
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=NS%20Auto%2C%20Dubai"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Maps"
        className="p-2.5 rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-colors duration-200 flex-shrink-0 flex items-center justify-center"
      >
        <img
          src={mapsIconUrl}
          alt="Google Maps"
          className="w-5 h-5 object-contain flex-shrink-0"
          loading="eager" 
          decoding="sync"
        />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/971542667527"
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="WhatsApp"
        className="p-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200 flex-shrink-0"
      >
        <FaWhatsapp className="w-5 h-5 text-white" />
      </a>
    </div>
  );
};

export default FloatingQuickActions;