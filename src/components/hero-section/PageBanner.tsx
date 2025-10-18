import React from "react";
import { Link } from "react-router-dom";

type BreadcrumbItem = {
  label: string;
  url: string;
};

type PageBannerProps = {
  title: string;
  backgroundImage: string;
  breadcrumbs: BreadcrumbItem[];
};

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  backgroundImage,
  breadcrumbs,
}) => {
  return (
    <div
      className="relative bg-cover bg-center h-[280px] md:h-[360px] flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Centered Title and Breadcrumbs */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <div className="flex justify-center items-center space-x-2 text-sm text-white">
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center space-x-1">
            {index > 0 && <span>/</span>}
            <Link
              to={item.url}
              className={`hover:text-nsauto-yellow transition ${
                index === breadcrumbs.length - 1 ? "text-nsauto-yellow" : ""
              }`}
            >
              {item.label}
            </Link>
          </span>          
          ))}
        </div>
      </div>

      {/* Correct diagonal white cutout at bottom-right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[80px] overflow-hidden z-10">
        <svg
          viewBox="0 0 400 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path d="M0 80L300 0H400V80H0Z" fill="white" />
        </svg>
      </div>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/971542667527"
        className="fixed right-6 bottom-6 z-50 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
      </a>
    </div>
  );
};

export default PageBanner;
