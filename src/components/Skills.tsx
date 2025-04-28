import React from 'react';
import { 
  Rocket, Code2, Server, LayoutTemplate, Palette, Globe2, FlaskConical, Database,
  DatabaseBackup, Cloud, CpuIcon, ShieldCheck, Smartphone, GitBranch, Paintbrush,
  Figma, Bug, Sparkles, TerminalSquare, Code, Terminal, Network,
  Webhook, GitPullRequest, Box, Cpu, Shield, DatabaseZap, Binary, CloudCog
} from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { motion } from 'framer-motion';

export interface SkillCategory {
  category: string;
  skills: { name: string }[]; 
}

interface SkillsProps {
  skillCategories: SkillCategory[];
}

// Static pink gradient for uniform icon backgrounds
const hoverGradient = 'from-purple-500 to-pink-500';

const colorGroups = {
  frontend: { gradient: 'from-purple-500 to-pink-500', glow: 'rgba(168,85,247,0.3)' },
  backend: { gradient: 'from-blue-500 to-cyan-500', glow: 'rgba(59,130,246,0.3)' },
  database: { gradient: 'from-emerald-500 to-teal-500', glow: 'rgba(16,185,129,0.3)' },
  devops: { gradient: 'from-orange-500 to-amber-500', glow: 'rgba(249,115,22,0.3)' },
  design: { gradient: 'from-rose-500 to-red-500', glow: 'rgba(244,63,94,0.3)' },
  mobile: { gradient: 'from-violet-500 to-indigo-500', glow: 'rgba(139,92,246,0.3)' },
  other: { gradient: 'from-gray-500 to-slate-500', glow: 'rgba(100,116,139,0.3)' }
};

// Icon mapping remains grouped for glow effects
const iconMap: Record<string, { icon: any; group: keyof typeof colorGroups }> = {
  'React': { icon: Rocket, group: 'frontend' },
  'TypeScript': { icon: Code2, group: 'frontend' },
  'JavaScript': { icon: Globe2, group: 'frontend' },
  'HTML': { icon: LayoutTemplate, group: 'frontend' },
  'CSS': { icon: Palette, group: 'frontend' },
  'Node.js': { icon: Server, group: 'backend' },
  'Python': { icon: FlaskConical, group: 'backend' },
  'Java': { icon: Code, group: 'backend' },
  'C++': { icon: TerminalSquare, group: 'backend' },
  'REST API': { icon: Webhook, group: 'backend' },
  'GraphQL': { icon: GitPullRequest, group: 'backend' },
  'SQL': { icon: Database, group: 'database' },
  'PostgreSQL': { icon: DatabaseBackup, group: 'database' },
  'MongoDB': { icon: DatabaseZap, group: 'database' },
  'AWS': { icon: Cloud, group: 'devops' },
  'Docker': { icon: CpuIcon, group: 'devops' },
  'Kubernetes': { icon: CloudCog, group: 'devops' },
  'Linux': { icon: Terminal, group: 'devops' },
  'UI/UX': { icon: Paintbrush, group: 'design' },
  'Figma': { icon: Figma, group: 'design' },
  'Animation': { icon: Sparkles, group: 'design' },
  'React Native': { icon: Smartphone, group: 'mobile' },
  'Flutter': { icon: Box, group: 'mobile' },
  'Security': { icon: ShieldCheck, group: 'other' },
  'Git': { icon: GitBranch, group: 'other' },
  'Testing': { icon: Bug, group: 'other' },
  'Algorithms': { icon: Binary, group: 'other' },
  'Networking': { icon: Network, group: 'other' }
};

const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <section className={`section-card py-12 px-4 sm:px-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {skillCategories.map((category) =>
            category.skills.map((skill, index) => {
              const { icon: IconComponent, group } = iconMap[skill.name] || { icon: Code2, group: 'other' };
              const glow = colorGroups[group].glow;

              return (
                <motion.div
                  key={`${category.category}-${skill.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className={`group relative p-5 rounded-2xl transition-all duration-300 overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white border border-gray-100'}`}
                  style={{ boxShadow: `0 10px 25px -5px ${glow}` }}
                >
                  {/* Uniform pink overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 from-purple-500 to-pink-500" />

                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      className={`p-4 rounded-xl mb-3 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}
                    >
                      {/* Apply pink gradient background for all icons */}
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${hoverGradient} text-white`}>
                        <IconComponent size={28} />
                      </div>
                    </motion.div>

                    <span className={`font-medium text-center text-lg ${isDark ? 'text-gray-100' : 'text-gray-800'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-500 to-pink-500`}>
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
