"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Doctors", href: "#doctors" },
    { name: "Appointments", href: "#appointments" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-[#05427B] flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-[#5DBA45]"></div>
              </div>
              <span className="text-2xl font-bold text-[#05427B]">
                MediCare<span className="text-[#5DBA45]">+</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#05427B] hover:text-[#5DBA45] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-[#5DBA45] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#4da83a] transition-colors duration-200">
              Emergency: (123) 456-7890
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#05427B]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#05427B] hover:text-[#5DBA45] font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-[#5DBA45] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4da83a] transition-colors duration-200 w-full">
                Emergency: (123) 456-7890
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
