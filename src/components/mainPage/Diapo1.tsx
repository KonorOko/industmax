import { Carousel1 } from "@/components/mainPage/Carousel1";
import { ArrowBigDown } from "lucide-react";
export function Diapo1() {
  return (
    <div className="w-full min-h-screen md:px-10">
      <header className="py-5 text-5xl md:text-9xl font-extrabold text-center text-red-700">
        <span className="text-black">Indust</span>MAX
        <div className="text-xl md:text-6xl text-slate-900 mt-2 font-bold">
          <p>La mejor solución para tu empresa</p>
          <p>en el sector industrial</p>
        </div>
      </header>
      <div className="flex flex-col md:grid md:grid-cols-2 md:mt-10 p-1 md:gap-10 ">
        <article className="bg-blue-400 rounded-lg shadow-lg p-2 md:p-0 order-last md:order-none">
          <header className="text-2xl md:text-4xl font-bold text-center pt-1 md:pt-10">
            <p>
              Con increíbles{" "}
              <span className="text-red-600">características</span> de utilidad
            </p>
          </header>
          <section className="md:p-5 mt-5 md:mt-10">
            <Carousel1 />
          </section>
          <p className="md:text-2xl text-center font-extralight md:font-normal my-5 md:p-2">
            Con <span className="font-bold">Indust</span>
            <span className="text-red-700">MAX</span> podrás llevar un control
            total de tus procesos de producción, desde la recepción de
            materiales hasta el envío de productos terminados.
          </p>
        </article>
        <div className="md:bg-blue-500 content-center grid grid-cols-1 rounded-lg">
          <img
            src="https://www.desotec.com/uploads/Industry/shutterstock_1452861395.jpg"
            alt="Imagen de industria en la que se ve una fábrica con humo saliendo de las chimeneas y un cielo azul con nubes blancas."
            className="aspect-video rounded-lg md:shadow-2xl mb-5 md:mb-0 md:scale-105 transition-all hover:-translate-y-2"
          />
        </div>
      </div>
      <section className="text-center font-bold md:text-4xl mt-5">
        <header>Descúbrenos</header>
        <ArrowBigDown size={50} className="mx-auto animate-bounce mt-3" />
      </section>
    </div>
  );
}
