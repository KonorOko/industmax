import { CarouselItem } from "../ui/carousel";

export function CarouselItemCustom({
  Title,
  children,
}: {
  Title: string;
  children?: React.ReactNode;
}) {
  return (
    <CarouselItem className="basis-1/3">
      <section className="rounded-lg p-2 md:p-5 bg-blue-300 h-16 md:h-48 grid content-center items-center align-middle md:block">
        <header className="text-black md:text-xl text-center font-semibold">
          {Title}
        </header>
        <div className="w-full h-full py-4 hidden md:block">{children}</div>
      </section>
    </CarouselItem>
  );
}
