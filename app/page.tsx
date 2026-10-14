"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product";

const perks = [
  { title: "Free returns", text: "Send them back within 30 days. No questions.", bg: "bg-[#5BE3A4]", tilt: "motion-safe:-rotate-1" },
  { title: "Fast delivery", text: "Most orders land at your door in 3 days.", bg: "bg-[#4DB8FF]", tilt: "motion-safe:rotate-1" },
  { title: "Built to last", text: "Tough rubber soles made for daily walking.", bg: "bg-[#FF7A1A]", tilt: "motion-safe:-rotate-1" },
];

const ticker = "FREE RETURNS ★ 3-DAY DELIVERY ★ NEW DROPS ★ WALK LOUD ★ ";

export default function Home() {
  const [joined, setJoined] = useState(false);
  const hero = products.find((p) => p.image.includes("drift-low")) ?? products[0];

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden border-b-[3px] border-[#111] bg-[#FFD60A]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-block rounded-full border-[3px] border-[#111] bg-[#FF5CA8] px-4 py-1.5 text-sm font-extrabold shadow-[3px_3px_0_#111] motion-safe:-rotate-3">
              New drops are here!
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(5.5rem,17vw,13rem)] uppercase leading-[0.85] tracking-wide">
              Walk
              <br />
              <span className="text-white [-webkit-text-stroke:3px_#111] [text-shadow:6px_6px_0_#111]">
                loud!
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg font-semibold">
              Streetwear sneakers for every day, priced like you have rent to pay.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="rounded-full border-[3px] border-[#111] bg-[#111] px-8 py-3.5 text-sm font-extrabold text-white shadow-[5px_5px_0_#FF5CA8] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                Shop sneakers
              </Link>
              <Link
                href="/shop"
                className="rounded-full border-[3px] border-[#111] bg-white px-8 py-3.5 text-sm font-extrabold shadow-[5px_5px_0_#111] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                Explore drops
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-3xl border-[3px] border-[#111] bg-[#FF5CA8] p-3 shadow-[8px_8px_0_#111] motion-safe:rotate-2">
              <div className="relative aspect-square overflow-hidden rounded-2xl border-[3px] border-[#111] bg-white">
                <Image
                  src={hero.image}
                  alt={hero.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <span className="absolute -left-3 bottom-6 flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-[#111] bg-[#FF7A1A] text-center font-[family-name:var(--font-display)] text-3xl shadow-[4px_4px_0_#111] motion-safe:-rotate-12 sm:-left-8 sm:h-28 sm:w-28">
              ${hero.price}
            </span>
            <span className="absolute -right-2 -top-4 rounded-xl border-[3px] border-[#111] bg-[#5BE3A4] px-4 py-2 text-sm font-extrabold shadow-[3px_3px_0_#111] motion-safe:rotate-6">
              Free returns!
            </span>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-x-clip py-6">
        <div className="-mx-6 whitespace-nowrap border-y-[3px] border-[#111] bg-[#111] py-3 font-[family-name:var(--font-display)] text-3xl uppercase tracking-wider text-[#FFD60A] motion-safe:-rotate-1">
          {ticker.repeat(6)}
        </div>
      </div>

      {/* Featured */}
      <section aria-labelledby="featured" className="mx-auto max-w-7xl px-6 pt-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="featured"
            className="font-[family-name:var(--font-display)] text-5xl uppercase tracking-wide sm:text-7xl"
          >
            Just dropped
          </h2>
          <Link
            href="/shop"
            className="rounded-full border-[3px] border-[#111] bg-[#4DB8FF] px-6 py-2.5 text-sm font-extrabold shadow-[4px_4px_0_#111] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Shop all
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto mt-24 grid max-w-7xl gap-6 px-6 sm:grid-cols-3">
        {perks.map((perk) => (
          <div
            key={perk.title}
            className={`rounded-2xl border-[3px] border-[#111] p-6 shadow-[5px_5px_0_#111] ${perk.bg} ${perk.tilt}`}
          >
            <h3 className="font-[family-name:var(--font-display)] text-3xl uppercase tracking-wide">
              {perk.title}
            </h3>
            <p className="mt-2 text-sm font-semibold">{perk.text}</p>
          </div>
        ))}
      </section>

      {/* Restock list */}
      <section className="mt-24 border-y-[3px] border-[#111] bg-[#FF5CA8]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl uppercase leading-[0.9] tracking-wide sm:text-7xl">
            Get the restock before it{" "}
            <span className="text-white [-webkit-text-stroke:2px_#111] [text-shadow:4px_4px_0_#111]">
              sells out!
            </span>
          </h2>
          {joined ? (
            <p className="mt-6 inline-block rounded-xl border-[3px] border-[#111] bg-white px-5 py-3 font-bold shadow-[4px_4px_0_#111]" role="status">
              You&apos;re on the list! We&apos;ll email you before the next restock.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setJoined(true);
              }}
              className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                aria-label="Email address"
                className="flex-1 rounded-full border-[3px] border-[#111] bg-white px-5 py-3 text-sm font-semibold placeholder:text-[#111]/50 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#111]"
              />
              <button
                type="submit"
                className="rounded-full border-[3px] border-[#111] bg-[#111] px-7 py-3 text-sm font-extrabold text-white shadow-[4px_4px_0_#FFD60A] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                Notify me
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}