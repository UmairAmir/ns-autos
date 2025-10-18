import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageBanner from "@/components/hero-section/PageBanner";
import { motion } from "framer-motion";
import BlogCard from "@/components/blog-page/BlogCard";
import BlogDetail from "@/components/blog-page/BlogDetail";

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "transform-your-vehicle",
    title:
      "TRANSFORM YOUR VEHICLE: ULTIMATE CAR DETAILING SERVICE CENTER IN DUBAI",
    excerpt:
      "In Dubai's gleaming cityscape, where automobiles are more than just transportation but statements of style and sophistication, finding an exceptional car detailing service...",
    content: `
      <p>In Dubai's gleaming cityscape, where automobiles are more than just transportation but statements of style and sophistication, finding an exceptional car detailing service center in Dubai is crucial for automotive enthusiasts and discerning vehicle owners. NS Auto emerges as the pinnacle of automotive aesthetic excellence, offering top-tier car detailing services that enhance and elevate your vehicle's appearance.</p>

      <h2>The Art and Science of Professional Car Detailing</h2>
      <p>Auto detailing is far more than a simple wash - it's meticulous process that requires expertise, precision, and a passion for automotive perfection. At NS Auto, we understand that each vehicle has a unique story, and our car detailing shop in Dubai is dedicated to preserving and enhancing that narrative.</p>
      
      <h2>Comprehensive Detailing Services</h2>
      <p>Our auto detailing in Dubai offers a range of treatments designed to meet the highest standards:</p>
      <ul>
        <li>Exterior paint correction and protection</li>
        <li>Hand wash cleaning and restoration</li>
        <li>Engine bay detailing and restoration</li>
        <li>Rim restoration and protection</li>
        <li>Window detailing beyond the standard car wash</li>
      </ul>
      
      <h2>Cutting-Edge Techniques and Premium Products</h2>
      <p>NS Auto stays ahead of the car detailing landscape and uses only premium, industry-leading products. Our technicians are trained in the most advanced detailing technologies, ensuring that your vehicle receives nothing short of extraordinary care.</p>
    `,
    date: "11 Dec 2024",
    image:
      "/blog-page/Transform-Your-Vehicle-Dubais-Ultimate-Car-Detailing-Service-Center.jpg",
  },
  {
    id: 2,
    slug: "ns-auto-top-tier-service-center",
    title:
      "NS AUTO: TOP-TIER CAR SERVICE CENTER IN DUBAI'S AUTOMOTIVE LANDSCAPE",
    excerpt:
      "In the bustling metropolis of Dubai, where luxury cars and high-performance vehicles are a common sight, finding a reliable car service center in Dubai is paramount for vehicle...",
    content: `
      <p>In the bustling metropolis of Dubai, where luxury cars and high-performance vehicles are a common sight, finding a reliable car service center in Dubai is paramount for vehicle owners. NS Auto stands as a beacon of excellence, providing comprehensive automotive expertise that caters to all your maintenance needs with precision, expertise, and unparalleled customer care.</p>
      
      <h2>Why Choose NS Auto for Your Automotive Needs?</h2>
      <p>Dubai's automotive environment requires more than just basic maintenance. Our service center is a premium destination that understands the intricate requirements of both high-end vehicles and light-duty automobiles. NS Auto stands out as a premier destination for those seeking professional, comprehensive car services in Dubai.</p>
      
      <h2>Comprehensive Service Offerings</h2>
      <p>Our expert team provides a wide range of automotive services designed to keep your vehicle in peak condition:</p>
      <ul>
        <li>Complete vehicle diagnostics and inspection</li>
        <li>Comprehensive oil and servicing maintenance</li>
        <li>Advanced brake system troubleshooting</li>
        <li>Professional paint protection and ceramic coatings</li>
        <li>Advanced engine repairs and preventative maintenance treatments</li>
      </ul>
      
      <h2>Expert Technicians, Cutting-Edge Technology</h2>
      <p>At NS Auto, we pride ourselves on combining talented technicians with expertise with state-of-the-art diagnostic equipment. Our technicians are trained to handle vehicle makes and models, ensuring that whether you drive a sleek Italian car or sturdy SUV, your vehicle's needs are our top priority.</p>
    `,
    date: "03 Dec 2024",
    image:
      "/blog-page/NS-Auto-Top-Tier-Car-Service-Center-in-Dubais-Automotive-Landscape.jpg",
  },
  {
    id: 3,
    slug: "professional-car-services-dubai",
    title:
      "PROFESSIONAL CAR SERVICES IN DUBAI: NS AUTO'S EXPERTISE AT YOUR SERVICE",
    excerpt:
      "Discover expert car services in Dubai with NS Auto. From maintenance to repairs, ensure your vehicle receives the professional care it deserves with our trusted team.",
    content: `
      <p>Finding professional and reliable car services in Dubai is essential for keeping your vehicle in peak condition. With the demanding driving conditions and the premium nature of vehicles found throughout the city, your car deserves nothing less than comprehensive service to address all your car care needs, making them a go-to car repair garage Dubai for all the best.</p>

      <h2>Why Regular Car Services in Dubai Are Crucial</h2>
      <h3>1. Ensures Smooth Performance</h3>
      <p>With NS Auto's engineered car parts to provide proper fuel flow and ensure safety, regular maintenance ensures the smooth performance of your vehicle by addressing key components such as engine, brakes, and tires. At NS Auto, we're able to deliver car parts specific to many, so your car will be running smarter after every visit.</p>

      <h3>2. Enhances Safety</h3>
      <p>Safety is paramount, and regular check-ups help by identifying potential risks. NS Auto's technicians perform in-depth inspections of brakes, suspension, and other critical systems, ensuring your car is always safe to drive.</p>

      <h3>3. Prevents Major Repairs</h3>
      <p>Ignoring minor issues can lead to costly repairs in the future. Regular servicing helps identify and resolve problems early, saving you time and money. As such car repair garage Dubai specializes in preventative care to address potential issues before they become major problems.</p>

      <h2>NS Auto: A Leader in Car Services in Dubai</h2>
      <h3>Comprehensive Maintenance Solutions</h3>
      <p>NS Auto offers a range of car maintenance services in Dubai, including oil changes, diagnostics, tire alignment, and battery checks. These services are designed to enhance your vehicle's performance and longevity.</p>

      <h3>Advanced Repair Services</h3>
      <p>For more complex issues, NS Auto's car repair garage Dubai is equipped with state of the art and highly trained professionals. From engine repairs to fixing electrical systems, they address every issue with precision.</p>
    `,
    date: "29 Nov 2024",
    image: "/blog-page/Professional-Car-Services-in-Dubai.jpg",
  },
  {
    id: 4,
    slug: "reliable-car-servicing-dubai",
    title:
      "RELIABLE CAR SERVICING IN DUBAI: WHY NS AUTO IS YOUR TOP CHOICE FOR QUALITY CARE",
    excerpt:
      "Need car servicing in Dubai? NS Auto offers high-quality maintenance, repairs, and detailing services, ensuring your vehicle gets the expert care it deserves.",
    content: `
      <p>Car owners in Dubai require a service provider they can trust for knowledge, excellence, and experience when it comes to car services in Dubai. With big automotive options available for potential car owners in specialized markets like Al Awir, NS Auto has established a solid reputation as an automotive service provider, ensuring customer satisfaction is provided the balanced, right-repair services that goes above both performance and safety thanks to a staff of knowledgeable specialists and a customer-focused philosophy.</p>

      <h2>Reasons to Choose NS Auto for Car Servicing in Dubai?</h2>
      
      <h3>1. A Wide Variety of Services</h3>
      <p>Whether you're seeking an array of basic car care services like tire rotation, chassis tire lockdown, check-up, or more invasive updates like tire rotating, engine flushing, those constructive labor car servicing in Dubai is provided to keep your car in top shape for the future. Regardless of model or make, NS Auto's specialized services can get your stress-free operation possible.</p>

      <p>Consider staff at NS Auto specializes in detailed cleaning, interior, and protective services for anyone seeking the best car detailing services in Dubai. They deploy superior products and precision techniques to ensure your luxury car's interior and exterior look pristine, applying attentiveness to each task.</p>
      
      <h3>2. Affordable and Transparent Pricing</h3>
      <p>In Dubai, affordable car services come with transparent pricing and no surprising hidden features. They strive to provide affordable prices without sacrificing quality for what they do in relation to the service we wish repair car successfully, NS Auto will never drop the temperature on the price. We will ensure a competitive price for your vehicle than that which replaces a full vehicle. Our maintenance and repair packages are designed to provide comprehensive solutions at competitive prices.</p>
      
      <p>Practice of fair open pricing, NS Auto has a devoted following of customers. Customers are excited that their Heaviside is well-lavishly repaired, regardless of the size of the service or repair. This means that is a car detailing service center in Dubai.</p>
    `,
    date: "29 Nov 2024",
    image:
      "/blog-page/Reliable-Car-Servicing-in-Dubai-Why-NS-Auto-is-Your-Top-Choice-for-Quality-Care.jpg",
  },
];

const Blogs = () => {
  const [currentBlog, setCurrentBlog] = useState<number>(-1);

  return (
    <>
      <Navbar currentPage="BLOGS" />
      <PageBanner
        title="BLOGS"
        backgroundImage="/blog-page/paint-protection-banner.jpg"
        breadcrumbs={[
          { label: "HOME", url: "/" },
          { label: "BLOGS", url: "/blogs" },
        ]}
      />
      {currentBlog === -1 ? (
        <section className="py-16 container mx-auto px-4">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setCurrentBlog(blog.id)}
                className="cursor-pointer"
              >
                <BlogCard
                  title={blog.title}
                  date={blog.date}
                  excerpt={blog.excerpt}
                  image={blog.image}
                />
              </motion.div>
            ))}
          </div>
        </section>
      ) : (
        <BlogDetail id={currentBlog} />
      )}
      ;
      <Footer />
    </>
  );
};

export default Blogs;
