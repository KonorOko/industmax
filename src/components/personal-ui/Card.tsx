export function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border rounded-lg text-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm">{desc}</p>
    </div>
  );
}
