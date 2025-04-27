import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
  schoolLogo?: string;
}

interface EducationProps {
  educationItems: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educationItems }) => {
  const isDark = useThemeStore((state) => state.isDark); // Get theme state

  return (
    <section
      className={`section-card py-10 px-6 sm:px-8 transition-all duration-300 ${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto">
        <h2
          className={`text-3xl font-bold mb-8 pb-2 border-b ${
            isDark ? 'border-white' : 'border-gradient'
          } text-gradient`}
        >
          Education
        </h2>

        <div className="space-y-10">
          {educationItems.map((edu, index) => (
            <div
              key={edu.id}
              className="flex flex-col md:flex-row gap-6 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {edu.schoolLogo && (
                <div className="flex-shrink-0 hidden md:block">
                  <div className="relative w-24 h-24">
                    <div
                      className={`absolute inset-0 ${
                        isDark ? 'bg-blue-800' : 'bg-blue-100'
                      } rounded-lg rotate-3 transform group-hover:rotate-6 transition-transform`}
                    ></div>
                    <img
                      src={edu.schoolLogo}
                      alt={`${edu.school} logo`}
                      className="relative w-24 h-24 object-contain rounded-lg bg-white p-3 shadow-md"
                    />
                  </div>
                </div>
              )}

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <h3
                    className={`text-2xl font-bold flex items-center gap-3 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        isDark ? 'bg-blue-600' : 'bg-blue-100'
                      }`}
                    >
                      <GraduationCap
                        size={24}
                        className={isDark ? 'text-white' : 'text-blue-600'}
                      />
                    </div>
                    {edu.school}
                  </h3>

                  <div
                    className={`flex items-center gap-1.5 text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    } mt-2 md:mt-0`}
                  >
                    <Calendar size={16} className="text-blue-500" />
                    <span>{edu.startDate} - {edu.endDate || 'Present'}</span>
                  </div>
                </div>

                <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p className="text-xl font-medium">
                    {edu.degree} in {edu.fieldOfStudy}
                  </p>
                  <p className="text-gray-600">{edu.location}</p>

                  {edu.gpa && (
                    <p className="inline-block mt-2 px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                      GPA: {edu.gpa}
                    </p>
                  )}

                  {edu.description && (
                    <p className="mt-3 text-lg">
                      {edu.description}
                    </p>
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

export default Education;
