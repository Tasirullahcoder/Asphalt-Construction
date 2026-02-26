"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FleetSection() {
  const images = [
    "https://najdroads.com.sa/wp-content/uploads/2021/05/Najd-Roads-Website-66.jpg",
    "	https://najdroads.com.sa/wp-content/uploads/2021/05/Najd-Roads-Website-65.jpg",
    "https://najdroads.com.sa/wp-content/uploads/2021/05/Najd-Roads-Website-64.jpg",
    "https://najdroads.com.sa/wp-content/uploads/2021/05/Najd-Roads-Website-63.jpg",
    "https://najdroads.com.sa/wp-content/uploads/2021/05/Najd-Roads-Website-62.jpg",
    "https://najdroads.com.sa/wp-content/uploads/2021/05/Najd-Roads-Website-61.jpg",
    "https://najdroads.com.sa/wp-content/uploads/2021/05/Najd-Roads-Website-60.jpg",
    "https://najdroads.com.sa/wp-content/uploads/2021/05/Najd-Roads-Website-59.jpg",
    "https://najdroads.com.sa/wp-content/uploads/2021/05/Najd-Roads-Website-58.jpg",
    "https://najdroads.com.sa/wp-content/uploads/2021/06/Najd-Roads-Pofile1.jpeg",
    "	https://najdroads.com.sa/wp-content/uploads/2021/06/Najd-Roads-Pofile3.jpeg",
    "	https://najdroads.com.sa/wp-content/uploads/2021/06/Poster-8.jpg",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className=" mb-12 text-[#17479e] font-DMSerifDisplay">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold max-w-4xl mx-auto leading-relaxed">
            We have a huge fleet of heavy machinery to ensure the continuity of
            production as required.
          </h3>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={3} // 👈 KEY CHANGE
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt={`Fleet ${index}`}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
