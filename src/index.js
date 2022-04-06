import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalProvider} from './Context/GlobalState'
import {DataProvider} from './Context/dataContext'


ReactDOM.render(
  <React.StrictMode>
  <DataProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
  </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


