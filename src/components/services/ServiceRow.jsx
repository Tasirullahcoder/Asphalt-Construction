import Image from "next/image";

export default function ServiceRow({
  title,
  text1,
  text2,
  image,
  reverse = false,
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE */}
      <div className={reverse ? "lg:order-2" : ""}>
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* CONTENT */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold font-serif text-[#17479e]">
          {title}
        </h2>

        <p className=" text-align-center leading-[25.6px] font-light text-[#3f3f3f]">
          {text1}
        </p>

        <p className="text-align-center leading-[25.6px] text-[#3f3f3f]">
          {text2}
        </p>
      </div>
    </div>
  );
}
