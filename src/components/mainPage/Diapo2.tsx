import { Card } from "@/components/personal-ui/Card";

export function Diapo2() {
  return (
    <div className="h-[110vh] md:h-[100vh] mx-2 md:mx-5">
      <header>
        <h2 className="text-4xl md:text-8xl font-bold text-center text-black md:py-5">
          <strong>
            ¿Qué es Indust<span className="text-red-700">MAX</span>?
          </strong>
        </h2>
        <p className="text-lg md:text-4xl text-center md:mt-10 mt-2 mx-2 md:mx-0 font-semibold">
          IndustMAX es una{" "}
          <span className="text-red-700">solución integral</span> para la
          gestión de la producción en la industria.
        </p>
      </header>
      <div className="md:grid md:grid-cols-2 md:mt-5 bg-blue-400 rounded-lg md:py-5">
        <div className="md:m-5 p-3 grid grid-cols-1 content-center rounded-lg ">
          <img
            src="https://cdn.illacloud.com/illa-website/blog/shadcn-ui-2024/shadcn-ui.png"
            alt="Imagen donde se ve una aplicación que controla y administra recursos."
            className="aspect-video md:h-80 mx-auto rounded-lg border scale-105 hover:scale-110 transition-all"
          />
        </div>
        <div className="my-auto text-base md:text-2xl md:mt-5">
          <p className="text-center">
            Podrás tener un <span className="text-red-700">control total</span>{" "}
            de tus procesos de producción.
          </p>
          <h2 className="font-bold md:text-xl text-center pt-2 md:pt-5">
            Con planes pensados para cada tipo de industria
          </h2>
          <div className="flex justify-evenly mt-4">
            <Card
              title="Plan estándar"
              desc="mensuales"
              price="$20"
              size="sm"
            />
            <Card title="Plan Plus" desc="mensuales" price="$70" size="sm" />
            <Card
              title="Personalizado"
              desc="mensuales"
              price="$150"
              size="sm"
            />
          </div>
          <p className="text-center mt-5 md:text-2xl">
            Además, podrás contar con nuestro equipo para agregar
            <span className="text-red-700">
              {" "}
              funcionalidades personalizadas
            </span>{" "}
            a tu plan.
          </p>
        </div>
      </div>
      <section className="rounded-xl w-full h-40 md:mt-16 mt-5 flex gap-5 md:gap-20">
        <section className="bg-blue-400 rounded-lg w-1/2"></section>
        <section className="bg-blue-400 rounded-lg w-1/2"></section>
      </section>
    </div>
  );
}
