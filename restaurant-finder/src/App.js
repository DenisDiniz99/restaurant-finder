import React from "react";
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Home from './pages/Home';
import themes from './themes'

function App(){
  return(
    <ThemeProvider theme={themes}>
      <Reset/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
