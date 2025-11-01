import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Container } from "@/app/components/ui/Container";

export default function EnderecoPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Container className="pb-20 pt-12">
          <h1 className="mb-2 text-3xl font-semibold tracking-tight">Endereço</h1>
          <p className="mb-6 max-w-2xl text-zinc-700">
            Venha nos visitar. Atendimento de segunda a sábado.
          </p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-zinc-500">Loja</div>
                <div className="font-medium">Luma Cafeteria</div>
              </div>
              <div>
                <div className="text-zinc-500">Endereço</div>
                <div className="font-medium">Rua Exemplo, 123 - Centro, Curitiba - PR</div>
              </div>
              <div>
                <div className="text-zinc-500">Horários</div>
                <div className="font-medium">Seg a Sex 8h–19h, Sáb 9h–18h</div>
              </div>
              <div>
                <div className="text-zinc-500">Contato</div>
                <div className="font-medium">WhatsApp (41) 0000-0000 • contato@luma.cafe</div>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100" aria-label="Mapa">
                {/* Substituir por iframe do mapa, se desejar */}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}






