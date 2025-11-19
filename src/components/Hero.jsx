import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-1/3 -left-1/3 w-[800px] h-[800px] rounded-full blur-3xl bg-purple-300/40" />
        <div className="absolute -bottom-1/3 -right-1/3 w-[800px] h-[800px] rounded-full blur-3xl bg-blue-300/40" />
      </div>

      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-purple-50 via-white to-blue-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-8">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-50 border border-purple-100 rounded-full px-3 py-1">New • Futuristic</p>
          <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Yetty</span>
            <span className="block text-gray-900">Build, launch, and grow faster.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">An immersive platform experience with delightful motion, a touch of 3D, and a design that gets out of your way so you can go from idea to impact.</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
            <a href="#cta" className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30">Start Free Trial</a>
            <a href="#demo" className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50">Watch Demo</a>
          </div>

          <div className="mt-6 text-xs text-gray-500">No credit card required • Cancel anytime</div>
        </motion.div>

        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.8, delay:0.1}} className="relative h-[480px]">
          <div className="absolute inset-0 rounded-2xl border border-white/40 shadow-xl overflow-hidden">
            <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
