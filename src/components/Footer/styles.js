import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #FBE6D0; /* mesmo bege do header */
  padding: 56px 16px 40px;
  text-align: center;
`

export const LogoBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin-bottom: 24px;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
`

export const SocialList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 32px;
`

export const SocialIcon = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #E8615F;
  color: #FBE6D0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  svg {
    width: 16px;
    height: 16px;
  }
`

export const FooterText = styled.p`
  max-width: 560px;
  margin: 0 auto;
  color: #E8615F;
  font-size: 13px;
  line-height: 1.6;
`
