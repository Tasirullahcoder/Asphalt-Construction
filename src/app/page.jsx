import React from "react";

import Services from "@/components/Services";

import Hero_Section from "@/components/Hero_Section";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <Hero_Section />

      {/* Services */}
      <Services />

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
