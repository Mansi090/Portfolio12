import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  badgeUrl?: string;
}

interface CertificatesProps {
  certificates: Certificate[];
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <section id="certificates" className={`section-card py-10 px-6 sm:px-8 ${
      isDark ? 'bg-gray-800 text-white' : 'bg-white/90'
    }`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl font-bold mb-8 pb-2 border-b ${
          isDark ? 'text-violet-400 border-gray-700' : 'text-gradient border-gradient'
        }`}>
          Certificates & Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`group p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                isDark ? 'bg-gray-700' : 'bg-white/50 backdrop-blur-sm'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${
                  isDark ? 'bg-violet-500/20' : 'bg-gradient-primary'
                }`}>
                  <Award size={24} className={isDark ? 'text-violet-400' : 'text-white'} />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1.5 text-sm">
                      <Calendar size={14} className={isDark ? 'text-violet-400' : 'text-primary-light'} />
                      <span>{cert.date}</span>
                    </div>
                    
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-sm hover:underline ${
                          isDark ? 'text-violet-400' : 'text-primary-light'
                        }`}
                      >
                        <ExternalLink size={14} />
                        <span>View Certificate</span>
                      </a>
                    )}
                  </div>
                </div>
                
                {cert.badgeUrl && (
                  <img
                    src={cert.badgeUrl}
                    alt={`${cert.name} badge`}
                    className="w-16 h-16 object-contain"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;