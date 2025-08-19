"use client";

import React, { useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection, FloatingCTA } from "@/components/sections/hero";
import { ProductsSection } from "@/components/sections/products";
import { HowItWorksSection } from "@/components/sections/how-it-works";

export default function HomePage() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-black min-h-screen">
      {" "}
      {/* FIXED: Pure black background */}
      {/* Navigation */}
      <Header />
      {/* Page Sections - Updated order to match reference */}
      <HeroSection />
      {/* TODO: Add BicaraChat Key Features section */}
      {/* <FeaturesSection /> */}
      {/* TODO: Add From Concept to Transformation section */}
      {/* <ProcessSection /> */}
      {/* Existing sections */}
      <ProductsSection />
      <HowItWorksSection />
      {/* TODO: Add Contact section with map */}
      {/* <ContactSection /> */}
      {/* Footer */}
      <Footer />
      {/* Mobile Floating CTA */}
      <FloatingCTA />
    </main>
  );
}
