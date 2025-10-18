
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/home-page/HeroSection';
import ServicesOverview from '../components/home-page/ServicesOverview';
import ServiceSection from '../components/home-page/services-section/ServiceSection';
import ServiceGallery from '../components/home-page/services-section/ServiceGallery';
import AboutSection from '../components/home-page/AboutSection';
import SalesEnquiry from '../components/home-page/SalesEnquiry';
import Footer from '../components/footer/Footer';
import FloatingQuickActions from '../components/FloatingQuickActions'; // ✅ add this

const Index = () => {
  const minorServiceItems = [
    "Oil Flush And Change",
    "New Oil Filter",
    "Aircon Service And Clean",
    "Air Filter Service And Clean",
    "Full Diagnostics With Report",
    "Full Health Inspections",
    "Valet Service",
  ];

  const minorServicePackages = [
    {
      cylinderCount: "4 CYLINDER",
      standardPrice: "AED 199",
      luxuryPrice: "AED 299",
      features: ["Oil Change", "Oil Filter", "Basic Safety Check", "Fluid Top-up"],
    },
    {
      cylinderCount: "6 CYLINDER",
      standardPrice: "AED 399",
      luxuryPrice: "AED 499",
      features: ["Oil Change", "Oil Filter", "Basic Safety Check", "Fluid Top-up"],
      isPopular: true
    },
    {
      cylinderCount: "8 CYLINDER",
      standardPrice: "AED 599",
      luxuryPrice: "AED 699",
      features: ["Oil Change", "Oil Filter", "Basic Safety Check", "Fluid Top-up"],
    }
  ];
  

  const majorServiceItems = [
    "Comprehensive Engine Check",
    "Spark Plug Replacement",
    "Fuel Filter Replacement",
    "Air Filter Replacement",
    "Cabin Filter Replacement", 
    "Cooling System Service"
  ];

  const majorServicePackages = [
    {
      cylinderCount: "4 CYLINDER",
      standardPrice: "AED 699",
      luxuryPrice: "AED 799",
      features: ["Full Oil Change", "All Filters", "Spark Plugs", "System Diagnostics"],
    },
    {
      cylinderCount: "6 CYLINDER",
      standardPrice: "AED 899",
      luxuryPrice: "AED 999",
      features: ["Full Oil Change", "All Filters", "Spark Plugs", "System Diagnostics"],
      isPopular: true
    },
    {
      cylinderCount: "8 CYLINDER",
      standardPrice: "AED 1099",
      luxuryPrice: "AED 1199",
      features: ["Full Oil Change", "All Filters", "Spark Plugs", "System Diagnostics"],
    }
  ];
  

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar currentPage="HOME" />
      <FloatingQuickActions />
      <HeroSection />
      <ServicesOverview />
      {/* <ServiceIcons /> */}
      <hr />
      
      <div>
        <ServiceSection 
          id="minor-service"
          title="MINOR SERVICE"
          // description="Our minor service package covers essential maintenance tasks to keep your vehicle running smoothly. Recommended every 10,000 km or 6 months."
          services={minorServicePackages}
          serviceItems={minorServiceItems}
          carImage="/home-page/blue-car.png"
        />
        
        <ServiceSection 
          id="major-service"
          title="MAJOR SERVICE"
          // description="Our comprehensive major service package includes all necessary maintenance and replacements for optimal vehicle performance. Recommended every 30,000 km or 2 years."
          services={majorServicePackages}
          serviceItems={majorServiceItems}
          carImage="/home-page/yellow-car.png"
        />
      </div>
      
      <ServiceGallery />
      <SalesEnquiry />
      <AboutSection />
      {/* <TeamSection /> */}
      <Footer />
    </div>
  );
};

export default Index;