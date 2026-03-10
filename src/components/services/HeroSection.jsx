const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat 
                 bg-scroll lg:bg-fixed
                 flex items-center
                 min-h-[280px] sm:min-h-[340px] md:min-h-[420px] lg:min-h-[520px]
                 px-4 sm:px-6"
      style={{
        backgroundImage:
          "url('https://najdroads.com.sa/wp-content/uploads/2021/06/Header-2.jpg')",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Container */}
      <div className="relative max-w-7xl mx-auto w-full">
        <h1
          className="text-white font-semibold font-serif leading-tight
                     text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                     break-words max-w-full"
        >
          Our <br /> Services
        </h1>
      </div>
    </section>
  );
};

module.exports = HeroSection;

// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center bg-no-repeat bg-fixed
//                  flex items-center
//                  h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px] xl:h-[600px]
//                  px-6"
//       style={{
//         backgroundImage:
//           "url('https://najdroads.com.sa/wp-content/uploads/2021/06/Header-2.jpg')",
//         fontFamily: "Poppins, sans-serif",
//       }}
//     >
//       {/* Container */}
//       <div className="relative max-w-7xl mx-auto w-full">
//         <h1
//           className="text-white font-semibold font-serif leading-tight
//                      text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
//         >
//           Our <br /> Services
//         </h1>
//       </div>
//     </section>
//   );
// };

// module.exports = HeroSection;
