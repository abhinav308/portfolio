import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import SpiderScene from './components/SpiderScene'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      let foundSection = ''
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            foundSection = section
            break
          }
        }
      }
      setActiveSection(foundSection)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navSections = ['about', 'experience', 'skills', 'projects', 'contact']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950/20 to-blue-950/30 text-white overflow-x-hidden">
      <header id="home" className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-red-500/30">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-70}
            className="cursor-pointer"
            onSetActive={() => setActiveSection('home')}
          >
            <motion.span
              className="text-3xl md:text-4xl font-bold"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="bg-gradient-to-r from-red-400 via-blue-400 to-red-500 bg-clip-text text-transparent filter drop-shadow-[0_0_10px_rgba(220,38,38,0.7)]">
                AS
              </span>
            </motion.span>
          </Link>
          <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 w-full md:w-auto">
            {navSections.map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  spy={true}
                  activeClass="active-link"
                  className={`hover:text-cyan-400 transition-all text-sm md:text-base font-medium cursor-pointer relative ${
                    activeSection === section 
                      ? 'text-cyan-400' 
                      : 'text-white'
                  }`}
                  onSetActive={() => setActiveSection(section)}
                >
                  {section.toUpperCase()}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <Hero3DSection />
        <motion.div
          initial={{ opacity: 0, rotateY: -10 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <About />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotateY: 10 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Skills />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotateY: -10 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Experience />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotateY: 10 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Projects />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotateY: -10 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Contact />
        </motion.div>
      </main>

      <footer className="py-8 px-4 border-t border-red-500/30 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center text-gray-300">
          © 2026 Abhinav Singh. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function Hero3DSection() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <SpiderScene />
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pointer-events-none">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 w-full">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(14,165,233,0.5)]">
              HI, I'M ABHINAV
            </h1>
            <p className="text-lg md:text-xl text-cyan-300 mb-8 drop-shadow-[0_0_5px_rgba(14,165,233,0.3)]">
              Software Development Engineer
            </p>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end pointer-events-auto">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-red-500/50 shadow-2xl shadow-red-500/30 overflow-hidden bg-gradient-to-br from-slate-800 to-blue-900/50"
              style={{ 
                boxShadow: '0 0 30px rgba(220, 38, 38, 0.4), inset 0 0 20px rgba(14, 165, 233, 0.2)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1f813e0181?w=400&h=400&fit=crop&crop=face"
                alt="Abhinav Singh"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.button
        onClick={() => {
          const contactEl = document.getElementById('contact')
          if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' })
        }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220, 38, 38, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-8 right-8 px-8 py-3 bg-gradient-to-r from-red-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-red-500/40 pointer-events-auto"
      >
        CONTACT ME
      </motion.button>
    </section>
  )
}

export default App