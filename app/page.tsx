import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { ProductCard } from "@/app/components/ui/ProductCard";
import { Carousel } from "@/app/components/ui/Carousel";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { menu } from "@/app/data/menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <section className="relative border-b border-zinc-200/70">
        <div className="relative mx-0 min-h-[60vh] w-full overflow-hidden sm:min-h-[70vh]">
          <Image
            src="/images/hero.jpg"
            alt="Ambiente da cafeteria"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 35%" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent sm:from-black/40 sm:via-black/10" />

          <div className="absolute inset-0 flex items-end sm:items-center">
            <Container className="pb-8 pt-20 sm:pb-10 sm:pt-24">
              <div className="max-w-2xl text-white drop-shadow-md">
                <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  Café especial, simplicidade impecável.
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/90 sm:mt-4 sm:text-base">
                  Curadoria de bebidas e comidinhas para o dia fluir leve e gostoso.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                  <a href="/produtos"><Button>Ver produtos</Button></a>
                  <a href="/historia"><Button variant="outline" className="bg-white hover:bg-white/90">Nossa história</Button></a>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>

      <main>
        <Container className="pb-20">
          {/* Veja nosso cardápio: Quentes & Frios */}
          {(() => {
            const quentes = menu.find((s) => s.id === "quentes");
            const frios = menu.find((s) => s.id === "frios");
            const items = [
              ...(quentes ? quentes.items.slice(0, 3) : []),
              ...(frios ? frios.items.slice(0, 2) : []),
            ];
            return (
              <section className="scroll-mt-24 py-8 sm:py-10">
                <SectionHeader title="Cafés Quentes e Frios" eyebrow="Veja nosso cardápio" href="/produtos" />
                <Carousel ariaLabel="Bebidas quentes e frias">
                  {items.map((item) => (
                    <div key={item.id} className="h-[340px] w-[260px] shrink-0 sm:w-[280px]">
                      <ProductCard item={item} />
                    </div>
                  ))}
                </Carousel>
              </section>
            );
          })()}

          {/* Sazonais */}
          {(() => {
            const sazonais = menu.find((s) => s.id === "sazonais");
            const items = sazonais ? sazonais.items : [];
            return (
              <section className="scroll-mt-24 py-8 sm:py-10">
                <SectionHeader title="Bebidas Sazonais" eyebrow="Seleção do momento" href="/produtos" />
                <Carousel ariaLabel="Bebidas sazonais">
                  {items.map((item) => (
                    <div key={item.id} className="h-[340px] w-[260px] shrink-0 sm:w-[280px]">
                      <ProductCard item={item} />
                    </div>
                  ))}
                </Carousel>
              </section>
            );
          })()}

          <section className="scroll-mt-24 py-12 sm:py-16">
            <div className="mb-8">
              <div className="mb-2 text-xs font-medium uppercase tracking-widest text-zinc-500">Origem e cultura</div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Café no Brasil</h2>
            </div>
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
              <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-l-full rounded-r-none border border-zinc-200/70 shadow-sm md:order-none md:col-span-5">
                <Image
                  src="/images/grao_de_cafe.jpg"
                  alt="Grãos de café do Brasil"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
                  quality={85}
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div className="md:col-span-7">
                <div className="space-y-5 text-zinc-700">
                  <p>
                    O Brasil é um dos maiores produtores de café do mundo e berço de uma diversidade
                    de terroirs. Do Sul de Minas ao Cerrado Mineiro, do Mogiana às Matas de Minas, cada
                    origem imprime notas e perfis sensoriais únicos.
                  </p>
                  <p>
                    A qualidade nasce no campo e se revela na torra e no preparo. Nossa curadoria busca
                    destacar doçura natural, acidez equilibrada e finalização limpa — priorizando
                    transparência e sazonalidade.
                  </p>
                  <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-zinc-600 sm:grid-cols-2">
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-800" /> Sazonalidade e frescor</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-800" /> Curadoria de origens</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-800" /> Torra precisa</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-800" /> Métodos consistentes</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
      {/* Imagem antes do footer */}
      <section className="pb-0">
        <div className="relative mx-0 aspect-[16/5] w-full overflow-hidden">
          <Image src="/images/late.jpg" alt="Latte art" fill className="object-cover" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
