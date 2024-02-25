import { Carousel1 } from "@/components/mainPage/Carousel1";
import { ArrowBigDown } from "lucide-react";
export function Diapo1() {
  return (
    <div className="w-full min-h-screen bg-blue-50 md:px-10">
      <header className="py-5 text-5xl md:text-9xl font-extrabold text-center text-red-700">
        <span className="text-black">Indust</span>MAX
        <div className="text-xl md:text-6xl text-slate-900 mt-2 font-bold">
          <p>La mejor solución para tu empresa</p>
          <p>en el sector industrial</p>
        </div>
      </header>
      <div className="md:grid md:grid-cols-2 md:mt-10 p-1 md:gap-4">
        <article className="bg-blue-400 rounded-lg shadow-lg p-2 md:p-0">
          <header className="text-2xl md:text-4xl font-bold text-center pt-1 md:pt-10">
            <p>
              Con increíbles{" "}
              <span className="text-red-600">características</span> de utilidad
            </p>
          </header>
          <section className="md:p-5 mt-5 md:mt-10">
            <Carousel1 />
          </section>
          <div>
            <p className="md:text-2xl text-center font-medium mt-5">
              <strong>
                Con <span className="text-red-600">IndustMAX</span> podrás
                llevar un control total de tus procesos de producción, desde la
                recepción de materiales hasta el envío de productos terminados.
              </strong>
            </p>
          </div>
        </article>
        <img
          src="https://www.desotec.com/uploads/Industry/shutterstock_1452861395.jpg"
          alt="Imagen de la industria quimica"
          className="aspect-video rounded-lg shadow-lg mt-5 md:mt-0"
        />
      </div>
      <section className="text-center font-bold md:text-4xl mt-5">
        <header>Descúbrenos</header>
        <ArrowBigDown size={50} className="mx-auto animate-bounce mt-3" />
      </section>
    </div>
  );
}
