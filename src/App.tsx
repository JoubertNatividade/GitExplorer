import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import StyleGlobal from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <StyleGlobal />
  </>
);

export default App;
