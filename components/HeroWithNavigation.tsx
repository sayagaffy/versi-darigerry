'use client'

import { useState, useEffect } from 'react'

export default function HeroWithNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/assets/images/bg.jpg)'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black bg-opacity-80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src="/assets/icons/logo.svg" 
                alt="BicaraPintar Logo" 
                className="h-6 w-auto"
              />
            </div>
          </div>
          
          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="text-white hover:text-purple-400 transition-colors font-medium text-sm">Home</a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors font-medium text-sm">Products</a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors font-medium text-sm">Services</a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors font-medium text-sm">Solutions</a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors font-medium text-sm">News</a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors font-medium text-sm">About</a>
          </div>
          
          {/* Contact Button - Right */}
          <div className="hidden lg:flex items-center">
            <button 
              className="px-6 py-2 rounded-lg font-semibold text-xs transition-all text-white"
              style={{ backgroundColor: '#6A2FF7' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A1FE7'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6A2FF7'}
            >
              Contact Us
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#" className="text-white hover:text-purple-700 transition-colors font-medium">Home</a>
              <a href="#" className="text-white hover:text-purple-700 transition-colors font-medium">Products</a>
              <a href="#" className="text-white hover:text-purple-700 transition-colors font-medium">Services</a>
              <a href="#" className="text-white hover:text-purple-700 transition-colors font-medium">Solutions</a>
              <a href="#" className="text-white hover:text-purple-700 transition-colors font-medium">News</a>
              <a href="#" className="text-white hover:text-purple-700 transition-colors font-medium">About</a>
              <button 
                className="px-6 py-2 rounded-lg font-semibold text-sm transition-all text-white w-fit"
                style={{ backgroundColor: '#6A2FF7' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A1FE7'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6A2FF7'}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="text-center lg:text-left pb-4 lg:col-span-7">
              {/* Subtitle */}
              <div className="inline-flex items-center py-2 text-sm font-medium mb-4 text-mint-500 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                AI-Powered Data Intelligence
              </div>
              
              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight sm:leading-[2rem] lg:leading-[3rem] xl:leading-[4rem] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                The AI Communication Platform{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  That Understands
                </span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                  Human Nuance
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl px-2 sm:px-0 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
                Transform customer experiences with intelligent AI agents that deliver humanized interactions across all channels—exactly when and where your customers need them.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
                <button 
                  className="text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-xs transition-all hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: '#6A2FF7' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A1FE7'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6A2FF7'}
                >
                  Get Started
                </button>
                <button 
                  className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-xs transition-all text-black hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: '#ffffff' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                  View Products
                </button>
              </div>
            </div>
            
            {/* Right Side - Hero Image */}
            <div className="flex justify-center lg:justify-end lg:col-span-5 opacity-0 animate-[fadeInRight_1s_ease-out_0.6s_forwards]">
              <div className="relative">
                <img 
                  src="/assets/images/heroimage.png" 
                  alt="Hero Image" 
                  className="w-full max-w-lg h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
