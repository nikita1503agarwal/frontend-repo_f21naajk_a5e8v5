import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t border-white/10">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-300">
        <div>
          <div className="text-lg font-extrabold"><span className="text-cyan-400">rockwave</span> fashions</div>
          <p className="mt-3 max-w-sm">Designed at the intersection of sea and city. Premium fits, technical fabrics, and limited drops.</p>
        </div>
        <div>
          <p className="font-semibold text-white mb-2">Help</p>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Shipping & returns</a></li>
            <li><a href="#" className="hover:text-white">Size guide</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-2">Join the wave</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Email address" className="flex-1 px-3 py-2 rounded-md bg-white/10 border border-white/10 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
            <button className="px-4 py-2 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-gray-400">© {new Date().getFullYear()} Rockwave Fashions. All rights reserved.</div>
    </footer>
  )
}
