import styled from 'styled-components';

export const Hero = styled.section`
  background-color: ${({ theme }) => theme.colors.beigeLight};
  background-image: radial-gradient(
    ${({ theme }) => theme.colors.beige} 1.5px,
    transparent 1.5px
  );
  background-size: 22px 22px;
  padding: 64px 32px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.redDark};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.3;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.beige};
`;
