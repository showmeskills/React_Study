import {INCREMENT_COUNTER,DECREMENT_COUNTER} from "./models/actions-typs";
import {AppActions} from '../models/actions'
export const incrementCount = (payload:number):AppActions=>({
    type:INCREMENT_COUNTER,
    payload,
})

export const decrementCount = (payload:number):AppActions=>({
    type:DECREMENT_COUNTER,
    payload,
})