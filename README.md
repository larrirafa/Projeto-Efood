# efood

Projeto desenvolvido durante o módulo de React da EBAC. Uma aplicação de delivery de comida onde é possível visualizar restaurantes, seus cardápios, adicionar pratos ao carrinho e finalizar um pedido através de um checkout com etapas de entrega e pagamento.

## Tecnologias utilizadas

- React
- Vite
- Styled Components
- React Router DOM
- Context API (gerenciamento do carrinho)

## Funcionalidades

- Listagem de restaurantes na home
- Página de detalhes do restaurante com cardápio
- Modal com detalhes do prato
- Adição e remoção de itens do carrinho
- Checkout em 3 etapas: entrega, pagamento e confirmação
- Geração de número de pedido ao finalizar a compra

## Como rodar o projeto

\`\`\`bash
# clonar o repositório
git clone <URL_DO_SEU_REPOSITORIO>

# entrar na pasta do projeto
cd efood

# instalar as dependências
npm install

# rodar em ambiente de desenvolvimento
npm run dev

# gerar build de produção
npm run build
\`\`\`

## Estrutura de pastas

\`\`\`
src/
  components/   -> componentes reutilizáveis (Header, Footer, Cards, Modal, Cart)
  pages/        -> páginas da aplicação (Home, Restaurant, Checkout)
  contexts/     -> Context API do carrinho
  data/         -> dados mockados dos restaurantes e cardápios
  styles/       -> tema, cores e estilos globais
\`\`\`
