import { useState } from 'react'
import { Menu, X, Mail } from 'lucide-react'
import AboutAndSkills from './components/AboutAndSkills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Hero3D from './components/Hero3D'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">AB</a>
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`md:flex md:space-x-8 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-gray-900 p-4 space-y-4' : 'hidden'}`}>
            {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button 
                  onClick={() => { setActiveSection(section); setIsMenuOpen(false) }}
                  className={`capitalize hover:text-purple-400 transition-colors ${activeSection === section ? 'text-purple-400 font-medium' : 'text-white'}`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className={`relative ${activeSection === 'home' ? '' : 'hidden'}`}>
          <div className="h-screen">
            <Hero3D />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto text-center px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Abhinav Singh
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-8">
                  Software Development Engineer
                </p>
                <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-300">
                  Building scalable applications with Python, React.js, and SQL. Experienced in AI-driven solutions and ERP systems.
                </p>
                <div className="flex justify-center gap-4">
                  <a href="https://github.com" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-purple-900/30 transition-colors" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5 4.4 4.4 0 0 0-4-1.5 4.4 4.4 0 0 0-4 1.5 4.8 4.8 0 0 0-1 3.5v4"/><circle cx="9" cy="9" r="4"/><path d="M22 11.5V8A5.5 5.5 0 0 0 12.5 2.5 5.5 5.5 0 0 0 5 6.5v5a3 3 0 0 0 0 6h.5"/></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-purple-900/30 transition-colors" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 6 6 0 0 1-6-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/></svg>
                  </a>
                  <a href="mailto:abhinavrajput308@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-purple-900/30 transition-colors" aria-label="Email">
                    <Mail size={24} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={activeSection !== 'about' ? 'hidden' : ''}>
          <AboutAndSkills />
        </section>

        <section className={activeSection !== 'experience' ? 'hidden' : ''}>
          <Experience />
        </section>

        <section className={activeSection !== 'projects' ? 'hidden' : ''}>
          <Projects />
        </section>

        <section className={activeSection !== 'contact' ? 'hidden' : ''}>
          <Contact />
        </section>
      </main>

      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          © 2026 Abhinav Singh. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App