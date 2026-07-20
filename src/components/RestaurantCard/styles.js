import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px; /* era 230px */
  object-fit: cover;
  display: block;
`;

export const Tags = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const Rating = styled.span`
  width: 55px;
  height: 21px;
  color: ${({ theme }) => theme.colors.red};
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  padding: 20px; /* era 24px */
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.redDark};
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
  line-height: 1.5;
  flex: 1;
  margin-bottom: 20px;
`;

export const Button = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 4px;
  align-self: flex-start;
`;
