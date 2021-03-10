import React,{Component} from 'react';
import * as actions from './redux/actions';

export default class App extends Component{
  state={
    number:1,
  };

  increment=()=>{
    const number = this.state.number * 1;
    this.props.store.dispatch(actions.increment(number))
  }
  decrement=()=>{
    const number = this.state.number * 1;
    this.props.store.dispatch(actions.decrement(number))
  }
  incrementIfOdd=()=>{
    const number = this.state.number * 1;
    const count = this.props.store.getState()
    if(count%2 === 1){
      this.props.store.dispatch(actions.increment(number))
    }
  }
  incrementIfAsync=()=>{
    const number = this.state.number * 1;
    setTimeout(()=>{
      this.props.store.dispatch(actions.increment(number))
    },1000)
  }
  select=(event)=>{
    const number = event.target.value;
    this.setState({number:number})
  }
  render(){
    const count = this.props.store.getState();
    console.log(this.state.number)
    return(
      <div>
        <h1>click {count} time</h1>
        <div>
          <select onChange={this.select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementIfOdd}>increment if odd</button>
          <button onClick={this.incrementIfAsync}>increment if async</button>
        </div>
      </div>
    )
  }
}
