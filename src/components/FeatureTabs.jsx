import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Rocket, Settings, Users } from 'lucide-react'

const tabs = [
  { key: 'build', label: 'Build', icon: Rocket, title: 'From idea to launch in hours', desc: 'Compose your product with modular building blocks and instant previews.' },
  { key: 'customize', label: 'Customize', icon: Settings, title: 'Tailored to your workflow', desc: 'Deeply configurable, with sensible defaults that scale with you.' },
  { key: 'collab', label: 'Collaborate', icon: Users, title: 'Work as one', desc: 'Real-time collaboration so your team stays in flow.' },
]

export default function FeatureTabs(){
  const [active, setActive] = useState('build')
  const current = tabs.find(t=>t.key===active)

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {tabs.map(({key,label,icon:Icon}) => (
            <button key={key} onClick={()=>setActive(key)} className={`px-4 py-2 rounded-full border transition ${active===key? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
              <span className="inline-flex items-center gap-2"><Icon size={16} /> {label}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{current.title}</h3>
            <p className="mt-3 text-gray-600">{current.desc}</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur" />
            <div className="relative p-6 rounded-2xl border bg-white/70 backdrop-blur">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.3}} className="h-60 flex items-center justify-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  {active.toUpperCase()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
