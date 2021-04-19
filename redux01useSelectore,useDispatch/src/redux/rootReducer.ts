import {combineReducers} from "redux";

import {countReducer} from './counter/CounterReducers'
import {todoReducer} from './todolist/TodoReducers';
export const rootReducer = combineReducers({
    countReducer,
    todoReducer
});