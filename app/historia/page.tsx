import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Container } from "@/app/components/ui/Container";

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Container className="prose prose-zinc max-w-3xl pb-20 pt-12">
          <h1 className="text-3xl font-semibold tracking-tight">Nossa história</h1>
          <p>
            A Luma nasceu da vontade de servir café especial com simplicidade impecável. Acreditamos
            que o extraordinário está no bem-feito: ingredientes de qualidade, preparo preciso e um
            ambiente que convida a desacelerar.
          </p>
          <p>
            Valorizamos produtores locais, métodos consistentes e uma curadoria que muda com as estações.
            Cada xícara revela a identidade do grão e o cuidado de quem torra e prepara.
          </p>
          <p>
            Nosso espaço é minimalista para que o essencial apareça: sabor, textura e boas conversas.
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}


