import { ChevronRight } from "lucide-react";
function Hero_Section() {
  return (
    <div>
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
    </div>
  );
}

export default Hero_Section;
