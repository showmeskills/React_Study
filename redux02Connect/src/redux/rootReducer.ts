import {combineReducers} from 'redux';
import {countReducer} from './counter/CounterReducer'
export const rootReducers = combineReducers({
    countReducer
});