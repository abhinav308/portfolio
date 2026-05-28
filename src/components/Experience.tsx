import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      company: "Samsung Innovation Campus",
      role: "Software Development Intern",
      date: "2024 - 2025",
      responsibilities: [
        "Developed web applications using React.js and integrated backend APIs",
        "Worked on database design and optimization for data-driven projects",
        "Collaborated with team members on AI/ML model deployment and testing"
      ]
    },
    {
      company: "RSPL",
      role: "Software Development Intern",
      date: "2024 - 2025",
      responsibilities: [
        "Developed and maintained ERP modules for inventory management systems",
        "Collaborated with senior developers to implement database optimization strategies",
        "Contributed to automation scripts that reduced manual reporting time by 40%"
      ]
    }
  ]

  return (
    <section className="py-32 px-4 bg-gray-950 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500/30"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 pb-12"
            >
              <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
              <div className="backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-blue-400 mb-3">{exp.company} • {exp.date}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2"></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}