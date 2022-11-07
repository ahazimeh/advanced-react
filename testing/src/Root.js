import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import async from "middlewares/async";
import reduxPromise from "redux-promise";

import reducers from "reducers";
import stateValidator from "middlewares/stateValidator";
export default ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, applyMiddleware(/*reduxPromise*/async, stateValidator)) 

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}