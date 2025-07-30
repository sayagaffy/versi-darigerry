'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1)
  
  return (
    <section 
      ref={ref}
      className={`bg-black px-4 sm:px-6 py-12 sm:py-16 md:py-20 animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* From Concept to Transformation Section */}
        <div className="text-center">
          <div className="inline-block text-mint-400 rounded-full text-sm sm:text-base font-medium mb-4 sm:mb-6">
            No hassle, Faster implementation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
            From Concept to Transformation
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4 md:px-0">
            Our streamlined AI implementation process ensures rapid, efficient, and tailored solutions for your business.
          </p>

          {/* 4 Step Process Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 md:gap-0 max-w-5xl mx-auto">
            {/* Step 1: Chatbot Development */}
            <div className="text-center p-6 sm:p-8 md:p-10 lg:p-12 relative">
              {/* Bottom-right corner only */}
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div className="absolute bottom-0 right-0 w-full h-[0.5px] bg-gradient-to-l from-purple-600 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-[0.5px] h-full bg-gradient-to-t from-purple-600 to-transparent"></div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">1. Chatbot Development</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                Collaborate with GenAI experts to develop and train the chatbot across the specified languages and topics.
              </p>
            </div>

            {/* Step 2: Testing and Optimization */}
            <div className="text-center p-6 sm:p-8 md:p-10 lg:p-12 relative">
              {/* Bottom-left corner only */}
              <div className="absolute bottom-0 left-0 w-32 h-32">
                <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-purple-600 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-[0.5px] h-full bg-gradient-to-t from-purple-600 to-transparent"></div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">2. Testing and Optimization</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                Conduct rigorous testing to ensure accurate responses and optimal performance.
              </p>
            </div>

            {/* Step 3: Training for Agents */}
            <div className="text-center p-6 sm:p-8 md:p-10 lg:p-12 relative">
              {/* Top-right corner only */}
              <div className="absolute top-0 right-0 w-32 h-32">
                <div className="absolute top-0 right-0 w-full h-[0.5px] bg-gradient-to-l from-purple-600 to-transparent"></div>
                <div className="absolute top-0 right-0 w-[0.5px] h-full bg-gradient-to-b from-purple-600 to-transparent"></div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">3. Training for Agents</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                Train call centre agents to effectively manage handover scenarios and complex enquiries.
              </p>
            </div>

            {/* Step 4: Launch and Monitoring */}
            <div className="text-center p-6 sm:p-8 md:p-10 lg:p-12 relative">
              {/* Top-left corner only */}
              <div className="absolute top-0 left-0 w-32 h-32">
                <div className="absolute top-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-purple-600 to-transparent"></div>
                <div className="absolute top-0 left-0 w-[0.5px] h-full bg-gradient-to-b from-purple-600 to-transparent"></div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">4. Launch and Monitoring</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                Launch the chatbot and closely monitor its performance, making necessary adjustments as required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
