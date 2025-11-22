export default function About(){
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold">About Rockwave</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Born on the coastline, Rockwave Fashions blends modern streetwear silhouettes with durable, eco-conscious materials. We craft everyday essentials designed to move with you, from sunrise sessions to late-night city rides.
        </p>
        <ul className="mt-6 grid md:grid-cols-3 gap-6 text-sm text-gray-700">
          <li className="p-4 rounded-xl bg-white border">Sustainable fabrics</li>
          <li className="p-4 rounded-xl bg-white border">Ethical manufacturing</li>
          <li className="p-4 rounded-xl bg-white border">Limited drops</li>
        </ul>
      </div>
    </section>
  )
}
