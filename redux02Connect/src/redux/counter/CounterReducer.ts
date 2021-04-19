import { Reducer,Action } from 'redux';
import {CounterActionsTypes,INCREMENT_COUNTER,DECREMENT_COUNTER} from './typings/actions-types'

import {Counter} from './typings/CountState';

const defaultState = {
    count:15,
}


//createReducer here
//泛型Reducer<state,action>
//不能将 Counter | undefined 分配给 countReducer 需要把所有return值写完
export const countReducer:Reducer<Counter,Action> = (state = defaultState,action :CounterActionsTypes)=>{
    const nextState = {
        count:state.count
    }
    switch(action.type){
        case INCREMENT_COUNTER:
            nextState.count = state.count + 1;
            //不能重新赋值给state;只能返回一个新的state
            return nextState;
        case DECREMENT_COUNTER:
            nextState.count = state.count - 1;
            return nextState;
        default:
            return state;
    }
}