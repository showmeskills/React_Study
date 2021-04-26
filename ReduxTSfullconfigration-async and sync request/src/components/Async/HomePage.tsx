import {AppState} from '../../redux/rootState';
import {boundRequestTodos} from '../../redux/todos/todoActions';
import {useEffect,ChangeEvent} from "react";
import {useSelector,useDispatch} from "react-redux";

const HomePage = ()=>{
    const loading = useSelector((state:AppState)=>state.todoReducer.loading);
    const todos = useSelector((state:AppState)=>state.todoReducer.todos);
    const error = useSelector((state:AppState)=>state.todoReducer.error);
    const dispatch = useDispatch();
    const handleRequest = ()=>dispatch(boundRequestTodos());
    const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{}
    useEffect(()=>{handleRequest()},[])
    return(
        <>
            {
                loading?
                <div>loading</div>
                :
                error?
                <div>error</div>
                :
                <ul>
                    {
                        todos.map(todo=><li key={todo.id}>
                            <input type="checkbox" checked={todo.completed}
                                onChange={handleChange}
                            />
                            <span>{todo.title}</span>
                        </li>)
                    }
                </ul>
            }
        </>
    )
}

export default HomePage;