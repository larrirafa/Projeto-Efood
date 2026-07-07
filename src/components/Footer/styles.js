import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.beigeLight};
  padding: 40px 32px;
  text-align: center;
`;

export const Logo = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.redDark};
  border-radius: 4px;
  padding: 6px 12px;
  color: ${({ theme }) => theme.colors.redDark};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const SocialLink = styled.a`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.red};
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.5;
`;
