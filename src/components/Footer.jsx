import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        "Online Marketing",
        "Web Design & Development",
        "Mobile Application",
        "Software",
        "Creative Design",
        "Consultant",
        "Data Science",
        "Testing",
      ],
    },
    {
      title: "Industries",
      links: [
        "Automotive",
        "Ecommerce",
        "Education",
        "Finance",
        "Gaming",
        "Healthcare",
        "Manufacturing",
        "Real Estate",
        "Retail",
      ],
    },
    {
      title: "Technologies",
      links: [
        "UI Design",
        "Server Side Scripting",
        "Cloud Computing",
        "Data Mining and Analytics",
        "Web Server Technology",
        "Testing",
        "Software Process",
      ],
    },
    {
      title: "Products",
      links: [
        "CloudSync Pro",
        "SecureGuard Enterprise",
        "AI Analytics Suite",
        "MobileFlow Builder",
        "DataVault Pro",
        "DevOps Accelerator",
        "TeamConnect Hub",
        "BusinessIntel Dashboard",
        "WebForce CMS",
        "AutoFlow Engine",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Team",
        "Culture",
        "Careers",
        "Portfolio",
        "Contact",
        "Privacy Policy",
        "Terms of Service",
      ],
    },
    {
      title: "Resources",
      links: ["Blog", "News", "Documentation", "FAQ", "Technical Support"],
    },
  ];

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="h-12 w-40  flex items-center justify-center mb-6">
              <img src={logo} alt="Infocera Logo" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Leading IT services provider delivering{" "}
              <span className="text-white">
                innovative technology solutions
              </span>{" "}
              that drive business growth and digital transformation.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+918882824948"
                className="flex items-center gap-3 text-gray-400 hover:text-sky-400 transition-colors text-sm"
              >
                <Phone size={16} className="text-sky-500" /> +91 8882824948
              </a>
              <a
                href="mailto:info@infocera.in"
                className="flex items-center gap-3 text-gray-400 hover:text-sky-400 transition-colors text-sm"
              >
                <Mail size={16} className="text-sky-500" /> info@infocera.in
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-sky-500 mt-1 shrink-0" />
                <span>
                  First Floor, L29-L34, Block L<br />
                  Connaught Place, New Delhi, Delhi - 110001
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-end items-start lg:items-end">
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-sky-500/10 hover:border-sky-500/50 hover:text-sky-400 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-white/5 mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-white transition-colors text-sm font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-600 text-xs">
            © {currentYear} <span className="text-gray-400">Infocera</span>. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-white text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-white text-xs transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-white text-xs transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
