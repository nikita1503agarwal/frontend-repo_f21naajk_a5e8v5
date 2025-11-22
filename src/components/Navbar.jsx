import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border-b border-white/10">
      <div className="container h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold tracking-tight">
          <span className="text-cyan-400">rockwave</span> fashions
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200">
          <a href="#shop" className="hover:text-white">Shop</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 rounded-md border border-white/20 text-sm hover:border-white/40">Sign in</button>
          <button className="px-3 py-1.5 rounded-md bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-300">Cart (0)</button>
        </div>
      </div>
    </header>
  )
}
