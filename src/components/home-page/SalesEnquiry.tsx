import React from 'react';

const salesTeam = [
  {
    id: 1,
    name: 'MJ VAN HEERDEN',
    position: 'Senior Sales Consultant',
    image: '/home-page/mj-van-heerden.png',
    email: 'mj@nsauto.ae',
    phone: '+971 54 266 7528',
  },
  {
    id: 2,
    name: 'DILLON GOVENDER',
    position: 'Sales Consultant',
    image: '/home-page/dillon-govender.png',
    email: 'dillon@nsauto.ae',
    phone: '+971 54 266 7526',
  },
  {
    id: 3,
    name: 'ALI',
    position: 'Service Advisor',
    image: '/home-page/ali.png',
    email: 'ali@nsauto.ae',
    phone: '+971 58 107 4962',
  },
];

const SalesEnquiry = () => {
  return (
    <section id="enquiry" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-black">SALES </span>
          <span className="text-nsauto-yellow">ENQUIRY</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {salesTeam.map((member) => (
            <div key={member.id}>
              {/* Image section with dark background and yellow corner */}
              <div className="relative bg-[#2d2d39]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Info Section */}
              <div className="p-4">
                <h3 className="font-bold uppercase text-sm mb-1 text-black">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{member.position}</p>

                {/* Email + Phone on the same line */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <img
                      src="/icons/email.svg"
                      alt="Email"
                      className="w-7 h-4"
                    />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-nsauto-yellow transition"
                    >
                      {member.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-1">
                    <img
                      src="/icons/call.svg"
                      alt="Phone"
                      className="w-4 h-4"
                    />
                    <a
                      href={`tel:${member.phone}`}
                      className="hover:text-nsauto-yellow transition"
                    >
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesEnquiry;
