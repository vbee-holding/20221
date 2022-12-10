import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
/* fontawesom icon*/
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
/*boostrap*/
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <App/>
    </BrowserRouter>
  </React.StrictMode>
);

