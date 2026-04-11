import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estilo de Vida | Oida Terapia',
};

export default function EstiloDeVidaPage() {
  return (
    <div className="py-20 px-4 md:px-8 max-w-4xl mx-auto min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Feducación & Estilo de Vida</h1>
      <p className="text-lg md:text-xl font-sans text-gray-700 leading-relaxed mb-8">
        Integración práctica en la cotidianidad: Alimentación holística, el Programa de 12 pasos y las Oidartes.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-secondary/20 p-6 rounded-xl border border-secondary text-primary font-bold text-center">Alimentación</div>
         <div className="bg-secondary/20 p-6 rounded-xl border border-secondary text-primary font-bold text-center">Programa 12 Pasos</div>
         <div className="bg-secondary/20 p-6 rounded-xl border border-secondary text-primary font-bold text-center">Oidartes</div>
      </div>
    </div>
  );
}
