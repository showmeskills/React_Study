import { FC, useEffect,ChangeEvent } from "react";
import { Todo } from '../../../redux/todos/models/todoState';

interface Props { };
interface LinkStateProps {
    loading: boolean;
    todos: Todo[];
}
interface LinkDispatchProps {
    boundRequestTodos: () => void;
}
type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const HomePageCon: FC<LinkProps> = (props) => {
    const { todos, loading, boundRequestTodos } = props;
    useEffect(() => {
        boundRequestTodos()
    }, [])
    const handeChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }
    return (
        <>
            <div>Main page</div>
            <h1>todoList</h1>
            {
                loading ?
                    <div>loading</div>
                    :
                    <ul>
                        {
                            todos.map(todo => <li key={todo.id}>
                                <input type="checkbox" checked={todo.completed}
                                    onChange={handeChange}
                                />
                                <span>{todo.title}</span>
                            </li>)
                        }
                    </ul>
            }

        </>
    )
}

export default HomePageCon;