'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function IndustryShowcaseSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>(0.1)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>(0.2)
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>(0.3)
  
  return (
    <section 
      ref={sectionRef}
      className={`bg-black px-6 py-20 animate-on-scroll ${sectionVisible ? 'animate-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block text-mint-400 rounded-full text-base font-medium mb-6">
            No hassle, Faster implementation
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            The AI agent platform for Enterprise
          </h2>
          <p className="text-gray-400 text-base max-w-3xl mx-auto mb-16">
            Create humanized customer experiences with omnichannel AI that resolves complex issues while enabling human agents to focus on high-value interactions.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-stagger ${cardsVisible ? 'animate-visible' : ''}`}
        >
          {/* Banking & Finance */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDIwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjUwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8cGF0aCBkPSJNNTAgNTBIMTUwVjE1MEg1MFY1MFoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNNzAgNzBIMTMwVjEzMEg3MFY3MFoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMjAwIiB5Mj0iMjUwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMyNTYzRUIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMUU0MEFGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4=')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-bold">Banking & Finance</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Healthcare */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-green-600 to-green-800">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDIwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjUwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjMwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4zIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iMCIgeTE9IjAiIHgyPSIyMDAiIHkyPSIyNTAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzE2QTM0QSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxNTgwM0QiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4=')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-bold">Healthcare</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Retail & E-Commerce */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-purple-800">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDIwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjUwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8cmVjdCB4PSI2MCIgeT0iODAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI2MCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxyZWN0IHg9IjcwIiB5PSI5MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8wXzEiIHgxPSIwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjI1MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjOEI1Q0Y2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdDM0FFRCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-bold">Retail & E-Commerce</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Manufacturing */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-600 to-orange-800">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDIwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjUwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8cG9seWdvbiBwb2ludHM9IjEwMCw2MCA2MCwxMjAgMTQwLDEyMCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+Cjxwb2x5Z29uIHBvaW50cz0iMTAwLDgwIDgwLDExMCAxMjAsMTEwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8wXzEiIHgxPSIwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjI1MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRUE1ODBDIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RDMjYyNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-bold">Manufacturing</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center mb-20">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-xs rounded-lg font-medium transition-colors">
            Learn More
          </button>
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className={`bg-purple-600 rounded-3xl p-12 text-center animate-on-scroll-scale ${ctaVisible ? 'animate-visible' : ''}`}
        >
          <h2 className="text-4xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-purple-100 text-sm max-w-lg mx-auto mb-8 leading-8">
            Create human-centered AI communication that resolves issues faster and delights your customers at every touchpoint.
          </p>
          <button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 text-xs rounded-lg font-medium transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
