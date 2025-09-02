import { useMemo, useState } from "react";
import { Search, Sparkles, Filter } from "lucide-react";
import { MENU_DATA } from "../constants/index";
import MenuCard from "./MenuCard";

// ---- Utility -----------------------------------
const formatPrice = (p: number) => `$${p}`;

// ---- UI: Category Section ----------------------
// function CategorySection({
//   title,
//   tagline,
//   items,
// }: {
//   title: string;
//   tagline: string;
//   items: any[];
// }) {
//   return (
//     <section className="space-y-6">
//       <div>
//         <p className="text-sm uppercase tracking-widest text-emerald-300/80">
//           {tagline}
//         </p>
//         <h2 className="mt-1 text-2xl md:text-3xl font-bold text-white">
//           {title}
//         </h2>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
//         {items.map((item) => (
//           <MenuCard key={item.id} item={item} />
//         ))}
//       </div>
//     </section>
//   );
// }

// ---- Main Page --------
export default function MenuPage() {
  const [activeCat, setActiveCat] = useState<string>(MENU_DATA[0].id);
  const [q, setQ] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | undefined>();

  const categories = MENU_DATA.map((c) => ({
    id: c.id,
    title: c.title,
    tagline: c.tagline,
  }));

  const flatItems = useMemo(
    () => MENU_DATA.flatMap((c) => c.items.map((i) => ({ ...i, catId: c.id }))),
    []
  );

  const filtered = useMemo(() => {
    return flatItems.filter((i) => {
      const inCat = activeCat ? i.catId === activeCat : true;
      const byQ = q
        ? `${i.name} ${i.desc}`.toLowerCase().includes(q.toLowerCase())
        : true;
      const byPrice = maxPrice ? i.price <= maxPrice : true;
      return inCat && byQ && byPrice;
    });
  }, [flatItems, activeCat, q, maxPrice]);

  const activeMeta = categories.find((c) => c.id === activeCat)!;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-10">
        {/* Title Block */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl text-[#FD6D00] font-extrabold tracking-tight">
                Our Delicious Food Menu
              </h1>
              <p className="mt-2 max-w-2xl text-white/70">
                Exclusive affair of exceptional flavors where every bite tells a
                story.
              </p>
            </div>
            {/* Search + Filters */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search dishes, ingredients..."
                  className="w-full rounded-xl bg-white/5 pl-11 pr-4 py-2.5 text-sm ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#292E70]"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-white/70 cursor-pointer" />
                <input
                  type="range"
                  min={10}
                  max={80}
                  step={1}
                  value={maxPrice ?? 80}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <span className="text-sm text-white/70">
                  Max {formatPrice(maxPrice ?? 80)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={[
                  "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm ring-1",
                  activeCat === c.id
                    ? "bg-[#292E70] text-white ring-transparent"
                    : "bg-white/5 text-white/90 ring-white/10 hover:bg-white/10",
                ].join(" ")}
              >
                <Sparkles className="h-4 w-4" />
                <span>{c.tagline}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Active Category Heading */}
        <section className="mb-8">
          <p className="text-sm uppercase tracking-widest text-[#FD6D00]">
            {activeMeta?.tagline}
          </p>
          <h2 className="mt-1 text-2xl md:text-3xl font-bold">
            {activeMeta?.title}
          </h2>
        </section>

        {/* Items Grid */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((i) => (
              <MenuCard key={`${i.catId}-${i.id}`} item={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-white/70">
              No items match your filters.
            </div>
          )}
        </section>
        <div className="my-10 flex flex-col gap-2 text-center md:text-right">
          <p className="text-2xl font-semibold">Explore more dishes from our menu! </p>
          <a href="#menu" className="text-[#FD6D00] md:text-lg font-medium">
            View Menu
          </a>
        </div>
      </main>
    </div>
  );
}
