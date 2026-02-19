import React from "react";
import { ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white flex items-center 
             h-[500px] md:h-[650px] lg:h-[850px]"
        style={{ backgroundImage: "url('/himebg.jpg.webp')" }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-all duration-300 ease-in-out"
          style={{ backgroundColor: "#28282A", opacity: 0.15 }}
        ></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-6">
            {/* Heading (LEFT) */}
            <h1 className="text-left text-8xl md:text-6xl lg:text-7xl font-bold leading-tight font-serif text-shadow-[#00000075 3px 3px 3px]">
              Welcome to <br />
              Najd Roads Company
            </h1>

            {/* Paragraph (RIGHT) */}
            <p className="text-left text-lg md:text-2xl leading-relaxed max-w-xl ml-auto">
              The implemented projects of the company in different regions of
              the Kingdom of Saudi Arabia are in the accordance of the basic
              standards for each project,
            </p>

            {/* Button (RIGHT) */}
            <div className="flex justify-center pl-58">
              <button className="group inline-flex items-center gap-3  hover:text-[#17479e] text-white font-semibold px-8 py-4 rounded-md text-base md:text-lg transition duration-300 shadow-md">
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight size={40} />
                </span>
                Get to know us better!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-40 px-6 md:px-12 bg-gray-100">
        <h2 className="text-5xl leading-16 font-bold text-start mb-8 text-[#17479e] font-DM-Serif-Display">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            "Road works",
            "Levels and Survey works",
            "Supply",
            "The Mixer & Crushers",
            "Follow-up",
            "Maintenance",
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">
                {/* Optional short description */}
                Comprehensive {service.toLowerCase()} services aligned with
                industry standards.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              We always encourage further training and development of our
              employees, modernize equipment, and build a distinguished fleet —
              ensuring high-quality work delivery.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg">
              Learn More
            </button>
          </div>
          <div>
            <img
              src="/about-image.jpg"
              alt="About Najd Roads"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Clients / Portfolio */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">We Worked With</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex justify-center">
              <img
                src={`/clients/client-${i + 1}.png`}
                alt={`Client ${i + 1}`}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Najd Roads?</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          With over 25 years of recognized credibility and excellence in road
          infrastructure services, we pride ourselves on perseverance, planning,
          and delivering projects to specification and schedule.
        </p>
      </section>

      {/* Certified Experience */}
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/experience-fleet.jpg"
              alt="Fleet of Heavy Machinery"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">Certified Experience</h2>
            <p className="text-gray-700">
              Our experience with projects meeting Saudi national standards
              motivates continued growth and client satisfaction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
