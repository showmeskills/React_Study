import {INCREMENT,DECREMENT} from "./actions-type";

export const increment =(number)=> ({type:INCREMENT,data:number})
export const decrement =(number)=> ({type:DECREMENT,data:number})

export const asyncReq = (number)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(increment(number))
        },1000)
    }
}