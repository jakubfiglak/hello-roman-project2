import styled, { css } from 'styled-components';

const Button = styled.button`
    background: ${({ theme }) => theme.primary};
    padding: 0;
    width: 220px;
    height: 47px;
    border: 0;
    border-radius: 50px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;

    ${({ secondary }) => (
    secondary && css`
        background: ${({ theme }) => theme.grey200};
        width: 105px;
        height: 30px;
        font-size: 10px;
    `
  )}
`;

export default Button;
