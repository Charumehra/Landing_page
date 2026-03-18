import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services" },
    { name: "Technologies" },
    { name: "Industries" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
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
        scrolled || open
          ? "backdrop-blur-md bg-black/20 border border-white/20 rounded-[2rem] xl:rounded-full shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="px-4 xl:px-8 py-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
        >
          <img src={logo} alt="logo" className="h-8 md:h-10 xl:h-12" />
        </Link>

        <ul className="hidden xl:flex gap-6 text-white font-medium">
          {navLinks.map((link, index) => {
            const hasServices = link.name === "Services" && services;
            const hasTech = link.name === "Technologies" && technologies;
            const hasIndustries =
              link.name === "Industries" && industries.length > 0;
            const canShowDropdown = hasServices || hasTech || hasIndustries;

            return (
              <li
                key={index}
                className="relative flex items-center gap-1 cursor-pointer group"
                onClick={(e) => {
                  e.stopPropagation();
                  if (canShowDropdown) {
                    setDropdown(dropdown === link.name ? null : link.name);
                  }
                }}
              >
                <Link
                  to={link.path || "#"}
                  className="relative"
                  onClick={() => {
                    if (link.name === "Home")
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    if (!canShowDropdown) setDropdown(null);
                  }}
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {canShowDropdown && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${dropdown === link.name ? "rotate-180" : ""}`}
                  />
                )}

                {dropdown === link.name && canShowDropdown && (
                  <div
                    className={`absolute top-12 left-1/2 -translate-x-1/2 bg-white text-black rounded-2xl shadow-xl p-6 z-[60] animate-in fade-in zoom-in-95 duration-200 ${
                      link.name === "Industries"
                        ? "w-60"
                        : "w-[750px] grid grid-cols-2 gap-8"
                    }`}
                  >
                    {hasServices &&
                      Object.entries(services).map(([title, items]) => (
                        <div key={title}>
                          <h4 className="text-purple-600 font-semibold mb-3 border-b pb-1">
                            {title}
                          </h4>
                          {items.map((item, i) => (
                            <p
                              key={i}
                              className="text-sm py-1 hover:text-purple-600 cursor-pointer transition-colors"
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      ))}

                    {hasTech && (
                      <div className="col-span-2 grid grid-cols-2 gap-8 max-h-[450px] overflow-y-auto no-scrollbar">
                        {Object.entries(technologies).map(([title, items]) => (
                          <div key={title}>
                            <h4 className="text-purple-600 font-semibold mb-3 border-b pb-1">
                              {title}
                            </h4>
                            {items.map((item, i) => (
                              <p
                                key={i}
                                className="text-sm py-1 hover:text-purple-600 cursor-pointer transition-colors"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {hasIndustries && (
                      <div className="flex flex-col gap-1">
                        {industries.map((item, i) => (
                          <p
                            key={i}
                            className="py-2 px-3 hover:bg-purple-50 rounded-md cursor-pointer text-sm font-medium transition-colors"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 md:gap-4 relative">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition hidden sm:block"
          >
            <Search size={20} className="text-white" />
          </button>

          {searchOpen && (
            <div className="absolute right-16 top-15">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 w-64 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}

          <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:scale-105 transition font-semibold shadow-lg">
            My Account
          </button>

          <button
            className="xl:hidden text-white p-1"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <div
        className={`xl:hidden transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-[85vh] pb-8 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col px-6 gap-2 text-white border-t border-white/10 pt-4 mt-2">
          {navLinks.map((link, i) => {
            const hasServices = link.name === "Services" && services;
            const hasTech = link.name === "Technologies" && technologies;
            const hasIndustries =
              link.name === "Industries" && industries.length > 0;
            const canShowMobileDropdown =
              hasServices || hasTech || hasIndustries;

            return (
              <li key={i} className="flex flex-col">
                <div
                  className="flex justify-between items-center py-3 border-b border-white/5"
                  onClick={() =>
                    canShowMobileDropdown &&
                    setDropdown(dropdown === link.name ? null : link.name)
                  }
                >
                  <Link
                    to={link.path || "#"}
                    onClick={() => !canShowMobileDropdown && setOpen(false)}
                    className="text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                  {canShowMobileDropdown && (
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${dropdown === link.name ? "rotate-180 text-purple-400" : ""}`}
                    />
                  )}
                </div>

                {dropdown === link.name && canShowMobileDropdown && (
                  <div className="bg-white/5 rounded-xl p-4 my-2 flex flex-col gap-3 animate-in slide-in-from-top-2">
                    {link.name === "Industries" ? (
                      industries.slice(0, 5).map((item) => (
                        <p key={item} className="text-sm text-gray-300">
                          {item}
                        </p>
                      ))
                    ) : (
                      <p className="text-xs text-purple-300 italic">
                        Explore {link.name} Categories
                      </p>
                    )}
                  </div>
                )}
              </li>
            );
          })}
          <button className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg active:scale-95 transition-transform">
            My Account
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
