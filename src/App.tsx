import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Hero3D from './components/Hero3D'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const sections = {
    home: <Hero3DSection />,
    about: <About />,
    skills: <Skills />,
    experience: <Experience />,
    projects: <Projects />,
    contact: <Contact />
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-blue-500/20">
<nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
          <motion.a
            href="#"
            className="text-2xl font-bold text-blue-400"
            whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))" }}
            transition={{ duration: 0.3 }}
          >
            AB
          </motion.a>
          <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 w-full md:w-auto">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button 
                  onClick={() => setActiveSection(section)}
                  className={`capitalize hover:text-blue-400 transition-colors text-sm md:text-base ${activeSection === section ? 'text-blue-400 font-medium' : 'text-white'}`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {sections[activeSection as keyof typeof sections]}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-8 px-4 border-t border-blue-500/20">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          © 2026 Abhinav Singh. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function Hero3DSection() {
  return (
    <section className="relative h-screen">
      <Hero3D />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Abhinav Singh
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 mb-8">
            Software Development Engineer
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-300">
            Building scalable applications with Python, React.js, and SQL. Experienced in AI-driven solutions and ERP systems.
          </p>
<div className="flex justify-center gap-4">
             <a href="https://github.com" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-blue-500/20 transition-colors border border-blue-500/20" aria-label="GitHub">
               <FaGithub size={24} className="text-blue-400" />
             </a>
             <a href="https://linkedin.com" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-blue-500/20 transition-colors border border-blue-500/20" aria-label="LinkedIn">
               <FaLinkedin size={24} className="text-blue-400" />
             </a>
           </div>
        </div>
      </div>
    </section>
  )
}

export default App