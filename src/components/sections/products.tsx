"use client";

import React from "react";
import { ProductCard } from "@/components/ui/card";
import { Badge, StatusBadge } from "@/components/ui/badge";
import {
  MessageSquare,
  Phone,
  Camera,
  Zap,
  Globe,
  BarChart3,
} from "lucide-react";

const products = [
  {
    id: "bicarachat",
    name: "BicaraChat",
    description:
      "Autonomous text conversations powered by agentic AI. Handle complex customer queries, bookings, and multi-step workflows without human intervention.",
    icon: "💬",
    gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
    badge: "POPULAR",
    status: "updated" as const,
    features: [
      "Smart Q&A with RAG lookup for instant FAQ responses",
      "Multi-lingual support across 30+ languages",
      "Rich media: buttons, cards, carousels for engaging interactions",
      "Autonomous orchestration of multi-step workflows",
      "API-driven bookings, payments, and complaint resolution",
      "Omni-channel: WhatsApp, Web, Mobile SDKs",
      "Real-time analytics and CSAT tracking",
    ],
  },
  {
    id: "bicaravoice",
    name: "BicaraVoice",
    description:
      "Fully autonomous voice conversations with human-like natural speech. Perfect for call centers, IVR systems, and voice-first experiences.",
    icon: "🎙️",
    gradient: "bg-gradient-to-br from-green-500 to-teal-600",
    badge: "NEW",
    status: "new" as const,
    features: [
      "High-precision speech-to-text with noise filtering",
      "Natural TTS & voice cloning from 2-minute samples",
      "Smart IVR navigation and agent routing",
      "Emotion & sentiment detection for personalized responses",
      "Bahasa Indonesia and English voice optimization",
      "Post-call analytics and topic clustering",
      "Seamless integration with existing phone systems",
    ],
  },
  {
    id: "bicaraimage",
    name: "BicaraImage",
    description:
      "Instant image analysis and automated troubleshooting. AI processes photos to detect issues and execute recovery actions automatically.",
    icon: "📸",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
    badge: "BETA",
    status: "beta" as const,
    features: [
      "Instant image analysis for technical troubleshooting",
      "Auto-detection of device issues, broken cables, error lights",
      "Automated restart & recovery via API commands",
      "Targeted step-by-step troubleshooting prompts",
      "Visual diagnostic reports and issue documentation",
      "Integration with device management systems",
      "Proactive maintenance recommendations",
    ],
  },
];

const integrations = [
  { name: "WhatsApp Business", icon: MessageSquare, color: "text-green-500" },
  { name: "Voice & IVR", icon: Phone, color: "text-blue-500" },
  { name: "Web Chat", icon: Globe, color: "text-purple-500" },
  { name: "Mobile SDK", icon: Zap, color: "text-yellow-500" },
  { name: "Analytics", icon: BarChart3, color: "text-teal-500" },
  { name: "API Integration", icon: Camera, color: "text-red-500" },
];

export function ProductsSection() {
  return (
    <section id="products" className="bg-dark-100 section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <Badge text="🎯 AI Product Suite" variant="primary" size="lg" />
          </div>

          <h2 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl">
            <span className="text-white">Complete AI Platform for</span>
            <br />
            <span className="text-gradient">Every Channel</span>
          </h2>

          <p className="text-gray-300 text-xl text-balance leading-relaxed">
            From text conversations to voice calls and image analysis—our
            agentic AI adapts to your customers' preferred communication style
            while maintaining context across all touchpoints.
          </p>
        </div>

        {/* Products Grid */}
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProductCard
                product={product}
                className="group relative h-full"
              />
              <div className="-top-3 -right-3 z-10 absolute">
                <StatusBadge status={product.status} />
              </div>
            </div>
          ))}
        </div>

        {/* Integration Channels */}
        <div className="mb-12 text-center">
          <h3 className="mb-4 font-bold text-white text-2xl md:text-3xl">
            Seamless Integration Across All Channels
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Deploy our AI across every customer touchpoint for a unified,
            intelligent experience
          </p>

          <div className="gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto max-w-4xl">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="hover:scale-105 transition-transform duration-300 gradient-card">
                  <div className="text-center gradient-card-content">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 flex items-center justify-center ${integration.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <integration.icon size={24} />
                    </div>
                    <p className="font-medium text-white text-sm">
                      {integration.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-5xl">
          {[
            {
              title: "Agentic Workflows",
              description:
                "AI that doesn't just respond—it acts autonomously across multi-step processes",
              icon: "🤖",
            },
            {
              title: "Omni-Channel Unity",
              description:
                "Seamless context preservation across voice, chat, and visual interactions",
              icon: "🔗",
            },
            {
              title: "Enterprise Ready",
              description:
                "Built for scale with enterprise security, compliance, and reliability",
              icon: "🏢",
            },
          ].map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 text-4xl">{benefit.icon}</div>
              <h4 className="mb-3 font-bold text-white text-xl">
                {benefit.title}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
