import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);

  const navLinks = [
    "Home",
    "About Us",
    "Services",
    "Technologies",
    "Industries",
    "Portfolio",
    "Careers",
    "Contact Us",
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdown(null);
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = {
    "Software Products": [
      "HR and Payroll Management Software",
      "Jewellery Software",
      "CRM Software",
      "Real Estate Software",
      "Inventory Management Software",
      "Hospital Management Software",
      "School Management Software",
    ],

    "Web Design & Development": [
      "Website Design",
      "Website Development",
      "CRM Software Development",
      "Software Development",
      "Educational Web Portal Development",
      "Restaurant Web Portal Development",
      "Health Care Portal Development",
      "Travel Portal Development",
      "Real Estate Portal Development",
      "E-commerce Website Development",
    ],
  };

  const technologies = {
    "UI & Frontend": [
      "UI Design",
      "HTML/HTML5",
      "CSS3",
      "AngularJS",
      "React Development",
      "jQuery",
      "WordPress",
    ],

    Backend: [
      "PHP",
      "Python",
      "NodeJS Development",
      "J2EE",
      "Spring / Hibernate",
      "JSP / JSF",
    ],

    "Cloud & Database": [
      "AWS Development",
      "Google Cloud",
      "MongoDB",
      "SQL Database",
      "Redis",
      "Cassandra",
    ],

    Others: [
      "Blockchain Development",
      "IoT Solutions",
      "Software Testing",
      "Unit Testing",
      "Integration Testing",
      "SDLC",
    ],
  };

  const industries = [
    "Healthcare",
    "Finance",
    "Education",
    "E-commerce",
    "Manufacturing",
    "Retail",
    "Gaming",
    "Real Estate",
    "Automotive",
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="px-4 xl:px-8 py-4 flex items-center justify-between">
        {/* LOGO */}

        <img src={logo} alt="logo" className="h-10 xl:h-12" />

        {/* DESKTOP MENU */}

        <ul className="hidden xl:flex gap-6 text-white font-medium">
          {navLinks.map((link, index) => {
            const hasDropdown =
              link === "Services" ||
              link === "Technologies" ||
              link === "Industries";

            return (
              <li
                key={index}
                className="relative flex items-center gap-1 cursor-pointer group"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdown(dropdown === link ? null : link);
                }}
              >
                <span className="relative">
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </span>

                {hasDropdown && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      dropdown === link ? "rotate-180" : ""
                    }`}
                  />
                )}

                {link === "Services" && dropdown === "Services" && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] bg-white text-black rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-8">
                    {Object.entries(services).map(([title, items]) => (
                      <div key={title}>
                        <h4 className="text-purple-600 font-semibold mb-3 border-b pb-1">
                          {title}
                        </h4>

                        {items.map((item, i) => (
                          <p
                            key={i}
                            className="text-sm py-1 hover:text-purple-600 cursor-pointer"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {link === "Technologies" && dropdown === "Technologies" && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] bg-white text-black rounded-2xl shadow-xl p-6">
                    <div className="grid grid-cols-2 gap-8 max-h-[350px] overflow-y-auto no-scrollbar">
                      {Object.entries(technologies).map(([title, items]) => (
                        <div key={title}>
                          <h4 className="text-purple-600 font-semibold mb-3 border-b pb-1">
                            {title}
                          </h4>

                          {items.map((item, i) => (
                            <p
                              key={i}
                              className="text-sm py-1 hover:text-purple-600 cursor-pointer"
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {link === "Industries" && dropdown === "Industries" && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-60 bg-white text-black rounded-xl shadow-lg p-4">
                    {industries.map((item, i) => (
                      <p
                        key={i}
                        className="py-2 px-3 hover:bg-purple-100 rounded-md cursor-pointer"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden xl:flex items-center gap-4 relative">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            <Search size={20} className="text-white" />
          </button>

          {searchOpen && (
            <div className="absolute right-16 top-12">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 w-64 rounded-full
                bg-white/10 backdrop-blur-md
                text-white placeholder-gray-300
                border border-white/20
                focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}

          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:scale-105 transition">
            My Account
          </button>
        </div>

        <button className="xl:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-black/90 backdrop-blur-lg rounded-3xl mt-2">
          <ul className="flex flex-col items-center gap-6 py-8 text-white">
            {navLinks.map((link, i) => (
              <li key={i} className="cursor-pointer hover:text-purple-400">
                {link}
              </li>
            ))}

            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500">
              My Account
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
