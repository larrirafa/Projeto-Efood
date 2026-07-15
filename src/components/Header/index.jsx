import { HeaderContainer, HeaderContent, Logo, UtensilIcon } from './styles'
import ForkKnifeIcon from './ForkKnifeIcon'
import logo from './assets/logo.png'

const Header = () => {
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
        <Logo src={logo} alt="efood" />
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
