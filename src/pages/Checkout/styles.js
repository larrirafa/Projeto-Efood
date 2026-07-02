import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.brownDark};
  min-height: calc(100vh - 200px);
  display: flex;
  justify-content: flex-end;
`;

export const FormBox = styled.form`
  background-color: ${({ theme }) => theme.colors.red};
  width: 300px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  margin-bottom: 4px;
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;

  input {
    flex: 1;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
  font-weight: 700;
  padding: 12px;
  border-radius: 4px;
  margin-top: 8px;
`;

export const LinkButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  text-decoration: underline;
  text-align: center;
`;

export const ConfirmationBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const ConfirmationText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const ErrorText = styled.span`
  color: #ffe0e0;
  font-size: 11px;
  margin-top: -8px;
`;
