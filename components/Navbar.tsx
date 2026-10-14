import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-[#111] bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="rounded-xl border-[3px] border-[#111] bg-[#FF5CA8] px-3.5 py-1 font-[family-name:var(--font-display)] text-2xl uppercase tracking-wide shadow-[3px_3px_0_#111] transition-transform motion-safe:-rotate-2 motion-safe:hover:rotate-0"
        >
          Kicklane
        </Link>
        <ul className="flex items-center gap-2 text-sm font-bold">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full border-2 border-transparent px-4 py-2 transition-colors hover:border-[#111] hover:bg-[#FFD60A]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}