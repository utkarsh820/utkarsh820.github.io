import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Brain, 
  Terminal, 
  Award, 
  BookOpen,
  Cpu,
  Menu,
  X,
  Download,
  ChevronRight,
  Globe
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const personalInfo = {
    name: "Utkarsh Pandey",
    title: "Data Scientist | ML Engineer | Generative AI Enthusiast",
    location: "Khopoli, India",
    email: "utkarsh.research@proton.me",
    phone: "+91 8830074491",
    github: "https://github.com/utkarsh820",
    linkedin: "https://linkedin.com/in/xixama",
    kaggle: "https://kaggle.com/xixama"
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 cursor-pointer font-bold text-xl text-teal-400 tracking-tighter" onClick={() => scrollToSection('home')}>
              UP<span className="text-slate-100">.dev</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Achievements'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.toLowerCase() 
                        ? 'text-teal-400 bg-slate-800' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Achievements'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left space-y-6 animate-fadeIn">
          <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            🚀 Kaggle Expert
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">{personalInfo.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl">
            {personalInfo.title}
          </p>
          <p className="text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            Building scalable ML pipelines, fine-tuning LLMs, and bridging the gap between research and production. 
            Based in {personalInfo.location}.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-teal-400 transition-colors border border-slate-700">
              <Github size={22} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-teal-400 transition-colors border border-slate-700">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-teal-400 transition-colors border border-slate-700">
              <Mail size={22} />
            </a>
            <a href={personalInfo.kaggle} target="_blank" rel="noreferrer" className="px-5 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-teal-500/20 transition-all flex items-center gap-2">
              <Globe size={18} /> Kaggle Profile
            </a>
          </div>
        </div>
        
        {/* Abstract Tech Visual */}
        <div className="flex-1 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 blur-3xl rounded-full opacity-30 animate-pulse"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="grid grid-cols-2 gap-4 p-6">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center">
                <Brain className="w-8 h-8 mx-auto text-purple-400 mb-2" />
                <span className="text-xs text-slate-400">Deep Learning</span>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center">
                <Database className="w-8 h-8 mx-auto text-emerald-400 mb-2" />
                <span className="text-xs text-slate-400">MLOps</span>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center">
                <Code2 className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                <span className="text-xs text-slate-400">Python/SQL</span>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center">
                <Terminal className="w-8 h-8 mx-auto text-orange-400 mb-2" />
                <span className="text-xs text-slate-400">Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <BookOpen className="text-teal-400" /> About Me
          </h2>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl leading-relaxed text-lg text-slate-300">
            <p className="mb-6">
              I am a <span className="text-teal-400 font-semibold">Data Science and Machine Learning practitioner</span> with hands-on experience in deep learning, computer vision, NLP, and predictive modeling. My approach combines rigorous research with practical engineering, focusing on building, evaluating, and deploying ML models using modern MLOps practices like MLflow, Docker, and DVC.
            </p>
            <p className="mb-6">
              With an <span className="text-teal-400 font-semibold">MBA in Data Science (Deep Learning Specialization)</span> from Amity University, I bridge the gap between business logic and technical implementation. I am particularly passionate about <span className="text-teal-400">Generative AI</span> and applying research-oriented techniques to solve real-world data problems.
            </p>
            <p>
              Previously, I worked in the VFX industry as a Render Wrangler, optimizing pipelines for blockbuster films. This unique background gave me a deep appreciation for high-performance computing and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Terminal className="text-teal-400" /> Professional Experience
        </h2>
        <div className="space-y-8">
          
          {/* Role 1 */}
          <div className="relative pl-8 md:pl-0 group">
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-700 -translate-x-1/2"></div>
            
            <div className="md:flex items-center justify-between gap-10">
              <div className="md:w-1/2 md:text-right mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-white">Independent Data Science Practitioner</h3>
                <p className="text-teal-400 font-medium">Freelance / Self-Directed</p>
                <p className="text-slate-500 text-sm mt-1">Aug 2024 – Present | Navi Mumbai, MH</p>
              </div>
              
              <div className="hidden md:block absolute left-[50%] top-6 w-4 h-4 bg-teal-500 rounded-full border-4 border-slate-900 -translate-x-1/2 z-10 shadow-lg shadow-teal-500/50"></div>
              
              <div className="md:w-1/2">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors">
                  <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-teal-500">
                    <li>Designed and implemented ML pipelines for NLP, Computer Vision, and predictive modeling.</li>
                    <li>Built deep learning models using CNNs and Transformers; applied XAI (SHAP) for interpretability.</li>
                    <li>Developed reproducible workflows using MLflow, Docker, and DVC.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Role 2 */}
          <div className="relative pl-8 md:pl-0 group">
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-700 -translate-x-1/2"></div>
            
            <div className="md:flex items-center justify-between gap-10 flex-row-reverse">
              <div className="md:w-1/2 text-left mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-white">Junior Render Wrangler</h3>
                <p className="text-teal-400 font-medium">Phantom FX</p>
                <p className="text-slate-500 text-sm mt-1">Nov 2023 – Aug 2024 | Goregaon, MH</p>
              </div>
              
              <div className="hidden md:block absolute left-[50%] top-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 -translate-x-1/2 z-10"></div>
              
              <div className="md:w-1/2">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                  <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-purple-500">
                    <li>Automated render-time estimation using Python, improving accuracy by 5%.</li>
                    <li>Reduced render failures by 20% through real-time monitoring scripts.</li>
                    <li>Collaborated with production and data teams to enhance automation pipelines.</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <p className="text-sm text-slate-400 italic">Credits: Kalki 2898 AD, Crew, Ayalaan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Cpu className="text-teal-400" /> Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden hover:shadow-2xl hover:shadow-teal-500/10 transition-all group flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">MentoPred</h3>
                  <Award className="text-yellow-500" size={20} />
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  Engineered a classification system for mental health prediction achieving 0.90 ROC-AUC and 83% accuracy.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'CatBoost', 'Optuna', 'Streamlit', 'MLflow'].map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-teal-300 border border-slate-700">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-slate-800 border-t border-slate-700 flex justify-between items-center">
                <span className="text-xs text-slate-500">Oct 2025</span>
                <a href="#" className="text-sm font-medium text-teal-400 hover:text-teal-300 flex items-center gap-1">View Project <ChevronRight size={14} /></a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden hover:shadow-2xl hover:shadow-teal-500/10 transition-all group flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">Smart Customer Segmentation</h3>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  End-to-end clustering pipeline using K-Means and DBSCAN. Integrated MongoDB and Backblaze B2 for scalable storage in containerized environments.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'MongoDB', 'Docker', 'Backblaze B2'].map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-blue-300 border border-slate-700">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-slate-800 border-t border-slate-700 flex justify-between items-center">
                <span className="text-xs text-slate-500">Nov 2025</span>
                <a href="#" className="text-sm font-medium text-teal-400 hover:text-teal-300 flex items-center gap-1">View Project <ChevronRight size={14} /></a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden hover:shadow-2xl hover:shadow-teal-500/10 transition-all group flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">dshelpertool</h3>
                  <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">PyPI</span>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  Published Python library for EDA automation and reporting. Implemented CI/CD pipelines with GitHub Actions for automated PyPI deployment.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'GitHub Actions', 'CI/CD', 'PyPI'].map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-purple-300 border border-slate-700">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-slate-800 border-t border-slate-700 flex justify-between items-center">
                <span className="text-xs text-slate-500">Jun 2025</span>
                <a href="#" className="text-sm font-medium text-teal-400 hover:text-teal-300 flex items-center gap-1">View Library <ChevronRight size={14} /></a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden hover:shadow-2xl hover:shadow-teal-500/10 transition-all group flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">ViT Experiment</h3>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  Fine-tuned Vision Transformers (ViT) on custom datasets using transfer learning. Visualized learned representations for interpretability.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['PyTorch', 'Google Colab', 'Computer Vision'].map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-pink-300 border border-slate-700">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-slate-800 border-t border-slate-700 flex justify-between items-center">
                <span className="text-xs text-slate-500">Oct 2025 - Present</span>
                <a href="#" className="text-sm font-medium text-teal-400 hover:text-teal-300 flex items-center gap-1">View Code <ChevronRight size={14} /></a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Code2 className="text-teal-400" /> Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            
            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-3">Programming & Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL (MySQL)', 'Julia', 'MongoDB', 'PostgreSQL'].map(skill => (
                  <span key={skill} className="px-3 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700 hover:border-teal-500 hover:text-teal-400 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-3">Machine Learning & Deep Learning</h3>
              <div className="flex flex-wrap gap-2">
                {['CNNs', 'Transformers', 'NLP', 'Computer Vision', 'Supervised Learning', 'Unsupervised Learning'].map(skill => (
                  <span key={skill} className="px-3 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700 hover:border-teal-500 hover:text-teal-400 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-3">Cloud & Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS (Basic)', 'Backblaze B2', 'Google Colab', 'MongoDB'].map(skill => (
                  <span key={skill} className="px-3 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700 hover:border-teal-500 hover:text-teal-400 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'Scikit-learn', 'Hugging Face', 'XGBoost', 'LightGBM', 'CatBoost', 'Optuna', 'MLflow', 'SHAP', 'Pandas', 'NumPy'].map(skill => (
                  <span key={skill} className="px-3 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700 hover:border-teal-500 hover:text-teal-400 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-3">MLOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'DVC', 'Git', 'GitHub Actions', 'Conda', 'Poetry', 'VS Code', 'JupyterLab'].map(skill => (
                  <span key={skill} className="px-3 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700 hover:border-teal-500 hover:text-teal-400 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Analytical Thinking', 'Problem Solving', 'Collaboration', 'Research Mindset'].map(skill => (
                  <span key={skill} className="px-3 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700 hover:border-teal-500 hover:text-teal-400 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section id="achievements" className="py-20 bg-slate-800/30 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Award className="text-teal-400" /> Achievements & Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                 🏆 Notable Achievements
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="min-w-2 h-2 mt-2 rounded-full bg-yellow-500"></div>
                  <div>
                    <span className="text-slate-200 font-medium">Kaggle Expert</span>
                    <p className="text-sm text-slate-400">Achieved expert tier on Kaggle platform.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-2 h-2 mt-2 rounded-full bg-yellow-500"></div>
                  <div>
                    <span className="text-slate-200 font-medium">Winner of 3+ Hackathons</span>
                    <p className="text-sm text-slate-400">Conducted by Physics Wallah (PW).</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-2 h-2 mt-2 rounded-full bg-yellow-500"></div>
                  <div>
                    <span className="text-slate-200 font-medium">VFX Film Credits</span>
                    <p className="text-sm text-slate-400">Technical contribution credits in <span className="italic text-teal-400">Kalki 2898 AD</span>, <span className="italic text-teal-400">Crew</span>, and <span className="italic text-teal-400">Ayalaan</span>.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                 📜 Key Certifications
              </h3>
              <div className="space-y-3 h-64 overflow-y-auto pr-2 custom-scrollbar">
                {[
                  { name: "Introduction to Statistics", issuer: "Stanford University", year: "2024" },
                  { name: "Data Science with Generative AI", issuer: "Physics Wallah", year: "2025" },
                  { name: "SQL Associate", issuer: "DataCamp", year: "2025" },
                  { name: "Data Scientist Associate", issuer: "DataCamp", year: "2025" },
                  { name: "Python Data Associate", issuer: "DataCamp", year: "2024" },
                  { name: "Data Analysis with Python", issuer: "IBM Skills Network", year: "2024" }
                ].map((cert, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <div>
                      <div className="text-sm font-medium text-slate-200">{cert.name}</div>
                      <div className="text-xs text-slate-500">{cert.issuer}</div>
                    </div>
                    <span className="text-xs text-teal-500 font-mono bg-teal-500/10 px-2 py-1 rounded">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Open to collaborations on Generative AI, MLOps, and Data Science projects.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <a href={personalInfo.linkedin} className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={personalInfo.github} className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
          </div>
          
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Utkarsh Pandey. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e293b; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155; 
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569; 
        }
      `}</style>
    </div>
  );
};

export default Portfolio;