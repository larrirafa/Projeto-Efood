import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.beigeLight};
`;

export const Banner = styled.div`
  position: relative;
  height: 280px;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 2000px;
  margin: 0 auto;
  padding: 32px;
`;

export const RestaurantTag = styled.span`
  color: ${({ theme }) => theme.colors.beige};
  font-size: 24px;
  font-weight: 400;
`;

export const RestaurantTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  font-weight: 700;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 32px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const NotFound = styled.p`
  padding: 48px;
  text-align: center;
  font-size: 18px;
`;
