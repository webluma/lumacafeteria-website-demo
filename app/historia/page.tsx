import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Container } from "@/app/components/ui/Container";
import Image from "next/image";

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        {/* Intro sem divisória */}
        <section>
          <Container className="pb-8 pt-12 sm:pt-16 md:py-16">
            <div className="max-w-3xl">
              <div className="mb-2 text-xs font-medium uppercase tracking-widest text-zinc-500">Sobre nós</div>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">Nossa história</h1>
              <p className="mt-4 text-zinc-700 sm:mt-5">
                A Luma nasceu da vontade de servir café especial com simplicidade impecável. Acreditamos
                que o extraordinário está no bem-feito: ingredientes de qualidade, preparo preciso e um
                ambiente que convida a desacelerar.
              </p>
            </div>
          </Container>
        </section>

        {/* Conteúdo principal */}

        <section>
          <Container className="py-8 sm:py-12 md:py-16">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-12">
              <div className="relative md:col-span-7">
                <Image
                  src="/images/ambiente.jpg"
                  alt="Ambiente da cafeteria"
                  width={2000}
                  height={1333}
                  priority
                  quality={90}
                  sizes="100vw"
                  className="h-auto w-full rounded-tl-[64px] sm:rounded-tl-[96px] md:rounded-tl-[140px]"
                />
                <div className="relative -mt-4 ml-auto hidden w-2/3 overflow-hidden rounded-tl-[64px] border border-zinc-200/70 shadow-sm sm:-mt-6 sm:block sm:rounded-tl-[96px] md:rounded-tl-[140px]">
                  <div className="relative h-[180px] w-full sm:h-[220px]">
                    <Image src="/images/late2.jpg" alt="Latte art no balcão" fill className="object-cover" sizes="(min-width: 1024px) 460px, (min-width: 640px) 50vw, 100vw" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="space-y-4 text-zinc-700 sm:space-y-5">
                  <p>
                    Valorizamos produtores locais, métodos consistentes e uma curadoria que muda com as
                    estações. Cada xícara revela a identidade do grão e o cuidado de quem torra e prepara.
                  </p>
                  <p>
                    Nosso espaço é minimalista para que o essencial apareça: sabor, textura e boas
                    conversas. Buscamos processos claros, atendimento gentil e uma atmosfera acolhedora.
                  </p>
                  <p>
                    O resultado é uma experiência direta e memorável — café bom, sem excesso.
                  </p>
                  <div className="my-6 h-px w-full bg-zinc-200" />
                  <h2 className="text-xl font-semibold tracking-tight">Nossa missão</h2>
                  <p>
                    Servir café especial com respeito à origem e ao tempo de cada processo. Para nós,
                    simplicidade é sinônimo de precisão: receitas claras, preparo consistente e um
                    ambiente que convida a respirar entre um gole e outro.
                  </p>
                  <p>
                    Trabalhamos com lotes sazonais e comunicação transparente sobre grãos, torra e
                    métodos. Tudo para que a experiência seja direta e, ao mesmo tempo, memorável.
                  </p>
                  <h3 className="mt-6 text-sm font-medium uppercase tracking-widest text-zinc-500">Linha do tempo</h3>
                  <ul className="space-y-3 text-sm">
                    <li><span className="font-medium text-zinc-900">2018</span> — Primeira torra teste e primeiras receitas.</li>
                    <li><span className="font-medium text-zinc-900">2019</span> — Abertura do espaço piloto e padronização de métodos.</li>
                    <li><span className="font-medium text-zinc-900">2021</span> — Parcerias com produtores e menu sazonal.</li>
                    <li><span className="font-medium text-zinc-900">2024</span> — Consolidação da curadoria e expansão do time.</li>
                  </ul>
                  <h3 className="mt-6 text-sm font-medium uppercase tracking-widest text-zinc-500">Compromissos</h3>
                  <ul className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-800" /> Origem responsável</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-800" /> Transparência de torra</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-800" /> Métodos consistentes</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-800" /> Atendimento gentil</li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}


