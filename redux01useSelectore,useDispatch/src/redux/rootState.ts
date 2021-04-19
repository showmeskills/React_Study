import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";

import {rootReducer} from './rootReducer';

//对combineReducer 使用类型保护
export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()))