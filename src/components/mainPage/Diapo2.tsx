export function Diapo2() {
  return (
    <div className="bg-blue-300 h-screen">
      <header>
        <h1 className="text-4xl md:text-8xl font-bold text-center text-black py-5">
          <strong>
            ¿Qué es Indust<span className="text-red-700">MAX</span>?
          </strong>
        </h1>
        <p className="text-lg md:text-4xl text-center mt-6">
          <strong>
            IndustMAX es una solución integral para la gestión de la producción
            en la industria.
          </strong>
        </p>
      </header>
      <div className="w-full md:grid md:grid-cols-2">
        <div className="p-10">
          <img
            src="https://cdn.illacloud.com/illa-website/blog/shadcn-ui-2024/shadcn-ui.png"
            alt="Imagen de una aplicación donde se llevan registros"
            className="aspect-video mx-auto rounded-lg border"
          />
        </div>
        <div className="my-auto text-3xl">
          <p className=" text-center font-semibold">
            Podrás tener un control total de tus procesos de producción desde
            cualquier lugar, en cualquier momento y desde cualquier dispositivo.
          </p>
          <p className=" text-center font-semibold mt-10">
            Además, podrás contar con nuestro equipo para agregar
            funcionalidades personalizadas.
          </p>
        </div>
      </div>
    </div>
  );
}
