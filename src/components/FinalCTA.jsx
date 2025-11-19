export default function FinalCTA(){
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative p-10 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500" />
          <div className="absolute inset-0 opacity-30" style={{background:"radial-gradient(circle at 10% 10%, white, transparent 40%), radial-gradient(circle at 90% 90%, white, transparent 40%)"}} />
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to feel the future?</h3>
            <p className="mt-3 text-white/90">Start building with Yetty today. Cancel anytime.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#" className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold shadow">Start Free Trial</a>
              <a href="#demo" className="px-6 py-3 rounded-full border border-white/60 text-white/95 hover:bg-white/10">Watch Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
