import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academia & Comunidad | Oida Terapia',
};

export default function AcademiaPage() {
  return (
    <div className="py-20 px-4 md:px-8 max-w-4xl mx-auto min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Comunidad y Academia</h1>
      <div className="mb-12 bg-white p-8 rounded-3xl shadow-lg border border-indigo/10">
        <p className="text-lg md:text-xl font-sans text-indigo/80 leading-relaxed">
          Las personas interesadas en volverse OIDA Animados, OIDA Asesores u OIDA Terapeutas, van a poder tomar cursos virtuales o presenciales en los Institutos de OIDA Terapia. Aquellos que desean calificarse como OIDA Terapeutas reciben un plan profundo en el área de la salud mental y trascendental. Además, la OIDA Terapia, desarrolla programas grupales OIDA Tours, espacios diseñados para el descubrimiento personal a través del viaje consciente y el servicio.
        </p>
      </div>
      <div className="bg-indigo text-arena p-16 rounded-3xl text-center shadow-[0_20px_50px_-12px_rgba(10,25,47,0.5)] relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/assets/oidaterapia/espacio-fondo.png')] opacity-20 mix-blend-screen pointer-events-none"></div>
         <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight relative z-10">Da el Siguiente Paso</h2>
         <button className="bg-arena text-indigo font-bold font-sans tracking-widest uppercase px-12 py-4 rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(250,247,242,0.6)] transition-all duration-300 relative z-10">Explorar Cursos de Formación</button>
      </div>
    </div>
  );
}
