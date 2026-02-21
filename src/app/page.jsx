import React from "react";

import Services from "@/components/Services";

import Hero_Section from "@/components/Hero_Section";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}

      <Hero_Section />

      {/* Services */}
      <Services />

      {/* About */}
      <About />
      {/* Clients / Portfolio */}
      <Portfolio />
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
