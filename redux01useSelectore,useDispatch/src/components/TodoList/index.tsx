import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import { useDispatch, useSelector } from 'react-redux'
import {AppState} from '../../redux/rootState'
import {addTodos} from '../../redux/todolist/TodoActions'
const Todos = ()=>{
   const todoState = useSelector((state:AppState)=>state.todoReducer.todos)
   const dispatch = useDispatch();
   const addTodo = (todo:any)=>dispatch(addTodos(todo))
    return(
        <div
        style={{
          width:"400px",
          height:"200px",
          border:"1px solid pink",
          margin:"20px auto",
        }}
      >
        <TodoHeader addTodo={addTodo}/>
        <TodoList todoState={todoState}/>
        <TodoFooter/>
      </div>
    )
}

export default Todos;
