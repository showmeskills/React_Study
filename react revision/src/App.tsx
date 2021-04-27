import React,{PropsWithChildren} from 'react';
import PropTypes from "prop-types";
import './App.css';
type DivStyle = {
  color: string,
  fontSize: string,
}

interface PropsMyFc{
  name: string;
  age:number;
}

const MyFc = (props:PropsWithChildren<PropsMyFc>)=>{
  return(
    <div>
      {props.name}
      {props.age}
      this is a function component
    </div>
  )
}
MyFc.propTypes = {
  age:PropTypes.number.isRequired,
  name:PropTypes.string.isRequired,
}

interface PropsMyComponent{
  name: string;
  age:number;
}

class MyComponent extends React.Component<PropsMyComponent>{
  propTypes = {};
  render(){
    return(
      <div>
        this is a class component
        {this.props.age}
        {this.props.name}
      </div>
    )
  }
}
MyComponent.propTypes = {
  age:PropTypes.number.isRequired,
  name:PropTypes.string.isRequired
}



function App() {
  const divStyle:DivStyle = {color:"red",fontSize:"20px"}
  const user = {
    name1:"t222",
    age1:10,
  }
  return (
    <div className="App">
     <div style={divStyle}>demo</div>
     <MyFc name="Terrance" age={12}/>
     <MyComponent  {...user} name="Terry" age={19}/>
    </div>
  );
}



export default App;
