export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export interface IncrementCounter{
    type: typeof INCREMENT_COUNTER
}

export interface DecrementCounter{
    type: typeof DECREMENT_COUNTER
}

export type CounterActionsTypes = IncrementCounter | DecrementCounter;