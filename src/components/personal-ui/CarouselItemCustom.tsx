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
      <section className="rounded-lg p-2 md:p-5 bg-blue-300 h-48">
        <header className="text-black md:text-xl text-center font-semibold">
          {Title}
        </header>
        <div className="w-full h-full py-4">{children}</div>
      </section>
    </CarouselItem>
  );
}
