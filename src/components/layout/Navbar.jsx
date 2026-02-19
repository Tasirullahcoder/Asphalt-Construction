"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "OUR PROJECTS", href: "/projects" },
    { name: "SERVICES", href: "/services" },
    { name: "OUR EQUIPMENT", href: "/equipment" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-50 flex items-start justify-between py-8 space-x-10">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center flex-wrap gap-15 text-sm font-poppins font-medium text-[#1e73be]">
              {navLinks.map((item) => {
                const active = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`transition hover:text-[#1e73be] ${
                        active ? "text-[#1e73be] font-semibold" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Arabic Button */}
            <Link
              href="/ar"
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
            >
              العربية
            </Link>

            {/* Company Profile Button */}
            <div className="flex flex-col">
              <button className="bg-[#17479e] text-white py-3.5 px-6 font-semibold text-base leading-4">
                CompanyProfile
              </button>
            </div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-300 p-2 text-gray-900 hover:bg-gray-50 transition"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[520px] pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-2 pt-2 text-sm font-medium text-gray-700">
            {navLinks.map((item) => {
              const active = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-2 transition hover:bg-gray-100 hover:text-gray-900 ${
                      active ? "bg-gray-100 text-gray-900 font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pt-3">
            <Link
              href="/ar"
              className="block w-full rounded-md border border-gray-300 px-4 py-2 text-center text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
            >
              العربية
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
