'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1)
  
  return (
    <section 
      ref={ref}
      className={`bg-[#111111] px-6 py-20 animate-on-scroll ${isVisible ? 'animate-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block  text-mint-400 rounded-full text-base font-medium mb-6">
            AI-Powered Data Intelligence
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Beyond Basic Automation: 
            <br className="hidden lg:block" />
            AI That{' '}Thinks and Adapts
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Intelligent AI solutions that understand context, learn continuously, and deliver{' '}
            exceptional customer experiences.
          </p>
        </div>

        {/* Three Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contextual Understanding */}
          <div className="relative group bg-black rounded-2xl p-[1px] overflow-hidden border-[1px] border-transparent" style={{background: 'linear-gradient(to bottom right, black, black), linear-gradient(315deg, #000, #6A2FF7, #000, #000)', backgroundClip: 'padding-box, border-box', backgroundOrigin: 'padding-box, border-box'}}>
            <div className="bg-black rounded-2xl p-8 relative">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
              <h3 className="text-xl font-bold text-white mb-4">Contextual Understanding</h3>
              <p className="text-gray-400 text-sm">
                Advanced reasoning that grasps intent, not just keywords.
              </p>
            </div>
          </div>

          {/* Rapid Implementation */}
          <div className="relative group bg-black rounded-2xl p-[1px] overflow-hidden border-[1px] border-transparent" style={{background: 'linear-gradient(to bottom right, black, black), linear-gradient(45deg, #6A2FF7, #000, #000, #000)', backgroundClip: 'padding-box, border-box', backgroundOrigin: 'padding-box, border-box'}}>
            <div className="bg-black rounded-2xl p-8 relative">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
              <h3 className="text-xl font-bold text-white mb-4">Rapid Implementation</h3>
              <p className="text-gray-400 text-sm">
                Deploy powerful AI solutions in days, not months.
              </p>
            </div>
          </div>

          {/* Continuous Evolution */}
          <div className="relative group bg-black rounded-2xl p-[1px] overflow-hidden border-[1px] border-transparent" style={{background: 'linear-gradient(to bottom right, black, black), linear-gradient(225deg, #000, #000, #6A2FF7, #000)', backgroundClip: 'padding-box, border-box', backgroundOrigin: 'padding-box, border-box'}}>
            <div className="bg-black rounded-2xl p-8 relative">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
              <h3 className="text-xl font-bold text-white mb-4">Continuous Evolution</h3>
              <p className="text-gray-400 text-sm">
                Systems that learn and improve with every interaction.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Experience Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 p-12 bg-black rounded-2xl">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Customer Experience Benefits</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Seamless Omnichannel Presence</h4>
                  <p className="text-gray-400 text-sm">
                    Connect with customers across web, mobile, email, SMS, and social media with consistent, personalized experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Continuous Conversation Memory</h4>
                  <p className="text-gray-400 text-sm">
                    Maintain context and conversation history across channels and interactions for truly meaningful engagements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Proactive Customer Care</h4>
                  <p className="text-gray-400 text-sm">
                    Stay one step ahead with AI that anticipates needs and initiates helpful conversations before issues arise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl p-8 relative overflow-hidden">
              <div className="bg-white rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800">Welcome to Portal</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">AI Chat</div>
                      <div className="text-xs text-gray-500">Online now</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-sm text-gray-700">
                    Hi, I just signed up. Where should I start?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Readiness Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-mint-400 rounded-2xl p-8 relative overflow-hidden">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="text-white font-medium mb-2">Welcome, Anne!</div>
                      <div className="text-gray-300 text-sm">Improve customer experience</div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Enterprise Readiness</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Enterprise-Grade Security</h4>
                    <p className="text-purple-100 text-sm">
                      Bank-level encryption and advanced security frameworks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Compliance Without Compromise</h4>
                    <p className="text-purple-100 text-sm">
                      Infrastructure that exceeds industry requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Your Data Remains Yours</h4>
                    <p className="text-purple-100 text-sm">
                      Complete data sovereignty with privacy-first architecture—never accessed or used without explicit permission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
