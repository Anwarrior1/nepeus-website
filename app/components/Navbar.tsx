"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/80 bg-white/75 shadow-[0_18px_60px_rgba(10,10,12,0.08)] backdrop-blur-2xl"
          : "border-b border-white/40 bg-white/40 backdrop-blur-xl"
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between gap-5">
        <a href="#top" className="group flex items-center gap-3" aria-label="Nepeus home">
          <span className="glass-card flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-105">
            <img src="/nepeus-logo.png" alt="" className="h-10 w-10 object-cover" />
          </span>
          <span className="text-lg font-semibold text-ink">Nepeus</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-steel transition-colors duration-200 hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="primary-button hidden px-4 py-2.5 sm:px-5 md:inline-flex"
          >
            Automate My Business
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="glass-chip inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-200 hover:scale-105 active:scale-95 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0.5 h-0.5 w-5 rounded-full bg-ink transition-all duration-300 ${
                  menuOpen ? "top-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-ink transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-ink transition-all duration-300 ${
                  menuOpen ? "top-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-20 z-40 border-b border-white/80 bg-white/90 shadow-[0_24px_60px_rgba(10,10,12,0.12)] backdrop-blur-2xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="section-shell flex flex-col gap-2 py-6">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="rounded-xl px-4 py-3 text-base font-medium text-steel transition hover:bg-white/50 hover:text-ink"
              style={menuOpen ? { animationDelay: `${index * 60}ms` } : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="primary-button mt-3 w-full justify-center px-4 py-3"
          >
            Automate My Business
          </a>
        </div>
      </div>
    </header>
  );
}
