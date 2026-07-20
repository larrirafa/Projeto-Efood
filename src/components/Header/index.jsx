import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Title,
  NavBar,
  NavLink,
  CartButton,
} from './styles'
import logo from './assets/logo.png'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { quantidadeTotal, abrirCarrinho } = useCart()

  if (!isHome) {
    return (
      <HeaderContainer>
        <NavBar>
          <Link to="/">
            <NavLink>Restaurantes</NavLink>
          </Link>

          <Link to="/">
            <Logo src={logo} alt="efood" />
          </Link>

          <CartButton onClick={abrirCarrinho} type="button">
            {quantidadeTotal > 0
              ? `${quantidadeTotal} produto(s) no carrinho`
              : '0 produto(s) no carrinho'}
          </CartButton>
        </NavBar>
      </HeaderContainer>
    )
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={logo} alt="efood" $large />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
