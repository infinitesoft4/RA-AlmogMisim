import React, { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu on click
    }
  };

  return (
    <nav
      dir="rtl" // Enable right-to-left direction
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-luxury" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center ml-4">
            <span
              className={`text-2xl font-bold ${
                isScrolled ? "text-primary-900" : "text-white"
              }`}
            >
              אלמוג מיסים
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 ml-auto">
            <a
              onClick={() => scrollToSection("home")}
              className="cursor-pointer"
            >
              דף הבית
            </a>
            <a
              onClick={() => scrollToSection("services")}
              className="cursor-pointer"
            >
              שירותים
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="cursor-pointer"
            >
              אודות
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer"
            >
              צור קשר
            </a>
            <button
              className={`flex items-center px-6 py-3 rounded-lg text-white transition-colors ${
                isScrolled
                  ? "bg-primary-600 hover:bg-primary-700"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            >
              <LogIn className="w-4 h-4 mr-2" />
              התחברות
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-luxury">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 text-right cursor-pointer"
            >
              דף הבית
            </a>
            <a
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 text-right cursor-pointer"
            >
              שירותים
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 text-right cursor-pointer"
            >
              אודות
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 text-right cursor-pointer"
            >
              צור קשר
            </a>
            <button className="flex items-center w-full px-3 py-2 text-white bg-primary-600 rounded-lg justify-end">
              <LogIn className="w-4 h-4 ml-2" />
              התחברות
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
