import { CarouselItemCustom } from "@/components/personal-ui/CarouselItemCustom";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { SimpleLineChart } from "@/components/personal-ui/SimpleLineChart";

export function Carousel1() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItemCustom Title="Ánalisis complejos" />
        <CarouselItemCustom Title="Gestión de la producción" />
        <CarouselItemCustom Title="Gráficos en tiempo real">
          <div className="w-full h-full">
            <SimpleLineChart
              data={[
                { x: -10, y: 100 },
                { x: -9, y: 81 },
                { x: -8, y: 64 },
                { x: -7, y: 49 },
                { x: -6, y: 36 },
                { x: -5, y: 25 },
                { x: -4, y: 16 },
                { x: -3, y: 9 },
                { x: -2, y: 4 },
                { x: -1, y: 1 },
                { x: 0, y: 0 },
                { x: 1, y: 1 },
                { x: 2, y: 4 },
                { x: 3, y: 9 },
                { x: 4, y: 16 },
                { x: 5, y: 25 },
                { x: 6, y: 36 },
                { x: 7, y: 49 },
                { x: 8, y: 64 },
                { x: 9, y: 81 },
                { x: 10, y: 100 },
              ]}
            />
          </div>
        </CarouselItemCustom>
        <CarouselItemCustom Title="Control de calidad" />
        <CarouselItemCustom Title="Y mucho más" />
      </CarouselContent>
    </Carousel>
  );
}
