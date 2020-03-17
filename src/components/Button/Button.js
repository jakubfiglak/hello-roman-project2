import styled, { css } from 'styled-components';

const Button = styled.button`
    background: #ffd82b; 
    padding: 0;
    width: ${({ width }) => width || '220px'};
    height: 47px;
    border: 0;
    border-radius: 50px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;

    ${({ secondary }) => (
    secondary && css`
        background: #e6e6e6;
        width: 105px;
        height: 30px;
        font-size: 10px;
    `
  )}
`;

export default Button;
