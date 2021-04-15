import React,{useContext} from 'react';
import TodoItems from './TodoItem'
import {TodosContext} from '../../hooks/contextProvider'




const TodoList:React.FC = ()=>{
    const {} = useContext(TodosContext)
    return(
        <>
            <TodoItems/>
        </>
    )
}

export default TodoList;