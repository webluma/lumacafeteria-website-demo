"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
};

export function Modal({ open, onClose, title, children }: PropsWithChildren<ModalProps>) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      lastActiveRef.current = document.activeElement as HTMLElement;
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
      setTimeout(() => dialogRef.current?.focus(), 0);
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      lastActiveRef.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      {/* Panel wrapper */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <div
          ref={dialogRef}
          tabIndex={-1}
          className="w-full max-w-2xl max-h-[90vh] rounded-2xl border border-zinc-200/80 bg-white shadow-2xl outline-none overflow-hidden flex flex-col sm:rounded-3xl md:max-w-3xl"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-zinc-200/70 bg-white px-6 py-3 sm:px-8">
            <h3 id="modal-title" className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">
              {title}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-xl p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-200/50"
              aria-label="Fechar modal"
            >
              <span aria-hidden className="text-lg leading-none">×</span>
            </button>
          </div>
          {/* Body */}
          <div className="px-6 py-6 sm:px-8 sm:py-7 flex-1 min-h-0 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}


