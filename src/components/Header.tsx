"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "./ui/Button";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Proceso", href: "#proceso" },
  { name: "FAQ", href: "#faq" },
  { name: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(13,27,42,0.9)] backdrop-blur-md border-b border-[rgba(46,134,222,0.15)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-2 group">
          <span className="font-heading font-black text-2xl tracking-tighter text-white">
            VICTORIA<span className="text-[#2E86DE]">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[#D9D9D9] hover:text-[#2E86DE] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button 
            href={whatsappUrl} 
            asExternal 
            size="sm"
            onClick={() => trackEvent({ name: 'generate_lead', params: { lead_type: 'whatsapp', location: 'header_desktop' } })}
          >
            Reservar Turno
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0D1B2A] border-b border-[rgba(46,134,222,0.15)] shadow-xl pb-6 px-6 flex flex-col gap-4 animate-fade-in-up">
          <ul className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-lg font-medium text-white hover:text-[#2E86DE] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.1)]">
            <Button
              href={whatsappUrl}
              asExternal
              className="w-full"
              onClick={() => {
                setIsMobileMenuOpen(false);
                trackEvent({ name: 'generate_lead', params: { lead_type: 'whatsapp', location: 'header_mobile' } });
              }}
            >
              Reservar Turno
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
