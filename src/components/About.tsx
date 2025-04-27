import React from 'react';
import { useThemeStore } from '../store/themeStore';

interface AboutProps {
  summary: string;
}

const About: React.FC<AboutProps> = ({ summary }) => {
  const isDark = useThemeStore((state) => state.isDark); // Get theme state

  return (
    <section
      className={`section-card py-10 px-6 sm:px-8 transition-all duration-300 ${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto">
        <h2
          className={`text-3xl font-bold mb-6 pb-2 border-b ${
            isDark ? 'border-white' : 'border-gradient'
          } text-gradient`}
        >
          About Me
        </h2>
        <p className="leading-relaxed text-lg md:text-xl font-light">
          {summary}
        </p>
      </div>
    </section>
  );
};

export default About;
