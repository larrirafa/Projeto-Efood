import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #FBE6D0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='64'%3E%3Cpath d='M6 4v14a4 4 0 0 0 3 4v34a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V22a4 4 0 0 0 3-4V4a2 2 0 0 0-4 0v10h-1V4a2 2 0 0 0-4 0v10H9V4a2 2 0 0 0-3 0z' fill='%23F0997B' fill-opacity='0.35'/%3E%3Cpath d='M38 4c-5 0-9 6-9 14 0 6 2 10 5 12l-4 24a3 3 0 0 0 3 4h4a3 3 0 0 0 3-4l-4-24c3-2 5-6 5-12 0-8-1-14-3-14z' fill='%23F0997B' fill-opacity='0.35'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 48px 64px;
  padding: 25px;
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NavBar = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavLink = styled.span`
  color: #E8615F;
  font-size: 14px;
  font-weight: 700;
`

export const CartButton = styled.button`
  color: #E8615F;
  font-size: 14px;
  font-weight: 700;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`

export const Logo = styled.img`
  width: ${({ $large }) => ($large ? '120px' : '100px')};
  height: ${({ $large }) => ($large ? '55px' : '46px')};
`

export const UtensilIcon = styled.div`
  position: absolute;
  width: ${({ size }) => size || '20px'};
  height: ${({ size }) => size || '20px'};
  top: ${({ top }) => top || 'auto'};
  bottom: ${({ bottom }) => bottom || 'auto'};
  left: ${({ left }) => left || 'auto'};
  right: ${({ right }) => right || 'auto'};
  transform: rotate(${({ rotate }) => rotate || '0deg'});
  color: #F0997B;
`

export const Title = styled.h1`
  color: #E8615F;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  line-height: 1.4;
  margin: 28px 0 0;
  max-width: 520px;
`
