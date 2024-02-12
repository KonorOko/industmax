import "./App.css";
import CarouselTop from "@/components/mainPage/CarouselTop";
import { ArrowBigDown } from "lucide-react";

function App() {
  return (
    <div className="snap-y h-screen overflow-y-auto snap-mandatory">
      <section className="snap-center h-screen flex items-center justify-center bg-cover bg-center m-0 ">
        <div className="w-full h-full">
          <header style={{ userSelect: "none" }}>
            <h1 className="md:text-9xl font-bold text-center mb-12 mt-32">
              <strong>
                Indust<span className="text-red-700">MAX</span>
              </strong>{" "}
              <br />
            </h1>
            <p className="md:text-8xl font-bold text-center text-slate-950">
              La <span className="text-red-500">solución</span> a una{" "}
              <span className="text-red-500">industria</span> en desorden
            </p>
          </header>
          <CarouselTop />
          <p className="text-4xl font-bold text-center text-slate-950 mt-12">
            <strong>Conoce más</strong>
          </p>
          <ArrowBigDown className="h-16 mt-6 w-16 text-center mx-auto animate-bounce" />
        </div>
      </section>
      <section className="bg-red-500 snap-center h-screen w-full p-10">
        <header >
          <h1 className="md:text-8xl font-bold text-center text-white">
            <strong>¿Qué es IndustMAX?</strong>
          </h1>
          <p className="md:text-4xl font-bold text-center text-white mt-6">
            <strong>
              IndustMAX es una solución integral para la gestión de la
              producción en la industria.
            </strong>
          </p>
        </header>
      </section>
      <section className="bg-blue-500 snap-center h-screen"></section>
      <section className="bg-yellow-500 snap-center h-screen"></section>
    </div>
  );
}

export default App;
