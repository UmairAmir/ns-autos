import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, StarHalf } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Mansoori",
      role: "Luxury Car Owner",
      content: "Excellent service! My car feels brand new after the major service. Highly recommended for anyone looking for quality care.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Regular Customer",
      content: "Professional and transparent. They explained everything clearly and the pricing was fair. I trust them with my family car.",
      rating: 4.5
    },
    {
      name: "Mohammed Khan",
      role: "Car Enthusiast",
      content: "Great experience with NS Auto. The team is knowledgeable and friendly. They handled my modifications perfectly.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Business Professional",
      content: "Quick and efficient. I booked an appointment online and they were ready for me when I arrived. Great for busy schedules.",
      rating: 4.5
    },
    {
      name: "David Wilson",
      role: "Expat",
      content: "Found this gem after moving to Dubai. Honest mechanics and great customer service. Will definitely be returning.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-5 h-5 fill-nsauto-yellow text-nsauto-yellow" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-5 h-5 fill-nsauto-yellow text-nsauto-yellow" />);
    }

    return stars;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-nsauto-yellow">Customers</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with NS Auto.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }) as any,
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="flex flex-col justify-between h-full p-6">
                        <div>
                          <div className="flex mb-4">
                            {renderStars(testimonial.rating)}
                          </div>
                          <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                        </div>
                        <div className="flex items-center mt-auto">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold mr-3 shrink-0">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-nsauto-yellow text-sm">{testimonial.name}</h4>
                            <p className="text-xs text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
