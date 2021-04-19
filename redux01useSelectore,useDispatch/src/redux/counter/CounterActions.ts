import {INCREMENT_COUNTER,DECREMENT_COUNTER} from './typings/actions-typs';

export const incrementCount = (payload:number)=>({
    type: INCREMENT_COUNTER,
    payload
})

export const decrementConut = (payload:number)=>({
    type: DECREMENT_COUNTER,
    payload
})