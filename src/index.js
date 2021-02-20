import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Navbar from './components/Navbar';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
