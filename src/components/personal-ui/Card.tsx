export function Card({ title, desc, className, size = "md" }: { title: string; desc: string, className?: string, size?: string }) {
  return (
    <div className={`shadow p-2 select-none hover:scale-105 transition-all rounded-lg text-center bg-blue-300 ${size === "sm" && "md:h-52 md:w-48"} ${className}`} >
      <h2 className="md:text-xl font-bold">{title}</h2>
      <p className="text-sm">{desc}</p>
    </div>
  );
}
