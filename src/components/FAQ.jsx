export default function FAQ(){
  const faqs = [
    { q:'Is there a free trial?', a:'Yes — start free with no credit card required.' },
    { q:'Do you offer refunds?', a:'Absolutely. If it’s not for you, cancel anytime.' },
    { q:'Can I use the Spline hero?', a:'Yes — it’s part of the default Yetty landing experience.' },
  ]

  return (
    <section id="faq" className="py-20 bg-white/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">FAQ</h2>
        <div className="mt-10 grid gap-4">
          {faqs.map((f,i)=>(
            <details key={i} className="group rounded-2xl border bg-white/70 p-5">
              <summary className="cursor-pointer font-semibold text-gray-800">{f.q}</summary>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
