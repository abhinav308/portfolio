import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:abhinavrajput308@gmail.com'
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-blue-950/20 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent text-center drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaboration or opportunities.
        </p>

        <div className="max-w-md mx-auto">
          <motion.button
            onClick={handleEmailClick}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(220, 38, 38, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full px-8 py-4 bg-white/5 text-red-400 rounded-xl border border-red-500/30 hover:bg-red-500/10 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3"
          >
            <Mail size={24} />
            Email Me
          </motion.button>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-3 bg-white/5 rounded-full hover:bg-red-500/20 transition-colors border border-red-500/30"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} className="text-red-400" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="p-3 bg-white/5 rounded-full hover:bg-red-500/20 transition-colors border border-red-500/30"
              aria-label="GitHub"
            >
              <FaGithub size={24} className="text-red-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}