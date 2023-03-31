import { combineReducers } from 'redux';
import { cartReducer, userReducer } from '~/reducers';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
});

export default rootReducer;
