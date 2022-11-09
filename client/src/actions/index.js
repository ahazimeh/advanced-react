import axios from "axios";
import { AUTH_ERROR, AUTH_USER } from "./types";

// We can return a function because we installed redux-thunk called with dispatch function
// With redux thunk we can dispatch multiple requests where using redux-promise we are limited to 1 request
export const signup = (formProps, callback) => async(dispatch) => {
    try {
        const response = await axios.post('http://localhost:3090/signup', formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        callback();
    }
    catch(e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email in use'});
    }

};