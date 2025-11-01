"use client";

import { MenuItem } from "@/app/lib/types";
import { Modal } from "./Modal";
import { useId, useState } from "react";
import Image from "next/image";

const imageMap: Record<string, string> = {
  espresso: "espresso.png",
  latte: "latte.png",
  capuccino: "cappuccino.png",
  americano: "americano.png",
  flatwhite: "flat_white.png",
  v60: "v60.png",
  coldbrew: "cold_brew.png",
  icedlatte: "iced_latte.png",
  tonic: "espresso_tonica.png",
  matchalatte: "matcha_latte.png",
  icedamericano: "iced_americano.png",
  orangecoffee: "orange_coffee.png",
  pumpkin: "pumpkim_latte.png",
  maple: "maple_latte.png",
  gingerbread: "gingerbread_latte.png",
  strawberrymatcha: "strawberry_matcha.png",
  cookie: "cookies.png",
  brownie: "brownie.png",
  cheesecake: "cheesecake.png",
  carrot: "bolo_de_cenoura.png",
  paoqueijo: "pao_de_queijo.png",
  quiche: "quiche.png",
  coxinha: "coxinha.png",
};

export function ProductCard({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const imagePath = imageMap[item.id] ? `/images/cardapio/${imageMap[item.id]}` : null;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all hover:border-zinc-300 hover:shadow-lg focus-within:ring-2 focus-within:ring-zinc-200/50">
      {/* Media */}
      <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-zinc-50 to-zinc-100/50 overflow-hidden">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="pointer-events-none absolute inset-0 border-b border-zinc-200/60" aria-hidden />
        )}
        {item.tag ? (
          <div className="absolute right-3 top-3 z-10">
            <span className="inline-block rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-700 shadow-sm backdrop-blur-sm">{item.tag}</span>
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h4
              className="text-base font-semibold tracking-tight text-zinc-900"
              style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}
            >
              {item.name}
            </h4>
          </div>
          <span className="shrink-0 text-base font-semibold text-zinc-900">{item.price}</span>
        </div>
        <p
          className="text-sm leading-6 text-zinc-600"
          style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: "4.5rem" }}
        >
          {item.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-zinc-200/60 bg-zinc-50/30 px-6 py-4">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={detailsId}
          onClick={() => setOpen(true)}
          className="text-xs font-medium uppercase tracking-wider text-zinc-700 underline-offset-4 transition hover:text-zinc-900 hover:underline focus:text-zinc-900 focus:underline"
        >
          Ver detalhes
        </button>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)} title={item.name}>
        <div className="space-y-4">
          {/* Image */}
          {imagePath && (
            <div className="relative -mx-6 -mt-6 w-[calc(100%+3rem)] overflow-hidden sm:-mx-8 sm:-mt-8 sm:w-[calc(100%+4rem)]">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={imagePath}
                  alt={item.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 65%" }}
                  sizes="(min-width: 1024px) 896px, (min-width: 768px) 704px, 100vw"
                />
              </div>
              {item.tag ? (
                <div className="absolute right-4 top-4 z-10">
                  <span className="inline-block rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-700 shadow-sm backdrop-blur-sm">{item.tag}</span>
                </div>
              ) : null}
            </div>
          )}
          {/* Summary */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1 space-y-2">
              <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Descrição</div>
              <p className="text-sm leading-7 text-zinc-700">{item.longDescription ?? item.description}</p>
            </div>
            <div className="shrink-0 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 px-5 py-3 text-right sm:w-36">
              <div className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Preço</div>
              <div className="mt-1 text-xl font-semibold text-zinc-900">{item.price}</div>
            </div>
          </div>

          {/* Grid details */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/30 p-5">
              <div className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">Informações</div>
              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-3 border-b border-zinc-200/60 pb-2">
                  <dt className="text-zinc-600">Calorias</dt>
                  <dd className="font-medium text-zinc-900">{typeof item.calories === "number" ? `${item.calories} kcal` : "—"}</dd>
                </div>
                <div className="flex items-center justify-between gap-3 border-b border-zinc-200/60 pb-2">
                  <dt className="text-zinc-600">Porção</dt>
                  <dd className="font-medium text-zinc-900">{item.size ?? "—"}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-zinc-600">Código</dt>
                  <dd className="font-medium text-zinc-900 font-mono text-xs">{item.id}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/30 p-5">
              <div className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">Ingredientes</div>
              <p className="text-sm leading-7 text-zinc-700">{item.ingredients?.length ? item.ingredients.join(", ") : "—"}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}


