import Experience3D from './Experience3D'

export default function Experience() {
  const experiences = [
    {
      company: "RSPL",
      role: "Software Development Intern",
      date: "2024 - 2025",
      responsibilities: [
        "Developed and maintained ERP modules for inventory management systems",
        "Collaborated with senior developers to implement database optimization strategies",
        "Contributed to automation scripts that reduced manual reporting time by 40%"
      ]
    },
    {
      company: "Samsung Innovation Campus",
      role: "Software Development Intern",
      date: "2024 - 2025",
      responsibilities: [
        "Developed web applications using React.js and integrated backend APIs",
        "Worked on database design and optimization for data-driven projects",
        "Collaborated with team members on AI/ML model deployment and testing"
      ]
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <Experience3D />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">Experience</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 pb-8">
              <div className="absolute left-0 w-8 h-8 bg-purple-600 rounded-full"></div>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 shadow-lg shadow-black/20">
                <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                <p className="text-gray-400 mb-4">{exp.company} • {exp.date}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-2"></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}