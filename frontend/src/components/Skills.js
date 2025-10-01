import React from 'react';
import { FaChartLine, FaLanguage, FaUserTie, FaFutbol } from 'react-icons/fa';

const Skills = () => {
  const technicalSkills = [
    { name: "Financial Accounting", level: 90 },
    { name: "Management", level: 85 },
    { name: "Google Forms", level: 80 },
    { name: "Statistics & Modeling", level: 85 },
    { name: "Economics", level: 88 },
    { name: "Budgeting & Financial Analysis", level: 87 }
  ];

  const languages = [
    { name: "Mandarin", level: "Native/Bilingual", percentage: 100 },
    { name: "English", level: "Professional Working", percentage: 85 },
    { name: "Cantonese", level: "Limited Working", percentage: 50 },
    { name: "Spanish", level: "Elementary", percentage: 25 }
  ];

  const softSkills = [
    "Leadership & Team Management",
    "Event Organization",
    "Public Speaking & Debate",
    "Cross-cultural Communication",
    "Problem Solving",
    "Time Management"
  ];

  const interests = [
    "Football (Tactics & Formations)",
    "Badminton",
    "Table Tennis",
    "Debate & Public Speaking",
    "Financial Markets",
    "Cultural Exchange"
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Skills & Expertise
      </h2>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
          <div className="flex items-center mb-6">
            <FaChartLine className="text-cyan-400 text-2xl mr-3" />
            <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
          </div>
          <div className="space-y-4">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-200">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
          <div className="flex items-center mb-6">
            <FaLanguage className="text-cyan-400 text-2xl mr-3" />
            <h3 className="text-2xl font-semibold text-white">Languages</h3>
          </div>
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-200">{lang.name}</span>
                  <span className="text-cyan-400 text-sm">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
          <div className="flex items-center mb-6">
            <FaUserTie className="text-cyan-400 text-2xl mr-3" />
            <h3 className="text-2xl font-semibold text-white">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-gray-200 rounded-full border border-cyan-500/30 hover:border-cyan-400 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
          <div className="flex items-center mb-6">
            <FaFutbol className="text-cyan-400 text-2xl mr-3" />
            <h3 className="text-2xl font-semibold text-white">Interests</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-gray-200 rounded-full border border-purple-500/30 hover:border-purple-400 transition-all"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-xl p-6 border border-yellow-500/30">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <p className="text-yellow-400 font-semibold">CFA Level I Candidate</p>
              <p className="text-gray-300 text-sm">Chartered Financial Analyst Program</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <p className="text-yellow-400 font-semibold">High Achiever Scholarship</p>
              <p className="text-gray-300 text-sm">University of Auckland Foundation Pathway</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;