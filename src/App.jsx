import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedGrid from './components/FeaturedGrid'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedGrid />
      <About />
      <Footer />
    </div>
  )
}
