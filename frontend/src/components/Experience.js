import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Assistant Accountant",
      company: "CNSST Foundation",
      period: "September 2025 - Present",
      location: "Auckland, New Zealand",
      responsibilities: [
        "Reconciling center receipts with bank statements",
        "Reporting discrepancies and outcomes to the Accounting Manager",
        "Managing financial documentation and records"
      ]
    },
    {
      title: "Vice President",
      company: "Auckland University Mandarin Debating Society",
      period: "October 2024 - Present",
      location: "Auckland, New Zealand",
      responsibilities: [
        "Leading strategic initiatives and organizational development",
        "Overseeing society operations and member engagement",
        "Representing the society in university events"
      ]
    },
    {
      title: "Secretary General",
      company: "Auckland University Mandarin Debating Society",
      period: "October 2023 - October 2024",
      location: "Auckland, New Zealand",
      responsibilities: [
        "Led personnel management: oversaw director attendance, event staffing, membership records",
        "Handled secretarial duties: managed meeting minutes and classroom bookings",
        "Directed financial operations: developed reimbursement procedures, prepared budgets",
        "Applied for University grants and produced annual financial reports"
      ]
    },
    {
      title: "Secretary of General Administration",
      company: "Auckland University Mandarin Debating Society",
      period: "December 2022 - October 2023",
      location: "Auckland, New Zealand",
      responsibilities: [
        "Organized various activities including welcome parties and debate competitions",
        "Successfully organized IDP junior debate competition during mid-term break",
        "Coordinated cross-functional teams for event execution"
      ]
    },
    {
      title: "Restaurant Crew Member",
      company: "Mr Katsu",
      period: "December 2023 - March 2025",
      location: "Auckland, New Zealand",
      responsibilities: [
        "Provided excellent customer service in fast-paced environment",
        "Collaborated with team members to ensure smooth operations",
        "Handled cash transactions and maintained cleanliness standards"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Professional Experience
      </h2>
      
      <div className="max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-8 relative"
          >
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-cyan-500/30"></div>
            )}
            
            <div className="flex items-start">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <FaBriefcase className="text-white text-xl" />
              </div>
              
              <div className="ml-6 flex-1">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all">
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-cyan-400 text-lg mb-3">{exp.company}</p>
                  
                  <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-4">
                    <div className="flex items-center">
                      <FaCalendar className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-200 flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;