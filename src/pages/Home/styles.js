import styled from 'styled-components';

export const Hero = styled.section`
  background-color: ${({ theme }) => theme.colors.beigeLight};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg transform='translate(22,10)' fill='none' stroke='%23FFE4CE' stroke-width='2.2' stroke-linecap='round'%3E%3Cline x1='0' y1='0' x2='0' y2='16'/%3E%3Cline x1='-4' y1='0' x2='-4' y2='8'/%3E%3Cline x1='4' y1='0' x2='4' y2='8'/%3E%3Cline x1='-4' y1='8' x2='4' y2='8'/%3E%3Cline x1='0' y1='16' x2='0' y2='40'/%3E%3Cpath d='M14 0c0 5-3 7-3 10s1 4 3 4 3-1 3-4-3-5-3-10z'/%3E%3Cline x1='14' y1='14' x2='14' y2='40'/%3E%3C/g%3E%3C/svg%3E");
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
