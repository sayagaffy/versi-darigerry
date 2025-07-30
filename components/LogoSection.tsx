'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function LogoSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2)
  
  const logos = [
    { src: '/assets/icons/clients/client1.svg', alt: 'Client 1' },
    { src: '/assets/icons/clients/client2.svg', alt: 'Client 2' },
    { src: '/assets/icons/clients/client3.svg', alt: 'Client 3' },
    { src: '/assets/icons/clients/client4.svg', alt: 'Client 4' },
  ];

  return (
    <section 
      ref={ref}
      className={`bg-purple-600 animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}
    >
      <div className="relative w-full py-4">
        {/* Custom CSS for the sliding animation */}
        <style jsx>{`
          .logo-container {
            overflow: hidden;
            position: relative;
            width: 100%;
            padding: 4px 0;
            height: 56px;
          }
          
          .logo-slider {
            display: flex;
            position: absolute;
            width: max-content;
            animation: slide 25s linear infinite;
          }
          
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .gradient-left {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 128px;
            z-index: 10;
            background: linear-gradient(to right, #6b2ff7 50%, rgba(147, 51, 234, 0) 100%);
          }
          
          .gradient-right {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 128px;
            z-index: 10;
            background: linear-gradient(to left, #6b2ff7 50%, rgba(147, 51, 234, 0) 100%);
          }
          
          @media (min-width: 768px) {
            .gradient-left, .gradient-right {
              width: 160px;
            }
          }
        `}</style>
        
        {/* Left gradient overlay */}
        <div className="gradient-left"></div>
        
        {/* Right gradient overlay */}
        <div className="gradient-right"></div>
        
        <div className="logo-container">
          <div className="logo-slider px-4 py-2">
m            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-8 lg:mx-16">
                <div className="flex items-center justify-center opacity-80">
                  <img 
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-8 lg:mx-16">
                <div className="flex items-center justify-center opacity-80">
                  <img 
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
              </div>
            ))}
            {/* Third set for extra coverage */}
            {logos.map((logo, index) => (
              <div key={`third-${index}`} className="flex-shrink-0 mx-8 lg:mx-16">
                <div className="flex items-center justify-center opacity-80">
                  <img 
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
