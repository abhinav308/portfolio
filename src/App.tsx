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
              className="text-3xl md:text-4xl font-script tracking-wide"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent filter drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] font-extrabold">
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
    <section className="relative h-screen bg-gray-950 overflow-hidden">
      <Hero3D />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-8 md:left-16 lg:left-24 max-w-md z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            HI, I'M ABHINAV
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Software Development Engineer
          </p>
        </div>
      </div>
      
      <motion.button
        onClick={() => {
          const contactEl = document.getElementById('contact')
          if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' })
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-8 right-8 px-8 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 font-semibold rounded-xl shadow-lg shadow-amber-500/40 pointer-events-auto z-10"
      >
        CONTACT ME
      </motion.button>
    </section>
  )
}

export default App