import React,{createContext} from 'react'
import {state} from './useState'

export const TodosContext = createContext({});


export const Todos:React.FC =props=>{
    return(
        <TodosContext.Provider value={{state}}>
            {props.children}
        </TodosContext.Provider>
    )
}