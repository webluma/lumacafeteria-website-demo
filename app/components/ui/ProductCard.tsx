"use client";

import { MenuItem } from "@/app/lib/types";
import { Modal } from "./Modal";
import { useId, useState } from "react";

export function ProductCard({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition hover:border-zinc-300 hover:shadow-md focus-within:ring-2 focus-within:ring-zinc-200">
      {/* Media placeholder (space reserved for future image) */}
      <div className="relative aspect-[4/3] w-full bg-zinc-50">
        <div className="pointer-events-none absolute inset-0 border-b border-zinc-200/80" aria-hidden />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h4
            className="text-base font-semibold tracking-tight text-zinc-900"
            style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}
          >
            {item.name}
          </h4>
          <span className="shrink-0 text-sm font-semibold text-zinc-900">{item.price}</span>
        </div>
        <p
          className="text-sm leading-6 text-zinc-600"
          style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: "4.5rem" }}
        >
          {item.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-zinc-200/80 bg-white px-5 py-3">
        <div className="flex items-center justify-end">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={detailsId}
            onClick={() => setOpen(true)}
            className="text-[11px] uppercase tracking-wide text-zinc-600 underline-offset-4 hover:underline focus:underline"
          >
            Detalhes
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)} title={item.name}>
        <div className="text-sm text-zinc-700">
          {/* Summary */}
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-zinc-500">Descrição</p>
              <p className="mt-1 leading-6">{item.longDescription ?? item.description}</p>
            </div>
            <div className="shrink-0 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-right">
              <div className="text-[11px] uppercase tracking-wide text-zinc-500">Preço</div>
              <div className="text-base font-semibold text-zinc-900">{item.price}</div>
            </div>
          </div>

          {/* Grid details */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">Informações</div>
              <dl className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-zinc-500">Calorias</dt>
                  <dd>{typeof item.calories === "number" ? `${item.calories} kcal` : "—"}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-zinc-500">Porção</dt>
                  <dd>{item.size ?? "—"}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-zinc-500">Código</dt>
                  <dd>{item.id}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">Ingredientes</div>
              <p className="leading-6">{item.ingredients?.length ? item.ingredients.join(", ") : "—"}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}


