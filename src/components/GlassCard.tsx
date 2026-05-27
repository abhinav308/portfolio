interface GlassCardProps {
  title: string
  description: string
  tech?: string[]
  children?: React.ReactNode
}

export default function GlassCard({ title, description, tech, children }: GlassCardProps) {
  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg shadow-black/20">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-200 mb-4 text-sm leading-relaxed">{description}</p>
      {tech && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-white/10 text-white text-xs rounded-md">
              {t}
            </span>
          ))}
        </div>
      )}
      {children}
    </div>
  )
}