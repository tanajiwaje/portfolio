import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Linkedin, Download, ChevronDown, 
  Trophy, Briefcase, GraduationCap, Code, Zap, Award,
  ExternalLink, Github, Menu, X, Sun, Moon, Sparkles
} from 'lucide-react';
import { cn } from './lib/utils';
import Splash from './components/Splash';
import AnimatedBackground from './components/AnimatedBackground';

// --- RESUME DATA ---
const RESUME_DATA = {
  basics: {
    name: "Tanaji Waje",
    initials: "TW",
    title: "Full Stack Developer | .Net Core | Angular | C#",
    summary: "I have completed comprehensive training in full-stack web development, gaining proficiency in a wide range of technologies. I successfully completed training in .NET MVC, HTML, CSS, JavaScript, jQuery, Bootstrap, C#, SQL, Web API, and Postman, equipping me with a strong skill set to develop robust and dynamic web applications.",
    location: "Pune District, Maharashtra, India",
    email: "tanajiwaje5@gmail.com",
    phone: "7743974378",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/tanajiwaje", icon: <Linkedin className="w-4 h-4" /> }
    ]
  },
  experience: [
    {
      company: "STW Services LLP",
      role: "Software Developer",
      dates: "November 2023 - Present",
      location: "Pune, Maharashtra, India",
      bullets: [
        "Contributing to the entire software development life cycle.",
        "Developing scalable and performant web applications following best practices and adhering to coding standards.",
        "Collaborating closely with cross-functional teams, effectively communicating project requirements, and delivering high-quality solutions within project timelines."
      ],
      metrics: ["SDLC Expert", "Clean Code", "Agile Teamwork"]
    },
    {
      company: "Ysaas Infotech",
      role: "Full Stack Developer",
      dates: "June 2023 - November 2023",
      location: "Pune, Maharashtra, India",
      bullets: [
        "Specialized in SharePoint, Power Apps, .NET, and CRM.",
        "Designed and implemented responsive user interfaces, integrating backend functionalities, and ensuring seamless user experiences.",
        "Developed scalable and performant web applications using .NET MVC.",
        "Leveraged C# and SQL for database management, ensuring efficient data storage and retrieval.",
        "Developed RESTful APIs using Web API, enabling communication between different layers of the application.",
        "Utilized Postman to test and validate API endpoints, ensuring reliability and functionality."
      ],
      metrics: ["SharePoint", "RESTful APIs", "Database Mgmt"]
    }
  ],
  achievements: [
    {
      title: "Dual Project Delivery",
      context: "Successfully completed two significant projects during internship, contributing to the entire software development life cycle.",
      type: "wins",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Full-Stack Proficiency",
      context: "Gained comprehensive training and proficiency in .NET MVC, HTML, CSS, JavaScript, jQuery, Bootstrap, C#, SQL, Web API, and Postman.",
      type: "metrics",
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Team Collaboration",
      context: "Strengthened problem-solving and teamwork skills through close collaboration with cross-functional teams.",
      type: "leadership",
      icon: <Award className="w-6 h-6 text-purple-500" />
    }
  ],
  skills: [
    { category: "Core Tech", items: [".Net Core", "Angular", "C#", "Python"] },
    { category: "Web Development", items: [".NET MVC", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Web API"] },
    { category: "Database & Tools", items: ["SQL", "Postman", "Neo4j", "SharePoint", "Power Apps", "CRM", "Power Pages"] },
    { category: "Design", items: ["Software Design", "Responsive Design"] }
  ],
  education: [
    {
      institution: "JSPMs Jayawantrao Sawant College of Engineering",
      degree: "Master of Computer Applications - MCA, Computer Science",
      dates: "August 2020 - November 2022",
      location: "Hadapsar, Pune 28"
    },
    {
      institution: "Rayat Shikshan Sanstha's S.M.Joshi College",
      degree: "Bachelor's of Computer Applicaton, Computer Science",
      dates: "June 2017 - April 2020",
      location: "Pune"
    }
  ],
  certifications: [
    "Neo4j Certified Professional"
  ],
  extra: [
    "Eager to contribute skills and knowledge to create innovative web solutions that meet user needs and drive business growth.",
    "Ready to contribute to organization's success and make a meaningful impact through web development capabilities.",
    "Proficient in adhering to coding standards and best practices.",
    "Strong problem-solving and teamwork skills."
  ]
};

// --- COMPONENTS ---

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        className="text-white/50 font-mono text-sm uppercase tracking-widest"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      className="h-1 w-12 bg-blue-500 mt-4"
      initial={{ width: 0 }}
      whileInView={{ width: 48 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    />
  </div>
);

interface ExperienceCardProps {
  exp: typeof RESUME_DATA.experience[0];
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      className="group relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-blue-500/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-start justify-between"
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
            <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">
              {exp.dates}
            </span>
          </div>
          <p className="text-white/60 font-medium mb-4">{exp.company} • {exp.location}</p>
          <div className="flex flex-wrap gap-2">
            {exp.metrics.map((m, i) => (
              <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 text-white/80 rounded-full border border-white/10">
                {m}
              </span>
            ))}
          </div>
        </div>
        <ChevronDown className={cn("w-5 h-5 text-white/40 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6"
          >
            <ul className="space-y-3">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  if (loading) {
    return <Splash onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-blue-500/30">
      <AnimatedBackground />
      
      {/* --- PROGRESS BAR --- */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold tracking-tighter cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-blue-500">T</span>W
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['Experience', 'Achievements', 'Skills', 'Education'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-all"
            >
              Get in Touch
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {['Experience', 'Achievements', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-3xl font-bold text-white text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        
        {/* --- HERO SECTION --- */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6">
              <Sparkles className="w-3 h-3" />
              <span>Available for new opportunities</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
              {RESUME_DATA.basics.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-medium mb-8 max-w-2xl">
              {RESUME_DATA.basics.title}
            </p>
            <p className="text-lg text-white/40 mb-12 max-w-3xl leading-relaxed">
              {RESUME_DATA.basics.summary}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('experience')}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
              >
                View Experience
                <ChevronDown className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm">
                Download Resume
                <Download className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* --- IMPACT STRIP --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {RESUME_DATA.achievements.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-white">{item.title}</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{item.type}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* --- EXPERIENCE --- */}
        <section id="experience" className="mb-32">
          <SectionHeader title="Experience" subtitle="Professional Journey" />
          <div className="max-w-4xl">
            {RESUME_DATA.experience.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </section>

        {/* --- ACHIEVEMENTS --- */}
        <section id="achievements" className="mb-32">
          <SectionHeader title="Achievements" subtitle="Measurable Impact" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESUME_DATA.achievements.map((item, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.context}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- SKILLS --- */}
        <section id="skills" className="mb-32">
          <SectionHeader title="Skills" subtitle="Technical Arsenal" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESUME_DATA.skills.map((skillGroup, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-6">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, j) => (
                    <span key={j} className="px-3 py-1.5 text-xs font-medium bg-white/5 text-white/80 rounded-lg border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- EDUCATION --- */}
        <section id="education" className="mb-32">
          <SectionHeader title="Education" subtitle="Academic Foundation" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESUME_DATA.education.map((edu, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                  <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{edu.dates}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-white/60 font-medium mb-2">{edu.institution}</p>
                <p className="text-white/40 text-sm">{edu.location}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 p-8 rounded-3xl bg-blue-500/5 border border-blue-500/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-500" />
              Certifications
            </h3>
            <div className="flex flex-wrap gap-3">
              {RESUME_DATA.certifications.map((cert, i) => (
                <span key={i} className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20 text-sm font-medium">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* --- ADDITIONAL INFO --- */}
        <section id="more" className="mb-32">
          <SectionHeader title="Additional Info" subtitle="Beyond the Code" />
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RESUME_DATA.extra.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-white/70">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="mb-12">
          <div className="p-12 md:p-24 rounded-[3rem] bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">Let's build something<br />exceptional together.</h2>
              <div className="flex flex-wrap gap-8 mb-12">
                <a href={`mailto:${RESUME_DATA.basics.email}`} className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="font-medium">{RESUME_DATA.basics.email}</span>
                </a>
                <a href={`tel:${RESUME_DATA.basics.phone}`} className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="font-medium">{RESUME_DATA.basics.phone}</span>
                </a>
              </div>
              <div className="flex gap-4">
                {RESUME_DATA.basics.links.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-white text-black font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
          </div>
        </section>

        <footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-sm font-mono uppercase tracking-widest">
          <p>© 2026 {RESUME_DATA.basics.name}</p>
          <div className="flex items-center gap-6">
            <MapPin className="w-4 h-4" />
            <span>{RESUME_DATA.basics.location}</span>
          </div>
        </footer>

      </main>
    </div>
  );
}
