import TestFeConciencia from "@/components/TestFeConciencia";
import { Sparkles } from "lucide-react";

export default function CuestionariosPage() {
  return (
    <div className="w-full min-h-screen bg-arena pb-16 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-indigo tracking-tight flex items-center justify-center gap-3">
            <Sparkles className="text-indigo/50 w-8 h-8" />
            Cuestionarios Oida Terapia
            <Sparkles className="text-indigo/50 w-8 h-8" />
          </h1>
          <p className="font-sans max-w-2xl mx-auto text-lg leading-relaxed text-indigo/80 mt-4">
            Descubre tu estado actual de conciencia y cómo enfocar tu energía a través de la psicología perenne.
          </p>
        </div>
        
        <TestFeConciencia />
      </div>
    </div>
  );
}
