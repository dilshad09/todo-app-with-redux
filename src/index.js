import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './store'
import {Provider as TodoProvider} from 'react-redux'
ReactDOM.render(
  <React.StrictMode>
    <TodoProvider store={store}>
    <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
