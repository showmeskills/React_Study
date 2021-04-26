import Button from './CounterButton';
import {useSelector,useDispatch} from "react-redux";
import {AppState} from '../../../redux/rootState';
import {AppActions} from '../../../redux/models/actions'
import {incrementCount,decrementCount} from "../../../redux/counter/counterActions";
const HomePage = ()=>{
    const count = useSelector((state:AppState)=>state.countReducer.count);
    const dispatch = useDispatch();
    const increment = ():AppActions=>dispatch(incrementCount(5))
    const decrement = ():AppActions=>dispatch(decrementCount(10));
    return(
        <div
        style={{textAlign: 'center',marginTop:"40px",fontSize:"25px"}}
    >
        <span>{count}</span>
        <Button 
            color={"lightgreen"}
            margin={"20px"}
            padding={"10px"}
            handleClick={increment}
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