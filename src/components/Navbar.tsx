
import { useThemeStore } from '../store/themeStore';
import { BookOpen, Briefcase, Code, Mail, GraduationCap, Award } from 'lucide-react';
import ThemeToggle from './ThemeToggle'; // Import your toggle button

const Navbar: React.FC = () => {
  const isDark = useThemeStore((state) => state.isDark);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 ${
      isDark ? 'bg-gray-800/80' : 'bg-white/10'
    } backdrop-blur-lg`}>
      <div className="container mx-auto px-4 relative">
        
        {/* Theme Toggle floating at top-right */}
        <div className="absolute top- right-4">
          <ThemeToggle />
        </div>

        {/* Centered Nav items */}
        <ul className="flex justify-center items-center gap-6 text-sm">
          {[
            { id: 'about', label: 'About', icon: BookOpen },
            { id: 'education', label: 'Education', icon: GraduationCap },
            { id: 'certificates', label: 'Certificates', icon: Award },
            { id: 'skills', label: 'Skills', icon: Code },
            { id: 'projects', label: 'Projects', icon: Briefcase },
            { id: 'contact', label: 'Contact', icon: Mail },
          ].map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'hover:bg-white/20 text-white'
                }`}
              >
                <Icon size={16} className="animate-bounce hover:animate-none" />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
