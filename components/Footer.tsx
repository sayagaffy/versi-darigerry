export default function Footer() {
  return (
    <footer className="bg-purple-600 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/assets/icons/logo.svg" 
                alt="BicaraPintar Logo" 
                className="h-6 w-auto"
              />
            </div>
            <p className="text-white text-sm mb-6 leading-relaxed lg:max-w-xs">
              Empowering businesses with intelligent AI solutions for data-driven decision making.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all cursor-pointer">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
                </svg>
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all cursor-pointer">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Quicklinks */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quicklinks</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">News</a></li>
              <li><a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">Data Integration</a></li>
              <li><a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">AI-Powered Analytics</a></li>
              <li><a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">Digital Transformation Consulting</a></li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">BicaraChat</a></li>
              <li><a href="#" className="text-white hover:text-purple-200 transition-colors text-sm">BicaraVoice</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white text-sm">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white text-sm">support@bicarapintar.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white text-sm">+62 (021) 1234 5678</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center">
          <p className="text-white text-sm">
            © Copyright 2025. Bicarapintar Allright reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
