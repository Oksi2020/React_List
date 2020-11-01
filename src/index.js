import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './classApp/App';
import HomeApp from './homeApp/homeApp'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
      <HomeApp />
  </React.StrictMode>,
  document.getElementById('root')
);
