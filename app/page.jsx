import Hero from "@/components/Hero";
import TipsAnimation from "@/components/TipsAnimation";
import animalData from "@/data/animals.json";
import Link from "next/link";

export default function HomePage() {
  const featuredAnimals = animalData.slice(0, 4);

  return (
    <div className="space-y-16 md:space-y-24 pb-16 md:pb-24">
      {/* Hero section */}
      <Hero />

      {/* Featured Animals Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">
              Featured Livestock
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              Handpicked selection of premium cows and goats for Qurbani.
            </p>
          </div>
          <Link
            href="/animals"
            className="text-green-600 font-extrabold border-b-2 border-green-600 hover:text-green-700 hover:border-green-700 transition-all pb-1"
          >
            Browse All Animals →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredAnimals.map((animal) => (
            <div
              key={animal.id}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase text-green-700 shadow-sm">
                  {animal.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-xs font-bold text-green-600 mb-1 uppercase tracking-widest">
                  {animal.type} • {animal.breed}
                </p>
                <h3 className="font-bold text-xl text-gray-900 mb-4 line-clamp-1">
                  {animal.name}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-gray-50">
                  <div>
                    <p className="text-2xl font-black text-green-600">
                      ৳{animal.price.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-gray-400 font-bold tracking-tighter uppercase">
                      {animal.weight} KG • {animal.location}
                    </p>
                  </div>
                  <Link
                    href={`/details-page/${animal.id}`}
                    className="p-3 bg-gray-900 text-white rounded-2xl group-hover:bg-green-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Qurbani Tips Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 order-2 md:order-1">
            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">
              Expert <span className="text-green-600">Qurbani Tips</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Verify Maturity",
                  desc: "Look for two permanent incisors in cattle to ensure the animal is at least 2 years old.",
                },
                {
                  title: "Check Vitality",
                  desc: "A healthy animal is alert, has a shiny coat, and shows no signs of lameness.",
                },
                {
                  title: "Organic Feeding",
                  desc: "Our partners provide natural, grass-fed diets to ensure high-quality meat texture.",
                },
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-xl font-black text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      {tip.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative p-4">
            <div className="absolute inset-0 bg-green-100 rounded-[3rem] rotate-3 -z-10" />
            <div className="bg-white rounded-[3rem] shadow-xl p-4 md:p-8 flex justify-center items-center min-h-[350px]">
              <TipsAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Top Breeds */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-900 rounded-[3rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">
            Top Breeds 2026
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 md:mb-16 relative z-10 text-lg">
            Discover the most sought-after breeds curated for quality, weight,
            and tradition.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {[
              "Deshi Shahiwal",
              "Premium Brahman",
              "Black Bengal",
              "Jamunapari",
            ].map((breed) => (
              <div
                key={breed}
                className="group p-5 sm:p-6 md:p-8 bg-white/10 border border-white/10 rounded-2xl md:rounded-[2rem] hover:bg-green-600 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full mb-4 md:mb-6 mx-auto group-hover:bg-white transition-colors flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full group-hover:bg-green-600" />
                </div>
                <h4 className="font-black text-white text-xs tracking-normal uppercase leading-snug break-words hyphens-auto">
                  {breed}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
