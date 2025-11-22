import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import About from './components/About'
import Subscribe from './components/Subscribe'
import Contact from './components/Contact'
import './index.css'

function Footer(){
  return (
    <footer className="py-10 text-center text-sm text-gray-500 bg-gray-50">© {new Date().getFullYear()} Rockwave Fashions. All rights reserved.</footer>
  )
}

export default function App(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ProductGrid />
        <About />
        <Subscribe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
