"use client";

import { Container } from "@/app/components/ui/Container";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white">
      <Container className="flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Luma Cafeteria"
            width={150}
            height={50}
            className="h-10 w-auto"
          />
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="/historia" className="hover:underline underline-offset-4">
            História
          </a>
          <a href="/produtos" className="hover:underline underline-offset-4">
            Produtos
          </a>
          <a href="/endereco" className="hover:underline underline-offset-4">
            Endereço
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200"
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>
      {mobileMenuOpen && (
        <div className="border-t border-zinc-200/70 bg-white md:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-4 text-sm">
              <a
                href="/historia"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:underline underline-offset-4 py-2"
              >
                História
              </a>
              <a
                href="/produtos"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:underline underline-offset-4 py-2"
              >
                Produtos
              </a>
              <a
                href="/endereco"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:underline underline-offset-4 py-2"
              >
                Endereço
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
