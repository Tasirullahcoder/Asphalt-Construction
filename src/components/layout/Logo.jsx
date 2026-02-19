import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/NAJD-LOGO-02.png";
function Logo() {
  return (
    <div>
      <Link href="/" className="flex items-center gap-2">
        {/* Replace this with your logo image */}
        <Image
          src={logo}
          alt="Logo"
          className="h-24 w-64 rounded-md leading-4"
        />
      </Link>
    </div>
  );
}

export default Logo;
