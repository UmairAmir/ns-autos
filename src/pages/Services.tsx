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
  "major-service": "major-service-banner.jpg",
  "minor-service": "minor-service.jpg",
  "paint-protection": "paint-protection-banner.jpg",
  "window-tinting": "window-tinting-banner.jpg",
  "service-contract": "service-contract-banner.jpg",
  "pre-purchase-inspection": "purchase-inspection-banner.jpg",
};

const componentMap: Record<string, React.ReactNode> = {
    "minor-service": <MinorService />,
    "major-service": <MajorService />,
    "paint-protection": <PaintProtection />,
    "window-tinting": <WindowTinting />,
    "service-contract": <ServiceContract />,
    "pre-purchase-inspection": <PrePurchaseInspection />,
  };

export default function Services({ serviceType }: ServicesProps) {
  const imageFile = serviceImageMap[serviceType] || "default-banner.jpg";
  const serviceComponent = componentMap[serviceType] || <div className="text-center py-20 text-white">Service Not Found</div>;

  const serviceTitle = serviceType
    .split("-")
    .map(word => word.toUpperCase())
    .join(" ");

  return (
    <>
      <Navbar currentPage="SERVICES" />
      <PageBanner
        title={serviceTitle}
        backgroundImage={`/services/${serviceType}/${imageFile}`}
        breadcrumbs={[
          { label: "HOME", url: "/" },
          { label: "SERVICES", url: "/" },
          { label: serviceTitle, url: `/services/${serviceType}` },
        ]}
      />
      {serviceComponent}
      <Footer />
    </>
  );
}
