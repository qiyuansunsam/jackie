import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import MessageBoard from './components/MessageBoard';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isHostMode, setIsHostMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check for host mode via URL parameter or localStorage
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('host') === 'true') {
      setIsHostMode(true);
      localStorage.setItem('isHost', 'true');
    } else {
      const savedHostMode = localStorage.getItem('isHost') === 'true';
      setIsHostMode(savedHostMode);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation activeSection={activeSection} />
      
      <main>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        
        <section id="experience" className="min-h-screen py-20">
          <Experience />
        </section>
        
        <section id="education" className="min-h-screen py-20">
          <Education />
        </section>
        
        <section id="skills" className="min-h-screen py-20">
          <Skills />
        </section>
        
        <section id="contact" className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Get in Touch
            </h2>
            <MessageBoard isHostMode={isHostMode} />
          </div>
        </section>
      </main>
      
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Jackie Yang. All rights reserved.</p>
          <p className="text-sm text-gray-400">
            Built with React, Tailwind CSS, and Flask
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;