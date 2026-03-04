"use client";

import Image from "next/image";

export default function ProjectSection() {
  return (
    <section className="py-16 bg-[#28282b] pt-0">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[450px] md:min-h-[520px] lg:min-h-[620px]">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[40%] bg-[#17479E] p-8 lg:p-12 flex flex-col justify-between">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-[52px] leading-tight font-semibold font-DMSerifDisplay">
              Have a Project on mind?
            </h2>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 text-white font-medium"
            >
              Let Connect →
            </a>
          </div>

          {/* RIGHT SIDE (image with height for small screens) */}
          <div className="w-full lg:w-[60%] relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-auto">
            <Image
              src="https://najdroads.com.sa/wp-content/uploads/2021/06/Najd-Roads-Website-53-1024x723.jpg"
              alt="Najd Roads Project"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
