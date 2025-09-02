// Navbar.tsx
import React, { useState, useEffect } from "react";
import logo from "../../public/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id") || "home";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🚫 Prevent body scroll + horizontal scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // remove the always-setting of overflowX to avoid conflicts
    // document.body.style.overflowX = "hidden";
  }, [isOpen]);

  const links = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      // clip any horizontal overflow at the nav level too
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 overflow-x-hidden ${
        isScrolled ? "bg-black/70 backdrop-blur-xl shadow-lg" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="shrink-0">
          <a href="/" rel="noopener noreferrer">
            <img
              src={logo}
              alt="logo"
              className="w-20 md:w-40 h-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-white font-medium">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative transition duration-300 ${
                activeSection === link.id
                  ? "text-[#292E70]"
                  : "hover:text-[#4d54b5]"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#292E70] to-[#4d54b5] transition-all duration-500 ${
                  activeSection === link.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-between h-6 w-7 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-[2px] w-full bg-white rounded transition-all duration-500 ${
              isOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-white rounded transition-all duration-500 ${
              isOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu
          - use right:0 + translate-x-full when closed to move offscreen to the right
          - ensure max-w-full + overflow-hidden so children don't create extra width
      */}
      <div
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-xl text-white flex flex-col items-end justify-start p-32 transform transition-transform duration-500 ease-in-out max-w-full overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map((link, idx) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setIsOpen(false)}
            className={`transition-all duration-500 text-2xl mb-6 ${
              activeSection === link.id
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
            style={{
              transitionDelay: `${idx * 100}ms`,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
