import {FC} from "react";
import Button from './CounterButton';

interface Props{};
interface LinkStateProps{
    count: number;
}
interface LinkDispatchProps{
    increment:(paylaod:number)=>void;
    decrement:(paylaod:number)=>void;
}
type LinkProps = Props & LinkStateProps & LinkDispatchProps;
const HomePage:FC<LinkProps> = (props)=>{
    const {increment,decrement,count} = props;

    return(
        <div
        style={{textAlign: 'center',marginTop:"40px",fontSize:"25px"}}
    >
        <span>{count}</span>
        <Button 
            color={"lightgreen"}
            margin={"20px"}
            padding={"10px"}
            handleClick = {increment}
        >Increment</Button>
         <Button 
            color={"lightpink"}
            margin={"20px"}
            padding={"10px"}
           handleClick={decrement}
        >Decrement</Button>
    </div>
    )
}

export default HomePage;