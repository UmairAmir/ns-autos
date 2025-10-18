// src/hooks/useGtagPageView.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useGtagPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "AW-17324057435", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};