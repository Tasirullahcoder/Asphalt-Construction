const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage:
          "url('https://najdroads.com.sa/wp-content/uploads/2021/06/Header-2.jpg')",
        padding: "220px 25px 50px 25px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Container */}
      <div className="relative max-w-7xl mx-2 ">
        <h1 className="text-white lg:text-8xl md:text-6xl font-semibold leading-tight font-serif">
          Our <br /> Services
        </h1>
      </div>
    </section>
  );
};

module.exports = HeroSection;
