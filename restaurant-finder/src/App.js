import React from "react";
import {Provider} from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import store from './redux/store'
import Home from './pages/Home';
import themes from './themes'

function App(){
  return(
    <Provider store={store}>
      <ThemeProvider theme={themes}>
        <Reset/>
        <Home/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
