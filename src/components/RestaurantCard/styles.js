import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
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
  height: 160px;
  object-fit: cover;
  display: block;
`;

export const Tag = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const Rating = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 11px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const Content = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textDark};
  line-height: 1.4;
  flex: 1;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
`;
