import styled from 'styled-components';

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
