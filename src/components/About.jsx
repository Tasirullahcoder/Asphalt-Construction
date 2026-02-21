import im1 from "./../../public/about_img1.jpg";
import Image from "next/image";

function About() {
  return (
    <div className="bg-[#fff] pt-0 pb-16 md:pb-24 lg:pb-32">
      <section className="relative bg-[#17479E] text-white pt-24 pb-20 px-6 md:px-12 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="max-w-[520px] mt-10 leading-[27.2px]">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-DM Serif Display">
              About Us
            </h2>

            <div className="text-2xl  mb-6 text-white/90">
              <p>
                We always encourage further training and development of our
                employees wishing to increase their skills, knowledge and
                expertise. This allows the progression through the company.
              </p>

              <p className="mt-4">
                We also develop our equipment, modernize our machineries, and
                provide the company with a distinguished fleet of the latest
                tankers, which has a great impact in avoiding defects in the
                plans and deadline of implementing projects.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            <div className="lg:absolute lg:top-9 lg:right-0 lg:w-[520px]">
              <Image
                src={im1}
                alt="About Najd Roads"
                className="w-full h-auto shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
