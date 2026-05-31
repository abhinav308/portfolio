import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import GlassCard from './GlassCard'

export default function Projects() {
  const projects = [
    {
      title: "VowLogic",
      description: "A wedding ecosystem app that connects couples with vendors, planners, and venues for seamless event planning and management.",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      github: "#"
    },
    {
      title: "SQL Warehouse System",
      description: "Designed structured SQL database for efficient data storage and retrieval. Improved query performance and maintained data integrity.",
      tech: ["SQL", "Database Design", "Performance Optimization"],
      github: "#"
    },
    {
      title: "Event Manager Platform",
      description: "Built platform for event organization and scheduling. Added user registration and automated notifications.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-blue-950/20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent text-center drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]">
          Projects
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Selected projects showcasing my work in full-stack development and system design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <GlassCard title={project.title} description={project.description} tech={project.tech}>
                <a 
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-cyan-300 rounded-lg hover:bg-red-500/30 transition-colors border border-red-500/30"
                >
                  <FaGithub size={16} />
                  View on GitHub
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}