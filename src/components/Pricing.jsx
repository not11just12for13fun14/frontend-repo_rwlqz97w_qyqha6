export default function Pricing(){
  const tiers = [
    { name:'Starter', price:'$0', desc:'For trying things out', features:['Unlimited drafts','Community support','Basic analytics'] },
    { name:'Pro', price:'$19', popular:true, desc:'For growing teams', features:['Everything in Starter','Real-time collaboration','Advanced analytics','Priority support'] },
    { name:'Scale', price:'$79', desc:'For serious scale', features:['Everything in Pro','SAML SSO','Custom SLA','Dedicated success'] },
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">Simple pricing</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Start free, upgrade when you’re ready.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.name} className={`p-6 rounded-2xl border bg-white/70 backdrop-blur ${t.popular ? 'ring-2 ring-purple-400' : ''}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                {t.popular && <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">Popular</span>}
              </div>
              <div className="mt-2 text-4xl font-extrabold">{t.price}<span className="text-base font-medium text-gray-500">/mo</span></div>
              <p className="mt-2 text-gray-600">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
                {t.features.map(f => (<li key={f}>{f}</li>))}
              </ul>
              <a href="#cta" className="mt-6 block text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">Choose {t.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
