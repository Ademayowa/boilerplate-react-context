import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CompanyProvider } from './context/GlobalState';
import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import './index.css';

ReactDOM.render(
  <CompanyProvider>
    <App />
  </CompanyProvider>,
  document.getElementById('root')
);
