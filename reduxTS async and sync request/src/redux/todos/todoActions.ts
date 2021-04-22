//引入Dispatch的 TS泛型方法
import {Dispatch} from "redux";
//引入全局actions-types
import {AppActions} from '../models/actions';
//引入方法 常量
import {FETCH_TODOS_REQUEST,FETCH_TODOS_SUCCESS,FETCH_TODOS_FAILURE} from './models/action-typings';
//引入当前数据类型
import {Todo} from './models/todoState';

import axios from 'axios';

//定义同步方法:获取AppActions 返回值的类型
const requestTodos = ():AppActions=>({
    type:FETCH_TODOS_REQUEST,
    loading:true,
    todos:[],
    error:"",
})

const receiveTodos = (todos:Todo[]):AppActions=>({
    type:FETCH_TODOS_SUCCESS,
    loading:false,
    todos,
    error:"",
})

const invalidateTodos = (error:string):AppActions=>({
    type:FETCH_TODOS_FAILURE,
    loading:false,
    todos:[],
    error,
})
//定义异步方法调用同步方法
//定义Dispatch方法类型
export const boundRequestTodos = ()=>{
    return (dispatch:Dispatch<AppActions>)=>{
        dispatch(requestTodos());
        return axios.get(`http://jsonplaceholder.typicode.com/`)
        .then(res=>dispatch(receiveTodos(res.data)))
        .catch(err=>dispatch(invalidateTodos(err)))
    }
}