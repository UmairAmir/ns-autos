import React, { useEffect, useRef, useState } from "react";
import { sendEmail } from "@/utils/sendEmail";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [animated, setAnimated] = useState(false);
  const [visible, setVisible] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;           // prevent double submit
    setSubmitting(true);

    try {
      if (formRef.current) {
        const { success, message } = await sendEmail(formRef.current);
        if (success) {
          toast({ title: "Form submitted", description: "We'll get back to you shortly!" });
          formRef.current.reset();
          navigate("/thank-you");
        } else {
          console.error("Email Error:", message);
          toast({ title: "Submission failed", description: "There was an error sending your message. Please try again later." });
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAnimated(true);
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setAnimated(true);
      setVisible(true);
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative h-[500px] md:h-[700px] overflow-hidden">
      {/* Video Background */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/home-page/video/banner-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Cutout Trapezium Shape */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[80px] overflow-hidden z-10">
        <svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 80L300 0H400V80H0Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col md:flex-row justify-center md:justify-between items-center text-white z-20">
        {/* Left Side */}
        <div
          className={`max-w-xl text-center md:text-left transition-all duration-1000 ease-out transform ${
            animated && visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <h1 className="text-lg sm:text-xl md:text-4xl font-bold mb-2">
            JOIN THE <span className="text-nsauto-yellow">NS AUTO</span> FAMILY
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-7xl font-bold leading-snug">
            A CHANCE TO <br />
            WIN <span className="relative inline-block">A YEAR</span> <br />
            <span className="text-nsauto-yellow">FREE</span> SERVICING
          </p>
        </div>

        {/* Right Side - Form */}
        <div
          className={`mt-8 md:mt-0 w-full max-w-sm transition-all duration-1000 ease-out transform relative ${
            animated && visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative w-full bg-black bg-opacity-40 backdrop-blur-sm p-3 sm:p-4 md:p-5 rounded-lg"
            aria-busy={submitting}
          >
            {/* Corner Shape */}
            <div className="absolute top-0 right-0">
              <img src="/icons/yellow-corner-shape.svg" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            {/* Dim/lock overlay while submitting */}
            {submitting && (
              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center z-10">
                {/* Spinner */}
                <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24" role="img" aria-label="Loading">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              </div>
            )}

            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                disabled={submitting}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-transparent text-white border border-white border-opacity-30 rounded placeholder-white placeholder-opacity-70 focus:outline-none focus:border-nsauto-yellow disabled:opacity-50"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                disabled={submitting}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-transparent text-white border border-white border-opacity-30 rounded placeholder-white placeholder-opacity-70 focus:outline-none focus:border-nsauto-yellow disabled:opacity-50"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                disabled={submitting}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-transparent text-white border border-white border-opacity-30 rounded placeholder-white placeholder-opacity-70 focus:outline-none focus:border-nsauto-yellow disabled:opacity-50"
              />

              <textarea
                name="message"
                placeholder="Enter your message"
                rows={3}
                disabled={submitting}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-transparent text-white border border-white border-opacity-30 rounded placeholder-white placeholder-opacity-70 focus:outline-none focus:border-nsauto-yellow resize-none disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-2 sm:py-3 text-sm sm:text-base bg-nsauto-yellow text-nsauto-black font-bold rounded transition 
                  ${submitting ? "opacity-60 cursor-not-allowed" : "hover:bg-yellow-600"}`}
              >
                {submitting ? (
                  <span className="inline-flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" role="img" aria-label="Loading">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Submitting…
                  </span>
                ) : (
                  "SUBMIT"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
