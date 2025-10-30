import { Container } from "@/app/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p className="text-zinc-600">© {new Date().getFullYear()} Luma Cafeteria</p>
        <div className="flex items-center gap-4">
          <a className="hover:underline underline-offset-4" href="#">Instagram</a>
          <a className="hover:underline underline-offset-4" href="#">WhatsApp</a>
          <a className="hover:underline underline-offset-4" href="#">Contato</a>
        </div>
      </Container>
    </footer>
  );
}


