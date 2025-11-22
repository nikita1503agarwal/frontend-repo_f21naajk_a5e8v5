import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="w-[1400px] h-[1400px] rounded-full bg-purple-500/10 blur-3xl absolute -top-1/2 -left-1/3" />
        <div className="w-[1200px] h-[1200px] rounded-full bg-indigo-500/10 blur-3xl absolute -bottom-1/2 -right-1/3" />
      </div>
      <div className="container mx-auto px-6 py-28 text-center relative">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Rockwave Fashions
        </motion.h1>
        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.6}} className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Streetwear energy. Coastal attitude. Designed for movement and made to last.
        </motion.p>
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.6}} className="mt-10 flex items-center justify-center gap-4">
          <a href="#shop" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:opacity-90 transition">Shop new arrivals</a>
          <a href="#about" className="px-6 py-3 rounded-full ring-1 ring-white/30 hover:ring-white transition">About the brand</a>
        </motion.div>
      </div>
    </section>
  )
}
