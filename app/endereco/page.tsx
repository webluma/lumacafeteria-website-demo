import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Container } from "@/app/components/ui/Container";

export default function EnderecoPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Container className="pb-20 pt-8 sm:pt-12">
          <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Endereço
          </h1>
          <p className="mb-6 max-w-2xl text-sm text-zinc-700 sm:text-base">
            Venha nos visitar. Atendimento de segunda a domingo.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-zinc-500">Loja</div>
                <div className="font-medium">Luma Cafeteria</div>
              </div>
              <div>
                <div className="text-zinc-500">Endereço</div>
                <div className="font-medium">Rua Exemplo, 123 - Centro</div>
                <div className="font-medium">Curitiba - PR, CEP 80000-000</div>
              </div>
              <div>
                <div className="text-zinc-500">Contato</div>
                <div className="font-medium">
                  <a
                    href="mailto:email@exemplo.com.br"
                    className="hover:text-zinc-900 hover:underline underline-offset-4"
                  >
                    email@exemplo.com.br
                  </a>
                </div>
                <div className="font-medium">
                  <a
                    href="tel:+5541000000000"
                    className="hover:text-zinc-900 hover:underline underline-offset-4"
                  >
                    (41) 00000-0000
                  </a>
                </div>
              </div>
              <div>
                <div className="text-zinc-500">Horários</div>
                <div className="font-medium">Segunda a Sexta: 8h – 19h</div>
                <div className="font-medium">Sábado e Domingo: 10h – 18h</div>
              </div>
            </div>
            <div className="flex min-h-[300px] sm:min-h-[400px]">
              <div
                className="relative w-full h-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100"
                aria-label="Mapa"
              >
                <iframe
                  src="https://maps.google.com/maps?q=Rua+Exemplo,+123+-+Centro,+Curitiba+-+PR&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Luma Cafeteria"
                />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
