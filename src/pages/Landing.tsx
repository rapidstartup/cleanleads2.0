import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Send, Search, Sparkles, BarChart } from 'lucide-react';
import Hero from '../components/landing/Hero';
import Testimonials from '../components/landing/Testimonials';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-[#2ec0cd]">cleanLeads</Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#2ec0cd] transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-[#2ec0cd] transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-[#2ec0cd] transition-colors">About</a>
              <Link to="/login" className="text-gray-600 hover:text-[#2ec0cd] transition-colors">Login</Link>
              <Link to="/login" className="bg-[#2ec0cd] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <Hero />
      </nav>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Lead Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to build, clean, and manage your business leads with AI-powered intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Enhanced Lead Building',
                description: 'Build targeted lead lists through our AI-powered search interface with real-time data gathering.',
                icon: Search
              },
              {
                title: 'Smart Data Cleaning',
                description: 'Validate and enhance your existing lead lists with AI-powered cleaning and verification.',
                icon: Sparkles
              },
              {
                title: 'Advanced Analytics',
                description: 'Track performance and monitor lead quality with comprehensive analytics.',
                icon: BarChart
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-[#2ec0cd] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#2ec0cd]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Showcase */}
      <section id="analytics_showcase" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Analytics Dashboard</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Make data-driven decisions with comprehensive analytics and real-time insights</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">30-Day User Activity</h3>
                <p className="text-gray-600 mt-1">Track user engagement and platform usage</p>
              </div>
              <div className="p-6">
                <img src="https://placehold.co/600x300?text=Activity+Trends+Chart" alt="User Activity Chart" className="w-full rounded-lg" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Credit Usage Analytics</h3>
                <p className="text-gray-600 mt-1">Monitor resource utilization across operations</p>
              </div>
              <div className="p-6">
                <img src="https://placehold.co/600x300?text=Credit+Usage+Chart" alt="Credit Usage Chart" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />

      {/* Contact CTA */}
      <section id="cta_contact" className="py-20 bg-gradient-to-br from-[#2ec0cd] to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Lead Management?</h2>
              <p className="text-xl mb-8 text-white/90">Join thousands of businesses using cleanLeads to streamline their lead generation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/login" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2ec0cd] font-medium rounded-lg hover:bg-opacity-90 transition-colors">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a href="#demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#2ec0cd] transition-colors">
                  Schedule Demo
                  <CalendarDays className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Sales</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ec0cd] focus:border-transparent" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Company Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ec0cd] focus:border-transparent" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ec0cd] focus:border-transparent" rows={4} placeholder="Tell us about your needs..." />
                </div>
                <button type="submit" className="w-full bg-[#2ec0cd] text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                  Get in Touch
                  <Send className="w-4 h-4 ml-2 inline-block" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="text-2xl font-bold text-white mb-4 block">cleanLeads</Link>
              <p className="text-gray-400 mb-6">AI-powered lead management platform for modern businesses.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#2ec0cd]" aria-label="Twitter">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#2ec0cd]" aria-label="LinkedIn">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#2ec0cd]" aria-label="GitHub">
                  <i className="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li><Link to="/features" className="text-gray-400 hover:text-[#2ec0cd]">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-[#2ec0cd]">Pricing</Link></li>
                <li><Link to="/api" className="text-gray-400 hover:text-[#2ec0cd]">API</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/docs" className="text-gray-400 hover:text-[#2ec0cd]">Documentation</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-[#2ec0cd]">Blog</Link></li>
                <li><Link to="/help" className="text-gray-400 hover:text-[#2ec0cd]">Help Center</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-[#2ec0cd]">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-[#2ec0cd]">Contact</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-[#2ec0cd]">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} cleanLeads. All rights reserved.
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex space-x-6 text-sm text-gray-400">
                  <Link to="/security" className="hover:text-[#2ec0cd]">Security</Link>
                  <Link to="/status" className="hover:text-[#2ec0cd]">Status</Link>
                  <Link to="/cookies" className="hover:text-[#2ec0cd]">Cookie Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;