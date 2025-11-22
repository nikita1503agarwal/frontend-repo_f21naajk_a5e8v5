import React from 'react'

const items = [
  { id: 1, title: 'Waveform Hoodie', price: '$78', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Tide Tech Jacket', price: '$129', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Coastline Tee', price: '$36', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Aero Track Pants', price: '$69', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Neon Current Cap', price: '$28', image: 'https://images.unsplash.com/photo-1610582144787-eda2e6f293b4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXYXZlZm9ybSUyMEhvb2RpZXxlbnwwfDB8fHwxNzYzNzc4ODg0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 6, title: 'Shoreline Overshirt', price: '$92', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop' },
]

export default function FeaturedGrid() {
  return (
    <section id="shop" className="container py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">New Arrivals</h2>
        <a href="#" className="text-cyan-300 hover:text-cyan-200">View all</a>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
            <div className="aspect-square overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.price}</p>
              </div>
              <button className="px-3 py-1.5 rounded-md bg-cyan-400 text-black font-medium hover:bg-cyan-300">Add</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
