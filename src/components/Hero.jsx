import React from 'react'

export default function Hero() {
  return (
    <section className="container pt-20 pb-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="uppercase tracking-widest text-cyan-300/80 text-sm">Rockwave Fashions</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">Ride the Wave. Wear the Future.</h1>
        <p className="text-gray-300 mt-5 text-lg max-w-prose">Bold streetwear and coastal minimalism collide. Discover limited drops, elevated essentials, and statement pieces crafted for movement and self-expression.</p>
        <div className="mt-8 flex gap-3">
          <a href="#shop" className="px-5 py-3 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors">Shop New Arrivals</a>
          <a href="#about" className="px-5 py-3 rounded-md border border-white/20 hover:border-white/40 text-white/90 transition-colors">About Us</a>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-cyan-400/20 via-white/5 to-transparent border border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop" alt="Rockwave fashion model" className="absolute inset-0 h-full w-full object-cover mix-blend-overlay" />
        </div>
      </div>
    </section>
  )
}
