import React from 'react';

const TodoItems:React.FC = ()=>{
    return(
        <ul>
            <li>
                <input type="checkbox" checked={true} />
                <span>task name</span>
            </li>
        </ul>
    )
}

export default TodoItems