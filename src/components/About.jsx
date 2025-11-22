import React from 'react'

export default function About() {
  return (
    <section id="about" className="container py-16 grid md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-2xl md:text-3xl font-bold">Our Story</h2>
        <p className="text-gray-300 mt-4 leading-7">Born on the coast, built for the city. Rockwave Fashions blends clean silhouettes with high-performance materials. Every piece is designed for movement and longevity—timeless essentials that stand up to everyday life.</p>
        <p className="text-gray-300 mt-4 leading-7">We release in small batches to reduce waste and keep quality high. Join the wave to get first access to limited drops and collaborations.</p>
      </div>
      <div className="order-1 md:order-2">
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <img src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop" alt="About Rockwave Fashions" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
