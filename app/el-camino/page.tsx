import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'El Camino | Oida Terapia',
};

export default function ElCaminoPage() {
  return (
    <div className="py-20 px-4 md:px-8 max-w-4xl mx-auto min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">El Camino de Sanación</h1>
      <p className="text-lg md:text-xl font-sans text-gray-700 leading-relaxed mb-8">
        Adéntrate en tu rol como el &apos;Animado&apos; y el papel del terapeuta. Conoce las fases cruciales del proceso terapéutico transformacional.
      </p>
      <div className="flex flex-col gap-8 mt-12">
        <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-cielo hover:shadow-xl transition-all">
          <h3 className="text-2xl font-heading font-bold text-indigo mb-4">El Animado</h3>
          <p className="text-indigo/80 font-sans text-lg leading-relaxed">
            En la OIDA Terapia llamamos Animados a quienes están buscando activamente su sanación, aceptando los valores que se promueven en la Psicología Perenne y se esfuerzan por encontrar un nivel de fe y de conciencia que va más allá de los paradigmas sociales. Los animados se caracterizan también por querer conocer más de sí mismos, por identificarse con los planteamientos del Amor Universal, por querer vivir sin injusticias o violencias innecesarias, y por emprender un proceso de autoayuda.
          </p>
        </div>
        <div className="bg-arena p-8 rounded-3xl shadow-lg border-l-4 border-indigo hover:shadow-xl transition-all">
          <h3 className="text-2xl font-heading font-bold text-indigo mb-4">El OIDA Terapeuta</h3>
          <p className="text-indigo/80 font-sans text-lg leading-relaxed">
            Se mantiene abierto a la comprensión de las tradiciones místicas... No ejerce influencia en el animado para que cambie su fe, más bien lo instruye acerca de cómo actúa la fe... Se apoya en herramientas para ayudar al animado a trabajar de manera preventiva. Busca siempre aceptar que la fe del animado es una auténtica fe y no necesariamente una sublimación neurótica, incluyendo las creencias y cosmovisión del animado como un elemento terapéutico clave.
          </p>
        </div>
      </div>
    </div>
  );
}
