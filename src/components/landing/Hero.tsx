import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Supercharge Your</span>
              <span className="block text-[#2ec0cd]">Lead Management</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              AI-powered platform for building, cleaning, and managing business leads. Transform your data into actionable insights with real-time validation and enhancement.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <div className="space-x-4">
                <Link to="/login" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2ec0cd] hover:bg-opacity-90">
                  Start Free Trial
                </Link>
                <a href="#demo" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Watch Demo
                </a>
              </div>
              <p className="mt-3 text-sm text-gray-500">No credit card required. 14-day free trial.</p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img className="w-full" src="https://dms.mydukaan.io/original/webp/media/f800896f-20db-4eb6-89be-01995082b705.png" alt="Dashboard Preview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;