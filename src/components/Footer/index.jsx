import {
  FooterContainer,
  LogoBox,
  Logo,
  SocialList,
  SocialIcon,
  FooterText
} from './styles'
import { InstagramIcon, FacebookIcon, TwitterIcon } from './SocialIcons'
import logo from './assets/logo.png'

const Footer = () => {
  return (
    <FooterContainer>
      <LogoBox>
        <Logo src={logo} alt="efood" />
      </LogoBox>

      <SocialList>
        <SocialIcon href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <InstagramIcon />
        </SocialIcon>
        <SocialIcon href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
          <TwitterIcon />
        </SocialIcon>
      </SocialList>

      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega,
        qualidade dos produtos é toda do estabelecimento contratado.
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
