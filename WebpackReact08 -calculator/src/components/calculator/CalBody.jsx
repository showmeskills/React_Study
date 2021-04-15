import React,{Component} from 'react';
import PropTypes from 'prop-types';

import '../../assets/less/body.css'


export default class CalBody extends Component {
   static propTypes ={
       clearNum:PropTypes.func.isRequired,
       clickNumber:PropTypes.func.isRequired,
       clickNegative:PropTypes.func.isRequired,
       percent:PropTypes.func.isRequired,
       dot:PropTypes.func.isRequired,
       dividend:PropTypes.func.isRequired,
       time:PropTypes.func.isRequired,
       minus:PropTypes.func.isRequired,
       plus:PropTypes.func.isRequired,
       equal:PropTypes.func.isRequired,
   }
   clearNum=()=>{
       this.props.clearNum();
   }
   clickNumber=(event)=>{
        let num = event.target.value;
        this.props.clickNumber(num);
   }
   clickNegative=()=>{
       this.props.clickNegative();
   }
   percent=()=>{
        this.props.percent();
   }
   dot=()=>{
       this.props.dot();
   }
   dividend=()=>{
        this.props.dividend();
   }
   time=()=>{
        this.props.time();
   }
   minus=()=>{
        this.props.minus();
   }
   plus=()=>{
        this.props.plus();
   }
   equal=()=>{
        this.props.equal();
   }
    render() {
        return(
            <div className='cal-body'>
                <ul>
                    <li onClick={this.clearNum}>C</li>
                    <li onClick={this.clickNegative}>+/-</li>
                    <li onClick={this.percent}>%</li>
                    <li onClick={this.dividend}>/</li>
                    <li onClick={this.clickNumber} value='7'>7</li>
                    <li onClick={this.clickNumber} value='8'>8</li>
                    <li onClick={this.clickNumber} value='9'>9</li>
                    <li onClick={this.time}>*</li>
                    <li onClick={this.clickNumber} value='4'>4</li>
                    <li onClick={this.clickNumber} value='5'>5</li>
                    <li onClick={this.clickNumber} value='6'>6</li>
                    <li onClick={this.minus}>-</li>
                    <li onClick={this.clickNumber} value='1'>1</li>
                    <li onClick={this.clickNumber} value='2'>2</li>
                    <li onClick={this.clickNumber} value='3'>3</li>
                    <li onClick={this.plus}>+</li>
                    <li onClick={this.clickNumber} value='0'>0</li>
                    <li onClick={this.dot}>.</li>
                    <li onClick={this.equal}>=</li>
                </ul>
            </div>
        )
    }
}