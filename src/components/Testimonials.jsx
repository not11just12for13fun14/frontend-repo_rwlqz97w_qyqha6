export default function Testimonials(){
  const items = [
    { quote:"Yetty is a delight to use — our team ships 3x faster.", author:"Maya, Product Lead" },
    { quote:"The animations and 3D give our brand real presence.", author:"Ike, Founder" },
    { quote:"Onboarding took minutes. We were live the same day.", author:"Dani, Indie Maker" },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Social Proof</h2>
        <p className="mt-3 text-gray-600">What people are saying about Yetty</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {items.map((t,i)=> (
            <blockquote key={i} className="p-6 rounded-2xl border bg-white/70">
              <p className="text-gray-800">“{t.quote}”</p>
              <div className="mt-3 text-sm text-gray-500">— {t.author}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
