import React,{Component} from 'react';
import PropTypes from 'prop-types'

export default class Search extends Component {
    static propTypes={
        setSearchName:PropTypes.func.isRequired,
    }
    
    research=()=>{
        //得到输入的关键
        let searchName = this.input.value.trim();
        if(searchName){
            //搜索
            this.props.setSearchName(searchName)
            this.input.value = '';
        }
    }
    render(){
        return(
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={input=>this.input=input}/>
                    <button onClick={this.research}>Search</button>
                </div>
            </section>
        )
    }
}