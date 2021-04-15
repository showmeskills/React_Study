import React from 'react';
import {Todoheader,TodoInput,TodoList} from './components'
import {Todos} from './hooks'


const App:React.FC=()=>{


    return(
        <Todos>
            <Todoheader/>
            <TodoInput/>
            <TodoList/>
        </Todos>
    )
}
export default App;