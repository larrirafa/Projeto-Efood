import styled from 'styled-components';

export const CartWrapper = styled.aside`
  background-color: ${({ theme }) => theme.colors.red};
  width: 300px;
  min-height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
`;

export const ItemsList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.beige};
  border-radius: 4px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export const ItemImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const ItemPrice = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const RemoveButton = styled.button`
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
  font-weight: 700;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.beige};
  padding: 12px;
  border-radius: 4px;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 700;
`;

export const CheckoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
  font-weight: 700;
  padding: 12px;
  border-radius: 4px;
  margin-top: 8px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
