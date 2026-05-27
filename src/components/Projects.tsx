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
      title: "SQL Warehouse System | SQL",
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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={index} title={project.title} description={project.description} tech={project.tech}>
              <a 
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5 4.4 4.4 0 0 0-4-1.5 4.4 4.4 0 0 0-4 1.5 4.8 4.8 0 0 0-1 3.5v4"/><circle cx="9" cy="9" r="4"/><path d="M22 11.5V8A5.5 5.5 0 0 0 12.5 2.5 5.5 5.5 0 0 0 5 6.5v5a3 3 0 0 0 0 6h.5"/></svg>
                View on GitHub
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}