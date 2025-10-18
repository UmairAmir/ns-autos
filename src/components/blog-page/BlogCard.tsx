import React from "react";

type BlogCardProps = {
  title: string;
  date: string;
  excerpt: string;
  image: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ title, date, excerpt, image }) => {
  return (
    <div className="bg-white border border-gray-200 hover:shadow-lg transition duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />

        {/* Triangle Cut Overlay */}
        <div className="absolute bottom-0 right-0 w-[60px] h-[60px] overflow-hidden">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <polygon points="100,0 100,100 0,100" fill="white" />
          </svg>
        </div>

        {/* Date Overlay */}
        <div className="absolute top-4 left-4 flex items-center">
          <div className="relative">
            <img
              src="/blog-page/date-bg.svg"
              alt="date background"
              className="h-10"
            />
            <div className="absolute inset-0 flex items-center px-4">
              <img
                src="/blog-page/calendar.svg"
                alt="Calendar"
                className="w-4 h-4 mr-2"
              />
              <span className="text-xs text-gray-700 font-semibold">
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-nsauto-yellow mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">{excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;
