import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const SocialBanner = () => {
  return (
    <>
      {/* Banner strip */}
      <div className="bg-nsauto-yellow py-2 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-around items-center text-center space-y-2 md:space-y-0">
          <p className="text-black font-medium text-xs md:text-sm">
            Join the NS Auto family to stay up to date with offers and stand a
            chance to win 1 year free servicing
          </p>

          {/* Regular social icons */}
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61567707416300">
              <img src="/icons/fb.svg" alt="Facebook" width={20} height={20} />
            </a>
            <a href="https://www.snapchat.com/add/nsauto.ae?share_id=OmvjniSqQSQ&locale=en-US">
              <img src="/icons/snap.svg" alt="Snapchat" width={20} height={20} />
            </a>
            <a href="https://www.tiktok.com/@nsauto_ae">
              <img src="/icons/tiktok.svg" alt="TikTok" width={20} height={20} />
            </a>
            <a href="https://www.instagram.com/nsautogaragellc/">
              <img
                src="/icons/insta.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Floating quick-action icons */}
      {/* <div className="fixed top-2 right-4 flex space-x-4 text-black z-50 bg-white p-2 rounded-full shadow-md">
        <a href="tel:+971542667527" aria-label="Call">
          <FaPhoneAlt className="w-5 h-5 hover:text-green-500" />
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=NS%20Auto%2C%20Dubai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Maps"
        >
          <FaMapMarkerAlt className="w-5 h-5 hover:text-green-500" />
        </a>
        <a
          href="https://wa.me/971542667527?text=Hi%20NS%20Auto!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5 hover:text-green-500" />
        </a>
      </div> */}
    </>
  );
};

export default SocialBanner;