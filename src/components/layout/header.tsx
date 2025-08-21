// src/components/layout/header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// SIMPLIFIED navigation to match reference exactly
const navigation = [
  { id: "solutions", label: "Solutions", href: "#solutions" },
  { id: "industries", label: "Industries", href: "#industries" },
  { id: "about", label: "About", href: "#about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const elementId = href.replace("#", "");
    const element = document.getElementById(elementId);
    if (element) {
      // Account for fixed header height when scrolling
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-sm border-b border-white/10"
          : "bg-transparent"
      }`}
      // CRITICAL: Set explicit height so other components can reference it
      style={{ height: '80px' }}
    >
      <nav className="container-custom h-full">
        <div className="flex justify-between items-center h-full py-4">
          {/* Logo - EXACT match to reference */}
          <div className="flex items-center space-x-2">
            <img 
  src="/assets/icons/logo-full-white.svg" 
  alt="BicaraPintar Logo" 
  className="h-6 w-auto"
/>
          </div>

          {/* Desktop Navigation - SIMPLIFIED */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className="font-medium text-white hover:text-purple-300 transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Contact Us Button - EXACT purple #6A2FF7 */}
            <button
              className="px-6 py-2 rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: "#6A2FF7" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#5A1FE7")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#6A2FF7")
              }
              onClick={() => handleNavClick("#contact")}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - SIMPLIFIED */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full right-0 left-0 bg-black/95 backdrop-blur-sm border-white/10 border-t">
            <div className="py-6 container-custom">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className="py-2 font-medium text-white hover:text-purple-300 text-left transition-colors"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Mobile Contact Button */}
                <button
                  className="mt-4 px-6 py-3 rounded-lg w-fit font-semibold text-white transition-all duration-300"
                  style={{ backgroundColor: "#6A2FF7" }}
                  onClick={() => handleNavClick("#contact")}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export { Header as default };