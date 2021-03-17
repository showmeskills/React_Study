import React,{Component} from 'react';

import withCopyRight from './WithCopyRight'

@withCopyRight


class Another extends Component {
    render(){
        return(
            <div>
                this is an another Component
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Another