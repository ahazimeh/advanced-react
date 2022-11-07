import tv4 from "tv4";
import stateSchema from "./stateSchema";

// getState is a function and when it is called it will return all of the state within our redux store
export default ({ dispatch, getState }) => (next) => (action) => {
    next(action);

    // this will start after the action have gone through all
    // the rest of everything else inside our redux store

    if(!tv4.validate(getState(), stateSchema)) {
        console.warn('Invalid state schema detected');
    }
}