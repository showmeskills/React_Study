import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {AppState} from '../redux/rootState';
import {incrementCount,decrementCount} from '../redux/counter/CounterActions'
import HomePage from "../components/HomePage"
interface AppProps{
    increment:()=>void;
    decrement:()=>void;
}
const mapStateToProps = (state:AppState) =>({count:state.countReducer.count})
const mapDispatchToProps = (dispatch:Dispatch):AppProps=>({
    increment:()=>dispatch(incrementCount()),
    decrement:()=>dispatch(decrementCount()),
})

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);