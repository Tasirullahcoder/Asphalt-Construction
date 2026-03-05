import { DM_Serif_Display } from "next/font/google";
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});
export default function AboutIntro() {
  return (
    <section
      className="w-full h-250 "
      style={{
        backgroundColor: "#17479E",
        padding: "100px 0px",
      }}
    >
      <div className="max-w-6xl mx-8">
        {/* Heading */}
        <h2
          className={`text-white text-start text-3xl md:text-[52px] font-semibold leading-17 
          ${dmSerif.className}`}
        >
          Management Speech
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30 mt-12 text-[#dcf2ff] text-[17px] leading-7 text-justify">
          {/* Left Column */}
          <div>
            <p>
              For twenty-five years, the company has enjoyed a fragrant
              reputation stemmed from its credibility and distinctive style in
              implementing business and projects in various regions of the
              Kingdom, relying on perseverance and right planning.
            </p>

            <p className="mt-4">
              The ambitious staff of the company is the main motivation to
              continue our tasks in the best way, in addition to overcoming all
              possible obstacles that may affect our progress and growth.
            </p>

            <p className="mt-4">
              We always encourage further training and development of our
              employees wishing to increase their skills, knowledge and
              expertise. This allows progression through the company. We also
              develop our equipment, modernize our machinery, and provide the
              company with a distinguished fleet of the latest tankers.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <p>
              The company undertakes an extensive range of important projects
              with high specifications and standards, so it gained satisfaction,
              appreciation, and praise. It was approved by cooperative
              authorities and major companies as well.
            </p>

            <p className="mt-4">
              Najd Roads Company seeks commitment to quality performance and
              excellence in implementation, keeping up with regional
              developments in this vital sector of economic and social life.
            </p>

            <p className="mt-4">
              Relying on local expertise and resources alongside integration in
              work are aims of the company. This aligns with the Kingdom’s
              orientations and 2030 vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
