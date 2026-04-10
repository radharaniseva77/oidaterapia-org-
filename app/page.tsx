import { Search } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import SocialFeed from "@/components/SocialFeed";
import InteractiveDiagrams from "@/components/InteractiveDiagrams";

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

      {/* Existing Sections */}
      <section className="py-16 text-indigo">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 tracking-tight">Explora los Conceptos Fundamentales</h2>
            <p className="font-sans max-w-2xl mx-auto text-lg leading-relaxed text-indigo/80">
               El ser humano es una integridad de mente, cuerpo y espíritu. Entiende nuestras dinámicas terapéuticas e iníciate en la sanación.
            </p>
         </div>
         <InteractiveDiagrams />
      </section>
      <SocialFeed />
    </div>
  );
}
