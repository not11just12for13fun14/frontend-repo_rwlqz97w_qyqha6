import { Apple, Play } from 'lucide-react'

export default function MobilePromo(){
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-96">
          <div className="absolute inset-0 rounded-2xl border bg-white/70 backdrop-blur grid place-items-center">
            <div className="w-56 h-96 border-8 border-black rounded-[2rem] bg-gradient-to-b from-gray-50 to-gray-200 shadow-xl" />
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-extrabold text-gray-900">Bring Yetty on the go</h3>
          <p className="mt-3 text-gray-600">Stay in flow anywhere. The mobile app delivers the same polish and speed with a touch-first design.</p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="px-5 py-2.5 rounded-full bg-black text-white inline-flex items-center gap-2"><Apple size={16}/> App Store</a>
            <a href="#" className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-800 inline-flex items-center gap-2"><Play size={16}/> Google Play</a>
          </div>
        </div>
      </div>
    </section>
  )
}
