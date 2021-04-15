import React,{Component} from 'react';
import PropTypes from 'prop-types';


export default class Counter extends Component{
    state={
      number:1,
    };
    static propTypes = {
        count:PropTypes.number.isRequired,
        increment:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired,
    }
    increment=()=>{
      const number = this.state.number * 1;
      this.props.increment(number)
    }
    decrement=()=>{
      const number = this.state.number * 1;
      this.props.decrement(number)
    }
    incrementIfOdd=()=>{
      const number = this.state.number * 1;
      const {count} = this.props;
      if(count%2 === 1){
        this.props.increment(number)
      }
    }
    incrementIfAsync=()=>{
      const number = this.state.number * 1;
      setTimeout(()=>{
        this.props.increment(number)
      },1000)
    }
    select=(event)=>{
      const number = event.target.value;
      this.setState({number:number})
    }
    render(){
      const {count} = this.props;
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
  