import { Search } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import SocialFeed from "@/components/SocialFeed";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Search Bar Section */}
      <section className="w-full max-w-3xl mx-auto">
        <div className="relative flex items-center w-full h-14 rounded-full focus-within:shadow-lg bg-white overflow-hidden border border-tierra/50 transition-shadow">
          <div className="grid place-items-center h-full w-14 text-indigo/60">
            <Search className="h-6 w-6" />
          </div>
          <input
            className="peer h-full w-full outline-none text-sm font-sans text-indigo pr-4 bg-transparent"
            type="text"
            id="search"
            placeholder="Busca formación de OIDA, atención psicológica, fe sanadora"
          />
        </div>
      </section>

      {/* Hero Slider Section */}
      <section className="w-full">
        <HeroSlider />
      </section>

      <SocialFeed />
    </div>
  );
}
