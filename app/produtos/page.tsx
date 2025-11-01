"use client";

import { useMemo, useState } from "react";
import { Container } from "@/app/components/ui/Container";
import { ProductCard } from "@/app/components/ui/ProductCard";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { menu } from "@/app/data/menu";

type SortOption = "relevance" | "price-asc" | "price-desc";

function parsePriceToNumber(price: string): number {
  const onlyDigits = price.replace(/[^0-9,\.]/g, "").replace(".", "").replace(",", ".");
  const value = Number(onlyDigits);
  return Number.isNaN(value) ? 0 : value;
}

export default function ProdutosPage() {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<SortOption>("relevance");

  const categories = useMemo(() => [{ id: "todos", title: "Todos" }, ...menu.map(s => ({ id: s.id, title: s.title }))], []);

  const visibleSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const base = activeCategory === "todos" ? menu : menu.filter(s => s.id === activeCategory);

    const filtered = base.map(section => {
      const items = section.items.filter(item => {
        if (!normalizedQuery) return true;
        return (
          item.name.toLowerCase().includes(normalizedQuery) ||
          item.description.toLowerCase().includes(normalizedQuery) ||
          (item.tag ? item.tag.toLowerCase().includes(normalizedQuery) : false)
        );
      });
      return { ...section, items };
    });

    // sort items inside each section
    const sorted = filtered.map(section => {
      const items = [...section.items];
      if (sort === "price-asc") items.sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));
      if (sort === "price-desc") items.sort((a, b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price));
      return { ...section, items };
    });

    return sorted;
  }, [activeCategory, query, sort]);

  const totalCount = useMemo(() => menu.reduce((acc, s) => acc + s.items.length, 0), []);
  const visibleCount = useMemo(() => visibleSections.reduce((acc, s) => acc + s.items.length, 0), [visibleSections]);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Container className="pb-24 pt-12">
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-1 text-xs font-medium uppercase tracking-widest text-zinc-500">Catálogo</div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Produtos</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-700">Veja o que temos disponível na loja. Não realizamos vendas online.</p>
              <p className="mt-2 text-xs text-zinc-500">{visibleCount} de {totalCount} itens</p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
              <div className="relative w-full sm:w-72">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar por nome, descrição ou tag..."
                  className="w-full rounded-xl border border-zinc-200/80 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition focus:border-zinc-300 focus:ring-2 focus:ring-zinc-200/50"
                />
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="w-full rounded-xl border border-zinc-200/80 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-zinc-300 focus:ring-2 focus:ring-zinc-200/50 sm:w-56"
              >
                <option value="relevance">Ordenar: Relevância</option>
                <option value="price-asc">Preço: menor → maior</option>
                <option value="price-desc">Preço: maior → menor</option>
              </select>
            </div>
          </div>

          <div className="sticky top-14 z-10 -mx-2 mb-8 overflow-x-auto border-b border-zinc-200/70 bg-white/90 px-2 pb-1 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 md:top-16 md:mb-10">
            <div className="flex gap-2 py-3">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={
                    "whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition " +
                    (activeCategory === cat.id
                      ? "border-zinc-900 bg-zinc-900 text-white shadow-sm"
                      : "border-zinc-200/80 bg-white text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300")
                  }
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {visibleSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 py-8 md:py-10">
              <div className="mb-6 flex items-center justify-between md:mb-8">
                <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{section.title}</h2>
                <span className="text-xs font-medium text-zinc-500">{section.items.length} itens</span>
              </div>
              {section.items.length > 0 ? (
                <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-8 text-center text-sm text-zinc-600">Nenhum item encontrado nesta categoria.</div>
              )}
            </section>
          ))}

          {visibleCount === 0 && (
            <div className="mt-12 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-12 text-center">
              <p className="text-sm text-zinc-700">Nada encontrado para sua busca.</p>
              <button
                onClick={() => {
                  setQuery("");
                  setActiveCategory("todos");
                  setSort("relevance");
                }}
                className="mt-5 inline-flex items-center justify-center rounded-xl border border-zinc-200/80 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 hover:border-zinc-300"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}


