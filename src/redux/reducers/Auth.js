import {LOGGED_IN,LOGOUT} from '../actions/ActionTypes'

const initialState = {
    isLoggedIn:false
}
export const AuthReducer = (state=initialState,action) => {
     switch (action.type) {
       case LOGGED_IN:
         return {
           ...state,
           isLoggedIn: true,
         };
       case LOGOUT:
         return {
           ...state,
           isLoggedIn: false,
         };
       default:
         return state;
     }
 }