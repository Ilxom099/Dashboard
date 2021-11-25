import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store/store';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Provider store={store} >
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>  
    ,
  document.getElementById('root')
);

