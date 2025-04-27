import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import ThemeToggle from './components/ThemeToggle';
import { useThemeStore } from './store/themeStore';

import { 
  personalInfo, 
  education, 
  skillCategories, 
  projects, 
  contactInfo,
  certificates
} from './data/resumeData';

function App() {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div className={`min-h-screen transition-all duration-500 ease-in-out ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-violet-500 to-fuchsia-500'
    }`}>
      <ThemeToggle />
      <Navbar />
      <Header 
        name={personalInfo.name}
        title={personalInfo.title}
        location={personalInfo.location}
        email={personalInfo.email}
        phone={personalInfo.phone}
        github={personalInfo.github}
        linkedin={personalInfo.linkedin}
        profileImage={personalInfo.profileImage}
      />
      
      <main className="container mx-auto py-16 px-6 sm:px-8 lg:px-10 space-y-12">
        <div id="about">
          <About summary={personalInfo.summary} />
        </div>
        <div id="education">
          <Education educationItems={education} />
        </div>
        <div id="certificates">
          <Certificates certificates={certificates} />
        </div>
        <div id="skills">
          <Skills skillCategories={skillCategories} />
        </div>
        <div id="projects">
          <Projects projects={projects} />
        </div>
        <div id="contact">
          <Contact 
            email={contactInfo.email}
            linkedin={contactInfo.linkedin}
            github={contactInfo.github}
            twitter={contactInfo.twitter}
          />
        </div>
      </main>
      
      <footer className={`py-8 mt-12 ${isDark ? 'bg-gray-800' : 'bg-white/10 backdrop-blur-lg'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-light">&copy; {new Date().getFullYear()} {personalInfo.name}</p>
          <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-white/80'}`}>
            Crafted by mansi
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
