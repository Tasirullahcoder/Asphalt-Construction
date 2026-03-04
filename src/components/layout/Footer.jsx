// components/Footer.jsx
"use client";
import React from "react";

const Footer = () => {
  const menuItems = [
    { name: "Home", link: "https://najdroads.com.sa/" },
    { name: "About Us", link: "https://najdroads.com.sa/about-2/" },
    { name: "Our Projects", link: "https://najdroads.com.sa/our-projects/" },
    { name: "Services", link: "https://najdroads.com.sa/services/" },
    { name: "OUR EQUIPMENT", link: "https://najdroads.com.sa/our-equipment/" },
    { name: "Contact Us", link: "https://najdroads.com.sa/contact/" },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      link: "https://twitter.com/najdroads_co",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.92 2.201-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.85.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.637.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/najd-roads/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M20.447 20.452H17.84v-4.798c0-1.146-.02-2.629-1.604-2.629-1.607 0-1.853 1.254-1.853 2.548v4.879H11.73V9.69h2.507v1.451h.035c.349-.661 1.2-1.36 2.468-1.36 2.64 0 3.127 1.738 3.127 3.998v6.673zM7.548 8.211c-.806 0-1.456-.653-1.456-1.456 0-.806.65-1.456 1.456-1.456.806 0 1.456.65 1.456 1.456 0 .803-.65 1.456-1.456 1.456zM8.777 20.452H6.318V9.69h2.459v10.762zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.278V1.723C24 .771 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      link: "https://instagram.com/najdroads_co",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.307 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.307 3.608-.975.975-2.242 1.245-3.608 1.307-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.307-.975-.975-1.245-2.242-1.307-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.307-3.608.975-.975 2.242-1.245 3.608-1.307C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.771.131 4.655.332 3.682.905 2.708 1.477 1.977 2.208 1.405 3.182.832 4.155.631 5.271.572 6.552.514 7.832.5 8.241.5 12s.014 4.168.072 5.448c.059 1.281.26 2.397.833 3.37.572.974 1.303 1.705 2.276 2.277.974.573 2.09.774 3.371.833 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.281-.059 2.397-.26 3.371-.833.974-.572 1.705-1.303 2.277-2.276.573-.974.774-2.09.833-3.371.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.059-1.281-.26-2.397-.833-3.371-.572-.974-1.303-1.705-2.276-2.277-.974-.573-2.09-.774-3.371-.833C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <footer className="w-full bg-white border-t border-gray-100 pt-24 pb-12 text-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://najdroads.com.sa/wp-content/uploads/2021/05/NAJD-LOGO-02-300x115.png"
                alt="Logo"
                className="max-w-[300px] h-auto"
              />
            </div>

            {/* Menu & Social */}
            <div className="flex flex-col items-center lg:items-start">
              {/* Menu (center on small screens) */}
              <ul className="flex flex-col lg:grid lg:grid-cols-5 gap-4 lg:gap-6 text-center lg:text-left">
                {menuItems.slice(0, 5).map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="block hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Last menu item */}
              <div className="mt-6 text-center lg:text-left">
                <a
                  href={menuItems[5].link}
                  className="hover:text-blue-600 transition-colors"
                >
                  {menuItems[5].name}
                </a>
              </div>

              {/* Social Icons (center on small screens) */}
              <div className="mt-6 flex justify-center lg:justify-end gap-4 w-full">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="transition-colors"
                    style={{ color: "#2c567c" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#1e73be")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#2c567c")
                    }
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Below footer */}
      <div
        className="w-full bg-white border-t border-[#d7d7d7] grid place-items-center"
        style={{
          paddingTop: "30px",
          paddingBottom: "30px",
          minHeight: "40px",
        }}
      >
        <div className="text-center text-[#a5a5a5] text-sm">
          <p>Copyright © 2026 Najd Roads | Powered by Najd Roads</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
