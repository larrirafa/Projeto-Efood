import styled from 'styled-components';

export const Hero = styled.section`
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
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.35;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 32px;
  max-width: 1200px;   /* era 1000px */
  margin: 0 auto;
  padding: 48px 32px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
