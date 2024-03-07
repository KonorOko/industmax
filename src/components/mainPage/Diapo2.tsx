import { Card } from "@/components/personal-ui/Card";

export function Diapo2() {
  return (
    <div className="bg-blue-300 h-[110vh]">
      <header>
        <h2 className="text-4xl md:text-8xl font-bold text-center text-black py-5">
          <strong>
            ¿Qué es Indust<span className="text-red-700">MAX</span>?
          </strong>
        </h2>
        <p className="text-lg md:text-4xl text-center md:mt-6 font-semibold">
          IndustMAX es una solución integral para la gestión de la producción en
          la industria.
        </p>
      </header>
      <div className="w-full md:grid md:grid-cols-2">
        <div className="p-5 md:p-10 grid grid-cols-1 content-center">
          <img
            src="https://cdn.illacloud.com/illa-website/blog/shadcn-ui-2024/shadcn-ui.png"
            alt="Imagen de una aplicación donde se llevan registros"
            className="aspect-video mx-auto rounded-lg border "
          />
        </div>
        <div className="my-auto text-base md:text-2xl md:mt-10">
          <p className="text-center">
            Podrás tener un control total de tus procesos de producción desde
            cualquier lugar, en cualquier momento y desde cualquier dispositivo.
          </p>
          <h2 className="font-bold text-xl text-center pt-6">
            Con planes pensados para cada tipo de industria
          </h2>
          <div className="flex justify-evenly mt-4">
            <Card title="Card 1" desc="Esta es la carta 1"/>
            <Card title="Card 2" desc="Esta es la carta 2"/>  
          </div>
          <p className=" text-center font-semibold mt-5 md:text-xl">
            Además, podrás contar con nuestro equipo para agregar
            funcionalidades personalizadas a tu plan.
          </p>
        </div>
      </div>
    </div>
  );
}
