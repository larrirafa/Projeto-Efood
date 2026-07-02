import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MainContent = styled.div`
  flex: 1;
`;

export const Banner = styled.div`
  position: relative;
  height: 200px;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-end;
  padding: 24px 32px;
`;

export const RestaurantTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 28px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  padding: 32px;
`;

export const NotFound = styled.p`
  padding: 48px;
  text-align: center;
  font-size: 18px;
`;
