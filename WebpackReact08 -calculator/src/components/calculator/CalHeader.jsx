import React,{Component} from 'react';
import '../../assets/less/header.css'


export default class CalHeader extends Component {
 
    render() {
        const {count} = this.props;
        return(
            <div className="header">
                <p>{count}</p>
            </div>
        )
    }
}