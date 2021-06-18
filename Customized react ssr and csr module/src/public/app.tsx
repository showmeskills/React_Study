import React,{useState} from 'react';
import {Route,Link} from "react-router-dom";


const Home = ()=>{
    return (
        <div>
            home page
        </div>
    )
}

const About =()=>{
    return (
        <div>
            About page
        </div>
    )
}

const CountComponent = ()=>{
    const [count,setCount] = useState(0);
    const addHandle = ()=>setCount(prev=>prev+1)
    return (
        <div>
            <h2>hello world</h2>
            <div>{count}</div>
            <button onClick={addHandle}>add</button>
            <ul>
                <li>
                    <Link to='/'>to Home</Link>
                </li>
                <li>
                    <Link to='/about'>to about</Link>
                </li>
            </ul>
            <Route path="/" render={()=><Home/>}/>
            <Route path="/about" render={()=><About/>}/>
        </div>
    )
}

export default CountComponent;