export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
interface CountSync{
    payload: number;
}

interface Increment_Counter extends CountSync{
    type: typeof INCREMENT_COUNTER;
}

interface Decrement_Counter extends CountSync{
    type:typeof DECREMENT_COUNTER;
}

export type CounterActionTypes = Increment_Counter | Decrement_Counter;