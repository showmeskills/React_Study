

import TodoItems from './TodoItems'

type todo = {id: number,title: string,isCompleted:boolean}


const TodoList =(props:any)=>{   
    
    return(
        <>
            {
                props.todoState.map((todo:todo)=> <TodoItems key={todo.id} {...todo}/>)
            }        
        </>
    )
}

export default TodoList;