//结合所有的reducers
import {combineReducers} from "redux";

//引入reducers
import {todoReducer} from './todos/todoReducers';
import {countReducer} from './counter/counterReducer';
//暴露全局reducers
export const rootReducers = combineReducers({
    todoReducer,
    countReducer
});
 