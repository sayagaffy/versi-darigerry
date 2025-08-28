import React from 'react';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface FooterLinks {
  company: FooterLink[];
  services: FooterLink[];
  products: FooterLink[];
  legal: FooterLink[];
}

const footerLinks: FooterLinks = {
  company: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' }, // ✅ Updated from '#' to '/contact'
  ],
  services: [
    { label: 'Data Integration', href: '/solutions#data-integration' },
    { label: 'AI-Powered Analytics', href: '/solutions#ai-analytics' },
    { label: 'Digital Transformation Consulting', href: '/solutions#consulting' },
  ],
  products: [
    { label: 'BicaraChat', href: '/products/bicarachat' },
    { label: 'BicaraVoice', href: '/products/bicaravoice' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ]
};

const contactInfo = {
  headquarters: {
    label: 'Headquarters',
    address: 'Jl. Simponi No.21, Turangga, Kec. Lengkong, Kota Bandung, Jawa Barat 40264'
  },
  jakarta: {
    label: 'Jakarta Office', 
    address: 'Royal Spring Residence, Blok Platinum No.10, Jati Padang, Ps. Minggu, Jakarta, Daerah Khusus Ibukota Jakarta 12540'
  },
  contacts: [
    { name: 'Wisnu', email: 'wisnu@bicarapintar.ai', phone: '(+62) 858 8579 9505' },
    { name: 'Gaffy AGB', email: 'gaffy@bicarapintar.ai', phone: '(+62) 811 22 57 586' }
  ],
  general: {
    email: 'support@bicarapintar.ai',
    website: 'www.bicarapintar.ai'
  }
};

export default function Footer() {
  const [email, setEmail] = React.useState('');
  const [isSubscribing, setIsSubscribing] = React.useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubscribing(true);
    try {
      // Newsletter subscription logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    } catch (error) {
      setSubscriptionStatus('error');
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-purple-900/20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Company Info & Newsletter */}
          <div className="space-y-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">∞</span>
                </div>
                <span className="text-2xl font-bold text-white">bicarapintar</span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Empowering businesses with Intelligent AI solutions for data-driven decision making and conversational automation.
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-4 max-w-md">
                Get the latest insights on AI technology, industry trends, and product updates delivered to your inbox.
              </p>

              <form onSubmit={handleSubscribe} className="flex gap-3 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 px-4 py-3 border border-white/10 focus:border-purple-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 lg:w-80 text-white placeholder-gray-400 transition-colors"
                  disabled={isSubscribing}
                />
                <button
                  type="submit"
                  disabled={isSubscribing || !email.trim()}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px]"
                >
                  {isSubscribing ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>

              {/* Subscription Status Messages */}
              {subscriptionStatus === 'success' && (
                <p className="text-green-400 text-sm mt-2 flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  Successfully subscribed! Check your email for confirmation.
                </p>
              )}
              {subscriptionStatus === 'error' && (
                <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                  <span className="w-4 h-4 bg-red-400 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Our Products</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
              <div className="space-y-4">
                {/* Quick Contact Button */}
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 hover:text-purple-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-purple-500/30"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get in Touch
                </Link>

                {/* Contact Information */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                    </svg>
                    <a 
                      href="mailto:support@bicarapintar.ai"
                      className="text-gray-300 hover:text-purple-300 transition-colors"
                    >
                      support@bicarapintar.ai
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="text-gray-300">
                      <a 
                        href="tel:+6285885799505"
                        className="hover:text-purple-300 transition-colors block"
                      >
                        (+62) 858 8579 9505
                      </a>
                      <a 
                        href="tel:+6281122575586"
                        className="hover:text-purple-300 transition-colors block"
                      >
                        (+62) 811 22 57 586
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="text-gray-300">
                      <div className="font-medium text-white mb-1">Bandung HQ</div>
                      <div className="text-xs leading-relaxed">
                        Jl. Simponi No.21, Turangga<br />
                        Kec. Lengkong, Bandung 40264
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/bicarapintar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/bicarapintar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/bicarapintar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.926 3.708 13.775 3.708 12.478s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.756h-1.434V5.798h1.434v1.434zm-2.07 5.266c0-.918-.245-1.686-.735-2.304-.49-.618-1.182-.927-2.077-.927-.895 0-1.587.309-2.077.927-.49.618-.735 1.386-.735 2.304 0 .918.245 1.686.735 2.304.49.618 1.182.927 2.077.927.895 0 1.587-.309 2.077-.927.49-.618.735-1.386.735-2.304z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com/@bicarapintar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
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
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
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