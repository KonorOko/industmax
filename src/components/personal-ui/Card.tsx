export function Card({
  title,
  desc,
  className,
  price,
  size = "md",
}: {
  title: string;
  desc: string;
  className?: string;
  price: string;
  size?: string;
}) {
  return (
    <div
      className={`shadow p-2 select-none hover:scale-105 transition-all rounded-lg text-center bg-blue-300 grid grid-cols-1 ${
        size === "sm" && "md:h-40 md:w-48"
      } ${className}`}
    >
      <h2 className="md:text-xl font-semibold">{title}</h2>
      <p className="font-bold text-lg md:text-4xl">{price}</p>
      <p className="text-base">{desc}</p>
    </div>
  );
}
