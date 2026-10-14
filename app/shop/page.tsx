"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product";

const filters = ["All", "Men", "Women", "Kids"] as const;

export default function Shop() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [sort, setSort] = useState<"default" | "low" | "high">("default");

  const visible = products
    .filter((p) => filter === "All" || p.category === filter)
    .sort((a, b) =>
      sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : a.id - b.id
    );

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-wrap items-center gap-5">
        <h1 className="font-[family-name:var(--font-display)] text-6xl uppercase leading-[0.9] tracking-wide sm:text-8xl">
          All sneakers
        </h1>
        <span
          className="flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#111] bg-[#FFD60A] text-center font-[family-name:var(--font-display)] text-2xl leading-none shadow-[3px_3px_0_#111] motion-safe:rotate-12"
          aria-live="polite"
        >
          {visible.length}
          <br />
          {visible.length === 1 ? "pair" : "pairs"}
        </span>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border-[3px] border-[#111] px-5 py-2 text-sm font-extrabold transition-all ${
                filter === f
                  ? "bg-[#FF5CA8] shadow-[3px_3px_0_#111] motion-safe:-rotate-2"
                  : "bg-white hover:bg-[#FFD60A]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "default" | "low" | "high")}
          aria-label="Sort by price"
          className="rounded-full border-[3px] border-[#111] bg-[#4DB8FF] px-5 py-2 text-sm font-extrabold shadow-[3px_3px_0_#111]"
        >
          <option value="default">Featured</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}