import { AUTH_USER } from "./types";

// We can return a function because we installed redux-thunk called with dispatch function
// With redux thunk we can dispatch multiple requests where using redux-promise we are limited to 1 request
export const signup = ({ email, password }) => (dispatch) => {
};