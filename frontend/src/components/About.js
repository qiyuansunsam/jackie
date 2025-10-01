import React from 'react';
import { FaGraduationCap, FaGlobeAsia, FaTrophy, FaUsers } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaGlobeAsia />,
      title: "International Experience",
      description: "Arrived in New Zealand in 2019, adapted from introvert to extrovert"
    },
    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      description: "High Achiever Scholarship recipient from University of Auckland"
    },
    {
      icon: <FaTrophy />,
      title: "Leadership",
      description: "Vice President of Auckland University Mandarin Debating Society"
    },
    {
      icon: <FaUsers />,
      title: "Team Player",
      description: "Active in sports including badminton, football, and table tennis"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        About Me
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Kia ora! My name is Jackie Yang, an international student who has completed a Bachelor of Commerce degree 
            at the University of Auckland, double majoring in Accounting and Finance.
          </p>
          
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            My journey in New Zealand began in July 2019 at Westlake Boys High School. Despite the challenges of 
            COVID-19, which forced me to leave after just half a year, that time transformed me from an introvert 
            to an extrovert and built my confidence. I'm grateful to Westlake for providing a platform to explore 
            sports, music, culture, and drama.
          </p>
          
          <p className="text-lg text-gray-200 leading-relaxed">
            After completing Foundation Studies at the University of Auckland with excellent grades, I earned a 
            High Achiever scholarship. My university experience has given me a comprehensive view of the business 
            world, spanning economics, accounting, finance, management, marketing, operations, and digital systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-xl p-6 hover:transform hover:scale-105 transition-all"
            >
              <div className="text-cyan-400 text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;