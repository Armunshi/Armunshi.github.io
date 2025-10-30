import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';

// Discord Icon Component
const DiscordIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// Animated Background
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 aspect-square bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 aspect-square bg-purple-500/30 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
      <div className="absolute top-1/2 left-1/2 w-96 aspect-square bg-pink-500/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-[float_linear_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Skill Box
const SkillBox = ({ skill, category }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  return (
    <div
      onClick={() => setIsEnlarged(!isEnlarged)}
      className={`cursor-pointer transition-all duration-300 ${
        isEnlarged ? 'scale-125 z-20' : 'scale-100 z-10'
      } bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 md:p-8 min-h-[150px] flex flex-col justify-center hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20`}
    >
      <div className="text-center">
        <div className="text-3xl mb-2">{getCategoryIcon(category)}</div>
        <h4 className="text-white font-semibold mb-1">{skill}</h4>
        <p className="text-blue-300 text-xs">{category}</p>
      </div>
    </div>
  );
};

const getCategoryIcon = (category) => {
  const icons = {
    Languages: '💻',
    Frontend: '🎨',
    Backend: '⚙️',
    Database: '🗄️',
    Tools: '🛠️',
    'ML/AI': '🤖',
  };
  return icons[category] || '📦';
};

// Main Component
const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const techStack = [
    { skill: 'Python', category: 'Languages' },
    { skill: 'JavaScript', category: 'Languages' },
    { skill: 'TypeScript', category: 'Languages' },
    { skill: 'Java', category: 'Languages' },
    { skill: 'C/C++', category: 'Languages' },
    { skill: 'HTML/CSS', category: 'Frontend' },
    { skill: 'React.js', category: 'Frontend' },
    { skill: 'Next.js', category: 'Frontend' },
    { skill: 'Tailwind CSS', category: 'Frontend' },
    { skill: 'Node.js', category: 'Backend' },
    { skill: 'Express.js', category: 'Backend' },
    { skill: 'FastAPI', category: 'Backend' },
    { skill: 'MongoDB', category: 'Database' },
    { skill: 'SQL/MariaDB', category: 'Database' },
    { skill: 'TensorFlow', category: 'ML/AI' },
    { skill: 'JWT', category: 'Backend' },
    { skill: 'Git/GitHub', category: 'Tools' },
    { skill: 'Postman', category: 'Tools' },
  ];

  const projects = [
    {
      title: 'Learn Stream',
      description:
        'A full-stack MERN platform enabling students to purchase courses, stream lectures, and track progress. Features JWT authentication, role-based access control, Razorpay payment integration, and real-time progress tracking.',
      github:
        'https://github.com/Armunshi/What-the-Code-Learnstream/tree/abdulrazzaq',
      live: 'https://learnstream.onrender.com/',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RazorPay'],
    },
    {
      title: 'Persona Teacher Chatbot',
      description:
        "An AI-powered chatbot using Google's Gemini API to simulate an interactive teacher persona. Built with FastAPI backend and responsive frontend, deployed for public access with real-time chat capabilities.",
      github: 'https://github.com/Armunshi/genai-cohort',
      live: 'https://flask-to-do-kcw6.onrender.com/',
      tech: ['Python', 'FastAPI', 'Gemini API', 'JavaScript'],
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <AnimatedBackground />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="hidden md:flex items-left gap-8 text-gray-300 font-medium tracking-wide">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative group transition duration-300 hover:text-blue-400"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 hover:bg-blue-500/20 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-[110vh] flex items-center justify-center bg-gray-900"
      >
        <div className="text-center max-w-4xl h-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Abdul Razzaq Munshi
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-4">
            Computer Engineering Student
          </p>
          <p className="text-lg text-gray-300 mb-8">
            VJTI Mumbai | Full Stack Developer | ML Enthusiast
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:scale-105 hover:shadow-xl"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            01. About Me
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-10 md:p-14 shadow-2xl leading-relaxed">
            <p className="text-lg text-gray-300 mb-6">
              Hello! I'm{' '}
              <span className="text-blue-400 font-semibold">Abdul Razzaq</span>, a
              Computer Engineering undergraduate at{' '}
              <span className="text-blue-400">
                Veermata Jijabai Technological Institute (VJTI), Mumbai
              </span>
              . I'm passionate about developing intelligent, practical, and scalable
              software systems that bring innovation to real-world applications.
            </p>

            <p className="text-lg text-gray-300">
              My interests lie at the intersection of{' '}
              <span className="text-purple-400 font-semibold">Machine Learning</span>,{' '}
              <span className="text-purple-400 font-semibold">Web Development</span>, and{' '}
              <span className="text-purple-400 font-semibold">Generative AI</span>,
              driven by a strong enthusiasm for full-stack development. I enjoy crafting
              systems that are not only functional but also efficient, modular, and
              user-centric—blending clean architecture with impactful design.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            02. My Tech Stack
          </h2>
          <p className="text-center text-blue-300 mb-8">
            Click on any skill to enlarge
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {techStack.map((item, index) => (
              <SkillBox key={index} skill={item.skill} category={item.category} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            03. Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 hover:border-blue-400/60 transition-transform hover:scale-105 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-3 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            04. Contact Me
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-10 md:p-14 shadow-2xl leading-relaxed">
            <p className="text-lg text-gray-300 mb-8">
              I'm always open to collaborating on interesting projects or discussing
              ideas. Whether you have a question, proposal, or just want to connect —
              feel free to reach out!
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:abdulrazzaqmunshi1212@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail size={28} />
              </a>
              <a
                href="https://github.com/Armunshi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-razzaq-munshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://discordapp.com/users/abdulrazzaq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <DiscordIcon className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
