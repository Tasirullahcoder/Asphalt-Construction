import React from "react";

import Services from "@/components/home/Services";

import Hero_Section from "@/components/home/Hero_Section";
import About from "@/components/home/About";
import Portfolio from "@/components/home/Portfolio";
import ProjectSection from "@/components/home/ProjectSection";
import FleetSection from "@/components/home/FleetSection";
import CertifiedExperience from "@/components/home/CertifiedExperience";

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

      <ProjectSection />

      {/* Certified Experience */}
      <CertifiedExperience />

      <FleetSection />
      <div className="bg-[#dbdbdb] py-15"></div>
    </div>
  );
};

export default Home;
