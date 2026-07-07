export const restaurants = [
  {
    id: 4,
    titulo: 'Hioki Sushi',
    tipo: 'Japonesa',
    destaque: true,
    avaliacao: 4.9,
    capa: 'https://picsum.photos/seed/hiokisushi/500/300',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.',
    cardapio: [
      {
        id: 1,
        nome: 'Combinado Sushi Especial',
        descricao:
          'Seleção com 20 peças entre sushis e sashimis de salmão, atum e kani, acompanhados de gengibre e wasabi.',
        porcao: 'Serve: 2 pessoas',
        preco: 89.9,
        foto: 'https://picsum.photos/seed/combinadosushi/300/300',
      },
      {
        id: 2,
        nome: 'Temaki de Salmão',
        descricao:
          'Cone de alga nori recheado com arroz temperado, salmão fresco, cream cheese e cebolinha.',
        porcao: 'Serve: 1 pessoa',
        preco: 32.9,
        foto: 'https://picsum.photos/seed/temaki/300/300',
      },
      {
        id: 3,
        nome: 'Uramaki California',
        descricao:
          'Enrolado invertido com kani, pepino, abacate e gergelim tostado, servido com molho tarê.',
        porcao: 'Serve: 1 a 2 pessoas',
        preco: 38.0,
        foto: 'https://picsum.photos/seed/california/300/300',
      },
    ],
  },
  {
    id: 1,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    avaliacao: 4.6,
    capa: 'https://picsum.photos/seed/trattoria/500/300',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    cardapio: [
      {
        id: 1,
        nome: 'Pizza Margherita',
        descricao:
          'A pizza Margherita é uma clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Sua base é feita com molho de tomate fresco, queijo mussarela de búfala e manjericão.',
        porcao: 'Serve: 2 a 3 pessoas',
        preco: 60.9,
        foto: 'https://picsum.photos/seed/margherita/300/300',
      },
      {
        id: 2,
        nome: 'Spaghetti alla Carbonara',
        descricao:
          'Massa al dente com molho cremoso de ovos, queijo pecorino, pancetta crocante e uma pitada generosa de pimenta-do-reino.',
        porcao: 'Serve: 1 pessoa',
        preco: 48.5,
        foto: 'https://picsum.photos/seed/carbonara/300/300',
      },
      {
        id: 3,
        nome: 'Risoto de Funghi',
        descricao:
          'Arroz arbóreo cozido lentamente com caldo de legumes, finalizado com cogumelos selvagens salteados e parmesão.',
        porcao: 'Serve: 1 pessoa',
        preco: 52.0,
        foto: 'https://picsum.photos/seed/risoto/300/300',
      },
      {
        id: 4,
        nome: 'Pizza Quattro Formaggi',
        descricao:
          'Combinação de quatro queijos italianos: mussarela, gorgonzola, parmesão e provolone, sobre uma massa fina e crocante.',
        porcao: 'Serve: 2 a 3 pessoas',
        preco: 65.9,
        foto: 'https://picsum.photos/seed/quattro/300/300',
      },
      {
        id: 5,
        nome: 'Lasanha à Bolonhesa',
        descricao:
          'Camadas de massa fresca intercaladas com molho bolonhesa, bechamel cremoso e queijo gratinado.',
        porcao: 'Serve: 2 pessoas',
        preco: 58.0,
        foto: 'https://picsum.photos/seed/lasanha/300/300',
      },
      {
        id: 6,
        nome: 'Tiramisù',
        descricao:
          'Sobremesa clássica italiana com camadas de biscoito champagne embebido em café, creme de mascarpone e cacau em pó.',
        porcao: 'Serve: 1 pessoa',
        preco: 28.0,
        foto: 'https://picsum.photos/seed/tiramisu/300/300',
      },
    ],
  },
  {
    id: 2,
    titulo: 'Hot Pot Express',
    tipo: 'Chinesa',
    avaliacao: 4.7,
    capa: 'https://picsum.photos/seed/hotpot/500/300',
    descricao:
      'Sabores intensos e equilibrados da culinária chinesa, com pratos preparados no wok na hora do seu pedido.',
    cardapio: [
      {
        id: 1,
        nome: 'Frango Xadrez',
        descricao:
          'Cubos de frango salteados no wok com pimentões coloridos, amendoim torrado e molho agridoce.',
        porcao: 'Serve: 1 pessoa',
        preco: 42.9,
        foto: 'https://picsum.photos/seed/frangoxadrez/300/300',
      },
      {
        id: 2,
        nome: 'Yakisoba de Legumes',
        descricao:
          'Macarrão oriental salteado com legumes frescos e molho shoyu agridoce.',
        porcao: 'Serve: 1 a 2 pessoas',
        preco: 39.9,
        foto: 'https://picsum.photos/seed/yakisoba/300/300',
      },
      {
        id: 3,
        nome: 'Rolinho Primavera',
        descricao:
          'Crocantes rolinhos recheados com legumes refogados, servidos com molho agridoce.',
        porcao: 'Serve: 1 pessoa (4 unidades)',
        preco: 22.0,
        foto: 'https://picsum.photos/seed/rolinho/300/300',
      },
    ],
  },
  {
    id: 3,
    titulo: 'Sabor da Bahia',
    tipo: 'Brasileira',
    avaliacao: 4.8,
    capa: 'https://picsum.photos/seed/bahia/500/300',
    descricao:
      'Comida típica baiana com dendê, temperos especiais e muito sabor regional em cada prato.',
    cardapio: [
      {
        id: 1,
        nome: 'Moqueca de Peixe',
        descricao:
          'Peixe cozido lentamente em leite de coco, dendê, pimentões e coentro, servido com arroz branco.',
        porcao: 'Serve: 2 pessoas',
        preco: 78.0,
        foto: 'https://picsum.photos/seed/moqueca/300/300',
      },
      {
        id: 2,
        nome: 'Acarajé',
        descricao:
          'Bolinho de feijão fradinho frito no azeite de dendê, recheado com vatapá e camarão.',
        porcao: 'Serve: 1 pessoa',
        preco: 18.5,
        foto: 'https://picsum.photos/seed/acaraje/300/300',
      },
    ],
  },
];
