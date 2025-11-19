import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import FeatureTabs from './components/FeatureTabs'
import UGC from './components/UGC'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import MobilePromo from './components/MobilePromo'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <FeatureTabs />
        <UGC />
        <Pricing />
        <Testimonials />
        <MobilePromo />
        <FAQ />
        <FinalCTA />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Yetty. All rights reserved.</footer>
    </div>
  )
}

export default App
