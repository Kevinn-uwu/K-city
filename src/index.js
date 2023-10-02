import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* Envuelve tu aplicación con BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// Si deseas medir el rendimiento en tu aplicación, puedes usar reportWebVitals.
reportWebVitals();
