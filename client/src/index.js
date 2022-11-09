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
import reduxThunk from "redux-thunk"
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") }
  },
  applyMiddleware(reduxThunk)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/feature' element={<Feature />}/>
            <Route path='/signout' element={<Signout />}/>
            <Route path='/signin' element={<Signin />}/>
          </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
