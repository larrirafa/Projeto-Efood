import styled from 'styled-components';

export const Hero = styled.section`
  background-color: ${({ theme }) => theme.colors.beige};
  padding: 48px 32px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.textDark};
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
`;
