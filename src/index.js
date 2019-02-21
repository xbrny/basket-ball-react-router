import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import App from './App';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: arial;
    font-size: 18px;
    letter-spacing: 1px;
  }
  a {
    text-decoration: none
  }
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
