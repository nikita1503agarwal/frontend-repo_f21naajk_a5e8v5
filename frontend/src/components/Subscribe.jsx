import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Subscribe(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  async function submit(e){
    e.preventDefault()
    setStatus('')
    try {
      const res = await fetch(`${API}/subscribe`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email }) })
      const data = await res.json()
      setStatus(data.message || 'Subscribed!')
      setEmail('')
    } catch (err) {
      setStatus('Something went wrong')
    }
  }

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Join the wave</h3>
        <p className="mt-2 text-white/70">Get first access to drops and exclusive offers.</p>
        <form onSubmit={submit} className="mt-6 flex max-w-xl mx-auto gap-2">
          <input value={email} onChange={e=>setEmail(e.target.value)} required type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-lg bg-white text-black" />
          <button className="px-5 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 font-semibold">Subscribe</button>
        </form>
        {status && <p className="mt-3 text-sm text-white/80">{status}</p>}
      </div>
    </section>
  )
}
