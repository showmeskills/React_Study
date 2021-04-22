import {CounterActionTypes,INCREMENT_COUNTER,DECREMENT_COUNTER} from './models/actions-typs';
interface CountState{
    count: number;
}

const defaultState:CountState = {
    count:15,
}


export const countReducer = (state=defaultState,action:CounterActionTypes):CountState=>{
    const nextState = {
        count:state.count
    }
    switch(action.type){
        case INCREMENT_COUNTER:
            nextState.count = state.count + action.payload;
            return nextState;
        case DECREMENT_COUNTER:
            nextState.count = state.count - action.payload;
            return nextState;
        default:
            return state;
    }
}
