import Image from "next/image";
import img48 from "@/../public/about_images/Najd-Roads-Website-48-1.jpg";

export default function CertifiedExperience() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Side Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src={img48} // move image to public folder
              alt="Certified Experience"
              width={600}
              height={600}
              className="rounded-lg object-cover"
              priority
            />
          </div>

          {/* Right Side Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Certified Experience
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed text-[16px] md:text-[17px]">
              Our experience in implementing various projects with
              specifications and standards approved by all authorities in the
              Kingdom gives us the motivation to keep progressing and growing.
              The satisfaction and praise we receive from clients is what we are
              proud of, and based on this we are accredited by major agencies
              and companies.
            </p>

            {/* Star Rating */}
            <div className="flex mt-6 text-yellow-500 text-xl">★ ★ ★ ★ ★</div>
          </div>
        </div>
      </div>
    </section>
  );
}
