import { MessageCircle } from "lucide-react";

export default function SocialFeed() {
  return (
    <section className="py-16 bg-accent text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">Comunidad y Sabiduría en Línea</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
            <div className="h-48 relative flex items-center justify-center bg-black">
               <iframe 
                 className="w-full h-full" 
                 src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0" 
                 title="Introducción a la Psicología Perenne" 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
               ></iframe>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-2">Introducción a la Psicología Perenne</h3>
              <p className="text-gray-600 text-sm">Descubre los fundamentos de Oida Terapia y cómo puede ayudarte en tu proceso de sanación integral.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
            <div className="h-48 bg-primary text-accent p-6 flex flex-col justify-between">
               <MessageCircle className="h-8 w-8 text-secondary mb-4" />
               <p className="italic text-sm">&quot;La fe sanadora no es ciega, es una experiencia directa con el Guía Interno para tu bienestar emocional.&quot;</p>
               <a 
                 href="https://instagram.com/oidaterapia_oficial" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-xs mt-4 font-bold tracking-wide uppercase text-secondary hover:underline hover:text-white transition-colors"
               >
                 @oidaterapia_oficial
               </a>
            </div>
          </div>
           <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
            <div className="h-48 relative flex items-center justify-center bg-black">
               <iframe 
                 className="w-full h-full" 
                 src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0" 
                 title="Las Fases de la Sanación" 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
               ></iframe>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-2">Las Fases de la Sanación</h3>
              <p className="text-gray-600 text-sm">Aprende sobre el rol del terapeuta y el Animado en el proceso terapéutico transformador.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
