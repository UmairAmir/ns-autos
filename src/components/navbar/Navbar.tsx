import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import SocialBanner from "@/components/navbar/SocialBanner";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type NavbarProps = {
  currentPage: string; // e.g., "HOME", "ABOUT US", "SERVICES"
};

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [hoverLink, setHoverLink] = useState<string | null>(null);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "BLOGS", path: "/blogs" },
    { name: "BODY SHOP", path: "/body-shop" },
    { name: "ABOUT US", path: "/about" },
    { name: "WARRANTY", path: "/warranty" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const serviceItems = [
    { name: "MINOR SERVICE", path: "/services/minor-service" },
    { name: "MAJOR SERVICE", path: "/services/major-service" },
    { name: "PAINT PROTECTION", path: "/services/paint-protection" },
    { name: "WINDOW TINTING", path: "/services/window-tinting" },
    { name: "SERVICE CONTRACT", path: "/services/service-contract" },
    {
      name: "PRE PURCHASE INSPECTION",
      path: "/services/pre-purchase-inspection",
    },
    { name: "ANY OTHER REQUIRMENTS", path: "/contact" },
  ];

  return (
    <nav className="bg-nsauto-black text-white sticky top-0 z-50">
      <SocialBanner />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/logo.svg" alt="NS Auto" className="h-16" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = item.name === currentPage;

              if (item.name === "SERVICES") {
                return (
                  <div
                    key={item.name}
                    className="relative flex flex-col items-center"
                  >
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger
                            className={`hover:text-nsauto-yellow transition py-2 font-medium text-sm bg-transparent hover:bg-transparent focus:bg-transparent ${
                              currentPage === "SERVICES"
                                ? "text-nsauto-yellow"
                                : "text-white"
                            }`}
                            onMouseEnter={() => setHoverLink("/services")}
                            onMouseLeave={() => setHoverLink(null)}
                          >
                            SERVICES
                          </NavigationMenuTrigger>

                          <NavigationMenuContent className="bg-white rounded-none p-0 w-72">
                            <ul className="border border-gray-200">
                              {serviceItems.map((service) => (
                                <li
                                  key={service.path}
                                  className="border-b border-gray-200 last:border-b-0"
                                >
                                  <a
                                    href={service.path}
                                    className="block px-6 py-3 text-nsauto-black hover:text-nsauto-yellow hover:bg-gray-50 transition"
                                  >
                                    {service.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>

                    {(currentPage === "SERVICES" ||
                      hoverLink === "/services") && (
                      <div className="absolute -bottom-2">
                        <img
                          src="/icons/menu-hover.svg"
                          alt="hover underline"
                          className="w-12"
                        />
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div
                  key={item.path}
                  className="relative flex flex-col items-center"
                >
                  <a
                    href={item.path}
                    className={`hover:text-nsauto-yellow transition py-2 font-medium text-sm ${
                      isActive ? "text-nsauto-yellow" : "text-white"
                    }`}
                    onMouseEnter={() => setHoverLink(item.path)}
                    onMouseLeave={() => setHoverLink(null)}
                  >
                    {item.name}
                  </a>
                  {(isActive || hoverLink === item.path) && (
                    <div className="absolute -bottom-2">
                      <img
                        src="/icons/menu-hover.svg"
                        alt=""
                        className="w-12"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Phone Number */}
          <div className="hidden lg:flex flex-col items-end">
            <div className="text-sm text-white font-bold mb-1">CALL US</div>
            <a
              href="tel:+971542667527"
              className="text-2xl text-nsauto-yellow font-bold"
            >
              +971 54 266 7527
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-white p-2">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="p-0 bg-black w-full sm:max-w-full"
              >
                <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                <SheetDescription className="sr-only">
                  Use the menu below to navigate the site
                </SheetDescription>

                <div className="py-4 px-6">
                  <div className="flex justify-between items-center mb-8">
                    <a href="/" className="text-nsauto-yellow font-bold">
                      HOME
                    </a>
                    <SheetTrigger asChild>
                      <button className="text-white">
                        <X size={24} />
                      </button>
                    </SheetTrigger>
                  </div>

                  <div className="flex flex-col space-y-6">
                    {/* Services Dropdown */}
                    <div className="relative">
                      <span
                        className={`font-semibold ${
                          currentPage === "SERVICES"
                            ? "text-nsauto-yellow"
                            : "text-white"
                        }`}
                      >
                        SERVICES
                      </span>
                      <div className="pl-4 mt-2 space-y-2 border-l border-gray-700">
                        {serviceItems.map((item) => (
                          <a
                            key={item.path}
                            href={item.path}
                            className="block text-white hover:text-nsauto-yellow transition py-2"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Page Links */}
                    {navItems
                      .filter((item) => item.name !== "SERVICES")
                      .map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          className={`hover:text-nsauto-yellow transition ${
                            currentPage === item.name
                              ? "text-nsauto-yellow"
                              : "text-white"
                          }`}
                        >
                          {item.name}
                        </a>
                      ))}

                    {/* Phone */}
                    <div className="mt-8">
                      <div className="text-sm text-white font-bold mb-1">
                        CALL US
                      </div>
                      <a
                        href="tel:+97154266752"
                        className="text-xl text-nsauto-yellow font-bold"
                      >
                        +971 54 266 7527
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
