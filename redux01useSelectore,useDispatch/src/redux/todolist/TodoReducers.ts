import {Reducer,Action} from "redux";
import {Todos} from './typings/TodoState';
import {TodosActionsTypes,ADD_TODOS} from './typings/action-types';
const defaultState ={
    todos:[
        {id:0,title:"eating",isCompleted:false},
        {id:1,title:"coding",isCompleted:false},
        {id:2,title:"hiking",isCompleted:true},
    ]
}


export const todoReducer:Reducer<Todos,Action> = (state = defaultState,action:TodosActionsTypes)=>{
    switch(action.type){
        case ADD_TODOS:
            return[...state.todos,action.payload];
        default:
        return state;
    }
}