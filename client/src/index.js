import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/auth/signup';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, {})}>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='/signup' element={<Signup />}/>
          </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
