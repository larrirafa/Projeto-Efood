import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

let contador = 0;
const novoIdItem = () => {
  contador += 1;
  return `item-${Date.now()}-${contador}`;
};

export const CartProvider = ({ children }) => {
  const [itens, setItens] = useState([]);
  const [restauranteId, setRestauranteId] = useState(null);

  // Controle da gaveta lateral (carrinho / entrega / pagamento / confirmação)
  const [aberto, setAberto] = useState(false);
  const [etapa, setEtapa] = useState('carrinho');
  const [pedidoId, setPedidoId] = useState(null);

  // Cada "adicionar ao carrinho" gera uma linha própria na lista
  // (igual ao Figma: 3 pizzas iguais aparecem como 3 itens separados)
  const adicionarItem = (prato, idRestaurante) => {
    if (restauranteId !== null && restauranteId !== idRestaurante) {
      const confirmar = window.confirm(
        'Seu carrinho contém itens de outro restaurante. Deseja limpar o carrinho e adicionar este item?'
      );
      if (!confirmar) return;
      setItens([{ ...prato, itemCartId: novoIdItem() }]);
      setRestauranteId(idRestaurante);
      setEtapa('carrinho');
      setAberto(true);
      return;
    }

    setRestauranteId(idRestaurante);
    setItens((itensAtuais) => [
      ...itensAtuais,
      { ...prato, itemCartId: novoIdItem() },
    ]);
    setEtapa('carrinho');
    setAberto(true);
  };

  const removerItem = (itemCartId) => {
    setItens((itensAtuais) => {
      const novosItens = itensAtuais.filter(
        (item) => item.itemCartId !== itemCartId
      );
      if (novosItens.length === 0) setRestauranteId(null);
      return novosItens;
    });
  };

  const limparCarrinho = () => {
    setItens([]);
    setRestauranteId(null);
  };

  const total = itens.reduce((acumulado, item) => acumulado + item.preco, 0);

  const quantidadeTotal = itens.length;

  const abrirCarrinho = () => {
    setEtapa('carrinho');
    setAberto(true);
  };

  const fecharGaveta = () => {
    setAberto(false);
    setEtapa('carrinho');
  };

  const irParaEtapa = (novaEtapa) => setEtapa(novaEtapa);

  const finalizarPedido = () => {
    const novoId = Math.floor(Math.random() * 900000 + 100000);
    setPedidoId(novoId);
    limparCarrinho();
    setEtapa('confirmacao');
    return novoId;
  };

  const concluirPedido = () => {
    setAberto(false);
    setEtapa('carrinho');
    setPedidoId(null);
  };

  return (
    <CartContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        limparCarrinho,
        total,
        quantidadeTotal,
        aberto,
        etapa,
        pedidoId,
        abrirCarrinho,
        fecharGaveta,
        irParaEtapa,
        finalizarPedido,
        concluirPedido,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
