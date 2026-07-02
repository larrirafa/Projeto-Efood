import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import * as S from './styles';

const Header = () => {
  const { quantidadeTotal } = useCart();

  return (
    <S.HeaderContainer>
      <S.Nav>
        <Link to="/">Restaurantes</Link>
      </S.Nav>
      <Link to="/">
        <S.Logo>efood</S.Logo>
      </Link>
      <S.CartArea>
        <S.CartButton>
          {quantidadeTotal > 0
            ? `${quantidadeTotal} produto(s) no carrinho`
            : 'Carrinho'}
        </S.CartButton>
      </S.CartArea>
    </S.HeaderContainer>
  );
};

export default Header;
