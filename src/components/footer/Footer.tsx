import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceItems = [
    { name: "Minor Service", path: "/services/minor-service" },
    { name: "Major Services", path: "/services/major-service" },
    { name: "Pre Purchase Inspection", path: "/services/pre-purchase-inspection" },
    { name: "Paint Protection", path: "/services/paint-protection" },
    { name: "Window Tinting", path: "/services/window-tinting" },
    { name: "Service Contract", path: "/services/service-contract" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Body Shop", path: "/body-shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
    { name: "Warranty", path: "/warranty" },
  ];

  return (
    <footer id="contact" className="bg-nsauto-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="flex flex-col items-center justify-center">
            <img src="/icons/call.svg" alt="Phone" className="mb-2" />
            <a href="tel:+97142381112" className="text-sm mb-1 hover:text-nsauto-yellow hover:scale-105 transition-transform inline-block cursor-pointer">+971-4-238-1112</a>
            <a href="tel:+971542667527" className="text-sm hover:text-nsauto-yellow hover:scale-105 transition-transform inline-block cursor-pointer">+971 54 266 7527</a>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img src="/icons/address.svg" alt="Address" className="mb-2" />
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=NS%20Auto%2C%20Dubai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-center hover:text-nsauto-yellow hover:scale-105 transition-transform inline-block cursor-pointer"
            >
              Al quoz industrial area 3, 17A street RKM warehouse 31, 40. PO Box
              124026, Dubai UAE
            </a>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img src="/icons/email.svg" alt="Email" className="mb-2 h-7 w-12" />
            <a href="mailto:sales@nsauto.ae" className="text-sm hover:text-nsauto-yellow hover:scale-105 transition-transform inline-block cursor-pointer">sales@nsauto.ae</a>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="text-center md:text-left">
            <a href="/" className="flex justify-center md:justify-start">
              <img src="/logo.svg" alt="NS Auto" className="h-16 mb-6" />
            </a>
            <p className="text-gray-400 mb-6">
              NS Auto provides expert car services with over 20 years of
              experience. From maintenance to repairs, we deliver reliable and
              efficient care. Trust us for all your automotive needs in the UAE.
            </p>
            <a
              href="/about"
              className="text-white inline-flex items-center hover:text-nsauto-yellow transition"
            >
              READ MORE +
            </a>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-nsauto-yellow transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 uppercase">Services</h3>
            <ul className="space-y-3">
              {serviceItems.map((service) => (
                <li key={service.path}>
                  <a
                    href={service.path}
                    className="text-gray-400 hover:text-nsauto-yellow transition"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 uppercase">Subscription</h3>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Email address"
                className="w-full flex-grow p-2 bg-white text-black"
              />
              <button className="bg-nsauto-yellow text-black px-4 py-2 font-bold uppercase whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h3 className="text-lg font-bold uppercase">
                Can't find what you are looking for?
              </h3>
              <a
                href="#enquiry"
                className="inline-block bg-nsauto-yellow text-black px-6 py-2 font-bold uppercase hover:bg-yellow-600 transition"
              >
                Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="py-4 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} NS Auto. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61567707416300" aria-label="Facebook">
                <img
                  src="/icons/fb.svg"
                  alt="Facebook"
                  className="h-5 w-5 invert "
                />
              </a>
              <a href="https://www.snapchat.com/add/nsauto.ae?share_id=OmvjniSqQSQ&locale=en-US" aria-label="Snapchat">
                <img
                  src="/icons/snap.svg"
                  alt="Snapchat"
                  className="h-5 w-5 invert "
                />
              </a>
              <a href="https://www.tiktok.com/@nsauto_ae" aria-label="TikTok">
                <img
                  src="/icons/tiktok.svg"
                  alt="TikTok"
                  className="h-5 w-5 invert "
                />
              </a>
              <a href="https://www.instagram.com/nsautogaragellc/" aria-label="Instagram">
                <img
                  src="/icons/insta.svg"
                  alt="Instagram"
                  className="h-5 w-5 invert "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
