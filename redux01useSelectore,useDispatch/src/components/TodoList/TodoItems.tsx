
type todo = {id: number,title: string,isCompleted:boolean}

const TodoItems = (props:todo)=>{
 
    return(
        <li>
            <input type="checkbox"
                // checked={props.isCompleted}
            />
            <span>{props.title}</span>
            <button style={{display: 'none'}}>delete</button>
        </li>
    )
}

export default TodoItems;