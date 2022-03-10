import { createStore,combineReducers,applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {AuthReducer} from './reducers/Auth'
import { UserReducer } from './reducers/User';
import thunk from 'redux-thunk'

 const reducers=combineReducers({
    auth: AuthReducer,
    user:UserReducer
})
export const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
