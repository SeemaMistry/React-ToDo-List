import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* This is saying:
      'Render the cotent we pass in the App, at this root element'
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


