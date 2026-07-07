import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.beige};
`;

export const Banner = styled.div`
  position: relative;
  height: 240px;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.15) 60%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px 32px;
`;

export const RestaurantTag = styled.span`
  color: ${({ theme }) => theme.colors.beige};
  font-size: 14px;
  margin-bottom: 8px;
`;

export const RestaurantTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 28px;
  font-weight: 700;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NotFound = styled.p`
  padding: 48px;
  text-align: center;
  font-size: 18px;
`;
