import {AsyncHomePageConnect} from '../../components';
import {connect} from "react-redux";
import {AppState} from '../../redux/rootState';
//定义异步请求的方法的类型
import {ThunkDispatch} from "redux-thunk";
import {AppActions} from '../../redux/models/actions';
import {Todo} from '../../redux/todos/models/todoState'
import {boundRequestTodos} from '../../redux/todos/todoActions';
//捆绑异步亲求方法和dispatch的类型
import {bindActionCreators} from "redux";
//mapDispatchToProps的返回值
interface AppProps{
    boundRequestTodos:()=>void;
}
interface AppStateProps{
    todos:Todo[],
    loading:boolean,
}
const mapStateToProps = (state:AppState):AppStateProps=>({
    todos:state.todoReducer.todos,
    loading:state.todoReducer.loading
})
const mapDispatchToProps =(dispatch:ThunkDispatch<AppState,{},AppActions>):AppProps=>({
    boundRequestTodos:bindActionCreators(boundRequestTodos,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(AsyncHomePageConnect);