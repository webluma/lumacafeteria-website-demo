import { PropsWithChildren } from "react";

export function Badge({ children }: PropsWithChildren) {
  return (
    <span className="rounded-full bg-zinc-900/5 px-2.5 py-1 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-zinc-900/10">
      {children}
    </span>
  );
}






