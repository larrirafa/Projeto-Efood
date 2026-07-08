import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
`;

export const Content = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.45;
  flex: 1;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
  font-weight: 700;
  padding: 10px;
  border-radius: 4px;
`;
