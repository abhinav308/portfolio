interface GlassCardProps {
  title: string
  description: string
  tech?: string[]
  children?: React.ReactNode
}

export default function GlassCard({ title, description, tech, children }: GlassCardProps) {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-red-500/30 rounded-2xl p-6 shadow-2xl shadow-red-500/10 transition-all duration-300 hover:bg-white/10 hover:border-red-400/50">
      <h3 className="text-xl font-bold text-red-200 mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
      {tech && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-red-500/10 text-cyan-300 text-xs rounded-md border border-red-500/30">
              {t}
            </span>
          ))}
        </div>
      )}
      {children}
    </div>
  )
}