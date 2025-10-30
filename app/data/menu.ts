import { Section } from "../lib/types";

export const menu: Section[] = [
  {
    id: "quentes",
    title: "Cafés Quentes",
    items: [
      { id: "espresso", name: "Espresso", description: "Shot intenso e aromático", price: "R$ 8", accent: "from-amber-300 to-orange-500" },
      { id: "latte", name: "Latte", description: "Espresso, leite vaporizado e crema", price: "R$ 14", tag: "popular", accent: "from-stone-200 to-amber-200" },
      { id: "capuccino", name: "Capuccino", description: "Tradicional cremoso com cacau", price: "R$ 15", accent: "from-amber-200 to-brown-300" },
      { id: "mocha", name: "Mocha", description: "Café, chocolate e leite", price: "R$ 17", accent: "from-rose-200 to-amber-200" },
      { id: "americano", name: "Americano", description: "Espresso suavizado com água quente", price: "R$ 10", accent: "from-stone-200 to-stone-300" },
      { id: "macchiato", name: "Macchiato", description: "Espresso manchado com leite", price: "R$ 12", accent: "from-amber-200 to-amber-300" },
    ],
  },
  {
    id: "frios",
    title: "Cafés Frios",
    items: [
      { id: "coldbrew", name: "Cold Brew", description: "Extração lenta e suave", price: "R$ 16", tag: "gelado", accent: "from-sky-200 to-cyan-300" },
      { id: "icedlatte", name: "Iced Latte", description: "Latte servido com gelo", price: "R$ 16", accent: "from-stone-100 to-sky-100" },
      { id: "tonic", name: "Espresso Tônica", description: "Cítrico, efervescente e refrescante", price: "R$ 18", accent: "from-lime-200 to-emerald-200" },
      { id: "frapp", name: "Frapê de Café", description: "Cremoso e gelado", price: "R$ 19", accent: "from-indigo-200 to-violet-300" },
    ],
  },
  {
    id: "sazonais",
    title: "Bebidas Sazonais",
    items: [
      { id: "pumpkin", name: "Pumpkin Spice Latte", description: "Especiarias e notas de abóbora", price: "R$ 19", tag: "limitado", accent: "from-orange-200 to-amber-300" },
      { id: "orange", name: "Cold Brew Citrus", description: "Toque de laranja bahia", price: "R$ 18", accent: "from-yellow-200 to-orange-300" },
      { id: "caramel", name: "Caramel Brûlée", description: "Caramelo tostado e creme", price: "R$ 20", accent: "from-amber-200 to-yellow-300" },
      { id: "maple", name: "Maple Latte", description: "Doçura de maple e canela", price: "R$ 20", accent: "from-amber-100 to-amber-300" },
      { id: "spiced-choc", name: "Spiced Chocolate", description: "Chocolate com especiarias", price: "R$ 21", accent: "from-rose-200 to-rose-300" },
    ],
  },
  {
    id: "doces",
    title: "Doces",
    items: [
      { id: "brownie", name: "Brownie", description: "Chocolate meio amargo", price: "R$ 12", accent: "from-stone-300 to-zinc-400" },
      { id: "cookie", name: "Cookie", description: "Gotas de chocolate", price: "R$ 10", tag: "fresh", accent: "from-amber-200 to-amber-300" },
      { id: "cheesecake", name: "Cheesecake", description: "Calda de frutas vermelhas", price: "R$ 16", accent: "from-rose-200 to-pink-300" },
      { id: "carrot", name: "Bolo de Cenoura", description: "Cobertura de chocolate", price: "R$ 12", accent: "from-orange-200 to-amber-300" },
    ],
  },
  {
    id: "salgados",
    title: "Salgados",
    items: [
      { id: "paoqueijo", name: "Pão de Queijo", description: "Quentinho, crocante por fora", price: "R$ 8", tag: "clássico", accent: "from-yellow-200 to-amber-300" },
      { id: "tosta", name: "Tosta de Queijo", description: "Pão artesanal na chapa", price: "R$ 14", accent: "from-amber-100 to-amber-200" },
      { id: "quiche", name: "Quiche", description: "Alho-poró e gruyère", price: "R$ 16", accent: "from-lime-200 to-emerald-200" },
      { id: "empanada", name: "Empanada", description: "Carne temperada", price: "R$ 12", accent: "from-orange-200 to-amber-300" },
    ],
  },
];


