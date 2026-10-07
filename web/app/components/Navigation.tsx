"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = ["Features", "Rates", "Business"];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hold the page still behind the open menu. This goes on <html>, not <body>:
  // <html> is the scrolling element here, so locking <body> does nothing (and
  // measuring showed it also collapsed the `overflow-x: clip` guard to `hidden`).
  // Only the y-axis is touched, so that guard is left alone. The menu's trigger
  // is lg:hidden, so widening past lg would otherwise strand the page locked with
  // nothing on screen to unlock it; closing at that breakpoint avoids the dead end.
  useEffect(() => {
    if (!isOpen) return;

    const root = document.documentElement;
    const previous = root.style.overflowY;
    root.style.overflowY = "hidden";

    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => desktop.matches && setIsOpen(false);
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      root.style.overflowY = previous;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <nav
      // The bar is transparent over the hero, but an OPEN mobile menu needs a
      // surface of its own — otherwise the panel sits directly on the hero and the
      // links are unreadable. Opening the menu gives it the same treatment that
      // scrolling does.
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="page-container py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/hero/logo.png"
              alt="Apex Network"
              width={120}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link}
                className="text-p-md font-medium text-gray-800 hover:text-primary transition"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-p-sm font-medium hover:bg-gray-50 transition">
              <span>🇺🇸</span>
              <span>ENG</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-dark hover:btn-dark-hover text-white px-6 py-2.5 rounded-full text-p-sm font-medium transition">
              Login
            </button>
            <button className="bg-white text-black border border-gray-200 px-5 py-2.5 rounded-full text-p-sm font-medium hover:bg-gray-50 transition">
              Open an Account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col gap-4 mt-6 pb-4 border-t border-gray-100 pt-6">
            {navLinks.map((link) => (
              <button
                key={link}
                className="text-left text-p-md font-medium text-gray-800 hover:text-primary transition py-2"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </button>
            ))}
            <button className="btn-dark text-white px-6 py-3 rounded-full font-medium mt-2">
              Login
            </button>
            <button className="bg-white text-black border border-gray-200 px-6 py-3 rounded-full font-medium">
              Open an Account
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
