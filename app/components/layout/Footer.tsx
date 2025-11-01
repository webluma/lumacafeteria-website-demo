import { Container } from "@/app/components/ui/Container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white py-10 sm:py-12">
      <Container>
        <div className="flex flex-col gap-6 sm:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Luma Cafeteria"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Endereço e Contato lado a lado em mobile */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:contents">
            {/* Endereço */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
                Endereço
              </h3>
              <div className="space-y-2 text-sm text-zinc-600">
                <p className="font-medium text-zinc-900">Luma Cafeteria</p>
                <p>Rua Exemplo, 123 - Centro</p>
                <p>Curitiba - PR, CEP 80000-000</p>
              </div>
            </div>

            {/* Contato e Horários */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
                Contato
              </h3>
              <div className="space-y-2 text-sm text-zinc-600">
                <p>
                  <a
                    href="mailto:email@exemplo.com.br"
                    className="hover:text-zinc-900 hover:underline underline-offset-4"
                  >
                    email@exemplo.com.br
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+5541000000000"
                    className="hover:text-zinc-900 hover:underline underline-offset-4"
                  >
                    (41) 00000-0000
                  </a>
                </p>
                <p className="mt-4 pt-4 border-t border-zinc-200/60">
                  <span className="text-xs uppercase tracking-wider text-zinc-500">
                    Horário
                  </span>
                  <br />
                  Seg a Sex: 8h – 19h
                  <br />
                  Sábado e Domingo: 10h – 18h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória e Copyright */}
        <div className="mt-8 border-t border-zinc-200/70 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-600 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Luma Cafeteria. Todos os direitos
              reservados.
            </p>
            <p>Desenvolvido por WebLuma | Desenvolvimento Web</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
