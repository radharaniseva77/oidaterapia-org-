import { Compass } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center p-8 bg-arena">
      <Compass className="w-20 h-20 text-indigo/30 animate-pulse mb-6" />
      <h1 className="text-5xl font-heading font-bold text-indigo tracking-tight mb-4 text-shadow-sm">
        Próximamente...
      </h1>
      <p className="font-sans text-xl text-indigo/70 mb-8 max-w-lg mx-auto">
        Estamos escribiendo la filosofía y la sabiduría en el sendero de Oida Terapia. Vuelve pronto para leer nuestros artículos.
      </p>
      
      <Link 
        href="/"
        className="px-8 py-3 bg-indigo text-white font-medium rounded-full hover:bg-cielo transition-colors shadow-lg shadow-indigo/20"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
