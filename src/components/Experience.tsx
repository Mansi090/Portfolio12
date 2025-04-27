import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
  companyLogo?: string;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section className="section-card py-10 px-6 sm:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gradient mb-8 pb-2 border-b border-gradient">
          Work Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="relative pl-8 pr-2 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-400 transform -translate-x-1/2"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
              
              <div className="flex flex-col md:flex-row gap-6">
                {exp.companyLogo && (
                  <div className="flex-shrink-0 hidden md:block">
                    <div className="relative w-20 h-20">
                      <div className="absolute inset-0 bg-blue-100 rounded-lg rotate-3 transform group-hover:rotate-6 transition-transform"></div>
                      <img
                        src={exp.companyLogo}
                        alt={`${exp.company} logo`}
                        className="relative w-20 h-20 object-contain rounded-lg bg-white p-2 shadow-md group-hover:shadow-lg transition-all"
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {exp.title} <span className="text-gradient">@ {exp.company}</span>
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-2 md:mt-0">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-blue-500" />
                        <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        <MapPin size={16} className="text-blue-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed text-lg">{item}</li>
                    ))}
                  </ul>
                  
                  {exp.technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full hover:bg-blue-100 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;