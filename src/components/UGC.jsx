export default function UGC(){
  const items = new Array(8).fill(0).map((_,i)=>({
    id:i,
    name:`Creator ${i+1}`,
    handle:`@creator${i+1}`,
    text:"Yetty helped me ship in a weekend. The 3D hero is a vibe.",
    avatar:`https://api.dicebear.com/7.x/avatars/svg?seed=${i+3}`
  }))

  return (
    <section className="py-20 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">Loved by creators</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Real posts and shoutouts from folks building with Yetty.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <div key={item.id} className="p-5 rounded-2xl border bg-white/70 hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <img src={item.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.handle}</div>
                </div>
              </div>
              <p className="mt-3 text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
