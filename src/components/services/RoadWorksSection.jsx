import Image from "next/image";
import workImg from "./../../../public/services/Collect-works.jpg";

export default function RoadWorksSection() {
  return (
    <section className="bg-[#17479E] py-[70px] md:py-[90px] lg:py-[110px]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white max-w-[600px] min-w-0">
            <h3
              className="font-serif font-semibold mb-4 leading-tight
                         text-[clamp(22px,6vw,60px)]
                         break-words"
            >
              Road works
            </h3>

            <div className="w-16 sm:w-20 h-[2px] bg-white mb-6"></div>

            <ul
              className="text-white list-disc list-inside font-[Poppins]
                         text-[12px] sm:text-[14px] md:text-[15px]
                         font-light leading-[24px] md:leading-[27px]
                         uppercase space-y-2
                         break-words"
            >
              <li>
                Studying the design of road axes and determining their routes in
                accordance within the approved plans.
              </li>
              <li>
                The study of the natural land in terms of topography (existing
                levels) and geology (soil type).
              </li>
              <li>
                Determining survey network and linking points with existing
                roads in the region.
              </li>
              <li>
                Carrying out basic works (excavation – filling) and controlling
                slopes and levels.
              </li>
              <li>
                Executing asphalt works according to the standards approved by
                the owner.
              </li>
              <li>
                Production of mixed asphalt according to the standards of the
                approved projects.
              </li>
              <li>Pavement, curb, and median strip works.</li>
              <li>Road planning and traffic signs.</li>
              <li>Water and sewage network works.</li>
              <li>
                Electricity infrastructure works (stations – lighting networks).
              </li>
              <li>Maintenance and road rehabilitation works.</li>
              <li>Maintenance of public buildings.</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full min-w-0">
            <Image
              src={workImg}
              alt="Road works"
              width={900}
              height={700}
              className="w-full h-auto object-cover rounded-md"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import workImg from "./../../../public/sevices/Collect-works.jpg";

// export default function RoadWorksSection() {
//   return (
//     <section className="bg-[#17479E] py-[70px] md:py-[90px] lg:py-[110px]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-18">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//           {/* LEFT CONTENT */}
//           <div className="text-white max-w-[600px]">
//             <h3 className="font-serif font-semibold mb-4 leading-tight text-[clamp(28px,5vw,60px)] break-words">
//               Road works
//             </h3>

//             <div className="w-16 sm:w-20 h-[2px] bg-white mb-6"></div>

//             <ul
//               className="text-white list-disc list-inside font-[Poppins]
//                            text-[13px] sm:text-[14px] md:text-[15px]
//                            font-light leading-[26px] uppercase
//                            space-y-2 text-justify"
//             >
//               <li>
//                 Studying the design of road axes and determining their routes in
//                 accordance within the approved plans.
//               </li>
//               <li>
//                 The study of the natural land in terms of topography (existing
//                 levels) and geology (soil type).
//               </li>
//               <li>
//                 Determining survey network and linking points with existing
//                 roads in the region.
//               </li>
//               <li>
//                 Carrying out basic works (excavation – filling) and controlling
//                 slopes and levels.
//               </li>
//               <li>
//                 Executing asphalt works according to the standards approved by
//                 the owner.
//               </li>
//               <li>
//                 Production of mixed asphalt according to the standards of the
//                 approved projects.
//               </li>
//               <li>Pavement, curb, and median strip works.</li>
//               <li>Road planning and traffic signs.</li>
//               <li>Water and sewage network works.</li>
//               <li>
//                 Electricity infrastructure works (stations – lighting networks).
//               </li>
//               <li>Maintenance and road rehabilitation works.</li>
//               <li>Maintenance of public buildings.</li>
//             </ul>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="w-full">
//             <Image
//               src={workImg}
//               alt="Road works"
//               width={900}
//               height={700}
//               className="w-full h-auto object-cover rounded-md"
//               sizes="(max-width: 1024px) 100vw, 50vw"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
