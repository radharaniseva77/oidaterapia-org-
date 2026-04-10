"use client";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="py-32 px-4 text-center min-h-[50vh] flex flex-col items-center justify-center">
      <h2 className="text-2xl font-heading font-bold text-red-600 mb-4">Algo salió mal cargando el módulo.</h2>
      <p className="text-gray-500 mb-6 max-w-md mx-auto">{error.message}</p>
      <button onClick={() => reset()} className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-blue-900 transition">
        Intentar de nuevo
      </button>
    </div>
  );
}
