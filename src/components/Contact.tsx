import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you for your message, ${formData.name}! I'll get back to you soon.`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-32 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a 
                href="mailto:abhinavrajput308@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail size={20} className="text-blue-400" />
                abhinavrajput308@gmail.com
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 6 6 0 0 1-6-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/></svg>
                LinkedIn Profile
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5 4.4 4.4 0 0 0-4-1.5 4.4 4.4 0 0 0-4 1.5 4.8 4.8 0 0 0-1 3.5v4"/><circle cx="9" cy="9" r="4"/><path d="M22 11.5V8A5.5 5.5 0 0 0 12.5 2.5 5.5 5.5 0 0 0 5 6.5v5a3 3 0 0 0 0 6h.5"/></svg>
                GitHub Profile
              </a>
            </div>
          </div>
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 text-white rounded-xl border border-blue-500/20 focus:border-blue-500 focus:outline-none placeholder-gray-500 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 text-white rounded-xl border border-blue-500/20 focus:border-blue-500 focus:outline-none placeholder-gray-500 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 text-white rounded-xl border border-blue-500/20 focus:border-blue-500 focus:outline-none placeholder-gray-500 resize-none transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}