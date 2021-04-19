export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

interface IncrementCounter{
    type: typeof INCREMENT_COUNTER;
    payload:number;
}

interface DecrementCounter{
    type: typeof DECREMENT_COUNTER;
    payload:number;
}


export type CounterActionTypes = IncrementCounter | DecrementCounter ;
