import styled, { css } from 'styled-components';

const Button = styled.button`
    background: ${({ color }) => color || 'hsl(49,100%,58%)'}; 
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
        background: hsl(0,0%,90%);
        width: 105px;
        height: 30px;
        font-size: 10px;
    `
  )}
`;

export default Button;
