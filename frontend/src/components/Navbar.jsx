import { Menu, ShoppingBag, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-black/5">
            <Menu className="w-5 h-5" />
          </button>
          <a href="#" className="font-extrabold tracking-tight text-xl">Rockwave</a>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#shop" className="hover:text-black">Shop</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-black/5"><Search className="w-5 h-5" /></button>
          <button className="p-2 rounded-lg hover:bg-black/5"><ShoppingBag className="w-5 h-5" /></button>
        </div>
      </div>
    </header>
  )
}
