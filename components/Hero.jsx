import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1600')", filter: "brightness(0.4)" }}
      />
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Find Your Perfect Qurbani Animal</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Explore a modern livestock marketplace with premium cows and goats delivered to your doorstep.
        </p>
        <Link href="/animals" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full text-lg font-semibold transition shadow-xl">
          Browse Marketplace
        </Link>
      </div>
    </section>
  );
}
