import { ArrowRight } from "lucide-react";
function Button() {
  return (
    <div
      className="text-[#28282b] text-center"
      style={{ fontSize: "17px", lineHeight: "27.2px" }}
    >
      <button
        className="bg-transparent inline-flex items-center font-poppins font-semibold
               text-[#17479e] relative group
               border-b-2 border-[#17479e]
               transition-colors duration-300
               hover:border-black"
        style={{ lineHeight: "16px", padding: "17px 0" }}
      >
        <span className="transition-colors duration-300 group-hover:text-[#2a76ff]">
          Learn More
        </span>

        <ArrowRight
          size={18}
          className="ml-2 transition-colors duration-300 group-hover:text-[#2a76ff]"
        />
      </button>
    </div>
  );
}

export default Button;
