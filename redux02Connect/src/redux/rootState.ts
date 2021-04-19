import {createStore,applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// import {rootReducers} from './rootReducer';
import {countReducer} from './counter/CounterReducer'
const rootReducers = combineReducers({
    countReducer
})

export type AppState = ReturnType<typeof rootReducers>;

export const store = createStore(rootReducers,composeWithDevTools(applyMiddleware()));