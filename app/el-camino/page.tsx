import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'El Camino | Oidaterapia',
};

export default function ElCaminoPage() {
  return (
    <div className="py-20 px-4 md:px-8 max-w-4xl mx-auto min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">El Camino de Sanación</h1>
      <p className="text-lg md:text-xl font-sans text-gray-700 leading-relaxed mb-8">
        Adéntrate en tu rol como el &apos;Animado&apos; y el papel del terapeuta. Conoce las fases cruciales del proceso terapéutico transformacional.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-accent p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-heading font-bold text-primary mb-2">El Animado</h3>
          <p className="text-gray-600">El individuo activo que inicia su propio proceso de sanación interior.</p>
        </div>
        <div className="bg-accent p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-heading font-bold text-primary mb-2">El Terapeuta</h3>
          <p className="text-gray-600">El facilitador que guía y apoya, sin imponer, reflejando luz en la oscuridad.</p>
        </div>
      </div>
    </div>
  );
}
