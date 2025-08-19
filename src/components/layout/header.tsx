"use client";

import React, { useState, useEffect } from "react";
import { cn, scrollToElement } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { id: "home", label: "Home", href: "#hero" },
  { id: "products", label: "Products", href: "#products" },
  { id: "features", label: "Features", href: "#features" },
  { id: "how-it-works", label: "How It Works", href: "#how-it-works" },
  { id: "architecture", label: "Architecture", href: "#architecture" },
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
    scrollToElement(elementId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "top-0 right-0 left-0 z-50 fixed transition-all duration-300",
        isScrolled
          ? "bg-dark-100/90 backdrop-blur-custom border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center bg-gradient-primary rounded-lg w-8 h-8">
                <span className="font-bold text-white text-lg">∞</span>
              </div>
              <span className="font-bold text-white text-xl">bicarapintar</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className="font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              href="#contact"
              onClick={() => handleNavClick("#contact")}
            >
              Contact Sales
            </Button>
            <Button
              variant="primary"
              size="sm"
              glow
              href="https://platform.bicarapintar.ai"
              external
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden top-full right-0 left-0 absolute bg-dark-100/95 backdrop-blur-custom border-white/10 border-b">
            <div className="space-y-4 px-4 py-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="block py-2 w-full font-medium text-gray-300 hover:text-white text-left transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}

              <div className="space-y-3 pt-4">
                <Button
                  variant="outline"
                  size="md"
                  className="w-full"
                  onClick={() => handleNavClick("#contact")}
                >
                  Contact Sales
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  href="https://platform.bicarapintar.ai"
                  external
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// Floating Header for better UX
export function FloatingHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden right-6 bottom-6 z-50 fixed">
      <Button
        variant="primary"
        size="lg"
        glow
        className="shadow-2xl rounded-full"
        href="https://platform.bicarapintar.ai"
        external
      >
        Get Started
      </Button>
    </div>
  );
}
