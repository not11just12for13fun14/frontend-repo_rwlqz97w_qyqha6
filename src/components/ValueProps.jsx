import { ShieldCheck, Sparkles, Zap } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Secure by default', desc: 'Enterprise-grade security baked in from day one.' },
  { icon: Zap, title: 'Lightning-fast', desc: 'Optimized performance and instant interactions.' },
  { icon: Sparkles, title: 'Magically simple', desc: 'A polished experience that just feels right.' },
]

export default function ValueProps(){
  return (
    <section id="features" className="py-20 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">Key Value Props</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">The essentials that make Yetty stand out from the crowd.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon,title,desc})=> (
            <div key={title} className="p-6 rounded-2xl border bg-white/70 backdrop-blur hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="text-gray-600 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
