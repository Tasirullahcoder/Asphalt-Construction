function Portfolio() {
  const clients = Array.from(
    { length: 24 },
    (_, i) => `/clientportfolio/${i + 1}.png`,
  );

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <h2 className="text-[#17479e] font-DM Serif Display text-[52px] leading-[67.6px] font-bold text-center mb-8">
        We Worked With
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
        {clients.map((src, i) => (
          <div key={i} className="flex justify-center">
            <img
              src={src}
              alt={`Client ${i + 1}`}
              className="w-418 h-126 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
