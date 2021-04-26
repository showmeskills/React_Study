import {Todo} from './todoState';

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

interface TodoAsync{
    loading:boolean;
    todos:Todo[];
    error:string;
}

export interface Fetch_Todos_Request extends TodoAsync{
    type:typeof FETCH_TODOS_REQUEST;
}
export interface Fetch_Todos_Success extends TodoAsync{
    type:typeof FETCH_TODOS_SUCCESS;
}
export interface Fetch_Todos_Failure extends TodoAsync{
    type: typeof FETCH_TODOS_FAILURE;
}

export type TodoActionsTypes = Fetch_Todos_Request | Fetch_Todos_Success | Fetch_Todos_Failure;