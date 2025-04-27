import React from 'react';
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Terminal, 
  Settings, 
  Layout, 
  Cpu,
  Cloud,
  Shield,
  Smartphone,
  GitBranch
} from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    icon?: string;
  }[];
}

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const iconMap = {
  'React': Code,
  'TypeScript': Terminal,
  'Node.js': Settings,
  'HTML/CSS': Layout,
  'JavaScript': Globe,
  'Python': Terminal,
  'SQL': Database,
  'AWS': Cloud,
  'Docker': Cpu,
  'Security': Shield,
  'Mobile': Smartphone,
  'Git': GitBranch,
  'UI/UX': Palette
};

const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <section className={`section-card py-10 px-6 sm:px-8 ${
      isDark ? 'bg-gray-800 text-white' : 'bg-white/90'
    }`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl font-bold mb-8 pb-2 border-b ${
          isDark ? 'text-violet-400 border-gray-700' : 'text-gradient border-gradient'
        }`}>
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            category.skills.map((skill, index) => {
              const IconComponent = iconMap[skill.name as keyof typeof iconMap] || Code;
              return (
                <div
                  key={`${category.category}-${skill.name}`}
                  className={`group p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-white/50 hover:bg-white/70 backdrop-blur-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-all duration-300 group-hover:scale-110 ${
                      isDark ? 'bg-violet-500/20 text-violet-400' : 'bg-gradient-primary text-white'
                    }`}>
                      <IconComponent size={24} />
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </div>
              );
            })
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;