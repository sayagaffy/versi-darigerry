'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function CTASection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>(0.1)
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation<HTMLDivElement>(0.3)
  
  return (
    <section 
      ref={sectionRef}
      className={`px-6 py-20 animate-on-scroll-scale ${sectionVisible ? 'animate-visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Communication?
        </h2>
        <p className="text-xl text-purple-200 mb-8">
          Join thousands of users who have already discovered the power of AI-driven communication
        </p>
        <div 
          ref={buttonsRef}
          className={`flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll ${buttonsVisible ? 'animate-visible' : ''}`}
        >
          <button 
            className="text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
            style={{backgroundColor: '#6A2FF7'}}
            onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#5A1FE7'} 
            onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#6A2FF7'}
          >
            Start Free Trial
          </button>
          <button 
            className="text-black px-8 py-4 rounded-full font-semibold text-lg transition-all"
            style={{backgroundColor: '#ffffff'}}
            onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#f0f0f0'} 
            onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#ffffff'}
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  )
}
