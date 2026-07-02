import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import * as S from './styles';

const formatarPreco = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

const Cart = () => {
  const { itens, removerItem, total } = useCart();
  const navigate = useNavigate();

  if (itens.length === 0) {
    return (
      <S.CartWrapper>
        <S.EmptyMessage>
          O carrinho está vazio. Adicione pelo menos um prato para continuar.
        </S.EmptyMessage>
      </S.CartWrapper>
    );
  }

  return (
    <S.CartWrapper>
      <S.ItemsList>
        {itens.map((item) => (
          <S.Item key={item.id}>
            <S.ItemImage src={item.foto} alt={item.nome} />
            <S.ItemInfo>
              <S.ItemName>{item.nome}</S.ItemName>
              <S.ItemPrice>
                {item.quantidade}x {formatarPreco(item.preco)}
              </S.ItemPrice>
            </S.ItemInfo>
            <S.RemoveButton onClick={() => removerItem(item.id)}>
              x
            </S.RemoveButton>
          </S.Item>
        ))}
      </S.ItemsList>
      <S.TotalRow>
        <span>Valor total</span>
        <span>{formatarPreco(total)}</span>
      </S.TotalRow>
      <S.CheckoutButton onClick={() => navigate('/checkout')}>
        Continuar com a entrega
      </S.CheckoutButton>
    </S.CartWrapper>
  );
};

export default Cart;
