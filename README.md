Cafeteria — Website Demo

Descrição

- Este repositório contém um website demo de uma cafeteria, criado para portfólio e apresentação a clientes. O objetivo é demonstrar um design minimalista, moderno e profissional, com foco em navegação clara e showcase de produtos (sem e-commerce).

Principais características

- Home com hero full-bleed (imagem em tela cheia com texto sobreposto)
- Seções com carrossel: “Cafés Quentes e Frios” e “Bebidas Sazonais”
- Seção editorial “Café no Brasil” com layout refinado e imagem com borda personalizada
- Páginas dedicadas: `História`, `Produtos` e `Endereço`
- Componentização profissional: `Header`, `Footer`, `Container`, `Button`, `Badge`, `ProductCard`, `Carousel`, `SectionHeader`
- Dados mockados em `app/data/menu.ts` (apenas exibição, sem compras)

Stack

- Next.js App Router (TypeScript)
- Tailwind CSS
- `next/image` para otimização de imagens

Estrutura (principais pastas)

- `app/` — páginas e layout base
  - `components/layout/` — `Header`, `Footer`
  - `components/ui/` — componentes reutilizáveis
  - `data/` — dados mockados do cardápio
  - `lib/` — tipos e utilidades
- `public/images/` — assets estáticos (hero, grãos, latte, etc.)

Como rodar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra `http://localhost:3000` no navegador.

Scripts úteis

- `npm run dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run start` — servir build de produção

Personalização rápida

- Conteúdo do cardápio: edite `app/data/menu.ts`
- Cores e tokens: ajuste `app/globals.css`
- Imagens: adicione/atualize em `public/images` e referencie com `/images/...`

Observações

- Este projeto não implementa carrinho ou checkout. O foco é exibir o menu de forma elegante para apresentação.
- Por ser um demo, alguns textos e imagens são ilustrativos.

Licença

- MIT © 2025 Webluma (`webluma.tech`). Consulte o arquivo `LICENSE` para os termos completos.
