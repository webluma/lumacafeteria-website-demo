import Link from "next/link";

export function SectionHeader({
  title,
  eyebrow,
  href,
  cta = "Ver Cardápio Completo",
}: {
  title: string;
  eyebrow?: string;
  href: string;
  cta?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <div>
        {eyebrow ? (
          <div className="mb-1 text-xs font-medium uppercase tracking-widest text-zinc-500">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      </div>
      <Link href={href} className="text-sm text-zinc-700 underline-offset-4 hover:underline">
        {cta}
      </Link>
    </div>
  );
}






