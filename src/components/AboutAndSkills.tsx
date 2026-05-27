export default function AboutAndSkills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "Firebase"]
    },
    {
      title: "Frameworks",
      skills: ["React.js"]
    },
    {
      title: "Tools & AI",
      skills: ["Git", "Prompt Engineering"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Reliability"]
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-gray-300 mb-4">
              Software Development Engineer with expertise in Python, React.js, and SQL. 
              Proven experience in developing AI-driven solutions and managing ERP systems 
              through professional internships and diverse technical projects.
            </p>
            <p className="text-gray-400">
              Passionate about building scalable applications and optimizing system performance.
              Currently exploring opportunities in backend development and logistics technology.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Technical Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillCategories.map((category) => (
                <div key={category.title} className="p-3 bg-gray-800 rounded-lg">
                  <h3 className="text-sm font-semibold text-purple-400 mb-2">{category.title}</h3>
                  <ul className="space-y-1">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-gray-300 text-sm">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}