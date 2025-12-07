import React from 'react';
import { ShieldCheck, Users, BadgeCheck, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Technicians",
      description: "Our certified mechanics have years of experience handling all types of vehicles, ensuring top-notch service every time.",
      icon: <Users className="w-12 h-12 text-nsauto-yellow" />
    },
    {
      title: "Genuine Parts",
      description: "We use only genuine and high-quality spare parts to guarantee the longevity and performance of your vehicle.",
      icon: <BadgeCheck className="w-12 h-12 text-nsauto-yellow" />
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs or surprises. We provide detailed quotes and explanations before starting any work on your car.",
      icon: <ShieldCheck className="w-12 h-12 text-nsauto-yellow" />
    },
    {
      title: "Comprehensive Warranty",
      description: "We stand behind our work. Enjoy peace of mind with our warranty coverage on parts and labor for qualified services.",
      icon: <Wrench className="w-12 h-12 text-nsauto-yellow" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-nsauto-yellow">Choose Us?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are committed to delivering the best automotive care in Dubai. 
            Here is why thousands of customers trust us with their vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50 text-center group">
              <CardHeader className="flex flex-col items-center pt-8 pb-4">
                <div className="mb-4 p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8 px-6">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
