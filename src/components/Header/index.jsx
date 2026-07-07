import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { UtensilsIcon } from '../Icons';
import * as S from './styles';

const Header = () => {
  const { quantidadeTotal, abrirCarrinho } = useCart();

  return (
    <S.HeaderContainer>
      <S.Nav>
        <Link to="/">Restaurantes</Link>
      </S.Nav>
      <Link to="/">
        <S.Logo>
          efood <UtensilsIcon size={16} />
        </S.Logo>
      </Link>
      <S.CartArea>
        <S.CartButton onClick={abrirCarrinho} type="button">
          {quantidadeTotal > 0
            ? `${quantidadeTotal} produto(s) no carrinho`
            : '0 produto(s) no carrinho'}
        </S.CartButton>
      </S.CartArea>
    </S.HeaderContainer>
  );
};

export default Header;
