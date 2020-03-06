import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import store from './store/store.js'

ReactDOM.render(
  <Provider store={store}>
  <App /></Provider>,
  document.getElementById('root')
);
