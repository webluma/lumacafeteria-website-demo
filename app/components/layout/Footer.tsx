import { Container } from "@/app/components/ui/Container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Luma Cafeteria" width={24} height={24} className="h-6 w-6" />
          <p className="text-zinc-600">© {new Date().getFullYear()} Luma Cafeteria</p>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:underline underline-offset-4" href="#">Instagram</a>
          <a className="hover:underline underline-offset-4" href="#">WhatsApp</a>
          <a className="hover:underline underline-offset-4" href="#">Contato</a>
        </div>
      </Container>
    </footer>
  );
}






