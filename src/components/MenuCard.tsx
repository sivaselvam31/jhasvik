import {
  Star,
} from "lucide-react";

const formatPrice = (p: number) => `€${p}`;

function MenuCard({ item }: { item: any }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/40 ring-1 ring-white/10 hover:ring-white/20 transition-all shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 md:p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">
            {item.name}
          </h3>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/90">
            {formatPrice(item.price)}
          </span>
        </div>
        {item.badge && (
          <div className="flex items-center gap-2 text-xs text-emerald-300/90">
            <Star className="h-3.5 w-3.5" /> {item.badge}
          </div>
        )}
        <p className="text-sm text-white/70">{item.desc}</p>
        {/* <div className="mt-2 flex items-center gap-3 text-xs text-white/60">
          <Flame className="h-4 w-4" />
          <span>{item.kcal} kcal</span>
          <Leaf className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div> */}
      </div>
      {/* <button className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 hover:bg-white/20">
        Add <ChevronRight className="h-3.5 w-3.5" />
      </button> */}
    </div>
  );
}

export default MenuCard;