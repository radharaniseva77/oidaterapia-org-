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
      <div className="mt-12 flex flex-col gap-10">
         <div className="bg-white p-8 rounded-3xl border border-indigo/10 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-full bg-cielo transition-all group-hover:w-full group-hover:opacity-10 z-0"></div>
            <h3 className="text-3xl font-heading font-bold text-indigo mb-4 relative z-10">Alimentación Saludable</h3>
            <p className="text-lg font-sans text-indigo/80 leading-relaxed relative z-10">
              La alimentación es más que la simple ingestión de carbohidratos, proteínas o grasas para saciar nuestra hambre, ya que es el proceso a través del cual realizamos un constante intercambio activo o pasivo de vida con el entorno. Por medio de una alimentación saludable, respetuosa y compasiva, con la OIDA Terapia abrazamos el concepto de dar amor y respeto a todos, incluyendo los animales y la Madre Tierra.
            </p>
         </div>

         <div className="bg-indigo p-8 rounded-3xl shadow-lg text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-full bg-arena transition-all group-hover:w-full group-hover:opacity-10 z-0"></div>
            <h3 className="text-3xl font-heading font-bold text-arena mb-4 relative z-10">Programa de los 12 Pasos</h3>
            <p className="text-lg font-sans text-white/90 leading-relaxed relative z-10">
              El programa de los 12 pasos tiene en cuenta nuestro comportamiento hasta este momento y vislumbra cuál es el mejor camino para sanar nuestros hábitos de vida. Entre sus propósitos principales, incluye no hacer daño a los demás ni a nosotros mismos y dar espacio a un sincero arrepentimiento si lo hemos hecho al actuar de forma desconsiderada o ensimismada.
            </p>
         </div>
      </div>
    </div>
  );
}
