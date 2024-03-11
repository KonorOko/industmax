import { Card } from "@/components/personal-ui/Card";

export function Diapo2() {
  return (
    <div className="h-[110vh]">
      <header>
        <h2 className="text-4xl md:text-8xl font-bold text-center text-black py-5">
          <strong>
            ¿Qué es Indust<span className="text-red-700">MAX</span>?
          </strong>
        </h2>
        <p className="text-lg md:text-4xl text-center md:mt-6 my-2">
          IndustMAX es una solución integral para la gestión de la producción en
          la industria.
        </p>
      </header>
      <div className="w-full md:grid md:grid-cols-2 md:mt-5 md:bg-blue-400">
        <div className="md:m-5 md:p-5 p-3 grid grid-cols-1 content-center rounded-lg bg-blue-400 md:bg-transparent">
          <img
            src="https://cdn.illacloud.com/illa-website/blog/shadcn-ui-2024/shadcn-ui.png"
            alt="Imagen de una aplicación donde se llevan registros"
            className="aspect-video mx-auto rounded-lg border scale-105"
          />
        </div>
        <div className="my-auto text-base md:text-2xl md:mt-5">
          <p className="text-center">
            Podrás tener un <span className="text-red-700">control total</span> de tus procesos de producción.
          </p>
          <h2 className="font-bold md:text-xl text-center pt-2 md:pt-5">
            Con planes pensados para cada tipo de industria
          </h2>
          <div className="flex justify-evenly mt-4">
            <Card title="Card 1" desc="Esta es la carta 1" size="sm"/>
            <Card title="Card 2" desc="Esta es la carta 2" size="sm"/>  
            <Card title="Card 3" desc="Esta es la carta 3" size="sm"/>
          </div>
          <p className="text-center mt-5 md:text-2xl">
            Además, podrás contar con nuestro equipo para agregar
            <span className="text-red-700"> funcionalidades personalizadas</span> a tu plan.
          </p>
        </div>
      </div>
    </div>
  );
}
