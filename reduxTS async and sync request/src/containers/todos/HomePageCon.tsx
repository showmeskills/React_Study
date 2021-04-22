import {AsyncHomePageConnect} from '../../components';
import {connect} from "react-redux";
import {AppState} from '../../redux/rootState';
import {ThunkDispatch} from "redux-thunk";
import {AppActions} from '../../redux/models/actions';
import {boundRequestTodos} from '../../redux/todos/todoActions';
import {bindActionCreators} from "redux";

interface AppProps{
    boundRequestTodos:()=>void;
}

const mapStateToProps = (state:AppState)=>({
    todos:state.todoReducer.todos,
    loading:state.todoReducer.loading
})
const mapDispatchToProps =(dispatch:ThunkDispatch<AppState,{},AppActions>):AppProps=>({
    boundRequestTodos:bindActionCreators(boundRequestTodos,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(AsyncHomePageConnect);