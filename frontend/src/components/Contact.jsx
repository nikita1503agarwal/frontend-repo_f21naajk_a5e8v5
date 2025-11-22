import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState('')

  async function submit(e){
    e.preventDefault()
    setStatus('')
    try {
      const res = await fetch(`${API}/contact`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
      const data = await res.json()
      setStatus(data.message || 'Sent!')
      setForm({ name:'', email:'', message:'' })
    } catch (err) {
      setStatus('Something went wrong')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-3xl font-bold">Contact us</h3>
          <p className="mt-2 text-gray-600">Questions about sizing, shipping or wholesale? We’re here.</p>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required placeholder="Name" className="w-full px-4 py-3 rounded-lg border" />
          <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border" />
          <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required placeholder="Message" rows="4" className="w-full px-4 py-3 rounded-lg border" />
          <button className="px-5 py-3 rounded-lg bg-black text-white font-semibold">Send</button>
          {status && <p className="text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
