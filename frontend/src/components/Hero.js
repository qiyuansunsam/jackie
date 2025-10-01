import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
              <img src="/profile.jpg" alt="Jackie Yang" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
          Jackie Yang
        </h1>
        
        <p className="text-xl md:text-2xl text-cyan-400 mb-2">
          BCom | Accounting & Finance Student
        </p>
        
        <p className="text-lg text-gray-300 mb-8">
          University of Auckland | CFA Level I Candidate
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.linkedin.com/in/jackie-yang-03aa1726a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:ysy020625@gmail.com"
            className="text-white hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="tel:0273323518"
            className="text-white hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <FaPhone size={30} />
          </a>
        </div>
        
        <div className="flex justify-center space-x-4">
          <a
            href="#about"
            className="px-8 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-all transform hover:scale-105 font-semibold"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 font-semibold ml-8"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default Hero;