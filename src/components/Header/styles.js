import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.brownDark};
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  a {
    color: ${({ theme }) => theme.colors.red};
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const Logo = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-radius: 4px;
  padding: 6px 12px;
  color: ${({ theme }) => theme.colors.red};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const CartArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const CartButton = styled.button`
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
`;
