"use client";

import { PropsWithChildren, useRef } from "react";
import { Button } from "./Button";

type CarouselProps = PropsWithChildren<{
  ariaLabel?: string;
}>;

export function Carousel({ children, ariaLabel }: CarouselProps) {
  const listRef = useRef<HTMLDivElement>(null);

  function scrollBy(dx: number) {
    const el = listRef.current;
    if (!el) return;
    el.scrollBy({ left: dx, behavior: "smooth" });
  }

  return (
    <div className="relative overflow-visible">
      <div className="absolute left-0 top-1/2 z-10 hidden -translate-x-full -translate-y-1/2 sm:block">
        <Button aria-label="Anterior" size="sm" variant="outline" onClick={() => scrollBy(-320)}>
          ←
        </Button>
      </div>
      <div className="absolute right-0 top-1/2 z-10 hidden translate-x-full -translate-y-1/2 sm:block">
        <Button aria-label="Próximo" size="sm" onClick={() => scrollBy(320)}>
          →
        </Button>
      </div>
      <div
        ref={listRef}
        aria-label={ariaLabel}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pr-1 sm:gap-5 [&>*]:snap-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </div>
    </div>
  );
}


