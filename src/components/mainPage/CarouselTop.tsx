import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { LineChartBasic } from "@/components/LineChartBasic";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import TestData from '@/data/data1.json'



function CarouselTop() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <Carousel className="w-full md:my-16 md:px-5" plugins={[plugin.current]}>
      <CarouselContent className="md:p-10">
        <CarouselItem className="basis-1/3">
          <section className="rounded-lg md:h-60 p-5 shadow">
            <header className="text-black md:text-3xl text-center font-semibold">
              Gráficos en tiempo real
            </header>
            <div className="w-full h-full py-4">
              <LineChartBasic data={TestData} dataKeys={["uv", "pv"]} xaxis="" />
            </div>
          </section>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <section className="rounded-lg md:h-60 p-5 shadow">
            <header className="text-black md:text-3xl text-center font-semibold">
              Ánalisis de datos
            </header>
          </section>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <section className="rounded-lg md:h-60 p-5 shadow">
            <header className="text-black md:text-3xl text-center font-semibold">
              Control de producción
            </header>
          </section>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <section className="rounded-lg md:h-60 p-5 shadow ">
            <header className="text-black md:text-3xl text-center font-semibold">
              Control de calidad
            </header>
          </section>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <section className="rounded-lg md:h-60 p-5 shadow">
            <header className="text-black md:text-3xl text-center font-semibold">
              Control de inventario
            </header>
          </section>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <section className="rounded-lg md:h-60 p-5 shadow">
            <header className="text-black md:text-3xl text-center font-semibold">
              Control de producción
            </header>
          </section>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export default CarouselTop;
