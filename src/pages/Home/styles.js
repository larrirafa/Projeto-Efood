import styled from 'styled-components';

export const Hero = styled.section`
  background-color: ${({ theme }) => theme.colors.beigeLight};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ctext x='30' y='40' font-family='Arial, sans-serif' font-weight='700' font-size='26' fill='%23FFE4CE' text-anchor='middle'%3EH%3C/text%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 60px 60px;
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
