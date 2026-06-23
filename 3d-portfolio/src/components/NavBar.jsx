import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#030712]/85 shadow-[0_16px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-[#030712]/55 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-lg font-bold tracking-tight text-white md:text-xl">
          Aisha <span className="text-cyan-300">Arain</span>
        </a>

        <nav className="hidden items-center md:flex">
          <ul className="flex gap-7">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  className="text-sm font-medium text-white/65 transition hover:text-cyan-200"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-cyan-300/25 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-300 hover:text-slate-950"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default NavBar;
