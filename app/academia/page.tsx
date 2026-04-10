import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academia & Comunidad | Oidaterapia',
};

export default function AcademiaPage() {
  return (
    <div className="py-20 px-4 md:px-8 max-w-4xl mx-auto min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Comunidad y Academia</h1>
      <p className="text-lg md:text-xl font-sans text-gray-700 leading-relaxed mb-8">
        Participa de formaciones internacionales, Oida Tours, y accede a nuestra plataforma de cursos digitales estructurados y acreditados.
      </p>
      <div className="bg-primary text-accent p-12 rounded-3xl text-center shadow-2xl">
         <h2 className="text-3xl font-heading font-bold mb-4">Únete a la Formación</h2>
         <button className="bg-secondary text-primary font-bold px-8 py-3 rounded-full hover:bg-white transition-colors duration-300">Explorar Cursos</button>
      </div>
    </div>
  );
}
