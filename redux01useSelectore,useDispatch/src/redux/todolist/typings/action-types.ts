
export const ADD_TODOS = "ADD_TODOS";

export type addPayloadType={
    id:number;
    title:string;
    isCompleted: boolean
}
export interface AddTodos{
    type:typeof ADD_TODOS
    payload:addPayloadType
}

export type TodosActionsTypes = AddTodos;