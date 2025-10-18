import React, { useEffect, useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { motion, useAnimation, useInView } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import PageBanner from "../components/hero-section/PageBanner";
import { sendEmail } from "@/utils/sendEmail";

const Contact = () => {
  // Ref for the form container (div) used for animations
  const formContainerRef = useRef<HTMLDivElement>(null);
  // Ref for the form element used by EmailJS
  const formElementRef = useRef<HTMLFormElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  // Use refs for animations
  const isFormInView = useInView(formContainerRef, { once: true });
  const isDetailsInView = useInView(detailsRef, { once: true });
  const isPhoneInView = useInView(phoneRef, { once: true });

  const formControls = useAnimation();
  const detailsControls = useAnimation();
  const phoneControls = useAnimation();

  useEffect(() => {
    if (isFormInView) {
      formControls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }

    if (isDetailsInView) {
      detailsControls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }

    if (isPhoneInView) {
      phoneControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [
    isFormInView,
    isDetailsInView,
    isPhoneInView,
    formControls,
    detailsControls,
    phoneControls,
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formElementRef.current) {
      const { success, message } = await sendEmail(formElementRef.current);

      if (success) {
        toast({
          title: "Form submitted",
          description: "We'll get back to you shortly!",
        });
        formElementRef.current.reset();
      } else {
        console.error(message);
        toast({
          title: "Submission failed",
          description:
            "There was an error sending your message. Please try again later.",
        });
      }
    }
  };

  return (
    <>
      <Navbar currentPage="CONTACT US" />
      <div>
        <PageBanner
          title="CONTACT US"
          backgroundImage="/contact-page/contact-head.jpg"
          breadcrumbs={[
            { label: "HOME", url: "/" },
            { label: "CONTACT US", url: "/contact" },
          ]}
        />

        {/* Contact Section */}
        <div className="container mx-auto px-4 py-10 md:py-20 relative">
          {/* Background phone image absolutely positioned */}
          <div
            ref={phoneRef}
            className="hidden md:block absolute bottom-0 right-0 z-0"
          >
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={phoneControls}
            >
              <img
                src="/contact-page/contact-ph.png"
                alt="Contact Phone"
                className="w-[300px] md:w-[360px] lg:w-[400px] xl:w-[420px]"
              />
            </motion.div>
          </div>

          {/* Foreground content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
            {/* Contact Form: 7/12 */}
            <div
              ref={formContainerRef}
              className="order-2 md:order-1 md:col-span-7"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={formControls}
                className="max-w-full"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  GET IN{" "}
                  <span className="text-nsauto-yellow">TOUCH WITH US</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  We'd love to hear from you! Please drop us a message with your
                  inquiries, and our dedicated team will respond promptly.
                </p>
                <form
                  ref={formElementRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    name="name" // MUST match {{name}}
                    placeholder="Full name"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-nsauto-yellow"
                    required
                  />
                  <input
                    type="email"
                    name="email" // MUST match {{email}}
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-nsauto-yellow"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-nsauto-yellow"
                    required
                  />
                  <textarea
                    name="message" // MUST match {{message}}
                    placeholder="Enter your message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-nsauto-yellow"
                    required
                  />
                  <div className="relative">
                    <button
                      type="submit"
                      className="bg-nsauto-yellow text-black font-bold py-3 px-10 hover:bg-yellow-600 transition ml-auto block"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Contact Details: 4/12 */}
            <div className="order-1 md:order-2 md:col-span-4">
              <div ref={detailsRef}>
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={detailsControls}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold mb-8">CONTACT DETAILS</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 border-l-2 border-l-nsauto-yellow pl-4">
                      <img
                        src="/icons/address.svg"
                        alt="Address"
                        className="w-5 h-5 mt-1"
                      />
                      <p className="font-medium">
                        AL QUOZ INDUSTRIAL AREA 3, 17A STREET RKM WAREHOUSE 31,
                        40. PO BOX 124026, DUBAI UAE
                      </p>
                    </div>
                    <div className="flex items-start space-x-4 border-l-2 border-l-nsauto-yellow pl-4">
                      <img
                        src="/icons/email.svg"
                        alt="Email"
                        className="w-7 h-5 mt-1"
                      />
                      <p className="font-medium">SALES@NSAUTO.AE</p>
                    </div>
                    <div className="flex items-start space-x-4 border-l-2 border-l-nsauto-yellow pl-4">
                      <img
                        src="/icons/call.svg"
                        alt="Phone"
                        className="w-5 h-5 mt-1"
                      />
                      <div>
                        <p className="font-medium">+971-4-238-1112</p>
                        <p className="font-medium">+971 54 266 7527</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
