import React,{Component} from 'react';

const withCopyRight =(YourCompnonent)=>{
    return class WithCopyRight extends Component{
        render() {
            return(
                <>
                    <YourCompnonent {...this.props}/>
                    &copy;2019 &emsp;Terrance &emsp;YAN &nbsp; Australia
                </>  
            )
        }
    }
}

export default withCopyRight