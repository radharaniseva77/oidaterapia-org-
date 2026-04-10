import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sabiduría | Oidaterapia',
};

export default function SabiduriaPage() {
  return (
    <div className="py-20 px-4 md:px-8 max-w-4xl mx-auto min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Sabiduría</h1>
      <p className="text-lg md:text-xl font-sans text-gray-700 leading-relaxed mb-8">
        Explora la Psicología Perenne, los 8 principios fundamentales que rigen nuestro bienestar, y la misión ontológica de Oidaterapia. La reconexión con el ser comienza aquí.
      </p>
      <div className="bg-accent p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
         <h2 className="text-2xl font-heading font-semibold text-primary mb-4">Los 8 Principios</h2>
         <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Observación sin juicio</li>
            <li>Conexión con el Guía Interno</li>
            <li>La Fe Sanadora</li>
            <li>El equilibrio holístico</li>
            <li>(Contenido Dinámico de BD...)</li>
         </ul>
      </div>
    </div>
  );
}
