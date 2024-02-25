import { CarouselItemCustom } from "@/components/personal-ui/CarouselItemCustom";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
        <CarouselItemCustom Title="Gráficos en tiempo real" />
        <CarouselItemCustom Title="Control de calidad" />
        <CarouselItemCustom Title="Y mucho más" />
      </CarouselContent>
    </Carousel>
  );
}
