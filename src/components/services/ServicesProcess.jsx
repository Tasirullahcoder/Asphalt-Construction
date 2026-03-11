import ServiceRow from "./ServiceRow";

export default function ServicesProcess() {
  return (
    <section className="py-[100px] px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        <ServiceRow
          title="Levels and Survey works"
          image="/services/Survey-pic.jpg"
          text1="Initially, the survey and level works launch through a professional team. They undertake the project from tables of quantities, processing the site, and preparing it for work."
          text2="In addition, they study the nature of the soil and the geographical location."
        />

        <ServiceRow
          title="Supply"
          image="/services/Najd-Roads-Website-51.jpg"
          text1="After studying the site, our equipment supplies soil and asphalt materials."
          text2="Equipment is moved to the site according to the required work items."
          reverse
        />
        <ServiceRow
          title="The Mixer & Crushers"
          image="/services/Najd-Roads-Website1-48.jpg"
          text1="Crushers are the elements that form the base of asphalt production within the specifications of mixtures approved in the Kingdom."
          text2="The availability of the asphalt mixer leads to a major success by overcoming constraints and ensuring production of up to 240 tons per hour."
        />

        <ServiceRow
          title="Follow-up"
          image="/services/Najd-Roads-Website1-47.jpg"
          text1="Permanently, a team of engineers, workers and specialists follow up and manage the business technically and administratively."
          text2="The company guarantees business to our customers by submitting a statement certified by the Chamber of Commerce."
          reverse
        />
      </div>
    </section>
  );
}
