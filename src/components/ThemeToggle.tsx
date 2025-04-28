
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className={`p-3 rounded-full transition-all duration-300 z-50 ${
        isDark
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
          : 'bg-white/30 text-white hover:bg-white/50'
      }`}
      style={{
        backdropFilter: 'blur(10px)',
      }}
    >
      {isDark ? <Sun size={28} /> : <Moon size={28} />}
    </button>
  );
};

export default ThemeToggle;
