import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itens, setItens] = useState([]);
  const [restauranteId, setRestauranteId] = useState(null);

  const adicionarItem = (prato, idRestaurante) => {
    if (restauranteId !== null && restauranteId !== idRestaurante) {
      const confirmar = window.confirm(
        'Seu carrinho contém itens de outro restaurante. Deseja limpar o carrinho e adicionar este item?'
      );
      if (!confirmar) return;
      setItens([{ ...prato, quantidade: 1 }]);
      setRestauranteId(idRestaurante);
      return;
    }

    setRestauranteId(idRestaurante);
    setItens((itensAtuais) => {
      const existente = itensAtuais.find((item) => item.id === prato.id);
      if (existente) {
        return itensAtuais.map((item) =>
          item.id === prato.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...itensAtuais, { ...prato, quantidade: 1 }];
    });
  };

  const removerItem = (id) => {
    setItens((itensAtuais) => {
      const novosItens = itensAtuais.filter((item) => item.id !== id);
      if (novosItens.length === 0) setRestauranteId(null);
      return novosItens;
    });
  };

  const limparCarrinho = () => {
    setItens([]);
    setRestauranteId(null);
  };

  const total = itens.reduce(
    (acumulado, item) => acumulado + item.preco * item.quantidade,
    0
  );

  const quantidadeTotal = itens.reduce(
    (acumulado, item) => acumulado + item.quantidade,
    0
  );

  return (
    <CartContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        limparCarrinho,
        total,
        quantidadeTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
