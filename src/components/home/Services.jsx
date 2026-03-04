import {
  Construction,
  Ruler,
  FileText,
  Factory,
  TrendingUp,
  Wrench,
} from "lucide-react";
import Button from "./Button";

function Services() {
  const services = [
    { title: "Road works", icon: Construction },
    { title: "Levels and Survey works", icon: Ruler },
    { title: "Supply", icon: FileText },
    { title: "The Mixer & Crushers", icon: Factory },
    { title: "Follow-up", icon: TrendingUp },
    { title: "Maintenance", icon: Wrench },
  ];
  return (
    <>
      <div
        className="bg-white px-6"
        style={{ fontSize: "17px", lineHeight: "27.2px", padding: "80px 0" }}
      >
        <section className="bg-white py-6 px-6 md:px-12">
          <h2 className="text-5xl leading-16 font-bold text-start mb-8 text-[#17479e] font-DM-Serif-Display">
            Our Services
          </h2>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-10 text-center">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-[15px] text-center"
                  >
                    {/* Icon */}
                    <Icon
                      size={70}
                      strokeWidth={1.2}
                      className="text-[#28282b]"
                    />

                    {/* Title */}
                    <h3 className="font-serif font-semibold">
                      {service.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* {button} */}
        <Button />
      </div>
    </>
  );
}

export default Services;
// <div>
//   <section className="py-40 px-6 md:px-12 bg-gray-100">
//     <h2 className="text-5xl leading-16 font-bold text-start mb-8 text-[#17479e] font-DM-Serif-Display">
//       Our Services
//     </h2>
//     <div className="grid gap-8 md:grid-cols-3">
//       {[
//         "Road works",
//         "Levels and Survey works",
//         "Supply",
//         "The Mixer & Crushers",
//         "Follow-up",
//         "Maintenance",
//       ].map((service, idx) => (
//         <div
//           key={idx}
//           className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
//         >
//           <h3 className="text-xl font-semibold mb-2">{service}</h3>
//           <p className="text-gray-600">
//             {/* Optional short description */}
//             Comprehensive {service.toLowerCase()} services aligned with
//             industry standards.
//           </p>
//         </div>
//       ))}
//     </div>
//   </section>
// </div>
