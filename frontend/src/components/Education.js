import React from 'react';
import { FaGraduationCap, FaTrophy, FaCalendar } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Commerce",
      major: "Accounting and Finance",
      institution: "The University of Auckland",
      period: "July 2022 - July 2025",
      achievements: [
        "Double major in Accounting and Finance",
        "High Achiever Scholarship recipient",
        "CFA Level I Candidate"
      ]
    },
    {
      degree: "Foundation Studies",
      major: "Economics, Accounting, Statistics and Modeling",
      institution: "The University of Auckland (UP Education)",
      period: "July 2021 - June 2022",
      achievements: [
        "Excellent grades leading to High Achiever Scholarship",
        "Comprehensive preparation for BCom degree",
        "Strong foundation in quantitative subjects"
      ]
    },
    {
      degree: "High School Diploma",
      major: "Economics Focus",
      institution: "Westlake Boys High School",
      period: "July 2019 - March 2020",
      achievements: [
        "Participated in various extracurricular activities",
        "Developed leadership and social skills",
        "Transitioned from introvert to extrovert"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Education
      </h2>
      
      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <div
            key={index}
            className="mb-8 transform hover:scale-105 transition-all"
          >
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-xl p-8 border border-cyan-500/30">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-cyan-400">{edu.major}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-200 mb-2">{edu.institution}</p>
              
              <div className="flex items-center text-gray-300 mb-4">
                <FaCalendar className="mr-2" />
                {edu.period}
              </div>
              
              <div className="space-y-2">
                {edu.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start">
                    <FaTrophy className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-200">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;