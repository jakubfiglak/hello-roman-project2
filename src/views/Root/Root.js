import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello Jakub</h1>
    <Button>Click me!</Button>
    <Button secondary>Secondary</Button>
  </div>
);


export default Root;
