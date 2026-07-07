import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  z-index: 200;
  display: flex;
  justify-content: flex-end;
`;

export const Drawer = styled.aside`
  position: relative;
  background-color: ${({ theme }) => theme.colors.red};
  width: 360px;
  max-width: 90vw;
  height: 100%;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
`;

export const ItemsList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.beigeLight};
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const ItemImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 6px;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.redDark};
`;

export const ItemPrice = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.redDark};
  margin-top: 2px;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  color: ${({ theme }) => theme.colors.redDark};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.beigeLight};
  padding: 14px;
  border-radius: 8px;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.redDark};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  margin-bottom: 4px;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;

  & > label {
    flex: 1;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-weight: 700;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  width: 100%;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.beigeLight};
  color: ${({ theme }) => theme.colors.textDark};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.beigeLight};
  color: ${({ theme }) => theme.colors.redDark};
  font-size: 14px;
  font-weight: 700;
  padding: 14px;
  border-radius: 4px;
  margin-top: 12px;
  text-align: center;
`;

export const LinkButton = styled.button`
  color: ${({ theme }) => theme.colors.beigeLight};
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  margin-top: 4px;
`;

export const ConfirmationBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const ConfirmationText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
`;
