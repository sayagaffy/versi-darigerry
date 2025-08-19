"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Brain,
  Database,
  ArrowRight,
  MessageSquare,
  Mic,
  Camera,
  Smartphone,
} from "lucide-react";

const workflowSteps = [
  {
    id: "input",
    title: "User Input",
    description:
      "Engage customers via WhatsApp, website, digital kiosk and mobile – whenever they are.",
    details:
      "Multi-channel customer engagement across all preferred touchpoints with consistent experience.",
    icon: <Users size={40} />,
    gradient: "from-blue-500 to-cyan-500",
    channels: [
      { name: "WhatsApp", icon: MessageSquare, color: "text-green-400" },
      { name: "Voice/IVR", icon: Mic, color: "text-blue-400" },
      { name: "Web Chat", icon: Camera, color: "text-purple-400" },
      { name: "Mobile App", icon: Smartphone, color: "text-pink-400" },
    ],
  },
  {
    id: "processing",
    title: "BicaraPintar AI Core",
    description:
      "Our Engine uses LLM + RAG + ASR + TTS to not just respond, but also take action for users.",
    details:
      "Advanced agentic AI processing with context understanding, sentiment analysis, and autonomous decision making.",
    icon: <Brain size={40} />,
    gradient: "from-purple-500 to-pink-500",
    technologies: [
      "Large Language Models (LLM)",
      "Retrieval Augmented Generation (RAG)",
      "Automatic Speech Recognition (ASR)",
      "Text-to-Speech Synthesis (TTS)",
      "Computer Vision & Image Analysis",
      "Sentiment & Emotion Detection",
    ],
  },
  {
    id: "integration",
    title: "Integration with Systems",
    description:
      "Securely connects with your CRM, SAP, booking system, and other backends API to drive result.",
    details:
      "Enterprise-grade integrations that enable autonomous actions and real-time data synchronization.",
    icon: <Database size={40} />,
    gradient: "from-teal-500 to-green-500",
    integrations: [
      "CRM Systems (Salesforce, HubSpot)",
      "ERP Solutions (SAP, Oracle)",
      "Booking & Reservation Platforms",
      "Payment Gateways",
      "Help Desk & Ticketing Systems",
      "Custom APIs & Webhooks",
    ],
  },
];

const processFlow = [
  "Customer initiates contact through any channel",
  "AI Core analyzes intent, context, and sentiment",
  "Real-time data retrieval from integrated systems",
  "Autonomous action execution or response generation",
  "Continuous learning and process optimization",
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-dark-200 section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <Badge text="⚡ AI Workflow Engine" variant="secondary" size="lg" />
          </div>

          <h2 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl">
            <span className="text-white">How Bicara Pintar</span>
            <br />
            <span className="text-gradient">AI Works</span>
          </h2>

          <p className="text-gray-300 text-xl text-balance leading-relaxed">
            From user interaction to backend automation—discover how our agentic
            AI platform transforms every customer touchpoint into intelligent,
            autonomous experiences.
          </p>
        </div>

        {/* Main Workflow Steps */}
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 mb-16">
          {workflowSteps.map((step, index) => (
            <div
              key={step.id}
              className="relative animate-on-scroll"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Connection Arrow (except for last item) */}
              {index < workflowSteps.length - 1 && (
                <div className="hidden lg:block top-1/2 -right-4 z-10 absolute -translate-y-1/2 transform">
                  <div className="flex justify-center items-center bg-gradient-primary rounded-full w-8 h-8">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                </div>
              )}

              <Card
                title={step.title}
                description={step.description}
                className="group h-full text-center"
                variant="gradient"
                hover
                glow
              >
                {/* Icon */}
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                >
                  {step.icon}
                </div>

                {/* Details */}
                <p className="mb-6 text-gray-400 text-sm leading-relaxed">
                  {step.details}
                </p>

                {/* Channel Icons for Input */}
                {step.channels && (
                  <div className="gap-3 grid grid-cols-2 mb-4">
                    {step.channels.map((channel) => (
                      <div
                        key={channel.name}
                        className="flex items-center gap-2 text-sm"
                      >
                        <channel.icon size={16} className={channel.color} />
                        <span className="text-gray-300">{channel.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies for Processing */}
                {step.technologies && (
                  <ul className="space-y-2 text-sm text-left">
                    {step.technologies.map((tech) => (
                      <li key={tech} className="flex items-start gap-2">
                        <div className="flex-shrink-0 bg-purple-400 mt-2 rounded-full w-1.5 h-1.5" />
                        <span className="text-gray-300">{tech}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Integrations for Systems */}
                {step.integrations && (
                  <ul className="space-y-2 text-sm text-left">
                    {step.integrations.map((integration) => (
                      <li key={integration} className="flex items-start gap-2">
                        <div className="flex-shrink-0 bg-teal-400 mt-2 rounded-full w-1.5 h-1.5" />
                        <span className="text-gray-300">{integration}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Process Flow Timeline */}
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 font-bold text-white text-2xl md:text-3xl text-center">
            Complete Process Flow
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="top-0 bottom-0 left-4 md:left-8 absolute bg-gradient-to-b from-primary-500 to-secondary-500 w-0.5" />

            <div className="space-y-8">
              {processFlow.map((step, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="z-10 relative flex justify-center items-center bg-gradient-primary shadow-lg rounded-full w-8 md:w-16 h-8 md:h-16 font-bold text-white">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 md:pt-4">
                    <div className="gradient-card">
                      <div className="gradient-card-content">
                        <p className="font-medium text-white text-lg">{step}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl gradient-card">
            <div className="text-center gradient-card-content">
              <h3 className="mb-4 font-bold text-white text-2xl">
                Ready to Experience the Power?
              </h3>
              <p className="mb-6 text-gray-300 leading-relaxed">
                See how our agentic AI can transform your customer experience
                with autonomous, intelligent conversations that drive real
                business results.
              </p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="https://platform.bicarapintar.ai"
                  external
                  rightIcon={<ArrowRight size={20} />}
                >
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" href="#demo">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
