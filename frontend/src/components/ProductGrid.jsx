import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function ProductGrid() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API}/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return <section id="shop" className="py-16"><div className="max-w-7xl mx-auto px-6">Loading products…</div></section>
  }

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <article key={i} className="group border rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="aspect-square bg-gray-100">
                {p.image ? (
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full grid place-items-center text-gray-400">No Image</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>
                <div className="mt-2 font-bold">${'{'}p.price?.toFixed ? p.price.toFixed(2) : p.price{'}'}</div>
                <button className="mt-3 w-full py-2 rounded-lg bg-black text-white text-sm font-semibold">Add to bag</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
