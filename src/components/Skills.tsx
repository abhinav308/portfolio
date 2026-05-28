import { Code, Database, Layers, GitBranch, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
      icon: <Code className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "Firebase"],
      icon: <Database className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Frameworks",
      skills: ["React.js"],
      icon: <Layers className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Tools & AI",
      skills: ["Git", "Prompt Engineering"],
      icon: <GitBranch className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Reliability"],
      icon: <Brain className="w-5 h-5 text-blue-400" />
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20 group-hover:border-blue-400/40 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}