import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.beige};
  padding: 32px;
  text-align: center;
`;

export const Logo = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-radius: 4px;
  padding: 6px 12px;
  color: ${({ theme }) => theme.colors.red};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 12px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;

  span {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.red};
    display: inline-block;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textDark};
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.5;
`;
