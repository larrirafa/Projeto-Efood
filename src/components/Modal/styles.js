import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const ModalBox = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 700;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 40%;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const Portion = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
  font-weight: 700;
  padding: 12px;
  border-radius: 4px;
  margin-top: auto;
`;
