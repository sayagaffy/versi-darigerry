"use client";

import React, { useEffect, useRef } from "react";
import { Button, CTAButton } from "@/components/ui/button";
import { GradientBadge } from "@/components/ui/badge";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Users,
  MessageSquare,
} from "lucide-react";

const stats = [
  { value: "10M+", label: "Conversations Processed", icon: MessageSquare },
  { value: "99.9%", label: "Uptime Reliability", icon: Zap },
  { value: "500+", label: "Enterprise Clients", icon: Users },
  { value: "30+", label: "Languages Supported", icon: Sparkles },
];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex justify-center items-center min-h-screen overflow-hidden animate-on-scroll"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(106,47,247,0.1)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(45,212,191,0.1)_0%,transparent_70%)]" />

      {/* Floating Elements */}
      <div className="top-20 left-10 absolute bg-primary-600/10 blur-xl rounded-full w-20 h-20 animate-float" />
      <div
        className="right-16 bottom-32 absolute bg-secondary-600/10 blur-xl rounded-full w-32 h-32 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="top-1/2 left-1/4 absolute bg-primary-500/20 blur-lg rounded-full w-16 h-16 animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="z-10 relative container-custom">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <GradientBadge
              text="🚀 Enterprise AI Platform - Powered by Agentic Intelligence"
              className="text-sm md:text-base"
            />
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 font-bold text-4xl md:text-6xl lg:text-7xl text-balance">
            <span className="text-white">Transform Customer</span>
            <br />
            <span className="text-gradient">Experience with AI</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-3xl text-gray-300 text-xl md:text-2xl text-balance leading-relaxed">
            Enterprise-grade conversational AI platform that doesn't just
            respond—it acts. Automate complex workflows across voice, chat, and
            visual channels with our agentic AI engine.
          </p>

          {/* Key Features Highlight */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Autonomous Multi-Step Workflows",
              "Omni-Channel Integration",
              "Real-Time Analytics",
              "30+ Languages",
            ].map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 border border-white/10 rounded-full text-gray-300 text-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-500 rounded-full w-2 h-2" />
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex sm:flex-row flex-col justify-center items-center gap-6 mb-16">
            <CTAButton
              href="https://platform.bicarapintar.ai"
              external
              rightIcon={<ArrowRight size={20} />}
              className="px-8 py-4 text-lg"
            >
              Start Free Trial
            </CTAButton>

            <Button
              variant="outline"
              size="lg"
              leftIcon={<Play size={20} />}
              href="#demo"
              className="px-8 py-4 text-lg"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="gap-8 grid grid-cols-2 lg:grid-cols-4 mx-auto max-w-4xl">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="flex justify-center items-center bg-gradient-primary rounded-xl w-12 h-12 text-white">
                    <stat.icon size={24} />
                  </div>
                </div>
                <div className="mb-1 font-bold text-white text-2xl md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="bottom-8 left-1/2 absolute -translate-x-1/2 animate-bounce transform">
        <div className="flex justify-center border-2 border-white/30 rounded-full w-6 h-10">
          <div className="bg-white/60 mt-2 rounded-full w-1 h-3 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

// Floating CTA for mobile
export function FloatingCTA() {
  return (
    <div className="md:hidden right-6 bottom-6 left-6 z-40 fixed">
      <CTAButton
        href="https://platform.bicarapintar.ai"
        external
        className="justify-center shadow-2xl w-full"
        rightIcon={<ArrowRight size={18} />}
      >
        Get Started Free
      </CTAButton>
    </div>
  );
}
