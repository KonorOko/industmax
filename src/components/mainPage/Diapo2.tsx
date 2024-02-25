export function Diapo2() {
  return (
    <div className="bg-blue-300 h-screen">
      <header>
        <h1 className="text-4xl md:text-8xl font-bold text-center text-black py-5">
          <strong>¿Qué es Indust<span className="text-red-700">MAX</span>?</strong>
        </h1>
        <p className="text-lg md:text-4xl font-semibold text-center mt-6">
          <strong>
            IndustMAX es una solución integral para la gestión de la producción
            en la industria.
          </strong>
        </p>
      </header>
      <div className="flex justify-center items-center mt-10 p-5 text-center">
        <div className="w-full">
          <p className="md:text-2xl ">
            <strong>
              Con IndustMAX podrás llevar un control total de tus procesos de
              producción, desde la recepción de materiales hasta el envío de
              productos terminados.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
