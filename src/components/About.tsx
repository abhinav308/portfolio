export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 bg-gray-900 min-h-screen flex items-center scroll-mt-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-3xl p-8 shadow-2xl shadow-blue-500/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Software Development Engineer with expertise in Python, React.js, and SQL. 
            Proven experience in developing AI-driven solutions and managing ERP systems 
            through professional internships and diverse technical projects.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Passionate about building scalable applications and optimizing system performance.
            Currently exploring opportunities in backend development and logistics technology.
          </p>
        </div>
      </div>
    </section>
  )
}