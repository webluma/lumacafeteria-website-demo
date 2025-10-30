import { MenuItem } from "@/app/lib/types";
import { Badge } from "./Badge";
export function ProductCard({ item }: { item: MenuItem }) {
  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[16/10] w-full bg-zinc-100" aria-hidden />
      <div className="flex items-start justify-between gap-3 p-5">
        <div>
          <h4 className="text-base font-semibold tracking-tight text-zinc-900">{item.name}</h4>
          <p className="mt-1 text-sm leading-6 text-zinc-600" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{item.description}</p>
        </div>
        {item.tag ? <Badge>{item.tag}</Badge> : null}
      </div>
      <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-sm font-medium text-zinc-900">{item.price}</span>
      </div>
    </div>
  );
}


