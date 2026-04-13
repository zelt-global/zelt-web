"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Ramp", href: "#ramp" },
  { label: "API", href: "#api" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(3,11,24,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logos/logo-white.png"
            alt="Zelt"
            width={88}
            height={26}
            className="h-7 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.6)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.6)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
            }
          >
            Log In
          </a>
          <a
            href="#demo"
            className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              color: "#fff",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 20px rgba(59,130,246,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            Book a Demo →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-px bg-white mb-1.5" />
          <div className="w-5 h-px bg-white mb-1.5" />
          <div className="w-5 h-px bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(3,11,24,0.98)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#demo"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold px-5 py-2.5 rounded-full text-center"
            style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }}
          >
            Book a Demo →
          </a>
        </div>
      )}
    </header>
  );
}
