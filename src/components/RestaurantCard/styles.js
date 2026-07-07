import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

export const Tags = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
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
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Content = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.redDark};
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
  line-height: 1.5;
  flex: 1;
  margin-bottom: 18px;
`;

export const Button = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-weight: 700;
  padding: 9px 18px;
  border-radius: 4px;
`;
