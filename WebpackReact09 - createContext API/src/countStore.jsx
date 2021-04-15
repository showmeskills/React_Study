import React, {createContext,useState} from 'react';

const {Provider,Consumer:CountConsumer} = createContext();



const CountProvider = (props)=>{
    const [count,setCount] = useState(100);
    const increment = ()=>setCount(()=>count+1);
    const decrement = ()=>setCount(()=>count-1);
    return (
        <Provider value={{
            count,
            increment,
            decrement
            }}>
            {props.children}
        </Provider>
    )
}

export {
    CountProvider,
    CountConsumer
}