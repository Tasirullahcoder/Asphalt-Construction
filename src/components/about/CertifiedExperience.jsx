import Image from "next/image";
import img48 from "@/../public/about_images/Najd-Roads-Website-48-1.jpg";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function CertifiedExperience() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Side Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src={img48}
              alt="Certified Experience"
              width={600}
              height={601}
              className="w-full max-w-[600px] md:w-[600px] object-cover"
              priority
            />
          </div>

          {/* Right Side Content */}
          <div className="px-2 md:px-4">
            <h2
              className={`text-[20px] md:text-3xl font-bold text-[#17479e] ${dmSerif.className}`}
            >
              Certified Experience
            </h2>

            <p className="mt-4 max-w-[470px] text-[#020101] leading-[27.2px] text-[16px] md:text-[17px] text-justify">
              Our experience in implementing various projects with
              specifications and standards approved by all authorities in the
              Kingdom gives us the motivation to keep progressing and growing.
              The satisfaction and praise we receive from clients is what we are
              proud of, and based on this we are accredited by major agencies
              and companies.
            </p>

            <div className="flex mt-6 text-yellow-500 text-3xl md:text-4xl">
              ★ ★ ★ ★ ★
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
