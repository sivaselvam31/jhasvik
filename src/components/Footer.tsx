// Footer.tsx
import React from "react";
import { navLinks } from "../constants";
import { socialLinks } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* Separator Line */}
      <div className="border-t border-gray-700 mx-6 md:mx-20"></div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-20" />
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="hover:text-[#292E70] transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.id} href={link.href} target="_blank" aria-label={link.label}>
                <Icon className="w-5 h-5 hover:text-[#292E70] transition" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} Jhasvik Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
