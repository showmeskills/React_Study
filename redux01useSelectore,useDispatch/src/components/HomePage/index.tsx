import Button from './CounterButton';
import {useSelector,useDispatch} from "react-redux";
import {AppState} from '../../redux/rootState';
import {incrementCount,decrementConut} from '../../redux/counter/CounterActions'
const HomePage =()=>{
    const countState = useSelector((state:AppState)=>state.countReducer.count);
    const dispatch = useDispatch();
    const increment = ()=>dispatch(incrementCount(123));
    const decrement = ()=>dispatch(decrementConut());
    return(
        <div  style={{textAlign: 'center',marginTop:"40px",fontSize:"25px"}}>
            <h1>home page</h1>
            <span>{countState}</span>
            <Button
                  color={"lightgreen"}
                  margin={"20px"}
                  padding={"10px"}
                  handleClick = {increment}
            >increment</Button>
            <Button
                  color={"lightpink"}
                  margin={"20px"}
                  padding={"10px"}
                  handleClick = {decrement}
            >decrement</Button>
        </div>
    )
}

export default HomePage;