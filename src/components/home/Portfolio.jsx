function Portfolio() {
  const clients = Array.from(
    { length: 24 },

    (_, i) => `/home_images/clientportfolio/${i + 1}.png`,
  );

  return (
    <section className="  py-16 md:px-12 bg-white text-[#28282b]  flex-wrap text-[17px] leading-[27.2px] pt-37.5 px-12.5 pb-12.5">
      <h2
        className="text-[#17479e] 
               font-DMSerifDisplay 
               text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] 
               leading-tight 
               font-bold 
               text-center 
               mb-10"
      >
        We Worked With
      </h2>

      <div
        className="grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                gap-6 
                items-center"
      >
        {clients.map((src, i) => (
          <div key={i} className="flex justify-center">
            <img
              src={src}
              alt={`Client ${i + 1}`}
              className="max-h-16 sm:max-h-20 md:max-h-24 
                   w-auto 
                   object-contain"
            />
          </div>
        ))}
      </div>
      <div className="mt-30">
        <h2
          className="text-[#17479E] 
           text-[22px] sm:text-[26px] md:text-[32px] lg:text-[52px] 
           leading-[67.6px] 
           font-bold 
           tracking-tight
           font-DM Serif Display
           "
        >
          Why Najd Roads?
        </h2>
        <p className="text-[#28282b] text-base leading-relaxed mt-5">
          For twenty-five years, the company has enjoyed a fragrant reputation
          stemmed from its credibility and distinctive style in implementing
          business and projects in various regions of the Kingdom, relying on
          perseverance and right planning
        </p>
      </div>
    </section>
  );
}

export default Portfolio;
