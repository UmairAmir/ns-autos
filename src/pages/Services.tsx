import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PageBanner from "../components/hero-section/PageBanner";
import MinorService from "../components/services-page/MinorService";
import MajorService from "../components/services-page/MajorService";
import PaintProtection from "../components/services-page/PaintProtection";
import WindowTinting from "../components/services-page/WindowTinting";
import ServiceContract from "../components/services-page/ServiceContract";
import PrePurchaseInspection from "../components/services-page/PrePurchaseInspection";


interface ServicesProps {
  serviceType: string;
}

const serviceImageMap: Record<string, string> = {
  "car-major-service-dubai": "major-service-banner.jpg",
  "car-minor-service-dubai": "minor-service.jpg",
  "paint-protection-dubai": "paint-protection-banner.jpg",
  "window-tinting-dubai": "window-tinting-banner.jpg",
  "service-contract-dubai": "service-contract-banner.jpg",
  "pre-purchase-inspection-dubai": "purchase-inspection-banner.jpg",
};

const serviceTitleMap: Record<string, string> = {
  "car-major-service-dubai": "Car Major Service in Dubai",
  "car-minor-service-dubai": "Car Minor Service in Dubai",
  "paint-protection-dubai": "Paint Protection Service in Dubai",
  "window-tinting-dubai": "Window Tinting Service in Dubai",
  "service-contract-dubai": "Service Contract in Dubai",
  "pre-purchase-inspection-dubai": "Pre Purchase Inspection Service in Dubai",
};

const componentMap: Record<string, React.ReactNode> = {
    "car-minor-service-dubai": <MinorService />,
    "car-major-service-dubai": <MajorService />,
    "paint-protection-dubai": <PaintProtection />,
    "window-tinting-dubai": <WindowTinting />,
    "service-contract-dubai": <ServiceContract />,
    "pre-purchase-inspection-dubai": <PrePurchaseInspection />,
  };

export default function Services({ serviceType }: ServicesProps) {
  const imageFile = serviceImageMap[serviceType] || "default-banner.jpg";
  const serviceComponent = componentMap[serviceType] || <div className="text-center py-20 text-white">Service Not Found</div>;

  const serviceTitle = serviceTitleMap[serviceType] || serviceType
    .split("-")
    .map(word => word.toUpperCase())
    .join(" ");

  // Breadcrumb URL - directly use the service type as it is now the route path (without /services prefix)
  // Wait, in App.tsx they are root paths now e.g. /car-major-service-dubai.
  // So the breadcrumb URL should be `/${serviceType}`.
  
  return (
    <>
      <Navbar currentPage="SERVICES" />
      <PageBanner
        title={serviceTitle.toUpperCase()} 
        backgroundImage={`/services/${GetOldServiceFolder(serviceType)}/${imageFile}`}
        breadcrumbs={[
          { label: "HOME", url: "/" },
          { label: "SERVICES", url: "/" },
          { label: serviceTitle.toUpperCase(), url: `/${serviceType}` },
        ]}
      />
      {serviceComponent}
      <Footer />
    </>
  );
}

// Helper to map new slugs back to old folder names if images are still stored there?
// The original code was: backgroundImage={`/services/${serviceType}/${imageFile}`}
// The images are likely in `public/services/major-service/major-service-banner.jpg`.
// So if I change serviceType to `car-major-service-dubai`, the path becomes `/services/car-major-service-dubai/...` which might not exist.
// I need to map new slugs to old folder names for images.

function GetOldServiceFolder(newSlug: string): string {
  const mapping: Record<string, string> = {
     "car-major-service-dubai": "major-service",
     "car-minor-service-dubai": "minor-service",
     "paint-protection-dubai": "paint-protection",
     "window-tinting-dubai": "window-tinting",
     "service-contract-dubai": "service-contract",
     "pre-purchase-inspection-dubai": "pre-purchase-inspection",
  };
  return mapping[newSlug] || newSlug;
}
