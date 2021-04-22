import {connect} from "react-redux";
import {SyncCounterConnect} from '../../components';
import {AppState} from '../../redux/rootState';
import {AppActions} from '../../redux/models/actions';
import {Dispatch} from "redux";
import {incrementCount,decrementCount} from '../../redux/counter/counterActions';

interface AppProps{
    increment:(payload:number)=>void;
    decrement:(payload:number)=>void;
}

const mapStateToProps = (state:AppState)=>({
    count:state.countReducer.count
})
const mapDispatchToProps =(dispatch:Dispatch<AppActions>):AppProps=>({
    increment:(payload)=>dispatch(incrementCount(payload)),
    decrement:(payload)=>dispatch(decrementCount(payload)),
})

export default connect(mapStateToProps,mapDispatchToProps)(SyncCounterConnect);