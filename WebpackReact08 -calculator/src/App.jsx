import React,{Component} from 'react';

import {CalHeader,CalBody} from './components/calculator';

export default class App extends Component {
    state={
        count:'',
        preNum:'',
        operatorClick:null,
        flag:true,
    }
    clearNum=()=>{
        let {count} = this.state;
        count = '';
        this.setState({count})
    }
    clickNumber=(num)=>{
        let {count,operatorClick} = this.state;
        if(operatorClick){
            count = ''
            operatorClick = false;
        }
        count += `${num}`;
        this.setState({count,operatorClick})
    }
    clickNegative=()=>{
        let{count} = this.state;
        count = count.charAt(0) === '-'? 
            count.slice(1) : `-${count}`
        this.setState({count});
    }
    percent=()=>{
        let {count} = this.state;
        count = count / 100;
        this.setState({count})
    }
    dot=()=>{
        let{count} = this.state;
        if(count.indexOf('.') === -1)count = `${count}${'.'}`;
        this.setState({count})
    }
    dividend=()=>{
        this.operator=(a,b)=>a/b;
        this.calcu()
    }
    time=()=>{
        this.operator=(a,b)=>a*b;
        this.calcu()
    }
    minus=()=>{
        this.operator=(a,b)=>a-b;
        this.calcu()
    }
    plus=()=>{
        this.operator=(a,b)=>a+b;
        this.calcu()
    }
    equal=()=>{
        let {flag,operatorClick,count,preNum} = this.state;
        if(flag){
            operatorClick = true;
            count = `${
                this.operator(
                    parseFloat(preNum),
                    parseFloat(count)
                )
            }`
            flag = false;
            preNum = null;
            this.setState({
                flag,operatorClick,count,preNum
            })
        }
    }
    calcu=()=>{
        let {preNum,count,flag,operatorClick} = this.state;
        preNum = count;
        operatorClick = true;
        flag = true;
        this.setState({
            preNum,
            operatorClick,
            flag
        })
        
    }
    render() {
        return(
            <div className="container">
                <CalHeader count={this.state.count}/>
                <CalBody clearNum={this.clearNum}
                         clickNumber={this.clickNumber}
                         clickNegative={this.clickNegative}
                         percent={this.percent}
                         dot={this.dot}
                         dividend={this.dividend}
                         time={this.time}
                         minus={this.minus}
                         plus={this.plus}
                         equal={this.equal}
                />
            </div>
        )
    }
}