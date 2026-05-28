import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Hero3D from './components/Hero3D'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navSections = ['about', 'experience', 'skills', 'projects', 'contact']

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 overflow-x-hidden">
      <header id="home" className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-blue-500/20">
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
              className="text-3xl md:text-4xl italic font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent border-b border-dashed border-blue-400/50 pb-1 inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              AB
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
                  className={`hover:text-blue-400 transition-all text-sm md:text-base font-medium cursor-pointer relative ${
                    activeSection === section 
                      ? 'text-blue-400' 
                      : 'text-white'
                  }`}
                  onSetActive={() => setActiveSection(section)}
                >
                  {section.toUpperCase()}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <Hero3DSection />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
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
    <section className="relative h-screen bg-gray-950">
      <Hero3D />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          HI, I'M ABHINAV
        </h1>
        
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-30 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full border-2 border-blue-500/30 overflow-hidden bg-gray-800 flex items-center justify-center">
            <span className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AS
            </span>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl text-center mb-16">
          Software Development Engineer building scalable applications with Python, React.js, and SQL
        </p>
      </div>
      
      <motion.button
        onClick={() => {
          const contactEl = document.getElementById('contact')
          if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' })
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-8 right-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30"
      >
        CONTACT ME
      </motion.button>
    </section>
  )
}

export default App