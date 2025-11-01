import { Section } from "../lib/types";

export const menu: Section[] = [
  {
    id: "quentes",
    title: "Cafés Quentes",
    items: [
      { id: "espresso", name: "Espresso", description: "Shot intenso e aromático", longDescription: "Dose curta extraída sob alta pressão, destacando doçura e corpo do grão.", price: "R$ 8", calories: 3, size: "30ml", ingredients: ["Café 100% arábica"], accent: "from-amber-300 to-orange-500" },
      { id: "latte", name: "Latte", description: "Espresso, leite vaporizado e crema", longDescription: "Equilíbrio entre espresso e leite vaporizado, textura aveludada e final suave.", price: "R$ 14", calories: 140, size: "240ml", ingredients: ["Espresso", "Leite vaporizado"], tag: "popular", accent: "from-stone-200 to-amber-200" },
      { id: "capuccino", name: "Capuccino", description: "Tradicional cremoso com cacau", longDescription: "Terços iguais de espresso, leite e espuma. Polvilhado com cacau.", price: "R$ 15", calories: 120, size: "200ml", ingredients: ["Espresso", "Leite", "Espuma de leite", "Cacau"], accent: "from-amber-200 to-brown-300" },
      { id: "americano", name: "Americano", description: "Espresso suavizado com água quente", longDescription: "Espresso diluído em água quente, mantendo o aroma com menor intensidade.", price: "R$ 10", calories: 5, size: "240ml", ingredients: ["Espresso", "Água quente"], accent: "from-stone-200 to-stone-300" },
      { id: "flatwhite", name: "Flat White", description: "Espresso duplo com microespuma sedosa", longDescription: "Proporção maior de café com leite microtexturizado, sabor mais pronunciado.", price: "R$ 16", calories: 150, size: "200ml", ingredients: ["Espresso duplo", "Leite microespumado"], accent: "from-amber-200 to-amber-300" },
      { id: "v60", name: "V60", description: "Método de extração limpo e aromático", longDescription: "Filtrado em cone V60 realça acidez cítrica e doçura do grão.", price: "R$ 16", calories: 3, size: "250ml", ingredients: ["Café moído", "Água"], accent: "from-amber-100 to-amber-200" },
    ],
  },
  {
    id: "frios",
    title: "Cafés Frios",
    items: [
      { id: "coldbrew", name: "Cold Brew", description: "Extração lenta e suave", longDescription: "Infusão a frio por 12-18h, acidez baixa e dulçor destacado.", price: "R$ 16", calories: 5, size: "300ml", ingredients: ["Café moído grosso", "Água fria"], tag: "gelado", accent: "from-sky-200 to-cyan-300" },
      { id: "icedlatte", name: "Iced Latte", description: "Latte servido com gelo", longDescription: "Leve e refrescante: espresso, leite e gelo, sem adição de açúcar.", price: "R$ 16", calories: 120, size: "300ml", ingredients: ["Espresso", "Leite", "Gelo"], accent: "from-stone-100 to-sky-100" },
      { id: "tonic", name: "Espresso Tônica", description: "Cítrico, efervescente e refrescante", longDescription: "Tônica cítrica com espresso sobreposto, aroma cítrico e final seco.", price: "R$ 18", calories: 60, size: "300ml", ingredients: ["Água tônica", "Espresso", "Gelo", "Rodela de laranja"], accent: "from-lime-200 to-emerald-200" },
      { id: "matchalatte", name: "Matcha Latte", description: "Matcha verde cremoso e suave", longDescription: "Matcha de alta qualidade batido com leite vaporizado, doçura natural e corpo cremoso.", price: "R$ 18", calories: 130, size: "300ml", ingredients: ["Matcha em pó", "Leite vaporizado"], accent: "from-emerald-200 to-green-300" },
      { id: "icedamericano", name: "Iced Americano", description: "Espresso diluído e refrescante", longDescription: "Espresso com água e gelo; limpa percepção do grão em versão gelada.", price: "R$ 14", calories: 5, size: "300ml", ingredients: ["Espresso", "Água", "Gelo"], accent: "from-stone-100 to-stone-200" },
      { id: "orangecoffee", name: "Orange Coffee", description: "Café gelado com notas cítricas", longDescription: "Cold brew finalizado com suco de laranja natural, refrescante e equilibrado.", price: "R$ 17", calories: 40, size: "300ml", ingredients: ["Cold brew", "Suco de laranja", "Gelo"], accent: "from-yellow-200 to-orange-300" },
    ],
  },
  {
    id: "sazonais",
    title: "Bebidas Sazonais",
    items: [
      { id: "pumpkin", name: "Pumpkin Spice Latte", description: "Especiarias e notas de abóbora", longDescription: "Blend de especiarias com purê de abóbora e espresso; cremoso e aromático.", price: "R$ 19", calories: 240, size: "300ml", ingredients: ["Espresso", "Leite", "Purê de abóbora", "Especiarias"], tag: "limitado", accent: "from-orange-200 to-amber-300" },
      { id: "maple", name: "Maple Latte", description: "Doçura de maple e canela", longDescription: "Doce natural do maple e especiarias, final aquecido.", price: "R$ 20", calories: 230, size: "300ml", ingredients: ["Espresso", "Leite", "Maple", "Canela"], accent: "from-amber-100 to-amber-300" },
      { id: "gingerbread", name: "Gingerbread Latte", description: "Gengibre, canela e noz-moscada", longDescription: "Perfil especiado clássico de fim de ano, aquecido e aromático.", price: "R$ 21", calories: 240, size: "300ml", ingredients: ["Espresso", "Leite", "Xarope gingerbread"], accent: "from-amber-200 to-orange-300" },
      { id: "strawberrymatcha", name: "Strawberry Matcha", description: "Matcha com morango natural", longDescription: "Matcha cremoso combinado com morangos frescos, doçura natural e refrescante.", price: "R$ 19", calories: 150, size: "300ml", ingredients: ["Matcha", "Leite", "Morangos", "Gelo"], tag: "limitado", accent: "from-rose-200 to-pink-300" },
    ],
  },
  {
    id: "doces",
    title: "Doces",
    items: [
      { id: "cookie", name: "Cookie", description: "Gotas de chocolate", longDescription: "Cookie clássico macio por dentro e levemente crocante por fora.", price: "R$ 10", calories: 280, size: "1 unidade", ingredients: ["Farinha", "Manteiga", "Açúcar", "Ovos", "Chocolate"], tag: "fresh", accent: "from-amber-200 to-amber-300" },
      { id: "brownie", name: "Brownie", description: "Chocolate meio amargo", longDescription: "Brownie denso com casquinha brilhante, servido em temperatura ambiente.", price: "R$ 12", calories: 320, size: "1 fatia", ingredients: ["Chocolate", "Manteiga", "Açúcar", "Ovos", "Farinha"], accent: "from-stone-300 to-zinc-400" },
      { id: "cheesecake", name: "Cheesecake", description: "Calda de morangos", longDescription: "Base de biscoito com creme de queijo e cobertura de morangos frescos.", price: "R$ 16", calories: 350, size: "1 fatia", ingredients: ["Cream cheese", "Biscoito", "Manteiga", "Ovos", "Açúcar", "Morangos"], accent: "from-rose-200 to-pink-300" },
      { id: "carrot", name: "Bolo de Cenoura", description: "Cobertura de chocolate", longDescription: "Clássico fofinho com cobertura de chocolate brilhante.", price: "R$ 12", calories: 290, size: "1 fatia", ingredients: ["Cenoura", "Farinha", "Açúcar", "Ovos", "Chocolate"], accent: "from-orange-200 to-amber-300" },
    ],
  },
  {
    id: "salgados",
    title: "Salgados",
    items: [
      { id: "paoqueijo", name: "Pão de Queijo", description: "Quentinho, crocante por fora", longDescription: "Massa de polvilho com queijo meia cura, assado na hora.", price: "R$ 8", calories: 150, size: "2 unidades", ingredients: ["Polvilho", "Queijo", "Leite", "Ovos", "Óleo"], tag: "clássico", accent: "from-yellow-200 to-amber-300" },
      { id: "quiche", name: "Quiche", description: "Alho-poró e gruyère", longDescription: "Quiche cremosa com base amanteigada e recheio de alho-poró e gruyère.", price: "R$ 16", calories: 340, size: "1 fatia", ingredients: ["Farinha", "Manteiga", "Ovos", "Creme de leite", "Alho-poró", "Queijo gruyère"], accent: "from-lime-200 to-emerald-200" },
      { id: "coxinha", name: "Coxinha", description: "Massa dourada com recheio cremoso", longDescription: "Coxinha artesanal com massa crocante e recheio de frango temperado, quente e dourada.", price: "R$ 12", calories: 290, size: "1 unidade", ingredients: ["Farinha", "Frango", "Queijo", "Temperos"], accent: "from-orange-200 to-amber-300" },
    ],
  },
];


