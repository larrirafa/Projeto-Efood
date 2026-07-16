import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Title,
  UtensilIcon,
  NavBar,
  NavLink,
  CartButton,
} from './styles'
import ForkKnifeIcon from './ForkKnifeIcon'
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
      <UtensilIcon size="24px" top="16px" left="8%" rotate="-15deg">
        <ForkKnifeIcon />
      </UtensilIcon>
      <UtensilIcon size="20px" bottom="12px" left="20%" rotate="10deg">
        <ForkKnifeIcon />
      </UtensilIcon>
      <UtensilIcon size="26px" top="20px" right="10%" rotate="20deg">
        <ForkKnifeIcon />
      </UtensilIcon>
      <UtensilIcon size="18px" bottom="10px" right="22%" rotate="-10deg">
        <ForkKnifeIcon />
      </UtensilIcon>

      <HeaderContent>
        <Logo src={logo} alt="efood" $large />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
