import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function AboutHero() {
  return (
    <section
      className="relative w-full h-[380px] sm:h-[420px] md:h-[470px]
                 flex items-center justify-center md:justify-start
                 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url(/about_images/Najd_Roads_about_background.jpg)",
      }}
      aria-label="About Us Hero Section"
    >
      <div className="relative z-10 text-center md:text-left px-6 sm:px-10 md:px-12">
        <h1
          className={`
            ${dmSerif.className}
            text-[#353535]
            text-4xl sm:text-5xl md:text-6xl lg:text-8xl
            font-bold
            leading-tight
          `}
        >
          About Us
        </h1>
      </div>
    </section>
  );
}
