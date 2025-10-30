import { Container } from "@/app/components/ui/Container";
import { ProductCard } from "@/app/components/ui/ProductCard";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { menu } from "@/app/data/menu";

export default function ProdutosPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Container className="pb-20 pt-12">
          <h1 className="mb-2 text-3xl font-semibold tracking-tight">Produtos</h1>
          <p className="mb-8 max-w-2xl text-zinc-700">Veja o que temos disponível na loja. Não realizamos vendas online.</p>

          {menu.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 py-8">
              <div className="mb-6 flex items-end justify-between">
                <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{section.title}</h2>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
        </Container>
      </main>
      <Footer />
    </div>
  );
}


