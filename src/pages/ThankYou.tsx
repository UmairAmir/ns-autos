// src/pages/ThankYou.tsx
import { Link } from "react-router-dom";
import Footer from "@/components/footer/Footer";

export default function ThankYou() {
  return (
    <div>
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background video or image (optional). Replace src if you prefer an image */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/home-page/video/banner-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Subtle floating shapes */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        {/* Card */}
        <div className="relative z-10 mx-4 w-full max-w-2xl rounded-2xl bg-white/5 p-8 backdrop-blur-md border border-white/10 shadow-2xl">
          {/* Corner accent */}
          <div className="absolute -right-1 -top-1">
            <img
              src="/icons/yellow-corner-shape.svg"
              alt=""
              className="h-8 w-8"
            />
          </div>

          <div className="text-center text-white">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-nsauto-yellow/90 text-nsauto-black">
              {/* Check icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Thank you for reaching out!
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/80">
              We've received your message and a member of the{" "}
              <span className="text-nsauto-yellow font-semibold">NS AUTO</span>{" "}
              team will get back to you shortly.
            </p>

            {/* Info chips */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80">
                Average response time:{" "}
                <span className="text-white">24-48 hrs</span>
              </span>
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80">
                Hotline: <span className="text-white">+971 54 266 7527</span>
              </span>
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80">
                Email: <span className="text-white">sales@nsauto.ae</span>
              </span>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-md bg-nsauto-yellow px-6 py-3 font-semibold text-nsauto-black transition hover:bg-yellow-500"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
