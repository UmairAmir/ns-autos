import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items?: FAQItem[];
}

const FAQSection = ({ items }: FAQSectionProps) => {
  const defaultFaqs = [
    {
      question: "What types of vehicles do you service?",
      answer: "We service all major car brands, including luxury and high-performance vehicles. Our technicians are trained to handle a wide range of makes and models."
    },
    {
      question: "Do I need to make an appointment?",
      answer: "We happily accept both walk-ins and appointments! Feel free to stop by whenever it is convenient for you, or book a specific time in advance online or by calling us directly."
    },
    {
      question: "What is included in a major service?",
      answer: "Our major service package is comprehensive, including a full oil change, replacement of all filters (oil, air, fuel, cabin), spark plug replacement, and a thorough system diagnostic check."
    },
    {
      question: "Do you offer a warranty on your repairs?",
      answer: "Yes, we stand behind our work. We offer a warranty on both parts and labor for all our repairs. Please ask our service advisors for specific warranty details related to your service."
    },
    {
      question: "How often should I get my car serviced?",
      answer: "It is generally recommended to get a minor service every 10,000 km or 6 months, and a major service every 30,000 km or 2 years. However, this can vary depending on your vehicle's manufacturer recommendations."
    },
    {
      question: "Do you provide car pickup and drop-off services?",
      answer: "Yes, we offer convenient pickup and drop-off services for your vehicle. Please contact us to arrange this service."
    }
  ];

  const faqs = items || defaultFaqs;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked <span className="text-nsauto-yellow">Questions</span></h2>
          <p className="text-lg text-gray-600">Find answers to common questions about our services and policies.</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-primary transition-colors hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
