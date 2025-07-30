'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ExampleScenariosSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>(0.1)
  const { ref: tabsRef, isVisible: tabsVisible } = useScrollAnimation<HTMLDivElement>(0.2)
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>(0.3)
  
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
            The AI agent platform for enterprise
          </h2>
          <p className="text-gray-400 text-base max-w-3xl mx-auto mb-16">
            Create humanized customer experiences with omnichannel AI that resolves complex issues while enabling human agents to focus on high-value interactions.
          </p>
        </div>

        {/* Industry Tabs */}
        <div 
          ref={tabsRef}
          className={`flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll ${tabsVisible ? 'animate-visible' : ''}`}
        >
          <button className="bg-purple-600 text-white px-6 py-3 text-xs rounded-lg font-medium">
            Banking & Finance
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-6 py-3 text-xs rounded-lg font-medium transition-colors">
            Healthcare
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-6 py-3 text-xs rounded-lg font-medium transition-colors">
            Retail & E-Commerce
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-6 py-3 text-xs rounded-lg font-medium transition-colors">
            Manufacturing
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-6 py-3 text-xs rounded-lg font-medium transition-colors">
            All Solutions
          </button>
        </div>

        {/* Main Content Grid */}
        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-12 gap-12 items-start bg-[#1E1E1E] p-12 rounded-2xl animate-on-scroll-scale ${contentVisible ? 'animate-visible' : ''}`}
        >
          {/* Left Side - Example Scenarios */}
          <div className="col-span-4">
            <h3 className="text-2xl font-bold text-white mb-8">Example Scenarios</h3>
            
            <div className="space-y-6">
              {/* Onboard New Customer */}
              <div className="group cursor-pointer">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-400 font-medium">Onboard New Customer</span>
                </div>
              </div>

              {/* Activate Services */}
              <div className="group cursor-pointer">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-400 font-medium">Activate Services</span>
                </div>
              </div>

              {/* Secure Transactions */}
              <div className="group cursor-pointer">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-400 font-medium">Secure Transactions</span>
                </div>
              </div>

              {/* Password Reset */}
              <div className="group cursor-pointer">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-400 font-medium">Password Reset</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Dashboard Interface */}
          <div className="col-span-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6 h-full">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-sm font-bold">S</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Synergy</div>
                    <div className="text-xs text-gray-500">HR Management</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-sm font-bold">S</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Sophia Williams</div>
                    <div className="text-xs text-gray-500">Welcome back to Synergy ✨</div>
                  </div>
                </div>
              </div>

              {/* Main Dashboard Content */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  {/* Navigation Menu */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-4 h-4 bg-purple-100 rounded"></div>
                      <span>Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-4 h-4 bg-gray-100 rounded"></div>
                      <span>Calendar</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-4 h-4 bg-gray-100 rounded"></div>
                      <span>Time Off</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-4 h-4 bg-gray-100 rounded"></div>
                      <span>Projects</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-4 h-4 bg-gray-100 rounded"></div>
                      <span>Teams</span>
                    </div>
                  </div>

                  {/* Tasks Section */}
                  <div className="mt-6">
                    <div className="text-xs font-medium text-gray-500 mb-2">TASKS</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-700">Lorem Mobile App</span>
                        <span className="text-xs text-gray-400 ml-auto">⌘ 1</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-700">Monday Redesign</span>
                        <span className="text-xs text-gray-400 ml-auto">⌘ 2</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700">Udemy Courses</span>
                        <span className="text-xs text-gray-400 ml-auto">⌘ 3</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {/* Time Off Widget */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Time Off</span>
                      <span className="text-xs text-gray-500">See All</span>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#8b5cf6"
                            strokeWidth="3"
                            strokeDasharray="75, 100"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xl font-bold text-gray-900">10</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 text-center">OUT OF 20</div>
                    
                    {/* Status Items */}
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-xs text-gray-600">July 15, 2019</span>
                        </div>
                        <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">Pending</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-xs text-gray-600">July 16, 2019</span>
                        </div>
                        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Confirmed</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <span className="text-xs text-gray-600">July 16, 2019</span>
                        </div>
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Rejected</span>
                      </div>
                    </div>
                  </div>

                  {/* Current Project */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Current Project</span>
                      <span className="text-xs text-gray-500">See All</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Project Name</div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm text-gray-700">Monday.com Redesign</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Project Manager</div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-purple-100 rounded-full"></div>
                          <span className="text-sm text-gray-700">Laura P.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Team Members */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">Status Tracker</span>
                  <span className="text-xs text-gray-500">See All</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">J</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">James Brown</div>
                      <div className="text-xs text-gray-500">Replaced by Arthur T.</div>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-xs font-bold">S</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Sophia Williams</div>
                    </div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">A</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Arthur Taylor</div>
                    </div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
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
