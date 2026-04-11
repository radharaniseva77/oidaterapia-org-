import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sabiduría | Oida Terapia',
};

export default function SabiduriaPage() {
  return (
    <div className="py-20 px-4 md:px-8 max-w-4xl mx-auto min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Sabiduría</h1>
      <p className="text-lg md:text-xl font-sans text-gray-700 leading-relaxed mb-8">
        Explora la Psicología Perenne, los 8 principios fundamentales que rigen nuestro bienestar, y la misión ontológica de Oida Terapia. La reconexión con el ser comienza aquí.
      </p>
      <div className="bg-accent p-8 rounded-3xl border border-tierra/30 shadow-xl mt-12 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-cielo/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
         <h2 className="text-3xl font-heading font-bold text-indigo mb-8 drop-shadow-sm relative z-10">
            Los ocho principios fundamentales
         </h2>
         <ol className="list-decimal pl-6 md:pl-10 space-y-5 text-indigo/90 font-sans text-lg relative z-10">
            <li className="pl-2">Estudia contenidos y fenómenos que traspasan las dimensiones del tiempo y el espacio.</li>
            <li className="pl-2">Reconoce la conciencia en la dimensión espiritual como real y no como un epifenómeno o producto de la imaginación.</li>
            <li className="pl-2">Propone una seria consideración de la espiritualidad, reconociendo los condicionamientos humanos físicos y psicológicos.</li>
            <li className="pl-2">Reubica al ser humano en su posición original.</li>
            <li className="pl-2">Reconoce la causalidad.</li>
            <li className="pl-2">Al reconocer la causalidad, se reconoce una Causa Primordial.</li>
            <li className="pl-2">La fe como fenómeno universal.</li>
            <li className="pl-2">Busca recobrar lo humano y su trascendencia.</li>
         </ol>
      </div>
    </div>
  );
}
