"use client";

import Image from "next/image";

export default function ProjectSection() {
  return (
    <section className=" ">
      <div className="py-16 bg-[#28282b] pt-0">
        <div className="max-w-7xl mx-auto px-8 ">
          <div className="flex flex-col lg:flex-row">
            {/* LEFT SIDE */}
            <div
              className="w-full lg:w-1/2 flex flex-col justify-between"
              style={{
                backgroundColor: "#17479E",
                padding: "30px",
                alignContent: "space-between",
              }}
            >
              <h2 className="text-white text-3xl sm:text-4xl lg:text-[52px] leading-tight font-semibold font-DMSerifDisplay">
                Have a Project on mind?
              </h2>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 text-white font-medium"
              >
                Let Connect
                <span>→</span>
              </a>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/2">
              <Image
                src="https://najdroads.com.sa/wp-content/uploads/2021/06/Najd-Roads-Website-53-1024x723.jpg"
                alt="Najd Roads Project"
                width={1024}
                height={723}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
