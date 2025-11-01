import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Luma Cafeteria"
            width={32}
            height={32}
            className="h-8 w-8"
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
      </Container>
    </header>
  );
}
