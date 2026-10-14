export default function Footer() {
  return (
    <footer className="mt-24 border-t-[3px] border-[#111] bg-[#111] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-14">
        <p className="font-[family-name:var(--font-display)] text-[clamp(4rem,17vw,13rem)] uppercase leading-[0.85] tracking-wide text-[#FFD60A]">
          Kicklane
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-[#111]">
          <span className="rounded-full bg-[#5BE3A4] px-4 py-1.5 motion-safe:-rotate-2">Free 30-day returns</span>
          <span className="rounded-full bg-[#4DB8FF] px-4 py-1.5 motion-safe:rotate-2">Arrives in 3 days</span>
          <span className="rounded-full bg-[#FF5CA8] px-4 py-1.5 motion-safe:-rotate-1">Walk loud</span>
        </div>
        <p className="mt-10 border-t border-white/20 pt-6 text-sm text-white/60">
          © 2026 Kicklane. All rights reserved.
        </p>
      </div>
    </footer>
  );
}