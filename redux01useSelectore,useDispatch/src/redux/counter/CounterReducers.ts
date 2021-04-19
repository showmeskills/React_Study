
//Reducer types 泛型 Reducer<Counter,Action>
import {Reducer,Action} from 'redux';
//action types
import {CounterActionTypes,INCREMENT_COUNTER,DECREMENT_COUNTER} from './typings/actions-typs';
//state types
import {Counter} from './typings/CountState';

const defaultState = {
    count:15,
}

export const countReducer:Reducer<Counter, Action & CounterActionTypes> = (state = defaultState,action:CounterActionTypes)=>{
    const nextState = {
        count:state.count
    }
    switch(action.type){
        case INCREMENT_COUNTER:
                nextState.count = state.count + action.payload;
            return nextState ;
        case DECREMENT_COUNTER:
                nextState.count = state.count - action.payload;
            return nextState ;
        default:
            return state;
    }
}

