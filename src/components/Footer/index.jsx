import { UtensilsIcon, InstagramIcon, FacebookIcon, TwitterIcon } from '../Icons';
import * as S from './styles';

const Footer = () => (
  <S.FooterContainer>
    <S.Logo>
      efood <UtensilsIcon size={16} />
    </S.Logo>
    <S.SocialIcons>
      <S.SocialLink aria-label="Instagram">
        <InstagramIcon size={14} color="#fff" />
      </S.SocialLink>
      <S.SocialLink aria-label="Facebook">
        <FacebookIcon size={14} color="#fff" />
      </S.SocialLink>
      <S.SocialLink aria-label="Twitter">
        <TwitterIcon size={14} color="#fff" />
      </S.SocialLink>
    </S.SocialIcons>
    <S.Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Text>
  </S.FooterContainer>
);

export default Footer;
