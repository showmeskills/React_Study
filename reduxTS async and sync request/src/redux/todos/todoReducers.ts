//引入actions 联合类型和 方法type类型
import {TodoActionsTypes,FETCH_TODOS_REQUEST,FETCH_TODOS_SUCCESS,FETCH_TODOS_FAILURE} from './models/action-typings';
//引入数据类型
import {Todo} from './models/todoState';
//定义reducer返回值的接口
interface TodoState{
    loading:boolean;
    todos:Todo[];
    error:string;
}
//定义默认状态
const defaultState:TodoState = {
    loading:false,
    todos:[],
    error:"",
}

//定义reducer,暴露到rootReducer中合并
export const todoReducer= (state=defaultState,action:TodoActionsTypes):TodoState=>{
    switch(action.type){
        case FETCH_TODOS_REQUEST:
            return {loading:true,todos:[],error:""};
        case FETCH_TODOS_SUCCESS:
            return {loading:false,todos:action.todos,error:""};
        case FETCH_TODOS_FAILURE:
            return {loading:false,todos:[],error:action.error};
        default:
            return state; 
    }
}