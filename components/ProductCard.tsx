import Image from "next/image";
import { product } from "@/types/product";

const tints = ["bg-[#FF5CA8]", "bg-[#4DB8FF]", "bg-[#5BE3A4]", "bg-[#FF7A1A]"];

export default function ProductCard({ product }: { product: product }) {
  return (
    <article className="group rounded-2xl border-[3px] border-[#111] bg-white shadow-[5px_5px_0_#111] transition-transform duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:-rotate-1">
      <div className={`relative m-2 aspect-[4/5] rounded-xl border-[3px] border-[#111] ${tints[product.id % tints.length]}`}>
        <div className="absolute inset-0 overflow-hidden rounded-[9px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#111] bg-[#FFD60A] font-[family-name:var(--font-display)] text-lg shadow-[2px_2px_0_#111] motion-safe:rotate-12">
          ${product.price}
        </span>
      </div>
      <div className="px-4 pb-4 pt-2">
        <h3 className="font-[family-name:var(--font-display)] text-xl uppercase tracking-wide">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="rounded-full border-2 border-[#111] px-3 py-0.5 text-xs font-bold">
            {product.category}
          </span>
          <span className="flex gap-1" aria-label="Available colors">
            {product.colors.map((c) => (
              <span key={c} className="h-4 w-4 rounded-full border-2 border-[#111]" style={{ background: c }} />
            ))}
          </span>
        </div>
      </div>
    </article>
  );
}