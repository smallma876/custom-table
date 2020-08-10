import { createStore } from "redux";
import { moment } from "moment";
import { SET_NEW_DATE } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialStore = {
    firstDateInRange : new Date()
}

const rootReducer = ( state = initialStore, action) => {

    if(action.type === SET_NEW_DATE){
        return {
            ...state,
            firstDateInRange: action.date
        }
    }
    return state;
}

export default createStore(rootReducer, composeWithDevTools());

