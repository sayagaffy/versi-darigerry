import React from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
} from "lucide-react";

const footerLinks = {
  products: [
    { label: "BicaraChat", href: "#products" },
    { label: "BicaraVoice", href: "#products" },
    { label: "BicaraImage", href: "#products" },
    { label: "Platform Overview", href: "#features" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Press Kit", href: "#press" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    {
      label: "Documentation",
      href: "https://docs.bicarapintar.ai",
      external: true,
    },
    {
      label: "API Reference",
      href: "https://api.bicarapintar.ai",
      external: true,
    },
    {
      label: "Support Center",
      href: "https://support.bicarapintar.ai",
      external: true,
    },
    {
      label: "Status Page",
      href: "https://status.bicarapintar.ai",
      external: true,
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "GDPR Compliance", href: "/gdpr" },
  ],
};

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/bicarapintar",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://twitter.com/bicarapintar", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://instagram.com/bicarapintar",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="bg-dark-200 border-white/10 border-t">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="gap-12 grid grid-cols-1 lg:grid-cols-5">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex justify-center items-center bg-gradient-primary rounded-lg w-10 h-10">
                  <span className="font-bold text-white text-xl">∞</span>
                </div>
                <span className="font-bold text-white text-2xl">
                  bicarapintar
                </span>
              </div>

              <p className="mb-6 max-w-md text-gray-300 text-lg leading-relaxed">
                Enterprise-grade AI platform for seamless conversations and
                intelligent automation. Transform your customer experience with
                our agentic AI solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={18} className="text-primary-500" />
                  <span>hello@bicarapintar.ai</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={18} className="text-primary-500" />
                  <span>+62 21 1234 5678</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} className="text-primary-500" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center bg-white/5 hover:bg-primary-600/20 border border-white/10 hover:border-primary-600/30 rounded-lg w-10 h-10 text-gray-400 hover:text-primary-400 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="gap-8 grid grid-cols-2 lg:grid-cols-3 lg:col-span-3">
              {/* Products */}
              <div>
                <h3 className="mb-4 font-semibold text-white text-lg">
                  Products
                </h3>
                <ul className="space-y-3">
                  {footerLinks.products.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="mb-4 font-semibold text-white text-lg">
                  Company
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="mb-4 font-semibold text-white text-lg">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                        {link.external && <ExternalLink size={14} />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-white/10 border-t">
          <div className="flex lg:flex-row flex-col justify-between items-center gap-6">
            <div className="lg:text-left text-center">
              <h3 className="mb-2 font-semibold text-white text-lg">
                Stay updated with BicaraPintar
              </h3>
              <p className="text-gray-300">
                Get the latest AI insights and product updates delivered to your
                inbox.
              </p>
            </div>

            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 px-4 py-3 border border-white/10 focus:border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 lg:w-80 text-white placeholder-gray-400"
              />
              <Button variant="primary" size="md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-white/10 border-t">
          <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
            <div className="text-gray-400 lg:text-left text-center">
              © 2025 PT Bicara Pintar Indonesia. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <React.Fragment key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-gray-600">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
