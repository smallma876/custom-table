import { SET_NEW_DATE } from './actions';

const setNewDate = date => ({
    type: SET_NEW_DATE,
    date
})

export { setNewDate }