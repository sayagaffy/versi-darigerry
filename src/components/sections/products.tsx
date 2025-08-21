// src/components/sections/products.tsx - Elegant gradient border design

import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Phone,
  Globe,
  Zap,
  BarChart3,
  Camera,
} from "lucide-react";

// Updated products with clean design
const products = [
  {
    id: "bicarachat",
    name: "BicaraChat",
    description:
      "Autonomous text conversations powered by agentic AI. Handle complex customer queries, bookings, and multi-step workflows without human intervention.",
    badge: "MULTI-STEP AI",
    badgeColor: "bg-blue-600/20 text-blue-300 border-blue-600/30",
    features: [
      "Multi-step conversation workflows with context retention",
      "Natural language understanding for complex queries", 
      "Automated booking and reservation management",
      "Seamless escalation to human agents when needed",
      "Real-time learning from customer interactions",
      "Integration with CRM and backend systems",
      "24/7 autonomous operation with 99.9% uptime",
    ],
  },
  {
    id: "bicaravoice", 
    name: "BicaraVoice",
    description:
      "Fully autonomous voice conversations with human-like natural speech. Perfect for call centers, IVR systems, and voice-first experiences.",
    badge: "NATURAL SPEECH",
    badgeColor: "bg-green-600/20 text-green-300 border-green-600/30", 
    features: [
      "Natural speech synthesis with emotional intelligence",
      "Real-time voice processing and response generation",
      "Multi-language support with native pronunciation", 
      "Advanced noise cancellation and audio optimization",
      "Seamless integration with existing phone systems",
      "Voice biometrics for security and personalization",
      "Adaptive conversation flows based on caller intent",
    ],
  },
  {
    id: "bicaraimage",
    name: "BicaraImage", 
    description:
      "Instant image analysis and automated troubleshooting. AI processes photos to detect issues and execute recovery actions automatically.",
    badge: "VISUAL AI",
    badgeColor: "bg-purple-600/20 text-purple-300 border-purple-600/30",
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

// Custom gradient border card component
function ElegantProductCard({ product, index }: { product: any; index: number }) {
  return (
    <div
      className="animate-on-scroll relative group h-full"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Main Card with Gradient Border - Using existing pattern */}
      <div className="gradient-card h-full hover:scale-[1.02] transition-all duration-500 group">
        <div className="gradient-card-content h-full">
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-bold text-white text-2xl leading-tight">
                {product.name}
              </h3>
              {/* Badge positioned inline */}
              <span className={`inline-flex items-center px-3 py-1 rounded-full font-semibold text-xs ${product.badgeColor} flex-shrink-0 ml-3`}>
                {product.badge}
              </span>
            </div>
            
            <p className="text-gray-300 text-base leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Features List with Better Styling */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide opacity-80">
              Key Capabilities
            </h4>
            <ul className="space-y-3">
              {product.features.map((feature: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                >
                  {/* Custom bullet with gradient */}
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"></div>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hover Effect Overlay */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 bg-gradient-to-t from-purple-600/5 to-transparent pointer-events-none rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}

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
    <section id="products" className="bg-black section-padding">
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
            <ElegantProductCard 
              key={product.id} 
              product={product} 
              index={index} 
            />
          ))}
        </div>

        {/* Enterprise Benefits with matching style */}
        <div className="mb-12 text-center">
          <h3 className="mb-4 font-bold text-white text-2xl md:text-3xl">
            Enterprise-Grade Performance
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Built for scale, security, and reliability that enterprise customers demand
          </p>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-4xl">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "99.9% Uptime SLA",
                description: "Enterprise-grade infrastructure with guaranteed availability and performance",
                color: "text-blue-400"
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "SOC 2 Compliant", 
                description: "Bank-level security standards with end-to-end encryption and audit trails",
                color: "text-green-400"
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Unlimited Scale",
                description: "Handle millions of conversations simultaneously with auto-scaling infrastructure", 
                color: "text-purple-400"
              }
            ].map((benefit, index) => (
              <div key={benefit.title} className="gradient-card group hover:scale-105 transition-all duration-300">
                <div className="gradient-card-content text-center">
                  <div className={`flex justify-center items-center mx-auto mb-4 rounded-xl w-12 h-12 ${benefit.color} bg-white/10`}>
                    {benefit.icon}
                  </div>
                  <h4 className="mb-2 font-semibold text-white">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
      </div>
    </section>
  );
}