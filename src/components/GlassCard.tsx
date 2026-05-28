interface GlassCardProps {
  title: string
  description: string
  tech?: string[]
  children?: React.ReactNode
}

export default function GlassCard({ title, description, tech, children }: GlassCardProps) {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-2xl p-6 shadow-2xl shadow-blue-500/10 transition-all duration-300 hover:bg-white/10 hover:border-blue-400/30">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
      {tech && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-md border border-blue-500/20">
              {t}
            </span>
          ))}
        </div>
      )}
      {children}
    </div>
  )
}