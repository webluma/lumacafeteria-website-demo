import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
  size?: "sm" | "md";
};

export function Button({ variant = "solid", size = "md", className, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full font-medium transition";
  const sizes = size === "sm" ? "px-3 py-1.5 text-xs" : "px-5 py-2 text-sm";
  const variants =
    variant === "outline"
      ? "border border-zinc-200/80 hover:bg-zinc-100 text-zinc-900"
      : "bg-zinc-900 hover:bg-zinc-800 text-white";

  return <button className={`${base} ${sizes} ${variants} ${className ?? ""}`.trim()} {...props} />;
}


