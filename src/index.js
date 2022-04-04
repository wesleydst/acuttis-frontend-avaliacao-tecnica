import 'materialize-css/dist/css/materialize.min.css';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Executa configurações nos componentes Materialize
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.modal');
  Materialize.Modal.init(elements, {}); // https://materializecss.com/modals.html#initialization

  Materialize.updateTextFields(); // https://materializecss.com/text-inputs.html#input
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
