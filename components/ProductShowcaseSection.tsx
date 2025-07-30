'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ProductShowcaseSection() {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>(0.1)
    const { ref: leftProductRef, isVisible: leftProductVisible } = useScrollAnimation<HTMLDivElement>(0.2)
    const { ref: rightProductRef, isVisible: rightProductVisible } = useScrollAnimation<HTMLDivElement>(0.2)
    
    return (
        <section 
            ref={sectionRef}
            className={`bg-[#111111] px-4 sm:px-6 py-12 sm:py-16 md:py-20 animate-on-scroll ${sectionVisible ? 'animate-visible' : ''}`}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
                    <div className="inline-block text-mint-400 rounded-full text-base font-medium mb-6">
                        No hassle, Faster implementation
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
                        The AI agent platform for enterprise
                    </h2>
                    <p className="text-gray-400 text-base max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2 sm:px-4 md:px-0">
                        Create humanized customer experiences with omnichannel AI that resolves complex issues while enabling human agents to focus on high-value interactions.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto items-start">
                    

                    {/* BicaraChat */}
                    <div 
                        ref={leftProductRef}
                        className={`text-center flex flex-col animate-on-scroll-left ${leftProductVisible ? 'animate-visible' : ''}`}
                    >
                        {/* Chat Interface Mockup */}
                        <div className="relative group bg-black rounded-2xl p-[1px] overflow-hidden border-[1px] border-transparent mb-4 sm:mb-6 md:mb-8 flex-1 flex flex-col items-center" style={{background: 'linear-gradient(to bottom right, black, black), linear-gradient(315deg, #000, #6A2FF7, #000, #000)', backgroundClip: 'padding-box, border-box', backgroundOrigin: 'padding-box, border-box'}}>
                            <div className="bg-black rounded-2xl p-8 relative w-full h-full flex flex-col items-center">
                            <div className="bg-white rounded-xl p-8 mx-auto w-full mb-8">
                                {/* Voice Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">B</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">BicaraChat</div>
                                            <div className="text-xs text-gray-500">Active chat</div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Call Interface */}
                                <div className="space-y-4">
                                    {/* Caller Info */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                                <span className="text-purple-600 font-semibold">JD</span>
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-gray-900">John Doe</div>
                                                <div className="text-xs text-gray-500">Customer Service</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Duration: 00:02:45
                                        </div>
                                    </div>

                                    {/* Voice Metrics */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-center justify-center mb-4">
                                            <div className="relative w-20 h-20">
                                                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                                                    <path
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="#e5e7eb"
                                                        strokeWidth="2"
                                                    />
                                                    <path
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="#8b5cf6"
                                                        strokeWidth="2"
                                                        strokeDasharray="60, 100"
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-2xl font-bold text-gray-900">10</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm font-medium text-gray-700 mb-2">Call Quality</div>
                                            <div className="text-xs text-gray-500">Excellent connection</div>
                                        </div>
                                    </div>

                                    {/* Quick Actions */}
                                    <div className="grid grid-cols-4 gap-2">
                                        <button className="bg-green-100 text-green-600 p-2 rounded-lg text-xs font-medium">
                                            Transfer
                                        </button>
                                        <button className="bg-blue-100 text-blue-600 p-2 rounded-lg text-xs font-medium">
                                            Hold
                                        </button>
                                        <button className="bg-yellow-100 text-yellow-600 p-2 rounded-lg text-xs font-medium">
                                            Record
                                        </button>
                                        <button className="bg-purple-100 text-purple-600 p-2 rounded-lg text-xs font-medium">
                                            Notes
                                        </button>
                                    </div>

                                    {/* Agent Info */}
                                    <div className="bg-purple-50 rounded-lg p-3">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">A</span>
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-gray-900">Agent Williams</div>
                                                <div className="text-xs text-gray-500">Available</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <h3 className="text-2xl font-bold text-white mb-4 text-left">BicaraChat</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm text-left">
                                    Create humanized customer experiences with omnichannel AI that resolves complex issues while enabling human agents to focus on high-value interactions.
                                </p>
                                <div className="flex justify-start">
                                <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-6 py-3 rounded-lg font-medium transition-colors w-32">
                                    Learn More
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    {/* BicaraVoice */}
                    <div 
                        ref={rightProductRef}
                        className={`text-center flex flex-col animate-on-scroll-right ${rightProductVisible ? 'animate-visible' : ''}`}
                    >
                        {/* Voice Interface Mockup */}
                        <div className="relative group bg-black rounded-2xl p-[1px] overflow-hidden border-[1px] border-transparent mb-8 flex-1 flex flex-col items-center" style={{background: 'linear-gradient(to bottom right, black, black), linear-gradient(45deg, #6A2FF7, #000, #000, #000)', backgroundClip: 'padding-box, border-box', backgroundOrigin: 'padding-box, border-box'}}>
                            <div className="bg-black rounded-2xl p-8 relative w-full h-full flex flex-col items-center">
                            <div className="bg-white rounded-xl p-8 mx-auto w-full mb-8">
                                {/* Voice Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">B</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">BicaraVoice</div>
                                            <div className="text-xs text-gray-500">Active call</div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Call Interface */}
                                <div className="space-y-4">
                                    {/* Caller Info */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                                <span className="text-purple-600 font-semibold">JD</span>
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-gray-900">John Doe</div>
                                                <div className="text-xs text-gray-500">Customer Service</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Duration: 00:02:45
                                        </div>
                                    </div>

                                    {/* Voice Metrics */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-center justify-center mb-4">
                                            <div className="relative w-20 h-20">
                                                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                                                    <path
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="#e5e7eb"
                                                        strokeWidth="2"
                                                    />
                                                    <path
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="#8b5cf6"
                                                        strokeWidth="2"
                                                        strokeDasharray="60, 100"
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-2xl font-bold text-gray-900">10</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm font-medium text-gray-700 mb-2">Call Quality</div>
                                            <div className="text-xs text-gray-500">Excellent connection</div>
                                        </div>
                                    </div>

                                    {/* Quick Actions */}
                                    <div className="grid grid-cols-4 gap-2">
                                        <button className="bg-green-100 text-green-600 p-2 rounded-lg text-xs font-medium">
                                            Transfer
                                        </button>
                                        <button className="bg-blue-100 text-blue-600 p-2 rounded-lg text-xs font-medium">
                                            Hold
                                        </button>
                                        <button className="bg-yellow-100 text-yellow-600 p-2 rounded-lg text-xs font-medium">
                                            Record
                                        </button>
                                        <button className="bg-purple-100 text-purple-600 p-2 rounded-lg text-xs font-medium">
                                            Notes
                                        </button>
                                    </div>

                                    {/* Agent Info */}
                                    <div className="bg-purple-50 rounded-lg p-3">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">A</span>
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-gray-900">Agent Williams</div>
                                                <div className="text-xs text-gray-500">Available</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 text-left">BicaraVoice</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-sm text-left">
                                    Create humanized customer experiences with omnichannel AI that resolves complex issues while enabling human agents to focus on high-value interactions.
                                </p>
                                <div className="flex justify-start">
                                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs rounded-lg font-medium transition-colors w-28 sm:w-32">
                                    Learn More
                                </button>
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
